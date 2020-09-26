import React, { FunctionComponent, FormEvent, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { login } from "../../api/Api";
import { validateEmail, validatePassword, validInputs } from "../../utils/validators/validateLogin";
import Spinner from "../../components/Reusable/Spinner";
import {
  Wrapper,
  LoginrDesc,
  LoginContent,
  InputWrapper,
  Input,
  InputDesc,
  StyledLinkBlue,
  GradientButtonCenter,
  ErrorMessage,
  ApiError,
} from "./styles";
import { LoginData } from "../../features/types";
import { setToast, DASHBOARD, LOGIN, isToast, IToast, Toast } from "../../utils/toast";
import { Snackbar } from "@material-ui/core";

interface IProps extends RouteComponentProps {}

interface Error {
  email: string | null;
  password: string | null;
  api: string | null;
}

const Login: FunctionComponent<IProps> = ({ history }) => {
  const { t } = useTranslation();
  const [data, setData] = useState<LoginData>({ email: "", password: "" });
  const [isShakeWhenApiError, setShakeWhenApiError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<Error>({ email: null, password: null, api: null });
  const [isRegisteredToast, setRegisteredToast] = useState<IToast>({ message: null, isToast: false });

  useEffect(() => {
    setRegisteredToast(isToast(LOGIN));
  }, []);

  const removeSpacesFromInputs = () => {
    setData({ email: data.email.trim(), password: data.password.trim() });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    removeSpacesFromInputs();

    if (validInputs(data)) {
      try {
        await login(data);
        setToast(DASHBOARD, "Successfully logged in");
        history.push("/dashboard");
        return;
      } catch (e) {
        setShakeWhenApiError(true);
        if (e.response) {
          setErrorMessage({ ...errorMessage, api: e.response.data.message });
        } else setErrorMessage({ ...errorMessage, api: e.message });
      }
    }

    setLoading(false);
  };

  const handleInput = (e: FormEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;

    if (name === "email") setErrorMessage({ ...errorMessage, email: validateEmail(value) });

    if (name === "password") setErrorMessage({ ...errorMessage, password: validatePassword(value) });

    setData({ ...data, [name]: value });
  };

  const handleClick = () => {
    setShakeWhenApiError(false);
    setLoading(true);
  };

  return (
    <Wrapper>
      <Snackbar
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={() => setRegisteredToast({ message: null, isToast: false })}
        open={isRegisteredToast.isToast}
      >
        <Toast>{isRegisteredToast.message}</Toast>
      </Snackbar>
      <LoginContent>
        <LoginrDesc>
          <h2>{t("loginPage.login")}</h2>
          <p>
            {t("loginPage.notHave")} <StyledLinkBlue to="/register">{t("loginPage.register")}</StyledLinkBlue>
          </p>
        </LoginrDesc>
        <form style={{ position: "relative" }} onSubmit={handleSubmit} action="">
          <InputWrapper>
            <InputDesc>{t("loginPage.email")}</InputDesc>
            <Input
              error={!!errorMessage.email}
              onChange={handleInput}
              placeholder={t("loginPage.emailExample")}
              type="email"
              name="email"
              disabled={isLoading}
            />
            {errorMessage.email && <ErrorMessage>{errorMessage.email}</ErrorMessage>}
          </InputWrapper>
          <InputWrapper>
            <InputDesc>{t("loginPage.password")}</InputDesc>
            <Input
              error={!!errorMessage.password}
              onChange={handleInput}
              placeholder={t("loginPage.passwordExample")}
              type="password"
              name="password"
              disabled={isLoading}
            />
            {errorMessage.password && <ErrorMessage>{errorMessage.password}</ErrorMessage>}
          </InputWrapper>
          {errorMessage.api && <ApiError>{errorMessage.api}</ApiError>}
          <div>
            <GradientButtonCenter
              disable={isLoading}
              onClick={handleClick}
              transition={{ duration: 0.3 }}
              variants={{ shake: { x: [-100, 0, 100, 0, -100, 0, 100, 0] } }}
              animate={isShakeWhenApiError && "shake"}
            >
              {!isLoading ? t("loginPage.login") : <Spinner small white />}
            </GradientButtonCenter>
          </div>
        </form>
      </LoginContent>
    </Wrapper>
  );
};

export default withRouter(Login);

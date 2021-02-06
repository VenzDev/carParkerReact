import React, { FunctionComponent, useState, FormEvent } from "react";
import registerImg from "../../assets/registerImg.svg";
import { useTranslation } from "react-i18next";
import {
  Wrapper,
  RegisterContent,
  RegisterForm,
  RegisterDesc,
  Input,
  InputDesc,
  GradientButtonCenter,
  Divider,
  RegisterImage,
  StyledLinkBlue,
  ApiError,
} from "./styles";
import { register } from "../../api/Api";
import { RegisterData } from "../../features/types";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { validInputs } from "../../utils/validators/validateRegister";
import Spinner from "../../components/Reusable/Spinner";
import {toast} from "react-toastify";

interface IProps extends RouteComponentProps { }

interface Error {
  fullName: string | null;
  email: string | null;
  password: string | null;
  confirmPassword: string | null;
  api: string | null;
}

const Register: FunctionComponent<IProps> = ({ history }) => {
  const { t } = useTranslation();
  const [data, setData] = useState<RegisterData>({ name: "", email: "", password: "", password_confirmation: "" });
  const [isShakeWhenApiError, setShakeWhenApiError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<Error>({
    fullName: null,
    email: null,
    password: null,
    confirmPassword: null,
    api: null,
  });

  const removeSpacesFromInputs = () => {
    setData({
      name: data.name.trim(),
      email: data.email.trim(),
      password: data.password.trim(),
      password_confirmation: data.password_confirmation.trim(),
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    removeSpacesFromInputs();
    setShakeWhenApiError(false);
    setLoading(true);

    if (validInputs(data)) {
      try {
        await register(data);
        toast("Successfully registered, now you can login", {position:"top-center", type:"info"});
        history.push("/home/login");
      } catch (e) {
        setShakeWhenApiError(true);
        setLoading(false);
        if (e.response) {
          setErrorMessage({ ...errorMessage, api: e.response.data.message });
        } else setErrorMessage({ ...errorMessage, api: e.message });
      }
    }

    setLoading(false)
  };

  const handleInput = (e: FormEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;
    setData({ ...data, [name]: value });
  };

  return (
    <Wrapper>
      <RegisterContent>
        <RegisterForm>
          <RegisterDesc>
            <h2>{t("registerPage.createAccount")}</h2>
            <p>
              {t("registerPage.alreadyHave")} <StyledLinkBlue to="/login">{t("registerPage.login")}</StyledLinkBlue>
            </p>
          </RegisterDesc>
          <form onSubmit={handleSubmit} action="">
            <div>
              <InputDesc>{t("registerPage.fullName")}</InputDesc>
              <Input name="name" onChange={handleInput} type="text" placeholder={t("registerPage.fullNameExample")} />
            </div>
            <div>
              <InputDesc>{t("registerPage.email")}</InputDesc>
              <Input name="email" onChange={handleInput} type="email" placeholder={t("registerPage.emailExample")} />
            </div>
            <div>
              <InputDesc>{t("registerPage.password")}</InputDesc>
              <Input
                name="password"
                onChange={handleInput}
                type="password"
                placeholder={t("registerPage.passwordExample")}
              />
            </div>
            <div>
              <InputDesc>{t("registerPage.confirmPassword")}</InputDesc>
              <Input
                name="password_confirmation"
                onChange={handleInput}
                type="password"
                placeholder={t("registerPage.confirmPasswordExample")}
              />
            </div>
            {errorMessage.api && <ApiError>{errorMessage.api}</ApiError>}
            <div>
              <GradientButtonCenter
                disable={isLoading}
                transition={{ duration: 0.3 }}
                variants={{ shake: { x: [-100, 0, 100, 0, -100, 0, 100, 0] } }}
                animate={isShakeWhenApiError && "shake"}
              >
                {!isLoading ? t("registerPage.createAccount") : <Spinner small white />}
              </GradientButtonCenter>
            </div>
          </form>
        </RegisterForm>
        <Divider />
        <RegisterImage>
          <img src={registerImg} alt="registerImage" />
        </RegisterImage>
      </RegisterContent>
    </Wrapper>
  );
};

export default withRouter(Register);

import React, { FunctionComponent } from "react";
import styled from "styled-components";
import logo from "../../assets/logo3.svg";
import { KeyboardTimePicker, KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import { StyledNavLink } from "../../components/Reusable/Links";

const DashboardContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
`;

const Sidebar = styled.div`
  color: white;
  flex: 0 0 20%;
  display: flex;
  flex-direction: column;
  background: #00d3ff;
  background-image: linear-gradient(to bottom, #0080ff, #0098ff, #00aeff, #00c1ff, #00d3ff);
`;
const DashboardContent = styled.div`
  flex: 0 0 80%;
`;

const Header = styled.div`
  padding: 0 3rem;
  height: 70px;
  border-bottom: 2px solid #f3f3f3;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoText = styled.h2`
  margin-left: 0.5rem;
  color: white;
  letter-spacing: 2px;
  font-size: 1.7rem;
`;

const LogoImg = styled.img`
  width: 40px;
  height: 40px;
`;

const TimerDiv = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 2rem;
  margin-bottom: 1rem;
`;

const Flex = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Copyright = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 1rem;
`;

const NavItem = styled.div`
  background-color: transparent;
  color: white;
  border-bottom-left-radius: 23px;
  border-top-left-radius: 23px;
  position: relative;
  margin: 1rem;
  margin-left: 30%;
  margin-right: 0;
  padding: 1rem;
  font-size: 1.3rem;
  i {
    width: 50px;
  }
`;

const Arrow = styled.div`
  background-color: #0080ff;
  margin-left: 0.5rem;
  height: 25px;
  width: 25px;
  display: flex;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  color: white;
`;

const Wrapper = styled.div`
  margin: 2rem;
`;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 0 0 23%;
  height: 150px;
  border: 1px solid lightgray;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const InfoContent = styled.div`
  flex: 0 0 60%;
`;

const InfoIcon = styled.div`
  flex: 0 0 75px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: blue;
  font-size: 1.5rem;
  height: 75px;
  background-color: rgba(0, 128, 255, 0.3);
  border-radius: 50%;
`;

const ParkingWrapper = styled.div`
  width: 800px;
  margin: 0 auto;
  border: 1px solid lightgray;
  border-radius: 16px;
  position: relative;
`;
const Slots = styled.div`
  padding: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Slot = styled.div`
  flex: 0 0 75px;
  height: 100px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
`;

const SlotFree = styled(Slot)`
  background-color: #1eff00;
  box-shadow: 2px 6px 12px rgba(30, 255, 0, 0.3);
  transition: 0.4s;
  cursor: pointer;

  &:hover {
    box-shadow: 2px 6px 12px rgba(30, 255, 0, 0.9);
  }
`;

const SlotWarning = styled(Slot)`
  background-color: #ffc800;
  box-shadow: 2px 6px 12px rgba(255, 200, 0, 0.3);
`;

const SlotReserved = styled(Slot)`
  background-color: #ff0000;
  box-shadow: 2px 6px 12px rgba(255, 0, 0, 0.3);
`;

const SlotSpace = styled.div`
  height: 75px;
`;
const SlotsHalf = styled.div`
  flex: 0 0 49%;
  justify-content: space-between;
  display: flex;
`;

const SlotHorizontal = styled.div`
  flex: 0 0 100px;
  height: 75px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
`;

const SlotHorizontalFree = styled(SlotHorizontal)`
  background-color: #1eff00;
  box-shadow: 2px 6px 12px rgba(30, 255, 0, 0.3);
  transition: 0.4s;
  cursor: pointer;

  &:hover {
    box-shadow: 2px 6px 12px rgba(30, 255, 0, 0.9);
  }
`;

const SlotHorizontalWarning = styled(SlotHorizontal)`
  background-color: #ffc800;
  box-shadow: 2px 6px 12px rgba(255, 200, 0, 0.3);
`;

const SlotHorizontalReserved = styled(SlotHorizontal)`
  background-color: #ff0000;
  box-shadow: 2px 6px 12px rgba(255, 0, 0, 0.3);
`;

const Exchange = styled.div`
  position: absolute;
  right: 20px;
  top: 180px;
  font-size: 1.5rem;
`;

const StyledNavLinkSidebar = styled(StyledNavLink)`
  &.active > div {
    color: blue;
    background-color: white;
  }
`;

const Dashboard: FunctionComponent = () => {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(new Date("2020-09-19T14:00:00"));

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <DashboardContainer>
      <Sidebar>
        <Flex>
          <LogoImg src={logo} alt="logo" />
          <LogoText>Parker</LogoText>
        </Flex>
        <div>
          <StyledNavLinkSidebar exact to="/dashboard">
            <NavItem>
              <i className="fas fa-home"></i>
              <span>Dashboard</span>
            </NavItem>
          </StyledNavLinkSidebar>
          <StyledNavLinkSidebar exact to="/dashboard/orders">
            <NavItem>
              <i className="fas fa-shopping-cart"></i>
              <span>Orders</span>
            </NavItem>
          </StyledNavLinkSidebar>
          <StyledNavLinkSidebar exact to="/dashboard/account">
            <NavItem>
              <i className="fas fa-user"></i>
              <span>Account</span>
            </NavItem>
          </StyledNavLinkSidebar>
          <StyledNavLinkSidebar exact to="/dashboard/support">
            <NavItem>
              <i className="fas fa-question-circle"></i>
              <span>Support</span>
            </NavItem>
          </StyledNavLinkSidebar>
        </div>
        <Copyright>&copy; Kamil Bechta {new Date().getFullYear()}</Copyright>
      </Sidebar>
      <DashboardContent>
        <Header>
          <h2 style={{ fontWeight: 200 }}>Hello, John</h2>
          <Flex>
            <p>John Smith</p>
            <Arrow>
              <i className="fas fa-angle-down"></i>
            </Arrow>
          </Flex>
        </Header>
        <Wrapper>
          <InfoWrapper>
            <Info>
              <InfoContent>
                <h2>14:23</h2>
                <p>Current time</p>
              </InfoContent>
              <InfoIcon>
                <i className="far fa-clock"></i>
              </InfoIcon>
            </Info>
            <Info>
              <InfoContent>
                <h2>1</h2>
                <p>Your active reservations</p>
              </InfoContent>
              <InfoIcon>
                <i className="fas fa-shopping-cart"></i>
              </InfoIcon>
            </Info>
            <Info>
              <InfoContent>
                <h2>10</h2>
                <p>Free spaces</p>
              </InfoContent>
              <InfoIcon>
                <i className="fas fa-parking"></i>
              </InfoIcon>
            </Info>
            <Info>
              <InfoContent>
                <h2>3</h2>
                <p>Cars on parking</p>
              </InfoContent>
              <InfoIcon>
                <i className="fas fa-car"></i>
              </InfoIcon>
            </Info>
          </InfoWrapper>
          <h2 style={{ fontWeight: 200 }}>Parking</h2>
          <TimerDiv>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disablePast={true}
                margin="normal"
                id="date-picker-dialog"
                label="Select date"
                format="MM/dd/yyyy"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
              <KeyboardTimePicker
                margin="normal"
                id="time-picker"
                label="Start time"
                value={selectedDate}
                onChange={handleDateChange}
                ampm={false}
                views={["hours"]}
                KeyboardButtonProps={{
                  "aria-label": "change time",
                }}
              />
              <KeyboardTimePicker
                margin="normal"
                id="time-picker"
                label="End time"
                value={selectedDate}
                onChange={handleDateChange}
                ampm={false}
                views={["hours"]}
                KeyboardButtonProps={{
                  "aria-label": "change time",
                }}
              />
            </MuiPickersUtilsProvider>
          </TimerDiv>
          <ParkingWrapper>
            <Exchange>
              <i className="fas fa-exchange-alt"></i>
            </Exchange>
            <Slots>
              <SlotFree>1</SlotFree>
              <SlotWarning>2</SlotWarning>
              <SlotFree>3</SlotFree>
              <SlotWarning>4</SlotWarning>
              <SlotReserved>5</SlotReserved>
              <SlotFree>6</SlotFree>
              <SlotFree>7</SlotFree>
              <SlotFree>8</SlotFree>
            </Slots>
            <SlotSpace />
            <Slots>
              <SlotsHalf>
                <SlotHorizontalFree>9</SlotHorizontalFree>
                <SlotHorizontalReserved>10</SlotHorizontalReserved>
              </SlotsHalf>
              <SlotsHalf>
                <SlotHorizontalFree>11</SlotHorizontalFree>
              </SlotsHalf>
            </Slots>
            <Slots>
              <SlotsHalf>
                <SlotHorizontalWarning>12</SlotHorizontalWarning>
                <SlotHorizontalFree>13</SlotHorizontalFree>
              </SlotsHalf>
              <SlotsHalf>
                <SlotHorizontalFree>14</SlotHorizontalFree>
                <SlotHorizontalReserved>15</SlotHorizontalReserved>
              </SlotsHalf>
            </Slots>
            <SlotSpace />
            <Slots>
              <SlotFree>16</SlotFree>
              <SlotFree>17</SlotFree>
              <SlotFree>18</SlotFree>
              <SlotFree>19</SlotFree>
              <SlotFree>20</SlotFree>
              <SlotFree>21</SlotFree>
              <SlotFree>22</SlotFree>
              <SlotFree>23</SlotFree>
            </Slots>
          </ParkingWrapper>
        </Wrapper>
      </DashboardContent>
    </DashboardContainer>
  );
};

export default Dashboard;

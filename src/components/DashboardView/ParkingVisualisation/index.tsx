import React, { FunctionComponent } from "react";
import styled from "styled-components";

const ParkingWrapper = styled.div`
  width: 800px;
  margin: 0 auto;
  margin-top: 2rem;
  background-color: white;
  box-shadow: 2px 6px 12px rgba(0, 0, 0, 0.05);
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

const ParkingVisualisation: FunctionComponent = () => {
  return (
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
  );
};

export default ParkingVisualisation;

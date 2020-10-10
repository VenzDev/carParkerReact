import React, { FunctionComponent, useState, useEffect } from "react";
import { H2, TimerDiv, Order } from "./styles";
import DateFnsUtils from "@date-io/date-fns";
import { TimePicker, DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import "date-fns";

//Set date without minutes
const dateWithoutMinutes = (): Date => {
  const date = new Date();
  date.setMinutes(0);
  date.setHours(date.getHours() + 1);
  return date;
};
//Set date with custom minutes (default 30 minutes)
const dateWithCustomMinutes = (): Date => {
  const date = dateWithoutMinutes();
  date.setMinutes(30);
  return date;
};

interface IProps {
  getDate: (date: Date, startHour: Date, endHour: Date) => void;
}

const DateSelectors: FunctionComponent<IProps> = ({ getDate }) => {
  const [date, setDate] = useState<Date | null>(new Date());
  const [startHour, setStartHour] = useState<Date | null>(dateWithoutMinutes());
  const [endHour, setEndHour] = useState<Date | null>(dateWithCustomMinutes());
  const [isError, setError] = useState(false);

  useEffect(() => {
    const today = new Date();

    //check when today date is selected and selected start time must be greater than today time!
    if (startHour && date && date.getDate() === today.getDate() && startHour.getHours() <= today.getHours()) {
      setError(true);
    } else if (startHour && endHour && startHour?.getHours() > endHour?.getHours()) {
      setError(true);
    } else {
      getDate(date!, startHour!, endHour!);
      setError(false);
    }
    // eslint-disable-next-line
  }, [date, startHour, endHour]);

  const handleDateChange = (date: Date | null) => {
    setDate(date);
  };

  const handleStartHour = (startDate: Date | null) => {
    setStartHour(startDate);
  };

  const handleEndHour = (endDate: Date | null) => {
    setEndHour(endDate);
  };

  return (
    <>
      <H2>Reserve parking space</H2>
      <TimerDiv>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Order>
            <DatePicker
              disablePast={true}
              margin="normal"
              id="date-picker-dialog"
              label="Select date"
              format="MM/dd/yyyy"
              value={date}
              onChange={handleDateChange}
            />
          </Order>
          <TimePicker
            margin="normal"
            id="time-picker"
            label="Start time"
            value={startHour}
            onChange={handleStartHour}
            ampm={false}
            minutesStep={10}
            error={isError}
            helperText={isError && "Invalid hours"}
          />
          <TimePicker
            margin="normal"
            id="time-picker"
            label="End time"
            value={endHour}
            onChange={handleEndHour}
            ampm={false}
            minutesStep={10}
            error={isError}
            helperText={isError && "Invalid hours"}
            cancelLabel="Anuluj"
            okLabel="Potwierdź"
          />
        </MuiPickersUtilsProvider>
      </TimerDiv>
    </>
  );
};

export default DateSelectors;

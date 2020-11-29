import DateFnsUtils from "@date-io/date-fns";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import React, { FunctionComponent, useState, useEffect } from "react";
import { ResponsiveContainer, Tooltip, PieChart, Pie, Cell, BarChart, XAxis, YAxis, Bar } from "recharts";
import { percentageStatus } from "../../../api/Api";
import dateToPhp from "../../../utils/dateToPhp";
import { Flex, PieChartContainer, DatesContainer, SlotsChartContainer } from "./styles";

interface IData {
  percentage: number;
  slots_percentage: [];
}

const Stats: FunctionComponent = () => {
  const [data, setData] = useState<IData>({ percentage: 0, slots_percentage: [] });
  const [fromDate, setFromDate] = useState<Date | null>(new Date());
  const [toDate, setToDate] = useState<Date | null>(new Date());
  const getPercentageStatus = async (from: Date | null, to: Date | null) => {
    let data;
    if (from && to) data = await percentageStatus({ from: dateToPhp(from), to: dateToPhp(to) });
    setData(data);
  };

  const handleFromDate = (date: Date | null) => {
    setFromDate(date);
    if (date && toDate) getPercentageStatus(date, toDate);
  };
  const handleToDate = (date: Date | null) => {
    setToDate(date);
    if (date && fromDate) getPercentageStatus(fromDate, date);
  };

  useEffect(() => {
    if (fromDate && toDate) getPercentageStatus(fromDate, toDate);
  }, []);

  const pieData = [
    { name: "zajęte", value: data.percentage },
    { name: "wolne", value: 100 - data.percentage },
  ];

  const prepareData = () => {
    const array: any = [];
    data.slots_percentage.forEach((slot, id) => array.push({ name: `S${id + 1}`, percentage: slot }));
    return array;
  };
  const barData = prepareData();
  return (
    <>
      <Flex>
        <PieChartContainer>
          <ResponsiveContainer>
            <PieChart>
              <Tooltip />
              <Pie dataKey="value" data={pieData} fill="#8884d8" label>
                <Cell fill="#ffae00" />
                <Cell fill="#00ff0d" />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </PieChartContainer>
        <DatesContainer>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
              margin="normal"
              id="date-picker-dialog"
              label="Select date from"
              format="MM/dd/yyyy"
              value={fromDate}
              onChange={handleFromDate}
            />
            <DatePicker
              margin="normal"
              id="date-picker-dialog"
              label="Select date to"
              format="MM/dd/yyyy"
              value={toDate}
              onChange={handleToDate}
            />
          </MuiPickersUtilsProvider>
        </DatesContainer>
      </Flex>
      <SlotsChartContainer>
        <ResponsiveContainer width="100%">
          <BarChart data={barData}>
            <XAxis dataKey="name" />
            <YAxis domain={[0, 100]} />
            <Tooltip />
            <Bar dataKey="percentage" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </SlotsChartContainer>
    </>
  );
};

export default Stats;

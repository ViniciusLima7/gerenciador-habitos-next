"use client";
import { useEffect, useState } from "react";
import ArrowIcon from "../ArrowIcon";
import { weekDays } from "@/utils/weekdays";

function getDaysInMonth(month: number, year: number) {
  const date = new Date(year, month, 1);
  const firstDayWeek = date.getDay();
  const numberOffEmptyDays = Array(firstDayWeek).fill(null);
  const days = [...numberOffEmptyDays];
  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return days;
}

const currentDate = new Date();
const currentDay = currentDate.getDate();
const currentMonth = currentDate.getMonth();
const currentYear = currentDate.getFullYear();

export default function Calendar() {
  const [month, setMonth] = useState(currentMonth);
  const [year, setYear] = useState(currentYear);
  const [daysInMonth, setDaysInMonth] = useState(
    getDaysInMonth(currentMonth, currentYear)
  );
  const [selectedDate, setSelectDate] = useState(new Date());
  console.log("🚀 ~ Habit ~ daysinMonth:", daysInMonth);

  useEffect(() => {
    setDaysInMonth(getDaysInMonth(month, year));
    setSelectDate(new Date(year, month, 1));
  }, [month, year]);

  function goToPreviousMonth() {
    if (month === 0) {
      setYear(year - 1);
      setMonth(11);
    } else {
      setMonth(month - 1);
    }
  }
  function goToNextMonth() {
    if (month === 11) {
      setYear(year + 1);
      setMonth(0);
    } else {
      setMonth(month + 1);
    }
  }

  function getMonthDateString() {
    const monthName = selectedDate.toLocaleString("en-US", { month: "long" });

    return monthName[0].toUpperCase() + monthName.slice(1);
  }

  return (
    <section className="w-full my-2 rounded-md bg-neutral-800">
      <div className="flex justify-between mx-2 my-4 font-sans  text-neutral-400">
        <button onClick={goToPreviousMonth}>
          <ArrowIcon width={15} height={15} className="stroke-neutral-400" />
        </button>
        {/* <span>Julho de {year}</span> */}
        <span>
          {getMonthDateString()} de {year}
        </span>
        <button onClick={goToNextMonth}>
          <ArrowIcon
            width={15}
            height={15}
            className="rotate-180 stroke-neutral-400"
          />
        </button>
      </div>
      <div className="grid w-full grid-cols-7 mt-2">
        {weekDays.map((day) => (
          <div key={day} className="flex flex-col items-center p-2">
            <span className="font-sans text-xs font-light text-neutral-200">
              {day}
            </span>
          </div>
        ))}
        {daysInMonth.map((day, index) => (
          <div key={index} className="flex flex-col items-center p-2">
            <span className="font-sans text-xs font-light text-neutral-400 text-center">
              {day?.getDate()}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

import ArrowIcon from "@/components/ArrowIcon.tsx";
import { weekDays } from "@/utils/weekdays";
import { kv } from "@vercel/kv";
import Link from "next/link";

type HabitProps = {
  params: {
    habitName: string;
  };
};

function getDaysInMonth(month: number, year: number) {
  const date = new Date(year, month, 1);
  const firstDayWeek = date.getDay();
  const numberOffEmptyDays = Array(firstDayWeek === 0 ? 6 : firstDayWeek).fill(
    null
  );
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

export default async function Habit({ params: { habitName } }: HabitProps) {
  const decodeHabit = decodeURI(habitName);
  const habitStreak = await kv.hget("habits", decodeHabit);
  // console.log("🚀 ~ Habit ~ habitStreak:", habitStreak);
  const daysInMonth = getDaysInMonth(currentMonth, currentYear);
  console.log("🚀 ~ Habit ~ daysinMonth:", daysInMonth);
  return (
    <main className="container relative flex flex-col gap8 px-12 pt-16">
      <h1 className="text-2xl font-light text-center text-white font-display">
        {decodeHabit}
      </h1>
      <Link
        className="flex items-center font-sans text-xs text-neutral-300  gap-2"
        href={"/"}
      >
        <ArrowIcon width={15} height={15} />
        Voltar
      </Link>

      <section className="w-full my-2 rounded-md bg-neutral-800">
        <div className="flex justify-between mx-2 my-4 font-sans  text-neutral-400">
          <button>
            <ArrowIcon width={15} height={15} className="stroke-neutral-400" />
          </button>
          <span>Julho de 2024</span>
          <button>
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
    </main>
  );
}

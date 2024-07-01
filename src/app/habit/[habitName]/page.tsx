import ArrowIcon from "@/components/ArrowIcon";
import Calendar from "@/components/Calendar";
import { weekDays } from "@/utils/weekdays";
import { kv } from "@vercel/kv";
import Link from "next/link";

type HabitProps = {
  params: {
    habitName: string;
  };
};

export default async function Habit({ params: { habitName } }: HabitProps) {
  const decodeHabit = decodeURI(habitName);
  const habitStreak = await kv.hget("habits", decodeHabit);
  // console.log("🚀 ~ Habit ~ habitStreak:", habitStreak);

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

      <Calendar />
    </main>
  );
}

import ArrowIcon from "@/components/ArrowIcon";
import Calendar from "@/components/Calendar";
import { kv } from "@vercel/kv";
import Link from "next/link";

type HabitProps = {
  params: {
    habitName: string;
  };
};

export default async function Habit({ params: { habitName } }: HabitProps) {
  const decodeHabit = decodeURI(habitName);
  const habitStreak: Record<string, boolean> | null = await kv.hget(
    "habits",
    decodeHabit
  );

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
        Back
      </Link>

      <Calendar habit={decodeHabit} habitStreak={habitStreak} />
    </main>
  );
}

import Image from "next/image";

export default function Home() {
  const habits = {
    "drink water": {
      "2024-06-24": true,
      "2024-06-25": false,
      "2024-06-26": false,
      "2024-06-27": true,
      "2024-06-28": true,
    },
    "study coding": {
      "2024-06-24": false,
      "2024-06-25": true,
      "2024-06-26": false,
      "2024-06-27": true,
      "2024-06-28": false,
    },
  };
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return (
    <main className="container relative flex flex-col gap-8 px-4 pt-16">
      {habits === null ||
        (Object.keys(habits).length === 0 && (
          <h1 className="mt-20 text-4xl font-light text-white font-display text-center">
            You don't have registered habits.
          </h1>
        ))}
      {habits !== null &&
        Object.entries(habits).map(([habit, habitStreak]) => (
          <div key={habit}>
            <div className="flex justify-between items-center">
              <span className="text-xl font-light text-white font-sans">
                {habit}
              </span>
              <button>
                <Image
                  src={"/trash.svg"}
                  width={20}
                  height={20}
                  alt="Icon trash red"
                />
              </button>
            </div>
            <section className="grid grid-cols-7 bg-neutral-800 rounded-md p-2">
              {weekDays.map((day) => (
                <div className="flex flex-col" key={day}>
                  <span className="font-sans text-xs text-white">{day}</span>
                </div>
              ))}
            </section>
          </div>
        ))}
    </main>
  );
}

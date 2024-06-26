export default function NewHabit() {
  async function newHabit(formData: FormData) {
    "use server";

    const habit = formData.get("habit");
    console.log("🚀 ~ newHabit ~ habit:", habit);
  }
  return (
    <main className="container relative flex flex-col gap-8 px-12 pt-16">
      <h1 className="text-4xl font-light text-center text-white font-display">
        New Habit
      </h1>
      <form className="flex flex-col gap-4 mt-4" action={newHabit}>
        <input
          type="text"
          name="habit"
          id="habit"
          className="p-2 font-sans text-xl text-white rounded-md bg-neutral-800"
        />
        <button
          type="submit"
          className="bg-[#45EDAD] font-display text-neutral-900 font-regular text-2xl p-2 rounded-md mt-8"
        >
          Register
        </button>
        <button className="bg-neutral-800 font-display text-[#F85858] font-regular text-2xl p-2 rounded-md">
          Cancel
        </button>
      </form>
    </main>
  );
}

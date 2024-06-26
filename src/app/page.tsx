export default function Home() {
  const habits = {};
  return (
    <main className="container relative flex flex-col gap-8 px-4 pt-16">
      {habits === null ||
        (Object.keys(habits).length === 0 && (
          <h1 className="mt-20 text-4xl font-light text-white font-display text-center">
            You don't have registered habits.
          </h1>
        ))}
    </main>
  );
}

import { getQuoteForDate } from "../lib/quotes";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  weekday: "long",
  month: "long",
  day: "numeric",
  year: "numeric"
});

export default function Home() {
  const today = new Date();
  const entry = getQuoteForDate(today);

  return (
    <main className="container">
      <h1 className="title">Daily Motivational Assistant</h1>
      <p className="date">{dateFormatter.format(today)}</p>
      <div className="line" />
      <section className="content">
        <p className="text">Quote: "{entry.quote}" — {entry.author}</p>
        <p className="text">Summary: {entry.summary}</p>
        <p className="text">Tip: {entry.tip}</p>
      </section>
    </main>
  );
}

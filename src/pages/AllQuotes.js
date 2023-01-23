import React from "react";
import QuoteList from "../components/quotes/QuoteList";
const DUMMY_DATA = [
  { id: "q1", author: "Max", text: "Learning react is fun" },
  { id: "q2", author: "Maximilian", text: "Learning react is great" },
];

export const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_DATA} />;
};
export default AllQuotes;

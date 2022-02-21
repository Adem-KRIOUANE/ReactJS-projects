import { useEffect } from "react";
import QuoteList from "../components/quotes/QuoteList";
import NoQuoetesFound from "../components/quotes/NoQuotesFound";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";

// const DUMMY_QUOTES = [
//   { id: "q1", author: "adem", text: "Learning React is fun!" },
//   { id: "q2", author: "Ahmed", text: "Learning NodeJS is loading... !" },
// ];

const AllQuotes = () => {
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused"> {error} </p>;
  }

  if (status === "completed" && (!loadedQuotes || loadedQuotes.length === 0)) {
    <NoQuoetesFound />;
  }

  return <QuoteList quotes={loadedQuotes} />;
};

export default AllQuotes;

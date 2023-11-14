import React, { useEffect, useState } from "react";
import MovieComponent from "./MovieComponent";

const App = () => {
  const [card, setCard] = useState([]);
  const [page, setPage] = useState(1);
  const getCardData = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${page}`
    );
    const data = await res.json();
    if (card.length <= 0) {
      setCard(data);
    } else {
      setCard((prev) => [...prev, ...data]);
    }

    console.log(data);
  };

  useEffect(() => {
    getCardData();
  }, [page]);

  const handleInfinteScroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleInfinteScroll);
    return () => window.removeEventListener("scroll", handleInfinteScroll);
  }, []);

  return card.length < 0 ? <h1>Loading</h1> : <MovieComponent myinfo={card} />;
};

export default App;

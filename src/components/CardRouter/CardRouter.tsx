import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "../../pages/LandingPage/LandingPage";
import Card from "./Card/Card";

const CardComponent = () => {
  const location = useLocation();

  const defaultName = "Anwesha";
  const defaultAuthor = "Arka";
  const defaultMessage = "On this day, so special and so bright,|Wishing you joy, love, and pure delight.|May your dreams take flight on this birthday of yours,|With laughter, and love that endlessly soars.";

  const queryParams = new URLSearchParams(location.search);

  const cardData = {
    name: queryParams.get("name") || defaultName,
    author: queryParams.get("author") || defaultAuthor,
    messages: (queryParams.get("messages") || defaultMessage).split("|"),
  };

  useEffect(() => {
    document.title = `Happy Birthday ${cardData.name}!`;
  }, []);

  return <Card {...cardData} />;
};

const CardRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/card" element={<CardComponent />} />
      <Route path="*" element={<LandingPage />} />
    </Routes>
  );
};

export default CardRouter;

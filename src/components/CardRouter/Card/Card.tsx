import { useState, useEffect } from "react";
import "./Card.scss";

type CardProps = {
  name: string;
  author: string;
  messages: string[];
};

const Card = ({ name, author, messages }: CardProps) => {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const isTouchDevice = () => {
      return (
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        (navigator as any).msMaxTouchPoints > 0
      );
    };

    setIsTouch(isTouchDevice());
  }, []);

  if (messages.length > 4) {
    messages = messages.slice(0, 4);
  }

  return (
    <div className="birthdayCard disable-select" >
      <div className="cardFront">
        <h3 className="happy">
          HAPPY BIRTHDAY
          <br />
          {isTouch ? "Tap" : "Hover"} to Open</h3>
        <div className="balloons">
          <div className="balloonOne" />
          <div className="balloonTwo" />
          <div className="balloonThree" />
          <div className="balloonFour" />
        </div>
      </div>
      <div className="cardInside">
        <h3 className="back">HAPPY BIRTHDAY<br />{name}!</h3>
        <p>
          {
            messages.map(
              (message: string, index: number) => (
                <span key={index}>
                  {message}<br />
                </span>
              )
            )
          }
        </p>
        <p className="name">~ {author}</p>
      </div>
    </div >
  );
};

export default Card;

import React, { useEffect, useState } from 'react';
import "../Styles/Slider.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import item from "../images/images (1).jpeg"
import item1 from "../images/images.jpeg"
import item2 from "../images/istockphoto-1438170806-612x612.jpg"

const _items = [
  {
    player: {
      title: 'Efren Reyes',
      desc: 'Known as "The Magician", Efren Reyes is well regarded by many professionals as the greatest all-around player of all time.',
      image: item,
    },
  },
  {
    player: {
      title: "Ronnie O'Sullivan",
      desc: "Ronald Antonio O'Sullivan is a six-time world champion and is the most successful player in snooker history.",
      image: item1,
    },
  },
  {
    player: {
      title: 'Shane Van Boening',
      desc: 'The "South Dakota Kid" is hearing-impaired and uses a hearing aid, but it has not limited his ability.',
      image: item2,
    },
  },
  {
    player: {
      title: 'Mike Sigel',
      desc: 'Mike Sigel or "Captain Hook" is an American professional pool player with over 108 tournament wins.',
      image: item,
    },
  },
  {
    player: {
      title: 'Willie Mosconi',
      desc: 'Nicknamed "Mr. Pocket Billiards," Willie Mosconi was among the first Billiard Congress of America Hall of Fame inductees.',
      image: item1,
    },
  },
];

const CarouselSlideItem = ({ index, activeIndex }) => {
  const { title, desc, image } = _items[index % _items.length].player;
  
  return (
    <li
      className="carousel__slide-item"
      style={{
        transform: `translateX(${(index - activeIndex) * 100}%)`,
        transition: "transform 0.5s ease-in-out",
      }}
    >
      <div className="carousel__slide-item-img-link">
        <img src={image} alt={title} />
      </div>
      <div className="carousel-slide-item__body">
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
    </li>
  );
};

export const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const length = _items.length;

  const prevClick = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + length) % length);
  };

  const nextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % length);
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     nextClick();
  //   }, 3000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="carousel__wrap">
      <div className="carousel__inner">
        <button className="carousel__btn carousel__btn--prev" onClick={prevClick}>
          <FaArrowLeft />
        </button>
        <div className="carousel__container">
          <ul className="carousel__slide-list">
            {_items.map((_, index) => (
              <CarouselSlideItem key={index} index={index} activeIndex={activeIndex} />
            ))}
          </ul>
        </div>
        <button className="carousel__btn carousel__btn--next" onClick={nextClick}>
          <FaArrowRight />
        </button>
        <div className="carousel__dots">
          {_items.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`dot ${index === activeIndex ? "active" : ""}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};


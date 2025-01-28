import React, { useEffect, useState } from 'react';
import "../Styles/Slider.css"

const slideWidth = 30;
const _items = [
  {
    player: {
      title: 'Efren Reyes',
      desc: 'Known as "The Magician", Efren Reyes is well regarded by many professionals as the greatest all around player of all time.',
      image: 'https://i.postimg.cc/RhYnBf5m/er-slider.jpg',
    },
  },
  {
    player: {
      title: "Ronnie O'Sullivan",
      desc: "Ronald Antonio O'Sullivan is a six-time world champion and is the most successful player in the history of snooker.",
      image: 'https://i.postimg.cc/qBGQNc37/ro-slider.jpg',
    },
  },
  {
    player: {
      title: 'Shane Van Boening',
      desc: 'The "South Dakota Kid" is hearing-impaired and uses a hearing aid, but it has not limited his ability.',
      image: 'https://i.postimg.cc/cHdMJQKG/svb-slider.jpg',
    },
  },
  {
    player: {
      title: 'Mike Sigel',
      desc: 'Mike Sigel or "Captain Hook" as many like to call him is an American professional pool player with over 108 tournament wins.',
      image: 'https://i.postimg.cc/C12h7nZn/ms-1.jpg',
    },
  },
  {
    player: {
      title: 'Willie Mosconi',
      desc: 'Nicknamed "Mr. Pocket Billiards," Willie Mosconi was among the first Billiard Congress of America Hall of Fame inductees.',
      image: 'https://i.postimg.cc/NfzMDVHP/willie-mosconi-slider.jpg',
    },
  },
];

// Carousel helper functions
const sleep = (ms = 0) => new Promise((resolve) => setTimeout(resolve, ms));

const createItem = (position, idx, length) => {
  const styles = { transform: `translateX(${position * slideWidth}rem)` };
  const player = _items[idx % length].player;

  if (position === length - 1 || position === length + 1) {
    return { styles: { ...styles, filter: 'grayscale(1)' }, player };
  } else if (position !== length) {
    return { styles: { ...styles, opacity: 0 }, player };
  }

  return { styles, player };
};

const CarouselSlideItem = ({ pos, idx, length }) => {
  const { styles, player } = createItem(pos, idx, length);

  return (
    <li className="carousel__slide-item" style={styles}>
      <div className="carousel__slide-item-img-link">
        <img src={player.image} alt={player.title} />
      </div>
      <div className="carousel-slide-item__body">
        <h4>{player.title}</h4>
        <p>{player.desc}</p>
      </div>
    </li>
  );
};

const Carousel = () => {
  const [items, setItems] = useState([...Array(_items.length).keys()]);
  const [isTicking, setIsTicking] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const length = _items.length;

  const prevClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setItems((prev) =>
        prev.map((_, i) => prev[(i + jump) % prev.length])
      );
    }
  };

  const nextClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setItems((prev) =>
        prev.map((_, i) => prev[(i - jump + prev.length) % prev.length])
      );
    }
  };

  const handleDotClick = (idx) => {
    if (idx < activeIdx) prevClick(activeIdx - idx);
    if (idx > activeIdx) nextClick(idx - activeIdx);
  };

  useEffect(() => {
    if (isTicking) sleep(300).then(() => setIsTicking(false));
  }, [isTicking]);

  useEffect(() => {
    setActiveIdx((length - (items[0] % length)) % length);
  }, [items, length]);

  return (
    <div className="carousel__wrap">
      <div className="carousel__inner">
        <button
          className="carousel__btn carousel__btn--prev"
          onClick={() => prevClick()}
        >
          <i className="carousel__btn-arrow carousel__btn-arrow--left" />
        </button>
        <div className="carousel__container">
          <ul className="carousel__slide-list">
            {items.map((pos, i) => (
              <CarouselSlideItem key={i} idx={i} pos={pos} length={length} />
            ))}
          </ul>
        </div>
        <button
          className="carousel__btn carousel__btn--next"
          onClick={() => nextClick()}
        >
          <i className="carousel__btn-arrow carousel__btn-arrow--right" />
        </button>
        <div className="carousel__dots">
          {items.slice(0, length).map((_, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              className={`dot ${i === activeIdx ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Carousel;
import React from 'react';
import styles from './Carousel.module.scss';
import Back from '../../../assets/back.svg';
import Next from '../../../assets/next.svg';

const Carousel = ({ src }) => {
  const [position, setPosition] = React.useState(0);
  const [index, setIndex] = React.useState(0);
  const slideRef = React.useRef();

  React.useEffect(() => {
    const { width } = slideRef.current.getBoundingClientRect();
    setPosition(-(index * width));
  }, [index]);

  function handleBack() {
    const isSlideStart = index > 0;
    isSlideStart ? setIndex(index - 1) : setIndex(src.length - 1);
  }
  function handleNext() {
    const isSlideEnd = index < src.length - 1;
    isSlideEnd ? setIndex(index + 1) : setIndex(0);
  }

  return (
    <section className={styles.carouselWrapper}>
      <div className={styles.carouselContainer}>
        <div
          className={styles.carouselContent}
          style={{ transform: `translateX(${position}px)` }}
          ref={slideRef}
        >
          {src.map((item) => (
            <div className={styles.item} key={item.desktop}>
              <img
                className={styles.desktopImg}
                src={item.desktop}
                alt="Foto das instalações da academia"
              />
              <img
                className={styles.mobileImg}
                src={item.mobile}
                alt="Foto das instalações da academia"
              />
            </div>
          ))}
        </div>
        <nav className={styles.carouselNav}>
          <ul>
            <li>
              <button onClick={handleBack}>
                <img src={Back} alt="Botão para voltar" />
              </button>
            </li>
            <li>
              <button onClick={handleNext}>
                <img src={Next} alt="Botão para avançar" />
              </button>
            </li>
          </ul>
        </nav>
        <ul className={styles.navDetail}>
          <li>
            <span
              style={
                index === 0 ? { scale: '1', backgroundColor: '#2525A3' } : {}
              }
            ></span>
          </li>
          <li>
            <span
              style={
                index === 1 ? { scale: '1', backgroundColor: '#2525A3' } : {}
              }
            ></span>
          </li>
          <li>
            <span
              style={
                index === 2 ? { scale: '1', backgroundColor: '#2525A3' } : {}
              }
            ></span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Carousel;

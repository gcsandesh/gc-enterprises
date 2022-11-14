import React, { useEffect } from "react";
import styles from "./Carousel.module.css";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import Image from "next/image";

export default function Carousel() {
  const [current, setCurrent] = React.useState(1);
  // const maxLength = 9; //set number of images as maxLength here (manually)
  const maxLength = () => {
    return document.getElementById("carousel").childNodes.length;
  };
  const goToLeft = () => {
    if (current === 1) {
      // return console.log("cannot move left");
    } else {
      const prevEl = document.getElementById(`img-${current}`);
      prevEl.style.transform = "translateX(100%)";
      // console.log("going to left");
      setCurrent((prevCurrent) => prevCurrent - 1);
    }
  };
  const goToRight = () => {
    if (current === maxLength()) {
      // return console.log("cannot go right");
    } else {
      const prevEl = document.getElementById(`img-${current}`);
      prevEl.style.transform = "translateX(-100%)";
      // console.log("going to RIGHT");
      setCurrent((prevCurrent) => prevCurrent + 1);
    }
  };

  useEffect(() => {
    const allCarouselEls = document.getElementById("carousel").childNodes;
    allCarouselEls.forEach((element) => {
      element.style.opacity = 0;
    });
    const currentEl = document.getElementById(`img-${current}`);
    currentEl.style.opacity = 1;
    currentEl.style.transform = "translateX(0%)";
  }, [current]);
  // console.log(current);
  return (
    <section className={styles.carouselSection}>
      <div className={styles.carouselContainer}>
        <div className={styles.carousel} id="carousel">
          <div className={styles.carouselImgContainer} id="img-1">
            <Image
              src={"https://source.unsplash.com/t34i3FBsF90"}
              width={4}
              height={3}
              layout="responsive"
              className={styles.carouselImg}
              alt="clothing, dress, fashion"
            />
          </div>
          <div className={styles.carouselImgContainer} id="img-2">
            <Image
              src={"https://source.unsplash.com/UP9DtTjRYpI"}
              width={4}
              height={3}
              layout="responsive"
              className={styles.carouselImg}
              alt="clothing, dress, fashion"
            />
          </div>
          <div className={styles.carouselImgContainer} id="img-3">
            <Image
              src={"https://source.unsplash.com/bfuy8aRCRt4"}
              width={4}
              height={3}
              layout="responsive"
              className={styles.carouselImg}
              alt="clothing, dress, fashion"
            />
            Img3
          </div>
          <div className={styles.carouselImgContainer} id="img-4">
            <Image
              src={"https://source.unsplash.com/N7lIJLtAegc"}
              width={4}
              height={3}
              layout="responsive"
              className={styles.carouselImg}
              alt="clothing, dress, fashion"
            />
            Img4
          </div>
          <div className={styles.carouselImgContainer} id="img-5">
            <Image
              src={"https://source.unsplash.com/ojZ4wJNUM5w"}
              width={4}
              height={3}
              layout="responsive"
              className={styles.carouselImg}
              alt="clothing, dress, fashion"
            />
            Img5
          </div>
          <div className={styles.carouselImgContainer} id="img-6">
            <Image
              src={"https://source.unsplash.com/Nv4QHkTVEaI"}
              width={4}
              height={3}
              layout="responsive"
              className={styles.carouselImg}
              alt="clothing, dress, fashion"
            />
            Img6
          </div>
          <div className={styles.carouselImgContainer} id="img-7">
            <Image
              src={"https://source.unsplash.com/OYYE4g-I5ZQ"}
              width={4}
              height={3}
              layout="responsive"
              className={styles.carouselImg}
              alt="clothing, dress, fashion"
            />
            Img7
          </div>
          <div className={styles.carouselImgContainer} id="img-8">
            <Image
              src={"https://source.unsplash.com/tvG4WvjgsEY"}
              width={4}
              height={3}
              layout="responsive"
              className={styles.carouselImg}
              alt="clothing, dress, fashion"
            />
            Img8
          </div>
          <div className={styles.carouselImgContainer} id="img-9">
            <Image
              src={"https://source.unsplash.com/quddu_dZKkQ"}
              width={4}
              height={3}
              layout="responsive"
              className={styles.carouselImg}
              alt="clothing, dress, fashion"
            />
            Img9
          </div>
        </div>
        <div className={styles.buttons}>
          <MdOutlineArrowBackIos
            onClick={goToLeft}
            className={styles.leftBtn}
          />
          <MdOutlineArrowForwardIos
            onClick={goToRight}
            className={styles.rightBtn}
          />
        </div>
      </div>
    </section>
  );
}

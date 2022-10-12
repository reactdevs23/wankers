import React, { useState } from "react";
import styles from "./style.module.css";
import "./style.css";

const HeroSection = () => {
  const [value, setValue] = useState(null);

  const data = [
    {
      id: 1,
      img: "images/W.png",
      position: "Web2 Founders are",
      secondImage: "images/BlackW.png",
    },
    {
      id: 2,
      img: "images/A.png",
      position: "ETH Influencers are",
      secondImage: "images/BlackA.png",
    },
    {
      id: 3,
      img: "images/N.png",
      position: "Twitter SImps Are ",
      secondImage: "images/BlackN.png",
    },
    {
      id: 4,
      img: "images/K.png",
      position: "Buy High Sell Low",
      secondImage: "images/BlackK.png",
    },
    {
      id: 5,
      img: "images/E.png",
      position: "Boris Johnson is",
      secondImage: "images/BlackE.png",
    },
    {
      id: 6,
      img: "images/R.png",
      position: "ShiLLin ViLLian",
      secondImage: "images/BlackR.png",
    },
    {
      id: 7,
      img: "images/S.png",
      position: "Ser You are a Wanker ",
      secondImage: "images/BlackS.png",
    },
  ];

  return (
    <div className={styles.heroSection}>
      <h3 className={styles.title}>{value && data[value - 1].position}</h3>
      <div className={styles.images}>
        <div className={styles.DandE}>
          <img
            src="/images/D.png"
            alt="#"
            className={`${styles.dee} ${styles.deeImage}`}
          />{" "}
          <img
            src="/images/andE.png"
            alt="#"
            className={`${styles.andE} ${styles.deeImage}`}
          />
        </div>
        {data.map((el, i) => (
          <div key={i}>
            <div
              className={styles.imageContainer}
              onMouseEnter={() => setValue(el.id)}
              onMouseLeave={() => setValue(null)}
            >
              <img
                src={el.img}
                alt="#"
                className={`${styles.image} image${i + 1} `}
              />
              {value !== el.id && (
                <img
                  src={el.secondImage}
                  alt="#"
                  className={`${styles.blackImage}  ${styles.image} image${
                    i + 1
                  } `}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;

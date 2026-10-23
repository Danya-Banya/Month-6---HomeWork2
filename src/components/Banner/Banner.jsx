import s from "./Banner.module.scss";
import star1 from "../../assets/Vector (1).svg";
import star2 from "../../assets/Vector.svg";

export const Banner = () => {
  return (
    <main className={s.banner}>
      <div className={s.container}>
        <div className={s.banner__item}>
          <div className={s.banner__itemContent}>
            <h1 className={s.banner__title}>
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className={s.banner__description}>
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <button className={s.banner__button}>Shop Now</button>
            <div className={s.banner__infoContainer}>
              <div className={s.banner__info}>
                <h3 className={s.banner__infoTitle}>200+</h3>
                <p className={s.banner__infoDescription}>
                  International Brands
                </p>
              </div>
              <hr />
              <div className={s.banner__info}>
                <h3 className={s.banner__infoTitle}>2,000+</h3>
                <p className={s.banner__infoDescription}>
                  High-Quality Products
                </p>
              </div>
              <hr />
              <div className={s.banner__info}>
                <h3 className={s.banner__infoTitle}>30,000+</h3>
                <p className={s.banner__infoDescription}>Happy Customers</p>
              </div>
            </div>
          </div>
          <div className={s.banner__img}>
            <img src={star1} className={s.banner__imgStar1} alt="star1" />
            <img src={star2} className={s.banner__imgStar2} alt="star2" />
          </div>
        </div>
      </div>
    </main>
  );
};

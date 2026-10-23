import s from "./Header.module.scss";
import cart from "../../assets/cart.svg";
import profile from "../../assets/profile.svg";
import arrowDown from "../../assets/arrow_down.svg";
import magnifyingGlass from "../../assets/magnifying_glass.svg";
export const Header = () => {
  return (
    <>
      <header className={s.header}>
        <div className={s.container}>
          <div className={s.wrapper}>
            <h2 className={s.title}>SHOP.CO</h2>
            <nav className={s.nav}>
              <ul className={s.list}>
                <li className={s.item}>
                  <img src={arrowDown} alt="" />
                  Shop
                </li>
                <li className={s.item}>On sale</li>
                <li className={s.item}>New Arrivals</li>
                <li className={s.item}>Brands</li>
              </ul>
            </nav>
            <div className={s.headerInputBlock}>
              <img src={magnifyingGlass} alt="" />
              <input
                type="text"
                className={s.headerInput}
                name="product input"
                id="product_input"
                placeholder="Search for products..."
              />
            </div>
            <div className={s.headerButtons}>
              <img src={cart} alt="" />
              <img src={profile} alt="" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

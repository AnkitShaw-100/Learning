import styles from "../src/App.module.css";
const App = () => {
  return (
    <div>
      <div className={styles.navbar}>
        <img
          className={styles.Nike_image}
          src="/images/brand_logo.png"
          alt="Brand logo"
        />

        <div className={styles.heading_text}>
          <h2>Menu</h2>
          <h2>Location</h2>
          <h2>About</h2>
          <h2>Contact</h2>
        </div>

        <button className={styles.login_button}>Login</button>
      </div>

      <div className={styles.main_content}>
        
        <div className={styles.left}>
          <div className={styles.left_side_content}>
            <p className={styles.left_upper_text}>YOUR FEET</p>
            <br />
            <p className={styles.left_upper_text}>DESERVE</p>
            <br />
            <p className={styles.left_upper_text}>THE BEST</p>
            <br />

            <p className={styles.left_middle_text}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quia iusto eaque neque officiis corrupti rerum nesciunt voluptate,
              illum assumenda voluptates cupiditate? Inventore esse ad tempore
              totam reiciendis a quasi repellendus, natus libero! Culpa amet
              magnam perspiciatis sapiente porro deleniti.
            </p>
            <br />

            <button className={styles.shopnow_button}>Shop Now</button>
            <button className={styles.category_button}>Category</button>
            <br />

            <p className={styles.left_bottom_text}>Also Available on : </p>
            <br />
            <img
              className={styles.flipkart_logo}
              src="/images/flipkart.png"
              alt="Flipkart logo"
            />
            <img
              className={styles.amazon_logo}
              src="/images/amazon.png"
              alt="Amazon logo"
            />
          </div>
        </div>

        <div className="right">
            <img
                className={styles.shoe_image}
                src="/images/shoe_image.png"
                alt="Shoe image"
            />
        </div>
        {/* <img src="../public/images/shoe_image.png" alt="" /> */}
      
      </div>

    </div>
  );
};

export default App;

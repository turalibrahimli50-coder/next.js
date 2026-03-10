"use client";

import Link from "next/link";
import styles from "./page.module.css";

// ─── Types ────────────────────────────────────────────────────────────────────

interface CategoryItem {
  id: number;
  bg: string;
  bt: string;
  ar: string;
}

// ─── Static Data ──────────────────────────────────────────────────────────────

const categories: CategoryItem[] = [
  { id: 67, bg: "https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/fd_cat_06-min.jpg",  bt: "beverages",  ar: "5 Articles" },
  { id: 68, bg: "https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/fd_cat_03-min.jpg",  bt: "breakfast",  ar: "5 Articles" },
  { id: 69, bg: "https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/fd_cat_04-min.jpg",  bt: "vegetables", ar: "4 Articles" },
  { id: 70, bg: "https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/fd_cat_05-min.jpg",  bt: "bakery",     ar: "3 Articles" },
  { id: 71, bg: "https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/fd_cat_001-min.jpg", bt: "dessert",    ar: "3 Articles" },
  { id: 72, bg: "https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/fd_cat_02-min.jpg",  bt: "pizza",      ar: "3 Articles" },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function Blackdivinthemiddle() {
  return (
    <div className={styles["black-div-in-the-middle"]}>
      <div className="container">
        <div className="d-flex flex-column justify-content-center align-items-center" style={{ gap: 30 }}>

          {/* ── Section Header ──────────────────────────────────────────── */}
          <div className={`${styles["header-part-of-black-div-in-the-middle"]} d-flex justify-content-center align-items-center`}>
            <div className={`${styles["h2-of-header-part-of-black-div-in-the-middle"]} d-flex flex-column justify-content-center align-items-start`}>
              <h2 style={{ color: "white" }}>Explore Categories</h2>
            </div>

            <div className={`${styles["lines-of-header-part-of-black-div-in-the-middle"]} d-flex justify-content-center align-items-center`}>
              <div className={styles["small-blue-romb"]} />
              <div className={styles["side-divider-black"]} />
              <div className={styles["small-blue-romb"]} />
            </div>

            <Link href="/categories" style={{ textDecoration: "none" }}>
              <div className={`${styles["writings-of-header-part-of-black-div-in-the-middle"]} d-flex justify-content-center align-items-center`}>
                <span className={`${styles["writing-of-header-part-of-black-div-in-the-middle"]} text-uppercase`}>
                  view all
                </span>
                <i className={`${styles["writing-of-header-part-of-black-div-in-the-middle"]} fa-solid fa-arrow-right`} />
              </div>
            </Link>
          </div>

          {/* ── Categories Grid ─────────────────────────────────────────── */}
          <div className={`${styles["body-part-of-black-div-in-the-middle"]} d-flex justify-content-center align-items-center`}>
            <div className="row g-3">
              {categories.map((item) => (
                <div className="col-6 col-md-4 col-lg-2" key={item.id}>
                  <Link href={`/${item.bt}`} style={{ textDecoration: "none" }}>
                    <div className={`${styles["transparent-div-of-black-div-in-the-middle"]} d-flex flex-column justify-content-center align-items-center`}>

                      <div className={styles["top-of-transparent-div-of-black-div-in-the-middle"]}>
                        <img
                          src={item.bg}
                          alt={item.bt}
                          className={styles["img-of-transparent-div-of-black-div-in-the-middle"]}
                        />
                      </div>

                      <div className={`${styles["body-of-transparent-div-of-black-div-in-the-middle"]} d-flex flex-column justify-content-center align-items-start`}>
                        <h6 className={`${styles["h6-of-body-of-transparent-div-of-black-div-in-the-middle"]} text-uppercase text-white`}>
                          {item.bt}
                        </h6>
                        <span className={styles["span-of-body-of-transparent-div-of-black-div-in-the-middle"]}>
                          {item.ar}
                        </span>
                      </div>

                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
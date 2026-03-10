"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./page.module.css";

// ─── Types ────────────────────────────────────────────────────────────────────

interface HeroItem {
  id: number;
  bg: string;
  bt: string;
  mt: string;
  bc: string;
}

interface CardItem {
  id: number;
  bg: string;
  bt: string;
  mt: string;
  bc: string;
  author: string;
}

// ─── Static Data ──────────────────────────────────────────────────────────────

const heroItems: HeroItem[] = [
  { id: 62, bg: "https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/post_45-min-1024x508.jpg", bt: "dessert", mt: "The best street foods around the world you must try ...", bc: "#5e2bff" },
  { id: 63, bg: "https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/post_28-min-1024x508.jpg", bt: "food",    mt: "Learn how to create a vibrant vegetable stir fry",        bc: "#00b5ed" },
];

const smallCards: CardItem[] = [
  { id: 64, bg: "https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/post_22-min-768x381.jpg",  bt: "beverages",  mt: "A flavorful chicken curry that balances tender",   bc: "#348aa7", author: "matt rosnor" },
  { id: 65, bg: "https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/post_28-min-1024x508.jpg", bt: "food",       mt: "Learn how to create a vibrant vegetable stir fry", bc: "#00b5ed", author: "matt rosnor" },
  { id: 66, bg: "https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/post_30-min-1024x508.jpg", bt: "vegetables", mt: "Discover a fresh herb roasted vegetable tray",     bc: "#54bd05", author: "matt rosnor" },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function Blackbigdiv() {
  const [viewCounts, setViewCounts] = useState<Record<number, number>>({});

  // ── Fetch all view counts on mount ─────────────────────────────────────────
  useEffect(() => {
    const uniqueIds = [...new Set([...heroItems.map((d) => d.id), ...smallCards.map((c) => c.id)])];

    const fetchViews = async () => {
      const results = await Promise.all(
        uniqueIds.map((id) => fetch(`/api/views/${id}`).then((res) => res.json()))
      );
      const counts: Record<number, number> = {};
      results.forEach((data, i) => {
        counts[uniqueIds[i]] = data.views;
      });
      setViewCounts(counts);
    };

    fetchViews();
  }, []);

  // ── Optimistic view count update ───────────────────────────────────────────
  const handleViewClick = async (id: number) => {
    const res  = await fetch(`/api/views/${id}`, { method: "POST" });
    const data = await res.json();
    setViewCounts((prev) => ({ ...prev, [id]: data.views }));
  };

  return (
    <div className={`${styles["black-big-div-in-the-center"]} d-flex flex-column justify-content-center align-items-start`}>
      <div className="container">

        {/* ── Section Header ──────────────────────────────────────────── */}
        <div className={`${styles["header-part-of-black-div-in-the-middle"]} d-flex justify-content-center align-items-center`}>
          <div className={`${styles["h2-of-header-part-of-black-div-in-the-middle"]} d-flex flex-column justify-content-center align-items-start`}>
            <h2 style={{ color: "white" }}>Recipes Video</h2>
          </div>

          <div className={`${styles["lines-of-header-part-of-black-div-in-the-middle"]} d-flex justify-content-center align-items-center`}>
            <div className={styles["small-blue-romb"]} />
            <div className={styles["side-divider-black"]} />
            <div className={styles["small-blue-romb"]} />
          </div>

          <Link href="/videos" style={{ textDecoration: "none" }}>
            <div className={`${styles["writings-of-header-part-of-black-div-in-the-middle"]} d-flex justify-content-center align-items-center`}>
              <span className={`${styles["writing-of-header-part-of-black-div-in-the-middle"]} text-uppercase`}>
                view all
              </span>
              <i className={`${styles["writing-of-header-part-of-black-div-in-the-middle"]} fa-solid fa-arrow-right`} />
            </div>
          </Link>
        </div>

        {/* ── Content ─────────────────────────────────────────────────── */}
        <div className={`${styles["secod-part-of-black-big-div-in-the-centre"]} d-flex flex-column justify-content-center align-items-start`}>
          <div className="row g-4 pt-4">

            {/* Hero cards */}
            {heroItems.map((item, index) => (
              <div className={index === 0 ? "col-xl-4 col-12" : "col-xl-8 col-12"} key={item.id}>
                <Link
                  href={`/${item.bt}`}
                  onClick={() => handleViewClick(item.id)}
                  style={{ textDecoration: "none" }}
                >
                  <div
                    className={styles["slide-img"]}
                    style={{
                      backgroundImage: `url(${item.bg})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      borderRadius: 10,
                      position: "relative",
                      color: "white",
                    }}
                  >
                    <div style={{ position: "absolute", bottom: 0, left: 0, padding: "0 30px 30px 35px" }}>
                      <button
                        className={styles["first-oval-button-blue"]}
                        style={{ textTransform: "uppercase", marginBottom: 10, backgroundColor: item.bc }}
                      >
                        {item.bt}
                      </button>
                      <h4 className={`${styles["white-text-of-every-swiper"]} text-white`}>{item.mt}</h4>
                      <ul
                        className="d-flex align-items-center list-unstyled flex-wrap mb-0"
                        style={{ gap: 8, fontSize: 14, color: "white", fontWeight: 400 }}
                      >
                        <li className="text-capitalize">by matt rosnor</li>
                        <li>
                          <i className="fa-regular fa-eye me-1" />
                          {viewCounts[item.id] ?? 0} <span>View</span>
                        </li>
                        <li className={styles["hidden-li1"]}>
                          <i className="fa-regular fa-calendar me-1" />
                          <span>Nov 4, 2025</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Link>
              </div>
            ))}

            {/* Small cards */}
            {smallCards.map((item) => (
              <div className="col-xl-4 col-12" key={item.id}>
                <Link
                  href={`/${item.bt}`}
                  onClick={() => handleViewClick(item.id)}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div className={styles["black-small-div-of-big-black-div"]}>
                    <div className={styles["left-side-gray-small-div-of-second"]}>
                      <img
                        src={item.bg}
                        alt={item.bt}
                        className={styles["img-of-gray-small-div-of-second"]}
                      />
                    </div>
                    <div className={styles["right-side-gray-small-div-of-second"]}>
                      <button
                        className={styles["blue-button-right-side-gray-small-div-of-second"]}
                        style={{ backgroundColor: item.bc }}
                      >
                        {item.bt}
                      </button>
                      <h6 className="text-uppercase text-white mt-1">{item.mt}</h6>
                      <ul
                        className="d-flex justify-content-between align-items-center list-unstyled flex-wrap mb-0"
                        style={{ gap: 8, fontSize: 14, color: "#D1D1D2", fontWeight: 400 }}
                      >
                        <li className="text-capitalize">by {item.author}</li>
                        <li>
                          <i className="fa-regular fa-eye me-1" />
                          {viewCounts[item.id] ?? 0} <span>View</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Link>
              </div>
            ))}

          </div>
        </div>

      </div>
    </div>
  );
}
"use client";

import { useState, useEffect } from "react";
import styles from "./page.module.css";
import Link from "next/link";

type Card = {
  id: number;
  bg: string;
  bt: string;
  mt: string;
  bc: string;
  author: string;
};

export default function Latestmainsectionwhite() {

  const [checked, setChecked] = useState<boolean>(false);
  const [viewCounts, setViewCounts] = useState<Record<number, number>>({});

  const cards: Card[] = [
    { id:73, bg:"https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/post_22-min-768x381.jpg", bt:"beverages", mt:"A flavorful chicken curry that balances tender", bc:"#348aa7", author:"matt rosnor" },
    { id:74, bg:"https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/post_28-min-1024x508.jpg", bt:"food", mt:"Learn how to create a vibrant vegetable stir fry", bc:"#00b5ed", author:"matt rosnor" },
    { id:75, bg:"https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/post_30-min-1024x508.jpg", bt:"vegetables", mt:"Discover a fresh herb roasted vegetable tray", bc:"#54bd05", author:"matt rosnor" },
    { id:76, bg:"https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/10/post_33-min-1024x508.jpg", bt:"bakery", mt:"Discover a simple creamy pasta dish", bc:"#ff3a3a", author:"matt rosnor" },
    { id:77, bg:"https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/post_45-min-1024x508.jpg", bt:"dessert", mt:"The best street foods around the world", bc:"#5e2bff", author:"matt rosnor" },
    { id:78, bg:"https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/post_31-min.jpg", bt:"pizza", mt:"Make a sweet and soft cinnamon roll breakfast", bc:"#f69c00", author:"matt rosnor" },
  ];

  useEffect(() => {
    const fetchViews = async () => {
      try {
        const results = await Promise.all(
          cards.map((card) =>
            fetch(`/api/views/${card.id}`).then((res) => res.json())
          )
        );

        const counts: Record<number, number> = {};

        results.forEach((data, index) => {
          counts[cards[index].id] = data.views;
        });

        setViewCounts(counts);
      } catch (error) {
        console.error("View fetch error:", error);
      }
    };

    fetchViews();
  }, []);

  const handleViewClick = async (id: number) => {
    try {
      const res = await fetch(`/api/views/${id}`, { method: "POST" });
      const data = await res.json();

      setViewCounts((prev) => ({
        ...prev,
        [id]: data.views,
      }));
    } catch (error) {
      console.error("View update error:", error);
    }
  };

  return (
    <>
      <div className={`${styles["second-part-main-white-section"]} d-flex flex-column justify-content-center align-items-center`}>
        <div className="container">

          <div style={{ display: "flex", gap: "20px", flexDirection: "column", paddingBottom: "80px" }}>

            {/* HEADER */}

            <div
              className={styles["head-part-of-second-part-main-white-section"]}
              style={{ paddingTop: "60px", paddingBottom: "20px" }}
            >

              <div style={{ display: "flex", alignItems: "center", gap: "16px", width: "100%" }}>

                <div className={`${styles["small-blue-romb"]} d-none d-md-block`}></div>
                <div className={`${styles["side-divider"]} d-none d-md-block`}></div>

                <h2
                  className="text-uppercase"
                  style={{
                    whiteSpace: "nowrap",
                    margin: "0",
                    fontWeight: "700",
                    color: "#121213",
                  }}
                >
                  Top Recipes Collections
                </h2>

                <div className={`${styles["side-divider"]} d-none d-md-block`}></div>
                <div className={`${styles["small-blue-romb"]} d-none d-md-block`}></div>

              </div>

            </div>

            {/* BODY */}

            <div className={styles["body-part-of-second-part-main-white-section"]}>

              <div className="row g-3">

                {cards.map((item) => (

                  <div className="col-xl-4 col-md-6 col-12" key={item.id}>

                    <Link
                      href={`/${item.bt}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                      onClick={() => handleViewClick(item.id)}
                    >

                      <div className={styles["gray-small-div-of-second"]}>

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

                          <h6 className="text-uppercase">{item.mt}</h6>

                          <ul
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              listStyleType: "none",
                              gap: "8px",
                              paddingLeft: "0px",
                              marginLeft: "0px",
                              fontSize: "14px",
                              color: "#69747C",
                              fontWeight: "400",
                              flexWrap: "wrap",
                            }}
                          >

                            <li style={{ textTransform: "capitalize" }}>
                              by {item.author}
                            </li>

                            <li>
                              <i className="fa-regular fa-eye"></i>{" "}
                              {viewCounts[item.id] || 0}
                              <span> View</span>
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
      </div>
    </>
  );
}
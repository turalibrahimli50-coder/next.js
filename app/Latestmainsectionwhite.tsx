"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./page.module.css";
import Link from "next/link";
type Card = { id: number; bg: string; bt: string; mt: string; bc: string; author: string };
const cards: Card[] = [
  { id: 73, bg: "https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/post_22-min-768x381.jpg",  bt: "beverages",  mt: "A flavorful chicken curry that balances tender",   bc: "#348aa7", author: "matt rosnor" },
  { id: 74, bg: "https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/post_28-min-1024x508.jpg", bt: "food",       mt: "Learn how to create a vibrant vegetable stir fry", bc: "#00b5ed", author: "matt rosnor" },
  { id: 75, bg: "https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/post_30-min-1024x508.jpg", bt: "vegetables", mt: "Discover a fresh herb roasted vegetable tray",     bc: "#54bd05", author: "matt rosnor" },
  { id: 76, bg: "https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/10/post_33-min-1024x508.jpg", bt: "bakery",     mt: "Discover a simple creamy pasta dish",             bc: "#ff3a3a", author: "matt rosnor" },
  { id: 77, bg: "https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/post_45-min-1024x508.jpg", bt: "dessert",    mt: "The best street foods around the world",          bc: "#5e2bff", author: "matt rosnor" },
  { id: 78, bg: "https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/post_31-min.jpg",          bt: "pizza",      mt: "Make a sweet and soft cinnamon roll breakfast",   bc: "#f69c00", author: "matt rosnor" },
];
export default function Latestmainsectionwhite() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [viewCounts, setViewCounts] = useState<Record<number, number>>({});
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const fetchViews = async () => {
          try {
            const results = await Promise.all(cards.map((c) => fetch(`/api/views/${c.id}`).then((r) => r.json())));
            const counts: Record<number, number> = {};
            results.forEach((data, i) => { counts[cards[i].id] = data.views; });
            setViewCounts(counts);
          } catch (error) { console.error("View fetch error:", error); }
        };
        fetchViews();
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);
  const handleViewClick = async (id: number) => {
    try {
      const res  = await fetch(`/api/views/${id}`, { method: "POST" });
      const data = await res.json();
      setViewCounts((prev) => ({ ...prev, [id]: data.views }));
    } catch (error) { console.error("View update error:", error); }
  };
  return (
    <div ref={sectionRef} className={`${styles["featured-section__cards-wrap"]} d-flex flex-column justify-content-center align-items-center`}>
      <div className="container">
        <div style={{ display: "flex", gap: "20px", flexDirection: "column", paddingBottom: "80px" }}>
          <div className={styles["featured-section__heading"]} style={{ paddingTop: "60px", paddingBottom: "20px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", width: "100%" }}>
              <div className={`${styles["divider__diamond"]} d-none d-md-block`} />
              <div className={`${styles["divider__line"]} d-none d-md-block`} />
              <h2 className="text-uppercase" style={{ whiteSpace: "nowrap", margin: "0", fontWeight: "700", color: "#121213" }}>
                Top Recipes Collections
              </h2>
              <div className={`${styles["divider__line"]} d-none d-md-block`} />
              <div className={`${styles["divider__diamond"]} d-none d-md-block`} />
            </div>
          </div>
          <div className={styles["featured-section__grid"]}>
            <div className="row g-3">
              {cards.map((item) => (
                <div className="col-xl-4 col-md-6 col-12" key={item.id}>
                  <Link href={`/${item.bt}`} style={{ textDecoration: "none", color: "inherit" }} onClick={() => handleViewClick(item.id)}>
                    <div className={styles["post-card"]}>
                      <div className={styles["post-card__img-col"]}>
                        <img src={item.bg} alt={item.bt} loading="lazy" className={styles["post-card__img"]} />
                      </div>
                      <div className={styles["post-card__body"]}>
                        <button className={styles["badge-pill"]} style={{ backgroundColor: item.bc }}>{item.bt}</button>
                        <h6 className="text-uppercase">{item.mt}</h6>
                        <ul style={{ display: "flex", justifyContent: "space-between", alignItems: "center", listStyleType: "none", gap: "8px", paddingLeft: "0px", marginLeft: "0px", fontSize: "14px", color: "#69747C", fontWeight: "400", flexWrap: "wrap" }}>
                          <li style={{ textTransform: "capitalize" }}>by {item.author}</li>
                          <li><i className="fa-regular fa-eye" /> {viewCounts[item.id] || 0}<span> View</span></li>
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
  );
}
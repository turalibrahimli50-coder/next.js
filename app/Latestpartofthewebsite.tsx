"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./page.module.css";
import Link from "next/link";
type Tag      = { id: number; bt: string };
type Icon     = { id: number; ic: string };
type Category = { id: number; li: string };
type Post     = { id: number; bg: string; bt: string; mt: string; bc: string; author: string };
const graydivs2: Tag[] = [
  { id: 94,  bt: "beauty"     }, { id: 95,  bt: "branding"   }, { id: 96,  bt: "business"   }, { id: 97,  bt: "food"       },
  { id: 98,  bt: "gaming"     }, { id: 99,  bt: "makeup"     }, { id: 100, bt: "marketing"  }, { id: 101, bt: "politics"   },
  { id: 102, bt: "printing"   }, { id: 103, bt: "social"     }, { id: 104, bt: "sports"     }, { id: 121, bt: "technology" },
  { id: 105, bt: "travel"     }, { id: 106, bt: "trip"       },
];
const grayicons: Icon[] = [
  { id: 79, ic: "fa-brands fa-facebook-f"  }, { id: 80, ic: "fa-brands fa-instagram"   },
  { id: 81, ic: "fa-brands fa-linkedin-in" }, { id: 82, ic: "fa-brands fa-x-twitter"  },
];
const graysmalllis: Category[] = [
  { id: 83, li: "dessert" }, { id: 84, li: "bakery" },     { id: 85, li: "beverages" }, { id: 86, li: "dinner" },
  { id: 87, li: "pizza"   }, { id: 88, li: "food"   },     { id: 89, li: "brekfast"  }, { id: 90, li: "vegetables" },
];
const blacklittlecards2: Post[] = [
  { id: 91, bg: "https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/post_22-min-768x381.jpg",  bt: "beverages",  mt: "A flavorful chicken curry...",     bc: "#348aa7", author: "matt rosnor" },
  { id: 92, bg: "https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/post_28-min-1024x508.jpg", bt: "food",       mt: "Learn how to create a vibrant...", bc: "#00b5ed", author: "matt rosnor" },
  { id: 93, bg: "https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/post_30-min-1024x508.jpg", bt: "vegetables", mt: "Discover a fresh herb...",         bc: "#54bd05", author: "matt rosnor" },
];
export default function Latestpartofthewebsite() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [viewCounts, setViewCounts] = useState<Record<number, number>>({});
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const uniqueIds = [...new Set(blacklittlecards2.map((c) => c.id))];
        const fetchViews = async () => {
          const results = await Promise.all(uniqueIds.map((id) => fetch(`/api/views/${id}`).then((r) => r.json())));
          const counts: Record<number, number> = {};
          results.forEach((data, i) => { counts[uniqueIds[i]] = data.views; });
          setViewCounts(counts);
        };
        fetchViews();
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleViewClick = async (id: number) => {
    const res  = await fetch(`/api/views/${id}`, { method: "POST" });
    const data = await res.json();
    setViewCounts((prev) => ({ ...prev, [id]: data.views }));
  };
  return (
    <div ref={sectionRef} className={`${styles["latest-section"]} d-flex justify-content-center align-items-center`}>
      <div className="container">
        <div className="row g-3">
          <div className="col-12 col-md-6 col-xl-3">
            <Link href="/Nerio" className="d-flex flex-column justify-content-start align-items-start" style={{ gap: "20px", textDecoration: "none", color: "inherit" }}>
              <div className={`${styles["latest-section__logo-col"]} d-flex justify-content-start align-items-start`}>
                <img src="https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2026/02/logo.png" alt="Nerio" loading="lazy" className={styles["latest-section__logo"]} />
              </div>
              <span className={styles["latest-section__desc"]}>
                We love to bring to life as a developer and I aim the today do this using music whatever front end tools necessary.
              </span>
              <div className={`${styles["latest-section__social-icons"]} d-flex justify-content-center align-items-center`}>
                {grayicons.map((item) => (
                  <div key={item.id} className={`${styles["latest-section__social-icon"]} d-flex justify-content-center align-items-center`}>
                    <i className={item.ic} />
                  </div>
                ))}
              </div>
              <div className={`${styles["latest-section__app-btns"]} d-flex justify-content-end align-items-start`}>
                <img src="https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2026/02/spp_01.png" alt="Google Play" loading="lazy" className={styles["latest-section__app-btn"]} />
                <img src="https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2026/02/spp_02.png" alt="App Store"   loading="lazy" className={styles["latest-section__app-btn"]} />
              </div>
            </Link>
          </div>
          <div className="col-12 col-md-6 col-xl-2">
            <div className={`${styles["latest-section__col"]} d-flex flex-column justify-content-start align-items-start`}>
              <h5 style={{ color: "white" }}>Top Categories</h5>
              <div className={styles["latest-section__col-line"]} />
              <ul className={styles["latest-section__list"]}>
                {graysmalllis.map((item) => (
                  <li key={item.id} className={styles["latest-section__list-item"]}>
                    <Link href={`/${item.li}`} style={{ textDecoration: "none", color: "inherit" }}>{item.li}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div className={`${styles["latest-section__col"]} d-flex flex-column justify-content-start align-items-start`}>
              <h5 style={{ color: "white" }}>Recent Posts</h5>
              <div className={styles["latest-section__col-line"]} />
              <div className="d-flex flex-column justify-content-start align-items-start">
                {blacklittlecards2.map((item) => (
                  <div style={{ width: "100%" }} key={item.id}>
                    <Link href={`/${item.bt}`} style={{ textDecoration: "none", color: "inherit" }} onClick={() => handleViewClick(item.id)}>
                      <div className={styles["recipe-row-card"]}>
                        <div className={styles["post-card__img-col"]}>
                          <img src={item.bg} alt={item.bt} loading="lazy" className={styles["post-card__img"]} style={{ height: "141.89px" }} />
                        </div>
                        <div className={styles["post-card__body"]}>
                          <button className={styles["badge-pill"]} style={{ backgroundColor: item.bc }}>{item.bt}</button>
                          <h6 className="text-uppercase" style={{ color: "white" }}>{item.mt}</h6>
                          <ul style={{ display: "flex", justifyContent: "space-between", alignItems: "center", listStyleType: "none", gap: "8px", paddingLeft: "0px", marginLeft: "0px", fontSize: "14px", color: "#D1D1D2", fontWeight: "400", flexWrap: "wrap" }}>
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
          <div className="col-12 col-md-6 col-xl-3">
            <div className={`${styles["latest-section__col"]} d-flex flex-column justify-content-start align-items-start`}>
              <h5 style={{ color: "white" }}>Tags</h5>
              <div className={styles["latest-section__col-line"]} />
              <div className={`${styles["sidebar__widget--dark"]} d-flex flex-column justify-content-center align-items-start flex-wrap`}>
                <div className={`${styles["tag-list"]} d-flex justify-content-start align-items-start`}>
                  {graydivs2.map((item) => (
                    <Link key={item.id} href={`/${item.bt}`} style={{ textDecoration: "none", color: "inherit" }}>
                      <div className={`${styles["tag-btn--dark"]} d-flex justify-content-center align-items-center`}>{item.bt}</div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
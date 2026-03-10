"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./beverages.module.css";
import pageStyles from "../page.module.css";
import "swiper/css";
import "swiper/css/navigation";

// ─── Types ───────────────────────────────────────────────────────────────────

type MetaItem =
  | { type: "img"; src: string; alt: string; text: string; href: string }
  | { type: "icon"; iconClass: string; text: string; href: string };

interface TagItem   { id: number; label: string }
interface IconItem  { id: number; ic: string }
interface SidebarItem { id: number; bc: string; ic: string }

// ─── Data ─────────────────────────────────────────────────────────────────────

const metaItems: MetaItem[] = [
  {
    type: "img",
    src: "https://img.freepik.com/premium-psd/3d-rendering-hair-style-avatar-design_23-2151869171.jpg?semt=ais_wordcount_boost&w=740&q=80",
    alt: "Matt Rosnor",
    text: "matt rosnor",
    href: "/author/matt-rosnor",
  },
  { type: "icon", iconClass: "fa-regular fa-calendar",     text: "november 4, 2025", href: "/date/november-2025" },
  { type: "icon", iconClass: "fa-regular fa-file-lines",   text: "beverages",        href: "/category/beverages" },
  { type: "icon", iconClass: "fa-regular fa-comment-dots", text: "no comments",      href: "/comments" },
];

const tags: TagItem[] = [
  { id: 107, label: "recent" },
  { id: 108, label: "popular" },
  { id: 109, label: "trendy" },
];

const shareIcons: IconItem[] = [
  { id: 110, ic: "fa-brands fa-facebook" },
  { id: 111, ic: "fa-brands fa-twitter" },
  { id: 112, ic: "fa-brands fa-pinterest" },
  { id: 113, ic: "fa-brands fa-linkedin" },
];

const socialIcons: IconItem[] = [
  { id: 114, ic: "fa-brands fa-facebook-f" },
  { id: 115, ic: "fa-brands fa-x-twitter" },
  { id: 116, ic: "fa-brands fa-instagram" },
  { id: 117, ic: "fa-brands fa-linkedin-in" },
];

const sidebarItems: SidebarItem[] = [
  { id: 118, bc: "#0073FF",  ic: "fa-regular fa-copy" },
  { id: 119, bc: "#000000",  ic: "fa-solid fa-cart-shopping" },
  { id: 120, bc: "#132F97",  ic: "fa-solid fa-life-ring" },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function Mainwhiteofbeverages() {
  const [name,    setName]    = useState("");
  const [email,   setEmail]   = useState("");
  const [comment, setComment] = useState("");
  const [errors,  setErrors]  = useState<string[]>([]);
  const [checked, setChecked] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const handleSubmit = () => {
    const newErrors: string[] = [];
    if (!name)    newErrors.push("Full Name is required");
    if (!email)   newErrors.push("Email is required");
    if (!comment) newErrors.push("Comment is required");
    if (!checked) newErrors.push("Please agree to save your info");

    setErrors(newErrors);
    if (newErrors.length === 0) alert("Comment posted!");
  };

  return (
    <>
      <div className="container">
        <div className="d-flex flex-column align-items-center">

          {/* ── Post Header ───────────────────────────────────────────── */}
          <div className={styles["post__header"]}>
            <Link href="/recipiesiof-food" style={{ textDecoration: "none", color: "inherit" }}>
              <button className={styles["post__cat-btn"]} style={{ backgroundColor: "#0073FF" }}>
                Beverages
              </button>
            </Link>

            <h1>A flavorful chicken curry that balances tender meat with spices</h1>

            <div className={`${pageStyles["lines-of-header-part-of-black-div-in-the-middle2"]} d-flex align-items-center`}>
              <div className={pageStyles["small-blue-romb"]} />
              <div className={pageStyles["side-divider-black2"]} />
              <div className={pageStyles["small-blue-romb"]} />
            </div>

            {/* Meta row */}
            <div className={`${styles["meta"]} d-flex flex-wrap`}>
              {metaItems.map((item, i) => (
                <Link key={i} href={item.href} style={{ textDecoration: "none", color: "inherit" }}>
                  <div className={`${styles["meta__item"]} d-flex align-items-center`}>
                    {item.type === "img" ? (
                      <img src={item.src} alt={item.alt} className={styles["meta__avatar"]} />
                    ) : (
                      <i className={`${styles["meta__icon"]} ${item.iconClass}`} />
                    )}
                    <span className={styles["meta__link"]}>{item.text}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* ── Hero Image ────────────────────────────────────────────── */}
          <img
            src="https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/post_22-min.jpg"
            alt="Beverages hero"
            className={styles["post__hero"]}
          />

          {/* ── Post Body ─────────────────────────────────────────────── */}
          <div className={`${styles["post__content"]} d-flex flex-column align-items-start`}>

            <p className={styles["post__text"]}>
              A major development unfolded today as authorities confirmed significant progress in the
              ongoing investigation surrounding the recent incident. According to official sources,
              new evidence has emerged that may reshape the direction of the case.
            </p>
            <p className={styles["post__text"]}>
              Authorities have issued a new statement following rapid developments in the ongoing
              situation, confirming that key information has come to light.
            </p>

            <h3 className={styles["post__heading"]}>Overview of the new recipe in the current market</h3>
            <p className={styles["post__text"]}>
              Nerio News Magazine brings you trusted, timely and thought-provoking stories from
              around the globe. From breaking headlines to in-depth analysis, we deliver news that
              informs, inspires and empowers our readers.
            </p>

            <ul className={styles["post__list"]}>
              <li>Customized Strategy Solutions Tailored to Your Business Goals</li>
              <li>Comprehensive Startup and Enterprise Support Services</li>
              <li>Strategic Planning for Scalable Global Expansion</li>
            </ul>

            <p className={styles["post__text"]}>
              Early reports indicate that investigators have identified several crucial leads,
              prompting renewed efforts at the scene.
            </p>

            {/* Gallery – 2 col */}
            <div className="row w-100" style={{ marginTop: 14, marginBottom: 35 }}>
              <div className="col-6">
                <img
                  src="https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/food_001.jpg"
                  alt="food gallery 1"
                  className={styles["post__gallery-img"]}
                />
              </div>
              <div className="col-6">
                <img
                  src="https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/food_002.jpg"
                  alt="food gallery 2"
                  className={styles["post__gallery-img"]}
                />
              </div>
            </div>

            <h3 className={styles["post__heading"]}>Learn how to bake fluffy dinner rolls</h3>
            <p className={styles["post__text"]}>
              Eyewitnesses described a noticeable increase in security presence, suggesting
              preparations for further action. Community members have been closely monitoring
              updates, expressing both relief and concern as the story unfolds.
            </p>

            {/* Blockquote */}
            <div className={`${styles["blockquote"]} d-flex flex-column align-items-center text-center`}>
              <p style={{ marginTop: 20, fontSize: 18, fontWeight: 400 }}>
                Analysts observing the situation noted that the pace of developments suggests
                increasing urgency. They believe the forthcoming days will be critical.
              </p>
              <p className={styles["blockquote__author"]}>— Istiak Hossain</p>
            </div>

            <h3 className={styles["post__heading"]}>Discussion on early customer feedback</h3>
            <p className={styles["post__text"]}>
              Residents in the surrounding area reported heightened activity as police units and
              forensic teams worked throughout the day, sparking speculation about an impending
              breakthrough.
            </p>

            {/* Gallery – full width */}
            <div className="row w-100" style={{ marginTop: 14, marginBottom: 35 }}>
              <div className="col-12">
                <img
                  src="https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/10/fd_post_11-min.jpg"
                  alt="food gallery full"
                  className={styles["post__gallery-img"]}
                />
              </div>
            </div>

            <h3 className={styles["post__heading"]}>Final summary highlighting the long-term vision</h3>
            <p className={styles["post__text"]}>
              In a significant turn of events, authorities announced new developments today
              regarding the ongoing investigation that has captured widespread public attention.
            </p>
            <p className={styles["post__text"]}>
              Nerio News Magazine brings you trusted, timely and thought-provoking stories from
              around the globe. From breaking headlines to in-depth analysis, we deliver news that
              informs, inspires and empowers.
            </p>

            <ul className={styles["post__list"]}>
              <li>Authorities Signal Major Update as Case Advances</li>
              <li>Investigation Gains Momentum — Latest Evidence</li>
              <li>New Findings Intensify Public Interest in Probe</li>
            </ul>

            {/* Ad banner */}
            <img
              src="https://nerio.rstheme.com/newspaper/wp-content/uploads/sites/2/2025/10/ad-banner-thumb-01.png"
              alt="advertisement"
              className={styles["post__hero"]}
            />

            {/* ── Tags & Share ──────────────────────────────────────────── */}
            <div className={`${styles["tags"]} d-flex justify-content-between align-items-center flex-wrap`}>
              {/* Tags */}
              <div className={`${styles["tags__left"]} d-flex align-items-center`}>
                <h6 style={{ margin: 0 }}>Tags:</h6>
                <div className="d-flex flex-wrap" style={{ gap: 8 }}>
                  {tags.map((tag) => (
                    <Link key={tag.id} href={`/${tag.label}`} style={{ textDecoration: "none" }}>
                      <button className={styles["tags__btn"]}>{tag.label}</button>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Share */}
              <div className={`${styles["tags__left"]} d-flex align-items-center`}>
                <h6 style={{ margin: 0 }}>Share:</h6>
                <div className="d-flex align-items-center" style={{ gap: 12 }}>
                  {shareIcons.map((icon) => (
                    <Link key={icon.id} href="/share" style={{ textDecoration: "none" }}>
                      <i className={`${styles["share__icon"]} ${icon.ic}`} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Author Card ───────────────────────────────────────────── */}
            <div className={`${styles["author"]} w-100`}>
              <div className="row align-items-center">
                <div className="col-md-3">
                  <Link href="/author/matt-rosnor" style={{ textDecoration: "none" }}>
                    <img
                      src="https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/team-details-thumb-01-500x500.webp"
                      alt="Matt Rosnor"
                      className={styles["author__img"]}
                    />
                  </Link>
                </div>
                <div className="col-md-9">
                  <div className="d-flex flex-column align-items-start">
                    <Link href="/author/matt-rosnor" style={{ textDecoration: "none", color: "inherit" }}>
                      <h3 className={styles["post__heading"]}>Matt Rosnor</h3>
                    </Link>
                    <p className={styles["post__text"]}>
                      We love to bring designs to life as a developer and I aim to do this using
                      whatever front-end tools are necessary.
                    </p>
                    <div className="d-flex align-items-center" style={{ gap: 10 }}>
                      {socialIcons.map((icon, i) => (
                        <Link key={icon.id} href={`/social/${i}`} style={{ textDecoration: "none" }}>
                          <div className={`${styles["social__icon-blue"]} d-flex justify-content-center align-items-center`}>
                            <i className={icon.ic} />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Post Navigation ───────────────────────────────────────── */}
            <div className={`${styles["post-nav"]} w-100`}>
              <div className="row g-3">
                {/* Previous */}
                <div className="col-md-6">
                  <Link href="/previous-post" style={{ textDecoration: "none", color: "inherit" }}>
                    <div className="row align-items-center">
                      <div className="col-3">
                        <img
                          src="https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/post_45-min-500x500.jpg"
                          alt="Previous post"
                          className={styles["post-nav__img"]}
                        />
                      </div>
                      <div className="col-9 d-flex flex-column">
                        <span className={styles["post-nav__label"]}>Previous</span>
                        <span className={styles["post-nav__title"]}>
                          Make a sweet and soft cinnamon roll breakfast that you love
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Next */}
                <div className="col-md-6">
                  <Link href="/next-post" style={{ textDecoration: "none", color: "inherit" }}>
                    <div className="row align-items-center">
                      <div className="col-9 d-flex flex-column align-items-end text-end">
                        <span className={styles["post-nav__label"]}>Next</span>
                        <span className={styles["post-nav__title"]}>
                          Learn how to create a vibrant vegetable stir fry
                        </span>
                      </div>
                      <div className="col-3">
                        <img
                          src="https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/post_20-min-500x500.jpg"
                          alt="Next post"
                          className={styles["post-nav__img"]}
                        />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className={`${styles["comment"]} d-flex flex-column align-items-start`} style={{ gap: 25 }}>
              <h4>Leave a Comment</h4>
              <p className={styles["comment__subtitle"]}>Your email address will not be published.</p>

              <div className="row w-100">
                <div className="col-md-6">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={styles["comment__input"]}
                    placeholder="Full Name *"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={styles["comment__input"]}
                    placeholder="Email *"
                  />
                </div>
              </div>

              <input type="url" className={styles["comment__input"]} placeholder="Website" />

              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className={styles["comment__textarea"]}
                placeholder="Write Comment"
              />

              {/* Checkbox */}
              <div className="d-flex align-items-center" style={{ gap: 8 }}>
                <div
                  role="checkbox"
                  aria-checked={checked}
                  onClick={() => setChecked((prev) => !prev)}
                  style={{
                    minWidth: 15,
                    height: 15,
                    border: `1px solid ${checked ? "#0073FF" : "#616C74"}`,
                    borderRadius: 3,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: checked ? "#0073FF" : "transparent",
                    transition: "all 0.2s",
                  }}
                >
                  {checked && <i className="fa-solid fa-check" style={{ fontSize: 9, color: "white" }} />}
                </div>
                <span className={styles["comment__checkbox-text"]}>
                  Save my name, email, and website in this browser for the next time I comment.
                </span>
              </div>
              {errors.length > 0 && (
                <div style={{ color: "red", fontSize: 14, display: "flex", flexDirection: "column", gap: 4 }}>
                  {errors.map((err, i) => (
                    <span key={i}>⚠ {err}</span>
                  ))}
                </div>
              )}

              <button className={styles["comment__btn"]} onClick={handleSubmit}>
                Post Comment
              </button>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => setSidebarVisible((prev) => !prev)}
        style={{
          position: "fixed",
          right: 10,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 1000,
          width: 40,
          height: 40,
          backgroundColor: "white",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          border: "none",
          boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
        }}
        aria-label={sidebarVisible ? "Close sidebar" : "Open sidebar"}
      >
        <i
          className={sidebarVisible ? "fa-solid fa-xmark" : "fa-solid fa-plus"}
          style={{ color: "black", fontSize: 16 }}
        />
      </button>

      {sidebarVisible && (
        <ul
          className={styles["sidebar__list"]}
          style={{ position: "fixed", right: 10, top: "calc(50% + 45px)", zIndex: 999 }}
        >
          {sidebarItems.map((item) => (
            <li
              key={item.id}
              className={styles["sidebar__item"]}
              style={{ backgroundColor: item.bc }}
            >
              <Link
                href="/support"
                style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }}
              >
                <i className={item.ic} style={{ color: "white" }} />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
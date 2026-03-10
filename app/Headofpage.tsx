"use client";

import { useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import styles from "./page.module.css";
import "swiper/css";
import "swiper/css/navigation";

// ─── Types ────────────────────────────────────────────────────────────────────
interface NavItem {
  label: string;
  icon: string | null;
  href: string;
}

// ─── Static Data ──────────────────────────────────────────────────────────────
const navItems: NavItem[] = [
  { label: "Follow Us", icon: null, href: "/follow-us" },
  { label: "Home", icon: "fa-brands fa-facebook-f", href: "/" },
  { label: "Author", icon: "fa-brands fa-instagram", href: "/author" },
  { label: "Pages", icon: "fa-brands fa-linkedin-in", href: "/pages" },
  { label: "Contact", icon: "fa-brands fa-pinterest-p", href: "/contact" },
];

const categoryItems: string[] = [
  "Home", "Food", "Travel", "Health", "Technology",
  "Sport", "Music", "Nature", "Fashion", "Science",
];

const tickerMessages: string[] = [
  "Discover a fresh herb roasted vegetable tray that bursts natural",
  "The best street foods around the world you must try again",
  "A mellow mushroom soup with earthy notes and soft warm",
  "A warm and comforting homemade potato soup recipe",
];

const mainNavLinks = [
  { label: "Home", href: "/", active: true },
  { label: "Features", href: "/features" },
  { label: "Food", href: "/food" },
  { label: "Pages", href: "/pages" },
  { label: "Contact", href: "/contact" },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
const formatDate = (): string =>
  new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

// ─── Component ────────────────────────────────────────────────────────────────
export default function Headofpage() {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

  return (
    <>
      <div className={styles["head-part-of-head"]}>
        {/* ── Top Bar ───────────────────────────────────────────────────── */}
        <div className={styles["first-part-of-head"]}>
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              {/* Live ticker */}
              <div className="d-flex justify-content-start align-items-center">
                <div style={{ padding: "20px" }}>
                  <span className={styles.pulseDot}></span>
                </div>
                <span className={`${styles["red-writing-of-head"]} text-uppercase fs-6`}>
                  live news
                </span>
                <div className={styles.tickerContainer}>
                  <div className={styles.tickerText}>
                    {tickerMessages.map((msg, i) => (
                      <p key={i}>{msg}</p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Logo */}
              <div className="d-flex justify-content-center align-items-center">
                <Link href="/">
                  <img
                    src="https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/09/logo.png"
                    style={{ width: 90, height: "auto" }}
                    alt="Nerio"
                  />
                </Link>
              </div>

              {/* Date + Offcanvas nav */}
              <nav className="navbar navbar-expand-xl">
                <div className="container-fluid">
                  {/* Date badge */}
                  <Link className="navbar-brand d-flex align-items-center" href="#">
                    <button
                      className={styles["first-oval-button-blue"]}
                      style={{ backgroundColor: "#0073FF" }}
                    >
                      {formatDate()}
                    </button>
                  </Link>

                  {/* Hamburger */}
                  <button
                    className={`${styles["togler-part-of-navbar"]} navbar-toggler`}
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar"
                    onClick={() => setIsOffcanvasOpen(true)}
                  >
                    <span className="navbar-toggler-icon" />
                  </button>

                  {/* Offcanvas */}
                  <div
                    className="offcanvas offcanvas-end"
                    id="offcanvasNavbar"
                    style={{ backgroundColor: "#161A1E", width: 250 }}
                  >
                    <div className="offcanvas-header">
                      <h5 className="offcanvas-title" style={{ color: "white" }}>
                        Menu
                      </h5>
                      <button
                        type="button"
                        className="btn-close btn-close-white"
                        data-bs-dismiss="offcanvas"
                        onClick={() => setIsOffcanvasOpen(false)}
                      />
                    </div>

                    <div className="offcanvas-body">
                      <ul className="navbar-nav">
                        {navItems.map((item) => (
                          <li className="nav-item" key={item.label}>
                            <Link className="nav-link" href={item.href}>
                              {isOffcanvasOpen ? (
                                <span
                                  style={{
                                    color: "white",
                                    borderBottom: "1px solid #FFFFFF1A",
                                    paddingBottom: 10,
                                    fontWeight: 500,
                                    fontSize: 16,
                                  }}
                                >
                                  {item.label}
                                </span>
                              ) : item.icon ? (
                                <i className={`${styles["navbar-icons"]} ${item.icon}`} />
                              ) : (
                                <span style={{ color: "white", fontWeight: 500, fontSize: 16 }}>
                                  {item.label}
                                </span>
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>

        {/* ── Bottom Nav Bar ────────────────────────────────────────────── */}
        <div className={styles["second-part-of-head"]}>
          <div className="container">
            <div className="d-flex justify-content-between align-items-center w-100">
              {/* Main nav links */}
              <ul className={`${styles["first-ul-of-head"]} d-flex justify-content-start align-items-center`}>
                {mainNavLinks.map((link) => (
                  <li key={link.label} style={{ color: link.active ? "#0173FF" : undefined }}>
                    <Link
                      href={link.href}
                      style={{
                        color: link.active ? "#0173FF" : "inherit",
                        textDecoration: "none",
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Category swiper */}
              <div
                className={styles["swiper-of-head"]}
                style={{ width: 360, display: "flex", alignItems: "center" }}
              >
                <div style={{ flex: 1, overflow: "hidden" }}>
                  <Swiper
                    modules={[Navigation]}
                    navigation={{
                      prevEl: ".custom-prev",
                      nextEl: ".custom-next",
                    }}
                    slidesPerView={5}
                    spaceBetween={10}
                    loop
                    className={styles.customSwiper}
                  >
                    {categoryItems.map((item) => (
                      <SwiperSlide
                        key={item}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#A0A0A1",
                          fontWeight: 500,
                          whiteSpace: "nowrap",
                          fontSize: 14,
                          borderLeft: "1px solid #FFFFFF33",
                        }}
                      >
                        <Link
                          href={`/${item.toLowerCase()}`}
                          style={{ color: "#A0A0A1", textDecoration: "none" }}
                        >
                          {item}
                        </Link>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                {/* Swiper prev/next */}
                <div className="d-flex gap-1" style={{ marginLeft: 8 }}>
                  <button
                    className="custom-prev"
                    style={{
                      background: "none",
                      border: "none",
                      color: "white",
                      cursor: "pointer",
                      padding: 0,
                      fontSize: 12,
                      fontWeight: 500,
                    }}
                  >
                    ❮
                  </button>
                  <button
                    className="custom-next"
                    style={{
                      background: "none",
                      border: "none",
                      color: "white",
                      cursor: "pointer",
                      padding: 0,
                      fontSize: 12,
                      fontWeight: 500,
                    }}
                  >
                    ❯
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
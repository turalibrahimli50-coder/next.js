"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import styles from "./page.module.css";
import "swiper/css";
import "swiper/css/navigation";

const CategorySwiper = dynamic(() => import("./CategorySwiper"), {
  ssr: false,
  loading: () => <div style={{ flex: 1, height: 40 }} />,
});

interface NavItem {
  label: string;
  icon: string | null;
  href: string;
  external?: boolean;
}

const navItems: NavItem[] = [
  { label: "Follow Us", icon: null,                       href: "/follow-us",               external: false },
  { label: "Home",      icon: "fa-brands fa-facebook-f",  href: "https://facebook.com",     external: true  },
  { label: "Author",    icon: "fa-brands fa-instagram",   href: "https://instagram.com",    external: true  },
  { label: "Pages",     icon: "fa-brands fa-linkedin-in", href: "https://linkedin.com",     external: true  },
  { label: "Contact",   icon: "fa-brands fa-pinterest-p", href: "https://pinterest.com",    external: true  },
];

const tickerMessages: string[] = [
  "Discover a fresh herb roasted vegetable tray that bursts natural",
  "The best street foods around the world you must try again",
  "A mellow mushroom soup with earthy notes and soft warm",
  "A warm and comforting homemade potato soup recipe",
];

const mainNavLinks = [
  { label: "Home",     href: "/",         active: true  },
  { label: "Features", href: "/features", active: false },
  { label: "Food",     href: "/food",     active: false },
  { label: "Pages",    href: "/pages",    active: false },
  { label: "Contact",  href: "/contact",  active: false },
];

const formatDate = (): string =>
  new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

export default function Headofpage() {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

  return (
    <div>
      <div className={styles["head__top-bar"]}>
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
<div className="d-flex justify-content-start align-items-center">
              <div style={{ padding: "20px" }}>
                <span className={styles["pulse-dot"]} />
              </div>
              <span className={`${styles["head__live-label"]} text-uppercase fs-6`}>live news</span>
              <div className={styles["ticker"]}>
                <div className={styles["ticker__text"]}>
                  {tickerMessages.map((msg, i) => <p key={i}>{msg}</p>)}
                </div>
              </div>
            </div>
<div className="d-flex justify-content-center align-items-center">
              <Link href="/">
                <Image
                  src="https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/09/logo.png"
                  width={90} height={50} alt="Nerio" priority fetchPriority="high"
                />
              </Link>
            </div>
 <nav className="navbar navbar-expand-xl">
              <div className="container-fluid">
                <Link className="navbar-brand d-flex align-items-center" href="#">
                  <button className={styles["btn-pill"]} style={{ backgroundColor: "#0073FF" }}>
                    {formatDate()}
                  </button>
                </Link>
                <button
                  className={`${styles["head__toggler"]} navbar-toggler`}
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasNavbar"
                  onClick={() => setIsOffcanvasOpen(true)}
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="offcanvas offcanvas-end" id="offcanvasNavbar" style={{ backgroundColor: "#161A1E", width: 250 }}>
                  <div className="offcanvas-header">
                    <h5 className="offcanvas-title" style={{ color: "white" }}>Menu</h5>
                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" onClick={() => setIsOffcanvasOpen(false)} />
                  </div>
                  <div className="offcanvas-body">
                    <ul className="navbar-nav">
                      {navItems.map((item) => (
                        <li className="nav-item" key={item.label}>
                          <Link
                            className="nav-link"
                            href={item.href}
                            target={item.external ? "_blank" : undefined}
                            rel={item.external ? "noopener noreferrer" : undefined}
                          >
                            {isOffcanvasOpen ? (
                              <span style={{ color: "white", borderBottom: "1px solid #FFFFFF1A", paddingBottom: 10, fontWeight: 500, fontSize: 16 }}>
                                {item.label}
                              </span>
                            ) : item.icon ? (
                              <i className={`${styles["head__nav-icon"]} ${item.icon}`} />
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
<div className={styles["head__nav-bar"]}>
        <div className="container">
          <div className="d-flex justify-content-between align-items-center w-100">
            <ul className={`${styles["head__nav-list"]} d-flex justify-content-start align-items-center`}>
              {mainNavLinks.map((link) => (
                <li key={link.label} style={{ color: link.active ? "#0173FF" : undefined }}>
                  <Link href={link.href} style={{ color: link.active ? "#0173FF" : "inherit", textDecoration: "none" }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className={styles["head__category-swiper"]}>
              <CategorySwiper />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
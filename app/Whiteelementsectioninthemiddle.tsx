"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

// ─── Types ────────────────────────────────────────────────────────────────────

interface CardItem {
  id: number;
  bg: string;
  bt: string;
  mt: string;
  bc: string;
  author: string;
  date: string;
}

interface ArticleItem extends CardItem {
  lp: string;
}

interface SidebarPostItem {
  id: number;
  src: string;
  bw: string;
  ln: string;
  author: string;
}

interface SocialItem {
  id: number;
  bc: string;
  ic: string;
  br: string;
  fl: string;
}

interface TagItem    { id: number; bt: string }
interface TabItem    { id: number; bt: string }

interface WeatherData {
  temp: number;
  feelsLike: number;
  humidity: number;
  windSpeed: number;
  windDir: string;
  condition: { label: string; icon: string };
  city: string;
  country: string;
}

// ─── Static Data ──────────────────────────────────────────────────────────────

const tags: TagItem[] = [
  { id: 17, bt: "beauty" },   { id: 18, bt: "branding" },
  { id: 19, bt: "business" }, { id: 20, bt: "food" },
  { id: 21, bt: "gaming" },   { id: 22, bt: "makeup" },
  { id: 23, bt: "marketing" },{ id: 24, bt: "politics" },
  { id: 25, bt: "printing" }, { id: 26, bt: "social" },
  { id: 27, bt: "sports" },   { id: 28, bt: "technology" },
  { id: 29, bt: "travel" },   { id: 30, bt: "trip" },
];

const socialItems: SocialItem[] = [
  { id: 31, bc: "#2164CB",                                                   ic: "fa-brands fa-facebook-f",    br: "Facebook",  fl: "88.2k Followers" },
  { id: 32, bc: "#121213",                                                   ic: "fa-brands fa-x-twitter",     br: "Twitter-X", fl: "48.6k Followers" },
  { id: 33, bc: "#F53F82",                                                   ic: "fa-solid fa-basketball",     br: "Dribbble",  fl: "39.5k Followers" },
  { id: 34, bc: "#B0081D",                                                   ic: "fa-brands fa-pinterest-p",   br: "Pinterest", fl: "28.2k Followers" },
  { id: 35, bc: "#0177B5",                                                   ic: "fa-brands fa-linkedin-in",   br: "Linkedin",  fl: "30.3k Followers" },
  { id: 36, bc: "linear-gradient(29deg, #BE08AF 0%, #F10811 100%)",          ic: "fa-brands fa-instagram",     br: "Instagram", fl: "24.5k Followers" },
];

const trendingCards: CardItem[] = [
  { id: 37, bg: "https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/fd_cat_06-min.jpg",  bt: "food",    mt: "Learn how to create a vibrant vegetable stir fry",         bc: "#00b5ed", author: "matt rosnor", date: "Nov 4, 2025" },
  { id: 38, bg: "https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/fd_cat_03-min.jpg",  bt: "pizza",   mt: "Learn how to make perfect scrambled eggs soft creamy ...",  bc: "#f69c00", author: "matt rosnor", date: "Nov 4, 2025" },
  { id: 39, bg: "https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/fd_cat_04-min.jpg",  bt: "dessert", mt: "A delicious baked salmon recipe that honors gentle ...",     bc: "#5e2bff", author: "matt rosnor", date: "Nov 4, 2025" },
];

const articles: ArticleItem[] = [
  { id: 41, bg: "https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/post_22-min-768x381.jpg",    bt: "beverages",  mt: "A flavorful chicken curry that balances tender",          bc: "#348aa7", author: "matt rosnor", date: "Nov 4, 2025", lp: "Your trusted news source bringing you fast, factual updates from around the globe politics economy science reports." },
  { id: 42, bg: "https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/post_28-min-1024x508.jpg",   bt: "food",       mt: "Learn how to create a vibrant vegetable stir fry",       bc: "#00b5ed", author: "matt rosnor", date: "Nov 5, 2025", lp: "Fast accurate and clear news coverage stay updated on political affairs world events technology culture reporting informs." },
  { id: 43, bg: "https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/post_30-min-1024x508.jpg",   bt: "vegetables", mt: "Discover a fresh herb roasted vegetable tray",            bc: "#54bd05", author: "matt rosnor", date: "Nov 6, 2025", lp: "Stay connected with breaking news and insightful reporting. Covering politics business global events, and technology." },
  { id: 44, bg: "https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/10/post_33-min-1024x508.jpg",   bt: "bakery",     mt: "Discover a simple creamy pasta dish",                    bc: "#ff3a3a", author: "matt rosnor", date: "Nov 7, 2025", lp: "Breaking stories, timely updates, and essential insights. Covering politics business, science and global affairs." },
  { id: 45, bg: "https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/post_45-min-1024x508.jpg",   bt: "dessert",    mt: "The best street foods around the world",                 bc: "#5e2bff", author: "matt rosnor", date: "Nov 8, 2025", lp: "Breaking news simplified your source for reliable coverage of politics, business, global events, and science our concise reports." },
  { id: 46, bg: "https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/post_31-min.jpg",             bt: "pizza",      mt: "Make a sweet and soft cinnamon roll breakfast",          bc: "#f69c00", author: "matt rosnor", date: "Nov 9, 2025", lp: "Trusted news reports with clarity and speed. Get updates on politics, world affairs, technology, and business in concise." },
  { id: 47, bg: "https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/post_45-min-1024x508.jpg",   bt: "dinner",     mt: "A warm and comforting homemade potato soup recipe",      bc: "#F27100", author: "matt rosnor", date: "Nov 4, 2025", lp: "Your trusted news source bringing you fast, factual updates from around the globe politics economy science reports." },
  { id: 48, bg: "https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/post_31-min.jpg",             bt: "breakfast",  mt: "A mellow mushroom soup with earthy notes and soft warm",  bc: "#0173FF", author: "matt rosnor", date: "Nov 4, 2025", lp: "Fast accurate and clear news coverage stay updated on political affairs world events technology culture reporting informs." },
];

const sidebarTabs: TabItem[] = [
  { id: 49, bt: "recent" },
  { id: 50, bt: "popular" },
  { id: 51, bt: "trendy" },
];

const sidebarPosts: SidebarPostItem[] = [
  { id: 52, src: "https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/post_31-min-500x500.jpg", bw: "A warm and comforting homemade potato soup", ln: "pizza",          author: "matt rosnor" },
  { id: 53, src: "https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/post_32-min-500x500.jpg", bw: "Discover a simple creamy pasta dish that",   ln: "ice-cream",      author: "matt rosnor" },
  { id: 54, src: "https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/post_20-min-500x500.jpg", bw: "Learn how to create a vibrant vegetable",    ln: "vegetable-fry",  author: "matt rosnor" },
  { id: 55, src: "https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/post_22-min-500x500.jpg", bw: "A flavorful chicken curry that balances tender", ln: "kebab",      author: "matt rosnor" },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

const getWeatherCondition = (code: number): { label: string; icon: string } => {
  if (code === 0)   return { label: "Açıq",          icon: "☀️" };
  if (code <= 2)    return { label: "Az buludlu",     icon: "🌤️" };
  if (code === 3)   return { label: "Buludlu",        icon: "☁️" };
  if (code <= 49)   return { label: "Dumanlı",        icon: "🌫️" };
  if (code <= 59)   return { label: "Çiskin",         icon: "🌦️" };
  if (code <= 69)   return { label: "Yağışlı",        icon: "🌧️" };
  if (code <= 79)   return { label: "Qarlı",          icon: "❄️" };
  if (code <= 84)   return { label: "Yağış duşları",  icon: "🌨️" };
  if (code <= 99)   return { label: "Fırtına",        icon: "⛈️" };
  return { label: "Naməlum", icon: "🌡️" };
};

const getWindDir = (deg: number): string => {
  const dirs = ["Şimal", "Şimal-Şərq", "Şərq", "Cənub-Şərq", "Cənub", "Cənub-Qərb", "Qərb", "Şimal-Qərb"];
  return dirs[Math.round(deg / 45) % 8];
};

const formatDate = (date: Date): string =>
  date.toLocaleDateString("en-GB", { day: "2-digit", month: "2-digit", year: "numeric" });

// ─── Sub-components ───────────────────────────────────────────────────────────

/** Reusable section header — title + divider + "view all" link */
function SectionHeader({ title, href = "/" }: { title: string; href?: string }) {
  return (
    <div className={`${styles["header-part-of-black-div-in-the-middle"]} d-flex justify-content-center align-items-center`}>
      <div className={`${styles["h2-of-header-part-of-black-div-in-the-middle"]} d-flex flex-column justify-content-center align-items-start`}>
        <h2>{title}</h2>
      </div>
      <div className={`${styles["lines-of-header-part-of-black-div-in-the-middle"]} d-flex justify-content-center align-items-center`}>
        <div className={styles["small-blue-romb"]} />
        <div className={styles["side-divider-black2"]} />
        <div className={styles["small-blue-romb"]} />
      </div>
      <Link href={href} style={{ textDecoration: "none" }}>
        <div className={`${styles["writings-of-header-part-of-black-div-in-the-middle"]} d-flex justify-content-center align-items-center`}>
          <span className={`${styles["writing-of-header-part-of-black-div-in-the-middle"]} text-uppercase`}>view all</span>
          <i className={`${styles["writing-of-header-part-of-black-div-in-the-middle"]} fa-solid fa-arrow-right`} />
        </div>
      </Link>
    </div>
  );
}

/** Reusable author + view count row */
function MetaRow({ author, views }: { author: string; views: number }) {
  return (
    <ul
      className="d-flex justify-content-between align-items-center list-unstyled flex-wrap mb-0"
      style={{ gap: 8, fontSize: 14, color: "#69747C", fontWeight: 400 }}
    >
      <li className="text-capitalize">by {author}</li>
      <li>
        <i className="fa-regular fa-eye me-1" />
        {views} <span>View</span>
      </li>
    </ul>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Whiteelementsectioninthemiddle() {
  const router = useRouter();

  const [viewCounts, setViewCounts] = useState<Record<number, number>>({});
  const [weather,    setWeather]    = useState<WeatherData | null>(null);
  const [time,       setTime]       = useState("");

  const today    = new Date();
  const formatted = formatDate(today);

  // ── View count helpers ──────────────────────────────────────────────────────

  const handleViewClick = (id: number, href: string) => {
    fetch(`/api/views/${id}`, { method: "POST" });
    router.push(href);
  };

  // ── Fetch all view counts on mount ─────────────────────────────────────────

  useEffect(() => {
    const allIds = [
      ...trendingCards.map((d) => d.id),
      ...articles.map((d) => d.id),
      ...sidebarPosts.map((d) => d.id),
    ];

    const fetchAll = async () => {
      const counts: Record<number, number> = {};
      await Promise.all(
        allIds.map(async (id) => {
          const res  = await fetch(`/api/views/${id}`);
          const data = await res.json();
          counts[id] = data.views;
        })
      );
      setViewCounts(counts);
    };

    fetchAll();
  }, []);

  // ── Weather (refresh every hour) ───────────────────────────────────────────

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res  = await fetch(
          "https://api.open-meteo.com/v1/forecast?" +
            "latitude=40.4093&longitude=49.8671" +
            "&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,wind_direction_10m,weather_code" +
            "&wind_speed_unit=kmh&timezone=Asia/Baku"
        );
        const data = await res.json();
        const c    = data.current;

        setWeather({
          temp:      Math.round(c.temperature_2m),
          feelsLike: Math.round(c.apparent_temperature),
          humidity:  c.relative_humidity_2m,
          windSpeed: Math.round(c.wind_speed_10m),
          windDir:   getWindDir(c.wind_direction_10m),
          condition: getWeatherCondition(c.weather_code),
          city:      "Bakı",
          country:   "Azərbaycan",
        });
      } catch (e) {
        console.error("Weather fetch failed:", e);
      }
    };

    fetchWeather();
    const interval = setInterval(fetchWeather, 60 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  // ── Clock (update every second) ────────────────────────────────────────────

  useEffect(() => {
    const update = () =>
      setTime(new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true }));
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  // ── Weather info rows ───────────────────────────────────────────────────────

  const weatherInfoRows = [
    { id: 56, ic: "fa-solid fa-temperature-full", infoN: weather ? `${weather.feelsLike}°C`      : "--", infoS: "Hiss olunan" },
    { id: 57, ic: "fa-solid fa-thumbtack",         infoN: weather?.condition.label               ?? "--", infoS: "Vəziyyət"    },
    { id: 58, ic: "fa-solid fa-wind",              infoN: weather ? `${weather.windSpeed} km/s`  : "--", infoS: "Külək"       },
    { id: 59, ic: "fa-solid fa-droplet",           infoN: weather ? `${weather.humidity}%`       : "--", infoS: "Rütubət"     },
    { id: 60, ic: "fa-solid fa-location-dot",      infoN: weather?.city                          ?? "--", infoS: "Current City" },
    { id: 61, ic: "fa-solid fa-earth-asia",        infoN: weather?.country                       ?? "--", infoS: "Country"     },
  ];

  // ── Render ──────────────────────────────────────────────────────────────────

  return (
    <div className={styles["white-element-section-in-the-middle"]}>
      <div className="container">

        {/* ── Trending Recipes ──────────────────────────────────────────── */}
        <div className="d-flex flex-column justify-content-center align-items-center pb-5" style={{ gap: 30 }}>
          <SectionHeader title="Trending Recipes" />

          <div className={styles["body-part-of-white-element-section-in-the-middle"]}>
            <div className="row g-3">
              {trendingCards.map((item) => (
                <div className="col-xl-4 col-md-6 col-12" key={item.id}>
                  <div className={styles["big-white-part-of-white-element-section-in-the-middle"]}>

                    {/* Image */}
                    <div
                      className={styles["top-side-of-big-white-part-of-white-element-section-in-the-middle"]}
                      onClick={() => handleViewClick(item.id, `/${item.bt}`)}
                      style={{ cursor: "pointer" }}
                    >
                      <img src={item.bg} alt={item.bt} className={styles["img-of-gray-small-div-of-second"]} />
                    </div>

                    {/* Info */}
                    <div className={styles["bottom-side-of-big-white-part-of-white-element-section-in-the-middle"]}>
                      <div onClick={() => handleViewClick(item.id, `/${item.bt}`)} style={{ cursor: "pointer" }}>
                        <button
                          className={styles["blue-button-right-side-gray-small-div-of-second"]}
                          style={{ backgroundColor: item.bc }}
                        >
                          {item.bt}
                        </button>
                        <h6 className="text-uppercase mt-2">{item.mt}</h6>
                      </div>
                      <MetaRow author={item.author} views={viewCounts[item.id] ?? 0} />
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Ad Banner ─────────────────────────────────────────────────── */}
        <div className={`${styles["big-img-div-in-the-middle"]} w-100 d-flex justify-content-center align-items-center`}>
          <Link href="/burger-food">
            <img
              src="https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/12/add_nsew333.jpg"
              alt="burger-food"
              style={{ width: "100%", objectFit: "cover", minHeight: 100, borderRadius: 8 }}
            />
          </Link>
        </div>

        {/* ── Latest Articles + Sidebar ─────────────────────────────────── */}
        <div className={`${styles["second-big-part-of-the-white-in-the-middle"]} d-flex flex-column justify-content-center align-items-center`}>
          <SectionHeader title="Trending Recipes" />

          <div className="row w-100">

            {/* Articles list */}
            <div className="col-xl-8 col-12">
              {articles.map((item) => (
                <div
                  key={item.id}
                  className={styles["little-white-divs-of-row-in-the-middle"]}
                  onClick={() => handleViewClick(item.id, `/${item.bt}`)}
                  style={{ cursor: "pointer" }}
                >
                  <div className={styles["left-side-gray-small-div-of-second2"]}>
                    <img src={item.bg} alt={item.bt} className={styles["img-of-gray-small-div-of-second2"]} />
                  </div>
                  <div className={styles["right-side-gray-small-div-of-second2"]}>
                    <button
                      className={styles["blue-button-right-side-gray-small-div-of-second2"]}
                      style={{ backgroundColor: item.bc }}
                    >
                      {item.bt}
                    </button>
                    <h6 className="text-uppercase mt-1">{item.mt}</h6>
                    <span className={styles["gray-writing-of-little-white-divs-of-row-in-the-middle"]}>{item.lp}</span>
                    <MetaRow author={item.author} views={viewCounts[item.id] ?? 0} />
                  </div>
                </div>
              ))}
            </div>

            {/* Sidebar */}
            <div className="col-xl-4 col-12">
              <div className={`${styles["main-right-side-divs-group"]} d-flex flex-column justify-content-center align-items-center`}>

                {/* ── Popular Posts ──────────────────────────────────────── */}
                <div className={`${styles["first-of-main-right-side-divs-group"]} d-flex flex-column justify-content-center align-items-start w-100`}>
                  {/* Tabs */}
                  <div className={`${styles["head-part-of-first-of-main-right-side-divs-group"]} d-flex justify-content-center align-items-center w-100`}>
                    <div className="row w-100">
                      {sidebarTabs.map((item) => (
                        <div className="col-4" key={item.id}>
                          <Link href={`/${item.bt}`} style={{ textDecoration: "none" }}>
                            <button className={`${styles["div-of-head-part-of-first-of-main-right-side-divs-group"]} d-flex justify-content-center align-items-start w-100`}>
                              {item.bt}
                            </button>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Post list */}
                  <div className={`${styles["body-part-of-first-of-main-right-side-divs-group"]} d-flex flex-column justify-content-center align-items-center w-100`}>
                    {sidebarPosts.map((item) => (
                      <Link
                        key={item.id}
                        href={`/${item.ln}`}
                        onClick={() => fetch(`/api/views/${item.id}`, { method: "POST" })}
                        className={`${styles["div-of-body-part-of-first-of-main-right-side-divs-group"]} d-flex justify-content-center align-items-center`}
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <div className={styles["left-side-div-of-body-part-of-first-of-main-right-side-divs-group"]}>
                          <div className={styles["div-of-img-of-div-of-body-part-of-first-of-main-right-side-divs-group"]}>
                            <img src={item.src} alt={item.ln} className={styles["img-of-div-of-body-part-of-first-of-main-right-side-divs-group"]} />
                          </div>
                        </div>
                        <div className={styles["right-side-div-of-body-part-of-first-of-main-right-side-divs-group"]}>
                          <h6 className="text-uppercase">{item.bw}</h6>
                          <MetaRow author={item.author} views={viewCounts[item.id] ?? 0} />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* ── Weather Widget ─────────────────────────────────────── */}
                <div className={`${styles["weather-part-of-main-right-side-divs-group"]} d-flex flex-column justify-content-center align-items-center w-100`}>
                  {/* Header */}
                  <div className={`${styles["header-of-weather-part-of-main-right-side-divs-group"]} d-flex flex-column justify-content-center align-items-start w-100`}>
                    <div className={`${styles["first-part-of-header-of-weather-part-of-main-right-side-divs-group"]} d-flex justify-content-between align-items-center w-100`}>
                      <h3 style={{ color: "white" }}>Weather</h3>
                      <span className={styles["white-date-of-first-part-of-header-of-weather-part-of-main-right-side-divs-group"]}>
                        {formatted}
                      </span>
                    </div>
                    <div className={`${styles["second-part-of-header-of-weather-part-of-main-right-side-divs-group"]} d-flex justify-content-between align-items-start w-100`}>
                      <span className={styles["white-date-of-first-part-of-header-of-weather-part-of-main-right-side-divs-group"]}>
                        Current weather
                      </span>
                      <span className={styles["white-date-of-first-part-of-header-of-weather-part-of-main-right-side-divs-group"]}>
                        {time}
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className={`${styles["body-of-weather-part-of-main-right-side-divs-group"]} d-flex flex-column justify-content-center align-items-start w-100`}>
                    <div className={`${styles["first-part-of-body-of-weather-part-of-main-right-side-divs-group"]} d-flex justify-content-center align-items-start`}>
                      <div className={styles["the-sun"]}>
                        <img
                          src="https://nerio.rstheme.com/food-recipe/wp-content/plugins/fancy-post-grid-pro/assets/weather-icons/01d.svg"
                          style={{ width: 90, height: 90 }}
                          alt="weather icon"
                        />
                      </div>
                      <div className={`${styles["div-of-the-weather-of-now"]} d-flex justify-content-center align-items-start`}>
                        <span className={styles["the-weather-of-now"]}>
                          {weather ? `${weather.temp}°C` : "..."}
                        </span>
                      </div>
                    </div>

                    <div className={`${styles["second-part-of-body-of-weather-part-of-main-right-side-divs-group"]} d-flex flex-column justify-content-center align-items-start w-100`}>
                      <ul className={styles["ul-of-second-part-of-body-of-weather-part-of-main-right-side-divs-group"]}>
                        {weatherInfoRows.map((row) => (
                          <li key={row.id} className={styles["li-of-second-part-of-body-of-weather-part-of-main-right-side-divs-group"]}>
                            <div className={`${styles["left-side-li-of-second-part-of-body-of-weather-part-of-main-right-side-divs-group"]} d-flex justify-content-center align-items-center`}>
                              <i className={row.ic} />
                            </div>
                            <div className={`${styles["right-side-li-of-second-part-of-body-of-weather-part-of-main-right-side-divs-group"]} d-flex flex-column justify-content-center align-items-start`}>
                              <div>{row.infoN}</div>
                              <div>{row.infoS}</div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* ── Follow Us ──────────────────────────────────────────── */}
                <div className={`${styles["first-of-main-right-side-divs-group"]} d-flex flex-column justify-content-center align-items-start w-100`}>
                  <h4>Follow Us</h4>
                  {socialItems.map((item) => (
                    <Link key={item.id} href={`/${item.br.toLowerCase()}`} className="w-100" style={{ textDecoration: "none" }}>
                      <div
                        className={`${styles["colorful-long-divs"]} d-flex justify-content-between align-items-center`}
                        style={{ background: item.bc }}
                      >
                        <div className={`${styles["left-side-of-colorful-long-divs"]} d-flex justify-content-center align-items-center gap-2`}>
                          <i className={item.ic} />
                          <span>{item.br}</span>
                        </div>
                        <div className={styles["right-side-of-colorful-long-divs"]}>{item.fl}</div>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* ── Tags ──────────────────────────────────────────────── */}
                <div className={`${styles["first-of-main-right-side-divs-group"]} d-flex flex-column justify-content-center align-items-start flex-wrap w-100`}>
                  <h4>Tags</h4>
                  <div className={`${styles["body-of-gray-small-many-buttons-div"]} d-flex justify-content-start align-items-start flex-wrap`}>
                    {tags.map((item) => (
                      <Link key={item.id} href={`/${item.bt}`} style={{ textDecoration: "none", color: "inherit" }}>
                        <div className={`${styles["tag-button"]} d-flex justify-content-center align-items-center`}>
                          {item.bt}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
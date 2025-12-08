import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Guaranteed from "../assets/guaranteed.png";
import Affordable from "../assets/affordable.png";
import Customer from "../assets/customer.png";
import Footer from "../components/Footer";

const API_KEY = "8277907f2f12260ea27be8b6301c557f";

const genreMap = {
  28: "Action",
  12: "Adventure",
  35: "Comedy",
};

const dateByIndex = {
  0: "December 2024",
  1: "Maret 2025",
  2: "June 2024",
  3: "March 2024",
};

const VISIBLE_COUNT = 4;

function Home() {
  const [movies, setMovies] = useState([]);
  const [upcomingStart, setUpcomingStart] = useState(0); // carousel upcoming
  const [_, setActiveArrow] = useState(null);
  const [firstName, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [__, setSubscribe] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      );
      const data = await res.json();
      setMovies(data.results || []);
    })();
  }, []);

  const handleUpcomingNext = () => {
    if (!movies.length) return;
    setUpcomingStart((prev) =>
      prev + VISIBLE_COUNT >= movies.length ? 0 : prev + VISIBLE_COUNT
    );
    setActiveArrow("next");
  };

  const handleUpcomingPrev = () => {
    if (!movies.length) return;
    setUpcomingStart((prev) =>
      prev - VISIBLE_COUNT < 0
        ? Math.max(0, movies.length - VISIBLE_COUNT)
        : prev - VISIBLE_COUNT
    );
    setActiveArrow("prev");
  };

  const desktopUpcoming = movies.slice(
    upcomingStart,
    upcomingStart + VISIBLE_COUNT
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      firstName,
      email,
    };

    setSubscribe((prev) => {
      const updated = [...prev, data];
      console.log(updated);
      return updated;
    });
  };

  // useEffect(() => {
  //   console.log("subscribe state:", subscribe);
  // }, [subscribe]);

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="mt-24 md:mt-28">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* HERO */}
          <section className="flex flex-col md:flex-row">
            <div className="flex flex-col text-center mt-12 md:mt-32 md:text-left md:flex-1">
              <h1 className="text-2xl font-medium text-[#1d4ed8]">
                Movie Ticket Purchases #1 in Indonesia
              </h1>
              <h2 className="text-4xl font-medium text-[#121212] mt-8">
                Experience the Magic of Cinema: Book Your Tickets Today
              </h2>
              <h3 className="text-l text-[#A0A3BD] mt-12">
                Sign up and get the ticket with a lot of discount
              </h3>
            </div>

            <div className="mt-12 mb-10 w-full md:flex-1">
              <div
                className="
                  grid grid-cols-2 gap-3
                  max-w-[360px] mx-auto px-2
                  md:w-[420px]
                  lg:max-w-[460px]
                  md:ml-80
                "
              >
                {movies.slice(0, 4).map((movie, index) => {
                  const topCards = index === 0 || index === 1;
                  const bottomCards = index === 2 || index === 3;
                  const isShort = index === 0 || index === 3;
                  const isThree = index === 2;
                  const aspectClass = isShort ? "aspect-[4/3]" : "aspect-[4/5]";
                  const translateMd = isThree ? "md:-translate-y-25" : "";

                  return (
                    <div
                      key={movie.id}
                      className={`
                        group relative w-full overflow-hidden shadow-xl
                        ${aspectClass}
                        ${topCards ? "rounded-t-[8px] rounded-b-none" : ""}
                        ${bottomCards ? "rounded-b-[8px] rounded-t-none" : ""}
                        ${isThree ? "-translate-y-19" : ""}
                        ${translateMd}
                      `}
                    >
                      <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* WHY CHOOSE US */}
          <section className="mb-12">
            <div className="flex flex-col text-center md:text-left mb-12">
              <h1 className="text-[#1d4ed8] text-xl mb-4 md:text-2xl">
                Why Choose Us
              </h1>
              <h2 className="text-2xl md:text-4xl">
                Unleasing the Ultimate Movie Experience
              </h2>
            </div>

            <div className="flex flex-col text-center mb-12 md:flex-row ml-[-30px]">
              <div className="flex flex-col justify-center items-center p-8 md:justify-start md:items-start">
                <img
                  src={Guaranteed}
                  alt="guranteed"
                  className="w-12 h-12 mb-2"
                />
                <h1 className="font-medium text-xl mb-2">Guaranteed</h1>
                <p className="md:text-left">
                  Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim
                  nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.
                </p>
              </div>

              <div className="flex flex-col justify-center items-center p-8 md:ml-8 md:justify-start md:items-start">
                <img
                  src={Affordable}
                  alt="guranteed"
                  className="w-12 h-12 mb-2"
                />
                <h1 className="font-medium text-xl mb-2">Affordable</h1>
                <p className="md:text-left">
                  Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim
                  nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.
                </p>
              </div>

              <div className="flex flex-col justify-center items-center p-8 md:ml-8 md:justify-start md:items-start">
                <img
                  src={Customer}
                  alt="guranteed"
                  className="w-12 h-12 mb-2"
                />
                <h1 className="font-medium text-xl mb-2">
                  24/7 Customer Support
                </h1>
                <p className="md:text-left">
                  Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim
                  nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.
                </p>
              </div>
            </div>
          </section>

          {/* MOVIES (tanpa carousel di desktop) */}
          <section className="mb-16">
            <div className="flex flex-col text-center mb-6">
              <h1 className="text-[#1d4ed8] text-xs md:text-2xl tracking-[0.2em] font-semibold">
                MOVIES
              </h1>
              <h2 className="text-2xl mt-2">
                Exciting Movies That Should Be Watched Today
              </h2>
            </div>

            {/* MOBILE: 2 movies */}
            <div className="flex overflow-x-hidden justify-end mb-12 md:hidden">
              {movies.slice(0, 2).map((movie, index) => (
                <div key={movie.id}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className={`h-[230px] w-[170px] mb-2 rounded ${
                      index === 1 ? "scale-100 translate-x-10 w-[50px]" : ""
                    }`}
                  />
                  <h1
                    className={`font-medium text-l mb-2 ${
                      index === 1 ? "translate-x-10" : ""
                    }`}
                  >
                    {movie.title}
                  </h1>
                  <div
                    className={`flex gap-2 flex-wrap ${
                      index === 1 ? "translate-x-10" : ""
                    }`}
                  >
                    {movie.genre_ids?.slice(0, 3).map((id) => {
                      const name = genreMap[id];
                      if (!name) return null;

                      return (
                        <span
                          key={id}
                          className="px-3 py-1 text-xs bg-slate-100 text-slate-600 rounded-full border border-slate-200"
                        >
                          {name}
                        </span>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* DESKTOP: 4 movies statis */}
            <div className="hidden md:flex justify-center gap-8 mb-4">
              {movies.slice(0, 4).map((movie) => (
                <div key={movie.id} className="w-[300px] text-center">
                  <div className="h-[350px] w-[270px] rounded-lg overflow-hidden shadow-md">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="mt-3 text-sm font-medium text-slate-900 truncate">
                    {movie.title}
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-2 justify-center">
                    {movie.genre_ids?.slice(0, 3).map((id) => {
                      const name = genreMap[id];
                      if (!name) return null;

                      return (
                        <span
                          key={id}
                          className="px-2 py-0.5 text-[11px] rounded-full bg-slate-100 text-slate-600 border border-slate-200"
                        >
                          {name}
                        </span>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <div className="text-left">
                <p className="text-xs tracking-[0.2em] text-blue-600 font-semibold">
                  UPCOMING MOVIES
                </p>
                <h2 className="text-2xl mt-2">Exciting Movie Coming Soon</h2>
              </div>

              <div className="hidden md:flex gap-3">
                {/* tombol kiri */}
                <button
                  onClick={handleUpcomingPrev}
                  className="
                    w-9 h-9 rounded-full border border-slate-300
                    flex items-center justify-center
                    text-slate-500 bg-white
                    hover:bg-blue-600 hover:text-white hover:border-blue-600
                    active:scale-95 transition
                  "
                >
                  {"<"}
                </button>

                {/* tombol kanan */}
                <button
                  onClick={handleUpcomingNext}
                  className="
      w-9 h-9 rounded-full border border-slate-300
      flex items-center justify-center
      text-slate-500 bg-white
      hover:bg-blue-600 hover:text-white hover:border-blue-600
      active:scale-95 transition
    "
                >
                  {">"}
                </button>
              </div>
            </div>

            {/* MOBILE: 2 upcoming */}
            <div className="flex overflow-x-hidden justify-end mb-12 md:hidden">
              {movies.slice(0, 2).map((movie, index) => (
                <div key={movie.id}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className={`h-[230px] w-[170px] mb-2 rounded ${
                      index === 1 ? "scale-100 translate-x-12 w-[50px]" : ""
                    }`}
                  />
                  <h1
                    className={`font-medium text-l ${
                      index === 1 ? "translate-x-10" : ""
                    }`}
                  >
                    {movie.title}
                  </h1>
                  <p
                    className={`text-[#1d4ed8] mb-2 ${
                      index === 1 ? "translate-x-10" : ""
                    }`}
                  >
                    {dateByIndex[index]}
                  </p>
                  <div
                    className={`flex gap-2 flex-wrap ${
                      index === 1 ? "translate-x-10" : ""
                    }`}
                  >
                    {movie.genre_ids?.slice(0, 3).map((id) => {
                      const name = genreMap[id];
                      if (!name) return null;

                      return (
                        <span
                          key={id}
                          className="px-3 py-1 text-xs bg-slate-100 text-slate-600 rounded-full border border-slate-200"
                        >
                          {name}
                        </span>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* DESKTOP: 4 upcoming dengan carousel */}
            <div className="hidden md:flex items-center justify-between mb-4">
              <button
                onClick={handleUpcomingPrev}
                className="w-9 h-9 rounded-full border border-slate-300 flex items-center justify-center text-slate-500"
              >
                {"<"}
              </button>

              <div className="flex justify-center flex-1">
                {desktopUpcoming.map((movie, index) => (
                  <div key={movie.id} className="w-[300px] text-center">
                    <div className="h-[350px] w-[270px] rounded-lg overflow-hidden shadow-md">
                      <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="mt-3 text-sm font-medium text-slate-900 truncate">
                      {movie.title}
                    </h3>
                    <p className="text-[#1d4ed8] text-xs mt-1 mb-1">
                      {dateByIndex[index] ?? "Coming soon"}
                    </p>
                    <div className="mt-1 flex flex-wrap gap-2 justify-center">
                      {movie.genre_ids?.slice(0, 3).map((id) => {
                        const name = genreMap[id];
                        if (!name) return null;

                        return (
                          <span
                            key={id}
                            className="px-2 py-0.5 text-[11px] rounded-full bg-slate-100 text-slate-600 border border-slate-200"
                          >
                            {name}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* NEWSLETTER */}
          <section className="mb-12">
            <div className="relative mx-0 md:mx-auto max-w-7xl bg-blue-600 rounded-2xl py-12 px-6 overflow-hidden">
              <h1 className="text-center mb-6 text-white text-xl font-semibold">
                Subscribe to Our newsletter
              </h1>

              <form
                className="flex flex-col md:flex-row items-center mb-12 gap-3 md:px-16"
                onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full max-w-sm px-4 py-2 border-2 border-white/80 bg-transparent text-white placeholder:text-white/70 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/80"
                  value={firstName}
                  onChange={(e) => setFirstname(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full max-w-sm px-4 py-2 border-2 border-white/80 bg-transparent text-white placeholder:text-white/70 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/80"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  type="submit"
                  className="mt-2 md:mt-0 w-full max-w-sm px-24 md:px-2  py-[0.7rem] rounded-lg bg-white text-blue-700 font-medium text-sm"
                >
                  Subscribe Now
                </button>
              </form>

              <div className="absolute -bottom-10 -right-6 w-32 h-32 rounded-full border-[6px] border-white/90" />
            </div>
          </section>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Home;

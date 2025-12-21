import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Navbar from "../components/Navbar";
import ebv from "../assets/ebv.png";
import hiflix from "../assets/hiflix.png";
import cineOne from "../assets/cineOne21.png";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const cinemas = [
  { id: "ebv1", name: "ebv.id", logo: ebv },
  { id: "hiflix", name: "Hiflix", logo: hiflix },
  { id: "cineone", name: "CineOne21", logo: cineOne },
  { id: "ebv2", name: "ebv.id", logo: ebv },
];

function Detail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [director, setDirector] = useState(null);
  const [cast, setCast] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [activeCinema, setActiveCinema] = useState("hiflix");
  // const [activeCinema, setActiveCinema] = useState("hiflix");

  const dateRef = useRef(null);
  const timeRef = useRef(null);

  useEffect(() => {
    const fetchDetail = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
      );
      const data = await res.json();
      setMovie(data);
    };

    const fetchCredits = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`
      );
      const data = await res.json();

      const directorData = data.crew.find(
        (person) => person.job === "Director"
      );
      setDirector(directorData || null);
      setCast(data.cast.slice(0, 4));
    };

    fetchCredits();
    fetchDetail();
  }, [id]);

  if (!movie) {
    return <p className="text-center mt-20">Loading...</p>;
  }

  const castNames = cast.map((actor) => actor.name).join(", ");

  const formatTimeAMPM = (time) => {
    if (!time) return "";

    const [hour, minute] = time.split(":");
    let h = parseInt(hour, 10);
    const ampm = h >= 12 ? "PM" : "AM";

    h = h % 12 || 12;

    return `${h}:${minute} ${ampm}`;
  };

  return (
    <>
      <header className="mb-12">
        <Navbar />
      </header>

      <main className="mb-12">
        {/* ===== HERO POSTER ===== */}
        <section>
          {/* mobile */}
          <div className="block md:hidden">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="h-[80vh] w-full object-cover"
            />
          </div>

          {/* desktop */}
          <div className="hidden md:block">
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.title}
              className="h-[60vh] w-full object-cover"
            />
          </div>

          {/* poster floating */}
          <div className="absolute z-10 top-46 w-[90%] left-4">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="md:h-[400px] md:w-[300px] md:ml-32 md:mt-20"
            />
          </div>
        </section>

        {/* ===== MOVIE INFO ===== */}
        <section className="mt-32">
          <section className="mt-32 px-6 md:px-0">
            <div className="md:ml-[470px] md:mt-[-120px]">
              {/* TITLE */}
              <h1 className="font-bold text-2xl text-center md:text-left">
                {movie.title}
              </h1>

              {/* GENRE */}
              <div className="flex flex-wrap gap-2 mt-3 justify-center md:justify-start">
                {movie.genres.map((g) => (
                  <span
                    key={g.id}
                    className="px-4 py-1 text-sm bg-slate-100 text-slate-600 rounded-full border border-slate-200"
                  >
                    {g.name}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* RELEASE & RATING */}
          <div className="mt-8 ml-6 flex md:ml-[470px] md:mt-[10px]">
            <div>
              <h2 className="font-medium text-[#8692A6] mr-20">Release date</h2>
              <p>{movie.release_date}</p>
            </div>
            {/* <div className="ml-10">
              <h2 className="font-medium text-[#8692A6]">Rating</h2>
              <p>{movie.vote_average.toFixed(1)}/10</p>
            </div> */}
            <div>
              <h2 className="font-medium text-[#8692A6]">Casts</h2>
              <p>{castNames || "-"}</p>
            </div>
          </div>

          {/* DURATION */}
          <div className="mt-8 ml-6 mb-8 flex md:ml-[470px] md:mt-[10px]">
            <div>
              <h2 className="font-medium text-[#8692A6] mr-16 md:mr-26">
                Duration
              </h2>
              <p>{movie.runtime} min</p>
            </div>
            <div>
              <h2 className="font-medium text-[#8692A6]">Directed by</h2>
              <p>{director ? director.name : "-"}</p>
            </div>
          </div>
        </section>

        {/* ===== SYNOPSIS ===== */}
        {/* mobile */}
        <section className="ml-6 mr-6 text-justify block md:hidden">
          <h2 className="text-xl mb-2 font-medium">Synopsis</h2>
          <p className="text-[#a0a3bd]">{movie.overview}</p>
        </section>

        {/* desktop */}
        <section className="ml-34 mr-100 hidden md:block">
          <h2 className="text-xl mb-2 font-medium">Synopsis</h2>
          <p className="text-[#a0a3bd]">{movie.overview}</p>
        </section>

        {/* Book Tickets desktop */}
        <section className="hidden md:block mt-10 px-34">
          <h2 className="text-xl font-semibold mb-4">Book Tickets</h2>

          <div className="flex items-end gap-4">
            {/* Choose Date */}
            <div className="flex-1">
              <p className="text-xs text-slate-500 mb-2">Choose Date</p>

              <div
                className="relative cursor-pointer"
                onClick={() => dateRef.current?.showPicker()}
              >
                {/* ICON KIRI */}
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600 pointer-events-none">
                  📅
                </span>

                <input
                  ref={dateRef}
                  type="date"
                  className="
                      w-full pl-11 pr-10 py-3
                      rounded-md bg-slate-50
                      border border-slate-200
                      text-sm text-slate-600
                      focus:outline-none
                      cursor-pointer
                      hide-date-icon
                    "
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                />

                {/* CARET KANAN */}
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-xs pointer-events-none">
                  ▼
                </span>
              </div>
            </div>

            {/* Choose Time */}
            <div className="flex-1">
              <p className="text-xs text-slate-500 mb-2">Choose Time</p>

              <div
                className="relative cursor-pointer"
                onClick={() => {
                  timeRef.current?.showPicker?.();
                  timeRef.current?.focus();
                }}
              >
                {/* ICON KIRI */}
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600 pointer-events-none">
                  ⏰
                </span>

                <input
                  ref={timeRef}
                  type="time"
                  className="
                      w-full pl-11 pr-10 py-3
                      rounded-md bg-slate-50
                      border border-slate-200
                      text-sm text-slate-600
                      focus:outline-none
                      cursor-pointer
                      hide-time-icon
                    "
                  value={selectedTime}
                  onChange={(e) =>
                    formatTimeAMPM(setSelectedTime(e.target.value))
                  }
                />

                {/* CARET KANAN */}
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-xs pointer-events-none">
                  ▼
                </span>
              </div>
            </div>

            {/* Choose Location */}
            <div className="flex-1">
              <p className="text-xs text-slate-500 mb-2">Choose Location</p>

              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                  📍
                </span>

                <select
                  className="
                    w-full pl-10 pr-10 py-3
                    rounded-md bg-slate-50
                    border border-slate-200
                    text-sm text-slate-600
                    appearance-none
                    focus:outline-none
                  "
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                >
                  <option value="">Select city</option>
                  <option value="jakarta">Jakarta</option>
                  <option value="bandung">Bandung</option>
                  <option value="surabaya">Surabaya</option>
                  <option value="purwokerto">Purwokerto</option>
                </select>

                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-xs pointer-events-none">
                  ▼
                </span>
              </div>
            </div>

            {/* Filter button */}
            <div>
              <button className="mt-6 px-8 py-3 rounded-md bg-blue-600 text-white text-sm font-medium">
                Filter
              </button>
            </div>
          </div>
        </section>

        {/* Choose Cinema desktop */}
        <section className="hidden md:block mt-8 px-34">
          <div className="flex items-baseline gap-3 mb-4">
            <p className="text-xs text-slate-500">Choose Cinema</p>
            <p className="text-xs text-slate-400">39 Result</p>
          </div>

          {/* kartu cinema */}
          <div className="flex gap-4">
            {cinemas.map((cinema) => {
              const isActive = activeCinema === cinema.id;

              return (
                <button
                  key={cinema.id}
                  onClick={() => setActiveCinema(cinema.id)}
                  className={`
                    flex-1 h-28 rounded-lg flex items-center justify-center transition
                    ${
                      isActive
                        ? "bg-blue-600 shadow-md"
                        : "bg-white border border-slate-200 hover:border-blue-500"
                    }
                  `}
                >
                  <img
                    src={cinema.logo}
                    alt={cinema.name}
                    className={`
                        h-10 object-contain
                        transition
                        ${
                          isActive
                            ? "filter brightness-0 saturate-100 invert"
                            : ""
                        }
                      `}
                  />
                </button>
              );
            })}
          </div>

          {/* pagination */}
          <div className="flex justify-center gap-2 mt-6">
            <button className="w-8 h-8 rounded-md bg-blue-600 text-white text-xs font-semibold shadow">
              1
            </button>
            <button className="w-8 h-8 rounded-md border border-slate-200 text-xs text-slate-500 bg-white">
              2
            </button>
            <button className="w-8 h-8 rounded-md border border-slate-200 text-xs text-slate-500 bg-white">
              3
            </button>
            <button className="w-8 h-8 rounded-md border border-slate-200 text-xs text-slate-500 bg-white">
              4
            </button>
          </div>

          {/* Book Now */}
          <div className="flex justify-center mt-6 mb-4">
            <button
              className="px-10 py-3 rounded-md bg-blue-600 text-white text-sm font-medium shadow"
              onClick={() =>
                navigate(`/app/v1/order/${movie.id}/${selectedLocation}`, {
                  state: {
                    date: selectedDate,
                    time: formatTimeAMPM(selectedTime),
                    location: selectedLocation,
                    cinema: cinemas.find((c) => c.id === activeCinema),
                  },
                })
              }
            >
              Book Now
            </button>
          </div>
        </section>

        {/* Filters mobile*/}
        <section aria-label="Showtimes filter" className="mt-6 block md:hidden">
          <h2 className="text-center text-xl mb-2 font-medium">
            Showtimes and Tickets
          </h2>

          <div className="space-y-3 px-5">
            <button className="w-full flex items-center justify-between px-4 py-3 rounded-md shadow-sm bg-slate-50">
              <div className="flex items-center justify-center gap-3 text-slate-600">
                <span className="text-lg">📅</span>
                <span className="text-l font-medium">Set a date</span>
              </div>
              <span className="text-slate-400 text-lg">v</span>
            </button>

            <button className="w-full flex items-center justify-between px-4 py-3 border border-slate-200 rounded-md bg-slate-50">
              <div className="flex items-center gap-3 text-slate-600">
                <span className="text-lg">📍</span>
                <span className="text-l font-medium">Set a city</span>
              </div>
              <span className="text-slate-400 text-lg">v</span>
            </button>

            <button className="w-full mt-2 py-3 rounded-md bg-blue-600 text-white text-sm font-medium">
              Filter
            </button>
          </div>
        </section>

        {/* Detail showtime EBV mobile*/}
        <section
          aria-label="EBV cinema showtimes"
          className="mt-4 px-5 pb-8 block md:hidden"
        >
          <h2 className="text-center text-xl text-[#8692a6] mb-4 font-medium">
            39 Result
          </h2>

          <article className="rounded-2xl border border-slate-100 shadow-sm px-5 py-4">
            <header className="flex items-start justify-between">
              <div>
                <img src={ebv} alt="ebv.id logo" className="mb-2" />
                <h3 className="text-3xl font-semibold">ebv.id</h3>
                <p className="text-[11px] text-slate-400 mt-1">
                  Whatever street No.12, South Purwokerto
                </p>
              </div>
              <button className="text-slate-500 text-lg leading-none">⌃</button>
            </header>

            <hr className="my-4 border-slate-100" />

            {/* REGULAR */}
            <section className="mb-6" aria-label="Regular seats">
              <h4 className="text-xs font-semibold tracking-[0.12em] text-slate-500 mb-3">
                REGULAR
              </h4>
              <div className="grid w-max grid-cols-2 gap-y-3 gap-x-4 md:flex">
                {Array(6)
                  .fill("10:30 AM")
                  .map((time, idx) => (
                    <div key={idx} className="flex justify-start">
                      <span
                        className={`w-max px-4 py-1.5 rounded-full text-[11px] shadow-sm ${
                          idx === 5
                            ? "text-white bg-blue-600"
                            : "text-slate-500 bg-slate-50"
                        }`}
                      >
                        {idx === 0 ? "08:30 AM" : time}
                      </span>
                    </div>
                  ))}
              </div>
            </section>

            {/* GOLD */}
            <section className="mb-6" aria-label="Gold seats">
              <h4 className="text-xs font-semibold tracking-[0.12em] text-slate-500 mb-3">
                GOLD
              </h4>
              <div className="grid w-max grid-cols-2 gap-y-3 gap-x-4 md:flex">
                {/* row 1 */}
                <div className="flex w-max justify-start">
                  <span className="w-max px-4 py-1.5 rounded-full text-[11px] text-slate-500 bg-slate-50 shadow-sm">
                    08:30 AM
                  </span>
                </div>
                <div className="flex w-max justify-start">
                  <span className="w-max px-4 py-1.5 rounded-full text-[11px] text-slate-500 bg-slate-50 shadow-sm">
                    10:30 AM
                  </span>
                </div>
                {/* row 2 */}
                <div className="flex w-max justify-start">
                  <span className="w-max px-4 py-1.5 rounded-full text-[11px] text-slate-500 bg-slate-50 shadow-sm">
                    10:30 AM
                  </span>
                </div>
                <div />
                {/* row 3 */}
                <div className="flex w-max justify-start">
                  <span className="w-max px-4 py-1.5 rounded-full text-[11px] text-slate-500 bg-slate-50 shadow-sm">
                    10:30 AM
                  </span>
                </div>
                <div className="flex w-max justify-start">
                  <span className="w-max px-4 py-1.5 rounded-full text-[11px] text-white bg-blue-600 shadow-sm">
                    10:30 AM
                  </span>
                </div>
                {/* row 4 */}
                <div className="flex w-max justify-start">
                  <span className="w-max px-4 py-1.5 rounded-full text-[11px] text-slate-500 bg-slate-50 shadow-sm">
                    10:30 AM
                  </span>
                </div>
                <div />
              </div>
            </section>

            {/* PLATINUM S */}
            <section className="mb-6" aria-label="Platinum seats">
              <h4 className="text-xs font-semibold tracking-[0.12em] text-slate-500 mb-3">
                PLATINUM S
              </h4>
              <div className="grid w-max grid-cols-2 gap-y-3 gap-x-4 md:flex">
                {/* row 1 */}
                <div className="flex w-max justify-start">
                  <span className="w-max px-4 py-1.5 rounded-full text-[11px] text-slate-500 bg-slate-50 shadow-sm">
                    08:30 AM
                  </span>
                </div>
                <div className="flex w-max justify-start">
                  <span className="w-max px-4 py-1.5 rounded-full text-[11px] text-slate-500 bg-slate-50 shadow-sm">
                    10:30 AM
                  </span>
                </div>
                {/* row 2 */}
                <div className="flex w-max justify-start">
                  <span className="w-max px-4 py-1.5 rounded-full text-[11px] text-slate-500 bg-slate-50 shadow-sm">
                    10:30 AM
                  </span>
                </div>
                <div />
                {/* row 3 */}
                <div className="flex w-max justify-start">
                  <span className="w-max px-4 py-1.5 rounded-full text-[11px] text-slate-500 bg-slate-50 shadow-sm">
                    10:30 AM
                  </span>
                </div>
                <div className="flex w-max justify-start">
                  <span className="w-max px-4 py-1.5 rounded-full text-[11px] text-white bg-blue-600 shadow-sm">
                    10:30 AM
                  </span>
                </div>
                {/* row 4 */}
                <div className="flex w-max justify-start">
                  <span className="w-max px-4 py-1.5 rounded-full text-[11px] text-slate-500 bg-slate-50 shadow-sm">
                    10:30 AM
                  </span>
                </div>
                <div />
              </div>
            </section>
          </article>
        </section>

        {/* Simple cinema list mobile*/}
        <section
          aria-label="Other cinemas"
          className="mt-4 px-5 pb-8 space-y-4 block md:hidden"
        >
          <article className="rounded-2xl border border-slate-100 shadow-sm px-5 py-8">
            <header className="flex items-start justify-between">
              <div>
                <img src={hiflix} alt="Hiflix logo" className="mb-1" />
                <h3 className="text-lg font-semibold text-slate-900">
                  Hiflix Cinema
                </h3>
                <p className="text-[11px] text-slate-400 mt-1">
                  Whatever street No.12, South Purwokerto
                </p>
              </div>
              <button className="text-slate-500 text-lg leading-none">⌃</button>
            </header>
          </article>

          <article className="rounded-2xl border border-slate-100 shadow-sm px-5 py-8">
            <header className="flex items-start justify-between">
              <div>
                <img src={cineOne} alt="CineOne21 logo" className="mb-1" />
                <h3 className="text-lg font-semibold text-slate-900">
                  Cineone 21
                </h3>
                <p className="text-[11px] text-slate-400 mt-1">
                  Whatever street No.12, South Purwokerto
                </p>
              </div>
              <button className="text-slate-500 text-lg leading-none">⌃</button>
            </header>
          </article>
        </section>

        {/* Pagination */}
        <nav
          aria-label="Pagination"
          className="mb-10 flex justify-center gap-3 block md:hidden"
        >
          <button className="w-8 h-8 rounded-md bg-blue-600 text-white text-xs font-semibold shadow-md">
            1
          </button>
          <button className="w-8 h-8 rounded-md border border-slate-200 text-xs text-slate-500 bg-white">
            2
          </button>
          <button className="w-8 h-8 rounded-md border border-slate-200 text-xs text-slate-500 bg-white">
            3
          </button>
          <button className="w-8 h-8 rounded-md border border-slate-200 text-xs text-slate-500 bg-white">
            4
          </button>
        </nav>
      </main>
    </>
  );
}

export default Detail;

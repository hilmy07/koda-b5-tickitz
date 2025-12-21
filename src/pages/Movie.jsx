import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import image1 from "../../public/image.png";
import image1 from "../assets/image.png";
import image from "../assets/image1.png";
import { useDispatch } from "react-redux";
import { addSubscribe } from "../redux/reducers/subscribes";
import { useNavigate } from "react-router";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

function Movie() {
  const navigate = useNavigate();
  const [firstName, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const [movies, setMovies] = useState([]);
  const [genre, setGenre] = useState([]);
  const [genreMap, setGenreMap] = useState({});

  // pagination state
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const dispatch = useDispatch();

  // ================= FETCH MOVIES (WITH PAGE) =================
  useEffect(() => {
    const getMovie = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${page}`
      );
      const data = await res.json();

      setMovies(data.results || []);
      setTotalPages(500);
    };

    getMovie();
  }, [page]);

  // ================= FETCH GENRE =================
  useEffect(() => {
    const getGenre = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`
      );
      const data = await res.json();
      setGenre(data.genres ?? []);

      const map = {};
      (data.genres ?? []).forEach((g) => {
        map[g.id] = g.name;
      });
      setGenreMap(map);
    };

    getGenre();
  }, []);

  // ================= PAGINATION HANDLER =================
  const handleNextPage = () => {
    if (page < totalPages) setPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addSubscribe({
        id: Date.now(),
        firstName,
        email,
      })
    );

    setFirstname("");
    setEmail("");
  };

  const getPages = () => {
    const maxVisible = 4;
    let start = Math.max(1, page - 1);
    let end = start + maxVisible - 1;

    if (end > totalPages) {
      end = totalPages;
      start = Math.max(1, end - maxVisible + 1);
    }

    const pages = [];
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  const handleGenreClick = (genreId) => {
    setPage(1); // reset pagination

    if (selectedGenre === genreId) {
      setSelectedGenre(null); // toggle off
    } else {
      setSelectedGenre(genreId);
    }
  };

  const filteredMovies = movies
    .filter((movie) =>
      selectedGenre ? movie.genre_ids.includes(selectedGenre) : true
    )
    .filter((movie) =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const slugify = (text) =>
    text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  return (
    <>
      <main>
        {/* HERO */}
        <section aria-label="Movie poster">
          {/* mobile */}
          <div className="relative md:hidden h-[80vh]">
            <img src={image} alt="background" className="h-full w-full" />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          {/* desktop */}
          <div className="relative h-[70vh] w-full hidden md:block">
            <img
              src={image1}
              alt="background"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* SEARCH & FILTER */}
          <section className="mt-12">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
              <div className="w-full md:w-1/3">
                <label className="text-sm font-medium text-gray-700">
                  Cari Event
                </label>
                <div className="flex items-center gap-3 border border-gray-300 rounded px-4 py-3 mt-2 shadow-sm bg-white">
                  <input
                    type="text"
                    placeholder="Search Movie"
                    className="w-full outline-none text-sm"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              <div className="w-full md:w-2/3">
                <label className="text-sm font-medium text-gray-700">
                  Filter
                </label>
                <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
                  {genre.map((g) => (
                    <button
                      key={g.id}
                      onClick={() => handleGenreClick(g.id)}
                      className={`px-5 py-2 rounded border text-sm shadow-sm whitespace-nowrap transition
                            ${
                              selectedGenre === g.id
                                ? "bg-blue-600 text-white border-blue-600"
                                : "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                            }
                          `}
                    >
                      {g.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* MOVIE LIST */}
          <section className="my-16">
            {/* <h2 className="text-xl font-semibold mb-6">Now Showing</h2> */}

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {filteredMovies.slice(0, 12).map((movie) => (
                <div
                  key={movie.id}
                  className="bg-white rounded overflow-hidden hover:scale-[1.02] transition"
                >
                  {/* POSTER */}
                  <div className="relative group w-full md:h-[400px] h-120 overflow-hidden">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title}
                      className="w-full h-full object-cover"
                    />

                    {/* OVERLAY */}
                    <div
                      className="
                          absolute inset-0
                          bg-black/60
                          flex flex-col items-center justify-center gap-4

                          opacity-100 md:opacity-0
                          md:group-hover:opacity-100

                          transition-opacity duration-300
                        "
                    >
                      {/* DETAILS */}
                      <button
                        onClick={() =>
                          navigate(
                            `/app/v1/movie/${movie.id}/${slugify(movie.title)}`
                          )
                        }
                        className="
                            px-8 py-2
                            border border-white
                            text-white text-sm
                            rounded
                            hover:bg-white hover:text-black
                            transition
                          "
                      >
                        Details
                      </button>

                      {/* BUY TICKET */}
                      <button
                        onClick={() =>
                          navigate(
                            `/app/v1/movie/${movie.id}/${slugify(movie.title)}`
                          )
                        }
                        className="
                            px-6 py-2
                            bg-blue-600 text-white text-sm
                            rounded
                            hover:bg-blue-700
                            transition
                          "
                      >
                        Buy Ticket
                      </button>
                    </div>
                  </div>

                  {/* INFO */}
                  <div className="mt-2 px-2 pb-3">
                    <h3 className="text-sm font-semibold">{movie.title}</h3>

                    <div className="flex flex-wrap gap-1 mt-2">
                      {movie.genre_ids.map((gid) => (
                        <span
                          key={gid}
                          className="text-[10px] px-4 py-2 bg-gray-100 text-gray-800 rounded-full"
                        >
                          {genreMap[gid] || "Unknown"}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* PAGINATION */}
            <div className="flex justify-center items-center gap-3 mt-12">
              {/* PREV */}
              <button
                onClick={handlePrevPage}
                disabled={page === 1}
                className="
                      w-9 h-9 flex items-center justify-center rounded-full
                      bg-gray-100 text-gray-500
                      disabled:opacity-40
                      hover:bg-gray-200 transition
                    "
              >
                ‹
              </button>

              {/* PAGE WINDOW */}
              {getPages().map((p) => (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={`
                      w-9 h-9 flex items-center justify-center rounded-full text-sm font-medium
                      ${
                        page === p
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }
                      transition
                    `}
                >
                  {p}
                </button>
              ))}

              {/* ELLIPSIS */}
              {totalPages > getPages()[getPages().length - 1] && (
                <span className="px-1 text-gray-400">…</span>
              )}

              {/* LAST PAGE */}
              {totalPages > 1 && !getPages().includes(totalPages) && (
                <button
                  onClick={() => setPage(totalPages)}
                  className={`
                      w-9 h-9 flex items-center justify-center rounded-full text-sm font-medium
                      ${
                        page === totalPages
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }
                      transition
                    `}
                >
                  {totalPages}
                </button>
              )}

              {/* NEXT */}
              <button
                onClick={handleNextPage}
                disabled={page === totalPages}
                className="
                    w-9 h-9 flex items-center justify-center rounded-full
                    bg-blue-600 text-white
                    hover:bg-blue-700 transition
                    disabled:opacity-40
                  "
              >
                →
              </button>
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
                  className="mt-2 md:mt-0 w-full max-w-sm px-24 md:px-2  py-[0.7rem] rounded-lg bg-white text-blue-700 font-medium text-sm cursor-pointer active:scale-95 transition"
                >
                  Subscribe Now
                </button>
              </form>

              <div className="absolute -bottom-15 -right-6 w-32 h-32 rounded-full border-[6px] border-white/90" />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default Movie;

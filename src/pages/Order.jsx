import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router";
// import cineOne from "../assets/cineOne21.png";
// import { useParams, useLocation } from "react-router";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

function Order() {
  const { id } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  const [isMobileModalOpen, setIsMobileModalOpen] = useState(false);

  const rows = ["A", "B", "C", "D", "E", "F", "G"];
  const cols = Array.from({ length: 14 }, (_, i) => i + 1);

  const [selected, setSelected] = useState([]);
  const [movie, setMovie] = useState(null);

  const ticketPrice = 10; // cukup const
  const totalPayment = selected.length * ticketPrice;

  const [selectedRow, setSelectedRow] = useState("C");
  const [selectedCol, setSelectedCol] = useState("4");

  useEffect(() => {
    const fetchMovie = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
      );
      const data = await res.json();
      setMovie(data);
    };

    fetchMovie();
  }, [id]);

  const toggleSeat = (seat) => {
    setSelected((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
    );
  };

  if (!movie) {
    return <p className="text-center mt-20">Loading...</p>;
  }

  const steps = [
    { id: 1, label: "Dates And Time" },
    { id: 2, label: "Seat" },
    { id: 3, label: "Payment" },
  ];

  const activeStep = 2;
  const { date, time, cinema } = state || {};

  const orderId = Number(id);
  if (Number.isNaN(orderId)) return;

  // const { id } = useParams();
  const handleCheckout = () => {
    navigate(`/app/v1/payment/${orderId}`, {
      state: {
        movieTitle: movie?.title,
        cinemaName: cinema?.name,
        date,
        time,
        selectedSeats: selected,
        ticketPrice,
        totalPayment,
      },
    });
  };

  return (
    <>
      <main className="bg-[#a0a3bd33] py-20 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          {/* STEP INDICATOR */}
          <div className="flex justify-center gap-4 md:gap-10 py-8">
            {steps.map((step) => {
              const isActive = step.id === activeStep;
              const isDone = step.id < activeStep;

              return (
                <div key={step.id} className="flex items-center gap-2 md:gap-3">
                  <div
                    className={`flex items-center justify-center rounded-full border-2 font-semibold
                    w-7 h-7 text-xs md:w-9 md:h-9 md:text-sm
                    ${
                      isDone
                        ? "bg-green-500 border-green-500 text-white"
                        : isActive
                        ? "bg-blue-600 border-blue-600 text-white"
                        : "bg-gray-200 border-gray-300 text-gray-400"
                    }`}
                  >
                    {isDone ? "✓" : step.id}
                  </div>
                  <span
                    className={`font-medium text-xs md:text-sm
                    ${isDone || isActive ? "text-gray-900" : "text-gray-400"}`}
                  >
                    {step.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* CONTENT */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* ========================= LEFT PANEL ========================= */}
            <div className="flex-1 bg-white rounded shadow p-4 md:p-6">
              {/* Movie Info */}
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  className="w-full h-40 md:w-48 md:h-26 rounded-lg object-cover"
                  alt={movie.title}
                />

                <div className="w-full">
                  <h1 className="font-semibold text-2xl md:text-lg text-center md:text-left">
                    {movie.title}
                  </h1>

                  <div className="flex gap-2 mt-2 flex-wrap justify-center md:justify-start">
                    {movie.genres.map((g) => (
                      <span
                        key={g.id}
                        className="px-3 py-1 bg-gray-100 text-xs md:text-sm rounded-full"
                      >
                        {g.name}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-3">
                    <p className="text-sm md:text-base text-gray-500 mb-2 md:mb-0 text-center md:text-left">
                      Regular – 13:00 PM
                    </p>
                    <button className="px-4 py-1 bg-[#1d4ed8]/20 md:bg-blue-600 text-blue-800 md:text-white rounded-full md:rounded text-sm md:text-sm self-center md:self-auto md:ml-auto">
                      Change
                    </button>
                  </div>
                </div>
              </div>

              {/* Seat Grid */}
              <h2 className="font-semibold text-sm md:text-base">
                Choose Your Seat
              </h2>

              <div className="mt-6">
                <p className="text-center md:mr-30 text-gray-500 mb-4 text-xs md:text-sm hidden md:block">
                  Screen
                </p>

                {/* garis ungu hanya mobile */}
                <div className="h-2 bg-[#a855f7] rounded-full mb-4 md:hidden" />

                <div className="flex gap-4 md:gap-4">
                  {/* row label hanya desktop */}
                  <div className="hidden md:block">
                    {rows.map((r) => (
                      <p
                        key={r}
                        className="mb-[6px] md:mb-2 font-medium text-xs md:text-lg"
                      >
                        {r}
                      </p>
                    ))}
                  </div>

                  <div className="flex flex-row gap-6 md:gap-10 items-center md:items-start">
                    {/* LEFT BLOCK + vertical line mobile */}
                    <div className="relative">
                      <div className="absolute -left-2 top-0 bottom-0 w-[3px] rounded-full bg-[#22c55e] md:hidden" />

                      <div className="grid grid-cols-7 gap-1.5 md:gap-2 border-b pb-2 md:border-b-0 md:pb-0">
                        {rows.map((r) =>
                          cols.slice(0, 7).map((c) => {
                            const seat = `${r}${c}`;
                            const isSelected = selected.includes(seat);

                            return (
                              <div
                                key={seat}
                                onClick={() => toggleSeat(seat)}
                                className={`w-4 h-4 md:w-7 md:h-7 rounded cursor-pointer transition
                                ${
                                  isSelected
                                    ? "bg-blue-600"
                                    : "bg-gray-200 hover:bg-gray-300"
                                }`}
                              />
                            );
                          })
                        )}
                        {cols.slice(0, 7).map((c) => (
                          <div
                            key={c}
                            className="text-center font-medium text-xs md:text-sm hidden md:block"
                          >
                            {c}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* RIGHT BLOCK */}
                    <div className="grid grid-cols-7 gap-1.5 md:gap-2 border-b pb-2 md:border-b-0 md:pb-0">
                      {rows.map((r) =>
                        cols.slice(7).map((c) => {
                          const seat = `${r}${c}`;
                          const isSelected = selected.includes(seat);
                          const isLove = r === "D" && (c === 12 || c === 13);
                          const isSold = r === "B" && c === 10;

                          return (
                            <div
                              key={seat}
                              onClick={() => !isSold && toggleSeat(seat)}
                              className={`w-4 h-4 md:w-7 md:h-7 rounded cursor-pointer transition
                              ${
                                isSold
                                  ? "bg-gray-500"
                                  : isLove
                                  ? "bg-pink-300 hover:bg-pink-400"
                                  : isSelected
                                  ? "bg-blue-600"
                                  : "bg-gray-200 hover:bg-gray-300"
                              }`}
                            />
                          );
                        })
                      )}
                      {cols.slice(7).map((c) => (
                        <div
                          key={c}
                          className="text-center font-medium text-xs md:text-sm hidden md:block"
                        >
                          {c}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Seating key MOBILE (seperti screenshot) */}
              <div className="mt-6 md:hidden">
                <h3 className="text-xl font-semibold">Seating key</h3>

                <div className="flex mt-3 text-lg text-gray-800">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">↓</span>
                    <span>A - G</span>
                  </div>
                  <div className="flex items-center gap-2 ml-32">
                    <span className="text-base">→</span>
                    <span>1 - 14</span>
                  </div>
                </div>

                <div className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2 text-lg text-gray-500">
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded bg-gray-300" />
                    <span>Available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded bg-blue-600" />
                    <span>Selected</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded bg-pink-300" />
                    <span>Love nest</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded bg-gray-500" />
                    <span>Sold</span>
                  </div>
                </div>
              </div>

              {/* Seating Key DESKTOP (versi lama, tetap) */}
              <div className="mt-8 flex flex-wrap gap-4 md:gap-6 hidden md:flex">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-gray-300 rounded" />
                  <span className="text-xs md:text-sm">Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-blue-600 rounded" />
                  <span className="text-xs md:text-sm">Selected</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-pink-300 rounded" />
                  <span className="text-xs md:text-sm">Love nest</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-gray-500 rounded" />
                  <span className="text-xs md:text-sm">Sold</span>
                </div>
              </div>

              {/* MOBILE SUMMARY + SEAT PICKER + BUTTON */}
              <div className="pt-4 md:hidden text-sm">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-500">Choosed</span>
                  <span className="font-medium">
                    {selected.length ? selected.join(", ") : "-"}
                  </span>
                </div>

                <div className="flex gap-3 mb-4">
                  <select
                    value={selectedRow}
                    onChange={(e) => setSelectedRow(e.target.value)}
                    className="flex-1 h-10 bg-gray-100 rounded-md border border-gray-200 text-gray-700 text-sm px-2"
                  >
                    {rows.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>

                  <select
                    value={selectedCol}
                    onChange={(e) => setSelectedCol(e.target.value)}
                    className="flex-1 h-10 bg-gray-100 rounded-md border border-gray-200 text-gray-700 text-sm px-2"
                  >
                    {cols.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    const seat = `${selectedRow}${selectedCol}`;
                    setSelected((prev) =>
                      prev.includes(seat) ? prev : [...prev, seat]
                    );
                  }}
                  className="w-full py-3 border border-blue-600 text-blue-600 rounded-lg text-sm font-semibold mb-4"
                >
                  Add new seat
                </button>
              </div>
            </div>

            {/* Submit mobile */}
            <div className="md:hidden">
              <button
                className="w-full py-3 bg-blue-600 text-white rounded-lg text-sm font-semibold"
                onClick={() => setIsMobileModalOpen(true)}
              >
                Submit
              </button>
            </div>

            {/* ========================= RIGHT PANEL (DESKTOP) ========================= */}
            <div className="hidden md:block" key={id}>
              <div className="w-full md:w-80 bg-white rounded shadow p-6">
                <div className="flex justify-center">
                  <img src={cinema?.logo} alt={cinema?.name} />
                </div>
                <p className="mb-4 text-center font-medium text-xl">
                  {cinema?.name}
                </p>

                <div className="text-sm space-y-2">
                  <div className="flex justify-between">
                    <strong>Movie selected</strong>
                    <span>{movie.title}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>{date || "-"}</span>
                    <span>{time || "-"}</span>
                  </div>

                  <div className="flex justify-between">
                    <strong>One ticket price</strong>
                    <span>$10</span>
                  </div>

                  <div className="flex justify-between">
                    <strong>Seat chosen</strong>
                    <span>{selected.join(", ") || "-"}</span>
                  </div>
                </div>

                <hr className="my-4" />

                <div className="flex justify-between items-center text-lg font-semibold">
                  <span>Total Payment</span>
                  <span className="text-blue-600">${totalPayment}</span>
                </div>
              </div>

              <button
                className="mt-6 w-full py-2 bg-blue-600 text-white rounded-lg"
                onClick={handleCheckout}
              >
                Checkout now
              </button>
            </div>
          </div>
        </div>

        {/* MODAL MOBILE: summary order */}
        {isMobileModalOpen && (
          <div className="fixed inset-0 top-16 z-50 flex items-center justify-center bg-black/80 md:hidden">
            <div className="w-[90%] bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* header brand */}
              <div className="px-6 pt-5 text-center">
                <p className="text-xs text-blue-600 font-semibold">CineOne21</p>
                <p className="text-base font-semibold mt-1">CineOne21 Cinema</p>
              </div>

              {/* body */}
              <div className="px-6 py-4 text-sm text-gray-700 space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-500">Movie selected</span>
                  <span className="font-medium text-right">{movie.title}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">Tuesday, 07 July 2020</span>
                  <span className="font-medium">13:00pm</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">One ticket price</span>
                  <span className="font-medium">$10</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">Seat choosed</span>
                  <span className="font-medium">
                    {selected.length ? selected.join(", ") : "-"}
                  </span>
                </div>

                <hr className="my-3" />

                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold">Total Payment</span>
                  <span className="text-blue-600 font-semibold">
                    ${selected.length * 10}
                  </span>
                </div>
              </div>

              {/* footer button */}
              <div className="px-6 pb-5">
                <button
                  className="w-full py-3 bg-blue-600 text-white rounded-lg text-sm font-semibold"
                  onClick={() => {
                    // di sini nanti bisa navigate ke payment / confirmation
                    handleCheckout();
                    setIsMobileModalOpen(false);
                  }}
                >
                  Confirm Order
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}

export default Order;

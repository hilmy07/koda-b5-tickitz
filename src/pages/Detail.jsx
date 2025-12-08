import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import image from "../../public/image1.png";
import image1 from "../../public/image.png";
import ebv from "../assets/ebv.png";
import hiflix from "../assets/hiflix.png";
import cineOne from "../assets/cineOne21.png";

function Detail() {
  return (
    <>
      <header className="mb-12">
        <Navbar />
      </header>

      <main>
        {/* Hero poster */}
        <section aria-label="Movie poster">
          {/* mobile */}
          <div className="block md:hidden">
            <img src={image} alt="background" className="h-[80vh] w-full" />
          </div>

          {/* desktop */}
          <div className="hidden md:block">
            <img
              src={image1}
              alt="backgroundDesktop"
              className="h-[60vh] w-full"
            />
          </div>

          <div className="absolute z-3 top-46 w-[90%] left-4">
            <img
              src="https://image.tmdb.org/t/p/w500/3Wg1LBCiTEXTxRrkNKOqJyyIFyF.jpg"
              alt="Zootopia 2 poster"
              className="md:h-[400px] md:w-[300px] md:ml-32 md:mt-20"
            />
          </div>
        </section>

        {/* Movie info */}
        <section aria-label="Movie basic info" className="mt-32">
          <h1 className="text-center font-bold text-2xl mt-6 md:ml-[-470px] md:mt-[-120px]">
            Zootopia 2
          </h1>
          <div className="flex justify-center mt-2 md:ml-[-500px]">
            <span className="px-4 py-1 text-l bg-slate-100 text-slate-600 rounded-full border border-slate-200">
              Comedy
            </span>
          </div>

          <div className="mt-8 ml-6 flex md:ml-[470px] md:mt-[10px]">
            <div>
              <h2 className="font-medium text-[#8692A6]">Release date</h2>
              <p>November 26, 2025</p>
            </div>
            <div className="ml-10">
              <h2 className="font-medium text-[#8692A6]">Directed by</h2>
              <p>Jon Watts</p>
            </div>
          </div>

          <div className="mt-8 ml-6 mb-8 flex md:ml-[470px] md:mt-[10px]">
            <div>
              <h2 className="font-medium text-[#8692A6]">Duration</h2>
              <p>2 hrs 13 min</p>
            </div>
            <div className="block md:hidden">
              <div className="ml-24">
                <h2 className="font-medium text-[#8692A6]">Casts</h2>
                <p>Shakira</p>
                <p>Macaulay Culkin</p>
                <p>etc.</p>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-24">
                <h2 className="font-medium text-[#8692A6]">Casts</h2>
                <p>Shakira, Macaulay Culkin, etc.</p>
                {/* <p>Macaulay Culkin</p>
                <p>etc.</p> */}
              </div>
            </div>
          </div>
        </section>

        {/* Synopsis mobile*/}
        <section
          aria-label="Synopsis"
          className="ml-6 mr-6 text-justify block md:hidden"
        >
          <h2 className="text-xl mb-2 font-medium">Synopsis</h2>
          <p className="text-[#a0a3bd]">
            Zootopia 2 reunites optimistic Officer Judy Hopps and sly fox Nick
            Wilde when a mysterious series of incidents threatens the fragile
            peace between Zootopia’s diverse animal districts, drawing them into
            a conspiracy involving newly arrived reptile citizens, old
            prejudices, and a plan that could literally rewrite the city’s
            environment and power structure.
          </p>
        </section>

        {/* Synopsis desktop*/}
        <section aria-label="Synopsis" className="ml-34 mr-100 hidden md:block">
          <h2 className="text-xl mb-2 font-medium">Synopsis</h2>
          <p className="text-[#a0a3bd]">
            Zootopia 2 reunites optimistic Officer Judy Hopps and sly fox Nick
            Wilde when a mysterious series of incidents threatens the fragile
            peace between Zootopia’s diverse animal districts, drawing them into
            a conspiracy involving newly arrived reptile citizens, old
            prejudices, and a plan that could literally rewrite the city’s
            environment and power structure.
          </p>
        </section>

        {/* Book Tickets desktop */}
        <section className="hidden md:block mt-10 px-34">
          <h2 className="text-xl font-semibold mb-4">Book Tickets</h2>

          <div className="flex items-end gap-4">
            {/* Choose Date */}
            <div className="flex-1">
              <p className="text-xs text-slate-500 mb-2">Choose Date</p>
              <button className="w-full flex items-center justify-between px-4 py-3 rounded-md bg-slate-50 border border-slate-200 text-sm text-slate-600">
                <span className="flex items-center gap-2">
                  <span className="text-lg">📅</span>
                  <span>21/07/20</span>
                </span>
                <span className="text-slate-400 text-xs">▼</span>
              </button>
            </div>

            {/* Choose Time */}
            <div className="flex-1">
              <p className="text-xs text-slate-500 mb-2">Choose Time</p>
              <button className="w-full flex items-center justify-between px-4 py-3 rounded-md bg-slate-50 border border-slate-200 text-sm text-slate-600">
                <span className="flex items-center gap-2">
                  <span className="text-lg">⏰</span>
                  <span>08:30 AM</span>
                </span>
                <span className="text-slate-400 text-xs">▼</span>
              </button>
            </div>

            {/* Choose Location */}
            <div className="flex-1">
              <p className="text-xs text-slate-500 mb-2">Choose Location</p>
              <button className="w-full flex items-center justify-between px-4 py-3 rounded-md bg-slate-50 border border-slate-200 text-sm text-slate-600">
                <span className="flex items-center gap-2">
                  <span className="text-lg">📍</span>
                  <span>Purwokerto</span>
                </span>
                <span className="text-slate-400 text-xs">▼</span>
              </button>
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
            {/* ebv.id */}
            <button className="flex-1 h-28 border border-slate-200 rounded-lg flex items-center justify-center bg-white hover:border-blue-500 transition">
              <img src={ebv} alt="ebv.id" className="h-10 object-contain" />
            </button>

            {/* hiflix - active */}
            <button className="flex-1 h-28 rounded-lg flex items-center justify-center bg-blue-600 shadow-md">
              <img
                src={hiflix}
                alt="Hiflix"
                className="h-10 object-contain invert"
              />
            </button>

            {/* CineOne21 */}
            <button className="flex-1 h-28 border border-slate-200 rounded-lg flex items-center justify-center bg-white hover:border-blue-500 transition">
              <img
                src={cineOne}
                alt="CineOne21"
                className="h-10 object-contain"
              />
            </button>

            {/* ebv.id lagi */}
            <button className="flex-1 h-28 border border-slate-200 rounded-lg flex items-center justify-center bg-white hover:border-blue-500 transition">
              <img src={ebv} alt="ebv.id" className="h-10 object-contain" />
            </button>
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
            <button className="px-10 py-3 rounded-md bg-blue-600 text-white text-sm font-medium shadow">
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

      <footer className="mt-12">
        <Footer />
      </footer>
    </>
  );
}

export default Detail;

import React from "react";
import user from "../assets/user.png";
import star from "../assets/star.png";
import cineOne from "../assets/cineOne21.png";
import ebv from "../assets/ebv.png";

function OrderHistory() {
  return (
    <>
      <main className="bg-[#a0a3bd]/20 min-h-screen">
        <div className="flex items-start">
          {/* section kiri */}
          <section className="w-1/4  bg-white my-24 pb-8 mx-10 rounded-lg">
            <div className="p-10">
              <div className="flex justify-between">
                <h1 className="text-[#4e4b66]">INFO</h1>
                <i className="fa-solid fa-ellipsis pt-2"></i>
              </div>

              <div className="flex justify-center my-6">
                <img src={user} alt="user" />
              </div>

              <div className="flex justify-center flex-col items-center">
                <h1 className="text-[#14142b] text-2xl">Jonas El Rodriguez</h1>
                <p className="text-[#4e4b66]">Moviegoers</p>
              </div>
            </div>

            {/* HR tanpa padding */}
            <hr className="border border-[#dedede]" />

            <div className="p-10">
              <div>
                <h1 className="text-[#4e4b66] text-xl">Loyalty Points</h1>
              </div>

              <div className="relative w-full max-w-lg h-34 rounded-2xl bg-blue-700 overflow-hidden shadow-lg mt-4">
                {/* decorative circles */}
                <div className="absolute -top-24 -right-10 w-40 h-40 bg-white/20 rounded-full" />
                <div className="absolute -top-6 -right-8 w-28 h-28 bg-white/20 rounded-full" />

                {/* star */}
                <img
                  src={star}
                  alt="star"
                  className="absolute top-1 right-2 w-14 h-14 drop-shadow-md"
                />

                {/* content */}
                <div className="relative z-10 p-6 text-white">
                  <h2 className="text-lg font-semibold">Moviegoers</h2>

                  <div className="mt-4 flex items-end gap-1">
                    <span className="text-3xl font-medium">320</span>
                    <span className="text-sm opacity-80">points</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-4">
                <h1 className="text-[#4e4b66] text-lg">
                  180 points become a master
                </h1>
              </div>

              <div className="mt-4 h-2 w-full bg-[#111111]/16 rounded-full">
                <div className="mt-2 h-2 w-40 bg-[#2956d9] rounded-full" />
              </div>
            </div>
          </section>

          {/* section kanan */}
          <section className="flex-1 my-24 mr-10">
            {/* navigasi */}
            <div className="flex gap-10 border-b border-[#EFF0F6] bg-white px-10 rounded-2xl">
              <button className="py-6 text-[#6E7191]  cursor-pointer">
                Account Settings
              </button>
              <button className="py-6 text-[#14142b] font-semibold border-b-2 border-[#2956d9] cursor-pointer">
                Order History
              </button>
            </div>

            {/* order item */}
            <div>
              <div className="mt-14 bg-white rounded-2xl px-8 pt-10 pb-30">
                <div className="flex justify-between">
                  <div>
                    <h2 className="text-[#aaaaaa] text-lg mb-2">
                      Tuesday, 07 July 2020 - 04:30pm
                    </h2>
                    <h1 className="text-[#000000] text-2xl mb-6 font-medium">
                      Spider-man: Homecoming
                    </h1>
                  </div>
                  <div className="mt-6">
                    <img src={cineOne} alt="cineOne21" className="w-36" />
                  </div>
                </div>
              </div>
              <hr className="border border-[#dedede] -mt-24 mb-6" />
              <div className="flex justify-between px-8">
                <div className="flex gap-4">
                  <button className="px-12 py-2 rounded-xl bg-[#00BA88]/20 text-[#00BA88] text-sm font-semibold shadow-sm">
                    Ticket in active
                  </button>
                  <button className="px-14 py-2 rounded-xl bg-[#E82C2C]/20 text-[#E82C2C] text-sm font-semibold shadow-sm">
                    Not paid
                  </button>
                </div>
                <div className="flex gap-2 cursor-pointer">
                  <h2 className="text-[#AAAAAA] text-lg">Show Details</h2>
                  <i className="fa-solid fa-chevron-down mt-2 text-[#AAAAAA]"></i>
                </div>
              </div>
            </div>

            <div>
              <div className="mt-18 bg-white rounded-2xl px-8 pt-10 pb-30">
                <div className="flex justify-between">
                  <div>
                    <h2 className="text-[#aaaaaa] text-lg mb-2">
                      Monday, 14 June 2020 - 02:00pm
                    </h2>
                    <h1 className="text-[#000000] text-2xl mb-6 font-medium">
                      Avengers: End Game
                    </h1>
                  </div>
                  <div className="mt-2">
                    <img src={ebv} alt="ebv" className="w-28" />
                  </div>
                </div>
              </div>
              <hr className="border border-[#dedede] -mt-24 mb-6" />
              <div className="flex justify-between px-8">
                <div className="flex gap-4">
                  <button className="px-16 py-2 rounded-xl bg-[#6e7191]/20 text-[#6e7191] text-sm font-semibold shadow-sm">
                    Ticket used
                  </button>
                  <button className="px-18 py-2 rounded-xl bg-[#1d4ed8]/20 text-[#1d4ed8] text-sm font-semibold shadow-sm">
                    Paid
                  </button>
                </div>
                <div className="flex gap-2 cursor-pointer">
                  <h2 className="text-[#AAAAAA] text-lg">Show Details</h2>
                  <i className="fa-solid fa-chevron-down mt-2 text-[#AAAAAA]"></i>
                </div>
              </div>
            </div>

            <div>
              <div className="mt-18 bg-white rounded-2xl px-8 pt-10 pb-30">
                <div className="flex justify-between">
                  <div>
                    <h2 className="text-[#aaaaaa] text-lg mb-2">
                      Monday, 14 June 2020 - 02:00pm
                    </h2>
                    <h1 className="text-[#000000] text-2xl mb-6 font-medium">
                      Avengers: End Game
                    </h1>
                  </div>
                  <div className="mt-2">
                    <img src={ebv} alt="ebv" className="w-28" />
                  </div>
                </div>
              </div>
              <hr className="border border-[#dedede] -mt-24 mb-6" />
              <div className="flex justify-between px-8">
                <div className="flex gap-4">
                  <button className="px-16 py-2 rounded-xl bg-[#6e7191]/20 text-[#6e7191] text-sm font-semibold shadow-sm">
                    Ticket used
                  </button>
                  <button className="px-18 py-2 rounded-xl bg-[#1d4ed8]/20 text-[#1d4ed8] text-sm font-semibold shadow-sm">
                    Paid
                  </button>
                </div>
                <div className="flex gap-2 cursor-pointer">
                  <h2 className="text-[#AAAAAA] text-lg">Show Details</h2>
                  <i className="fa-solid fa-chevron-down mt-2 text-[#AAAAAA]"></i>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default OrderHistory;

import React from "react";
import user from "../assets/user.png";
import star from "../assets/star.png";

function Profile() {
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
              <button className="py-6 text-[#14142b] font-semibold border-b-2 border-[#2956d9] cursor-pointer">
                Account Settings
              </button>
              <button className="py-6 text-[#6E7191] cursor-pointer">
                Order History
              </button>
            </div>

            {/* Details Information */}
            <div className="mt-14 bg-white rounded-2xl px-8 py-16">
              <h2 className="text-[#4E4B66] text-lg mb-6">
                Details Information
              </h2>

              <hr className="border border-[#dedede] -mt-4 mb-6" />

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs text-[#6E7191] mb-2">
                    First Name
                  </label>
                  <input
                    className="w-full h-12 rounded-xl border border-[#D9DBE9] px-4 text-sm text-[#14142B] focus:outline-none focus:border-[#2956d9]"
                    defaultValue="Jonas"
                  />
                </div>
                <div>
                  <label className="block text-xs text-[#6E7191] mb-2">
                    Last Name
                  </label>
                  <input
                    className="w-full h-12 rounded-xl border border-[#D9DBE9] px-4 text-sm text-[#14142B]"
                    defaultValue="El Rodriguez"
                  />
                </div>
                <div>
                  <label className="block text-xs text-[#6E7191] mb-2">
                    E-mail
                  </label>
                  <input
                    className="w-full h-12 rounded-xl border border-[#D9DBE9] px-4 text-sm text-[#14142B]"
                    defaultValue="jonasrodrigu123@gmail.com"
                  />
                </div>
                <div className="flex gap-3">
                  <div className="w-24">
                    <label className="block text-xs text-[#6E7191] mb-2">
                      Code
                    </label>
                    <input
                      className="w-full h-12 rounded-xl border border-[#D9DBE9] px-4 text-sm text-[#14142B]"
                      defaultValue="+62"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-xs text-[#6E7191] mb-2">
                      Phone Number
                    </label>
                    <input
                      className="w-full h-12 rounded-xl border border-[#D9DBE9] px-4 text-sm text-[#14142B]"
                      defaultValue="81445687121"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Account and Privacy */}
            <div className="mt-14 bg-white rounded-2xl px-8 py-14">
              <h2 className="text-[#4E4B66] text-lg mb-6">
                Account and Privacy
              </h2>

              <hr className="border border-[#dedede] -mt-4 mb-6" />

              <div className="grid grid-cols-2 gap-6 mt-10">
                <div>
                  <label className="block text-xs text-[#6E7191] mb-2">
                    New Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      className="w-full h-12 rounded-xl border border-[#D9DBE9] px-4 pr-10 text-sm text-[#14142B]"
                      placeholder="Write your password"
                    />
                    <i className="fa-regular fa-eye absolute right-3 top-3 text-[#A0A3BD]" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-[#6E7191] mb-2">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      className="w-full h-12 rounded-xl border border-[#D9DBE9] px-4 pr-10 text-sm text-[#14142B]"
                      placeholder="Confirm your password"
                    />
                    <i className="fa-regular fa-eye absolute right-3 top-3 text-[#A0A3BD]" />
                  </div>
                </div>
              </div>
            </div>

            {/* button */}
            <div className="flex justify-start mt-8">
              <button className="px-20 py-3 rounded-xl bg-[#2956d9] text-white text-sm font-semibold shadow-sm cursor-pointer">
                Update changes
              </button>
            </div>
            {/* </div> */}
          </section>
        </div>
      </main>
    </>
  );
}

export default Profile;

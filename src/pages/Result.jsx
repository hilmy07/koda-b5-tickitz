import React from "react";
import tickitz from "../assets/tickitz3.png";
import image from "../assets/image.png";

function Result() {
  return (
    <>
      <main>
        <div className="flex">
          {/* section kiri */}
          <section className="relative w-2/3 min-h-screen">
            <img
              src={image}
              alt="image"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute top-60 left-40">
              <img src={tickitz} alt="tickitz" className="w-50" />
            </div>
            <div className="absolute top-80 left-40">
              <h1 className="text-4xl text-white font-medium">
                Thankyou For Purchasing
              </h1>
              <p className="text-xl text-white pt-4 pr-100">
                Lorem ipsum dolor sit amet consectetur. Quam pretium pretium
                tempor integer sed magna et.
              </p>
              <p className="text-xl text-white font-medium pt-4 pr-110">
                Please Download Your Ticket →
              </p>
            </div>
          </section>

          {/* section kanan */}
          <section className="w-1/3 min-h-screen bg-[#a0a3bd]/20 flex items-center justify-center pt-14">
            <div className="bg-white w-80 rounded-2xl shadow-lg p-6 py-8">
              {/* QR */}
              <div className="flex justify-center mb-10">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Ticket"
                  alt="qr"
                  className="w-36 h-36"
                />
              </div>

              <hr className="border-dashed mb-4" />

              {/* Detail */}
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Movie</span>
                  <span className="font-medium text-gray-900">Spider-Man</span>
                </div>

                <div className="flex justify-between">
                  <span>Category</span>
                  <span className="font-medium text-gray-900">PG-13</span>
                </div>

                <div className="flex justify-between">
                  <span>Date</span>
                  <span className="font-medium text-gray-900">07 Jul</span>
                </div>

                <div className="flex justify-between">
                  <span>Time</span>
                  <span className="font-medium text-gray-900">2:00pm</span>
                </div>

                <div className="flex justify-between">
                  <span>Count</span>
                  <span className="font-medium text-gray-900">3 pcs</span>
                </div>

                <div className="flex justify-between">
                  <span>Seats</span>
                  <span className="font-medium text-gray-900">C4, C5, C6</span>
                </div>
              </div>

              <hr className="my-4" />

              {/* Total */}
              <div className="flex justify-between font-semibold text-gray-900 mb-4">
                <span>Total</span>
                <span>$30.00</span>
              </div>

              {/* Buttons */}
              <button className="w-full border border-blue-600 text-blue-600 rounded-lg py-2 mb-2 flex items-center justify-center gap-2 cursor-pointer">
                Download
              </button>

              <button className="w-full bg-blue-600 text-white rounded-lg py-2 cursor-pointer">
                Done
              </button>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default Result;

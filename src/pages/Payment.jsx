import React, { useState } from "react";

function Payment() {
  // contoh data dummy, bisa kamu ganti dari props / context / params
  const [movieTitle] = useState("Spider-Man: Homecoming");
  const [cinemaName] = useState("CineOne21 Cinema");
  const [dateTime] = useState("Tuesday, 07 July 2020 at 02:00pm");
  const [tickets] = useState(3);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const ticketPrice = 10;
  const totalPayment = tickets * ticketPrice;

  const steps = [
    { id: 1, label: "Dates And Time" },
    { id: 2, label: "Seat" },
    { id: 3, label: "Payment" },
  ];

  const activeStep = 3;

  return (
    <main className="min-h-screen bg-[#f5f6f8] py-24 px-4 md:px-0">
      {/* Stepper */}
      <div className="max-w-6xl mx-auto flex justify-center gap-6 md:gap-10 mb-8">
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

      {/* Kotak payment dipersempit */}
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow p-6 md:p-14">
        {/* Payment Info */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-4">Payment Info</h2>

          <div className="text-xs text-gray-500 space-y-3">
            <div>
              <p className="uppercase tracking-wide">Date &amp; Time</p>
              <p className="text-gray-800 text-sm mt-2">{dateTime}</p>
            </div>

            <div>
              <p className="uppercase tracking-wide border-t pt-2 border-gray-300">
                Movie Title
              </p>
              <p className="text-gray-800 text-sm mt-2">{movieTitle}</p>
            </div>

            <div>
              <p className="uppercase tracking-wide border-t pt-2 border-gray-300">
                Cinema Name
              </p>
              <p className="text-gray-800 text-sm mt-2">{cinemaName}</p>
            </div>

            <div>
              <p className="uppercase tracking-wide border-t pt-2 border-gray-300">
                Number of Tickets
              </p>
              <p className="text-gray-800 text-sm mt-2">
                {tickets} {tickets > 1 ? "pieces" : "piece"}
              </p>
            </div>

            <div className="pt-2 border-t border-gray-300">
              <p className="uppercase tracking-wide">Total Payment</p>
              <p className="text-blue-600 font-semibold text-sm mt-2 pb-2 border-b border-gray-300">
                ${totalPayment}.00
              </p>
            </div>
          </div>
        </section>

        {/* Personal Information */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-4">Personal Information</h2>

          <div className="space-y-3 text-sm">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex gap-2">
              <input
                type="text"
                value="+62"
                readOnly
                className="w-24 border border-gray-300 rounded-md px-3 py-2 bg-gray-100 text-gray-500"
              />
              <input
                type="tel"
                placeholder="81445687121"
                className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </section>

        {/* Payment Method */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-4">Payment Method</h2>

          <div className="grid grid-cols-3 gap-3">
            {[
              "GPay",
              "VISA",
              "Gopay",
              "Paypal",
              "DANA",
              "BCA",
              "BRI",
              "OVO",
              "Mandiri",
            ].map((m) => (
              <button
                key={m}
                type="button"
                className="h-12 border border-gray-200 rounded-md flex items-center justify-center bg-gray-50 hover:bg-gray-100"
              >
                <span className="text-xs font-medium text-gray-700">{m}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Pay button */}
        <button
          type="button"
          onClick={openModal}
          className="w-full mt-2 py-3 bg-blue-600 text-white rounded-md font-semibold text-sm hover:bg-blue-700"
        >
          Pay your order
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 top-16 z-50 flex items-center justify-center bg-black/80">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md mx-4">
            <div className="border-b px-6 py-4 flex items-center justify-between">
              <h3 className="text-sm font-semibold">Payment Info</h3>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 text-lg leading-none"
              >
                ×
              </button>
            </div>

            <div className="px-6 py-4 text-sm text-gray-700 space-y-3">
              <p className="text-xs text-gray-500">Your payment code</p>
              <p className="font-semibold tracking-wider text-center text-base">
                1231 3213 8989 7879
              </p>
              <p className="text-xs text-center text-gray-500">
                Pay this bill at the nearest ATM or internet banking before
                <span className="font-semibold text-red-500"> 12:00</span>.
              </p>
              <p className="text-xs text-center text-gray-500">
                If the payment is not completed, your order will be cancelled
                automatically.
              </p>
            </div>

            <div className="px-6 pb-4 space-y-2">
              <button className="w-full py-2 bg-blue-600 text-white rounded-md text-sm font-semibold hover:bg-blue-700">
                Check Payment
              </button>
              <button
                onClick={closeModal}
                className="w-full py-2 border border-blue-600 text-blue-600 rounded-md text-sm font-semibold hover:bg-blue-50"
              >
                Pay later
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Payment;

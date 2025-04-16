"use client";

import React, { useState } from "react";

type PopupFormProps = {
  togglePopup: () => void;
};

const PopupForm: React.FC<PopupFormProps> = ({ togglePopup }) => {
  const [contactMethod, setContactMethod] = useState<"email" | "phone">(
    "email"
  );
  const [countryCode, setCountryCode] = useState("977");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleToggleChange = () => {
    setContactMethod(contactMethod === "email" ? "phone" : "email");
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.replace(/\D/g, "");
    setPhoneNumber(inputValue);
    detectCountryCode(inputValue);
  };

  const detectCountryCode = (number: string) => {
    for (const { code } of countryCodes) {
      if (number.startsWith(code)) {
        setCountryCode(code);
        return;
      }
    }
  };

  const countryCodes = [
    { code: "977", country: "Nepal" },
    { code: "1", country: "USA/Canada" },
    { code: "44", country: "UK" },
    { code: "91", country: "India" },
    { code: "86", country: "China" },
    { code: "61", country: "Australia" },
    { code: "49", country: "Germany" },
    { code: "81", country: "Japan" },
  ];

  return (
    <div
      className="relative max-w-md w-full rounded-2xl border border-white/10 bg-neutral-950/80 backdrop-blur-lg p-6 text-white shadow-2xl"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23262626' fill-opacity='0.5'%3E%3Cpath d='M0 39L39 0H40V1L1 40H0V39Z'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
        backgroundSize: "40px 40px",
      }}
    >
      {/* Close Button */}
      <button
        onClick={togglePopup}
        className="absolute top-3 right-4 text-gray-400 hover:text-lime-400 text-2xl font-light transition-colors"
        aria-label="Close"
      >
        ×
      </button>

      <h2 className="text-2xl font-semibold mb-6 text-white">Let’s Connect</h2>

      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        className="flex flex-col gap-5"
      >
        <input
          type="hidden"
          name="access_key"
          value="3ba732c3-65a4-425d-9ce5-5757c8a4f407"
        />

        {/* Name */}
        <div>
          <label htmlFor="name" className="text-sm text-white/70">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            placeholder="Your name"
            className="w-full bg-neutral-900 border border-white/10 rounded-lg px-4 py-2 mt-1 text-white placeholder-white/40 focus:ring-2 focus:ring-lime-400/50 focus:outline-none"
          />
        </div>

        {/* Toggle */}
        <div className="flex items-center justify-between text-sm text-white/70">
          <span>Email</span>
          <div className="relative inline-block w-12 h-6">
            <input
              type="checkbox"
              id="contactToggle"
              checked={contactMethod === "phone"}
              onChange={handleToggleChange}
              className="sr-only"
            />
            <label
              htmlFor="contactToggle"
              className={`block w-12 h-6 rounded-full transition-colors duration-300 cursor-pointer ${
                contactMethod === "phone" ? "bg-lime-400" : "bg-white/20"
              }`}
            >
              <span
                className={`absolute left-1 top-1 w-4 h-4 rounded-full bg-white transition-transform duration-300 transform ${
                  contactMethod === "phone" ? "translate-x-6" : ""
                }`}
              />
            </label>
          </div>
          <span>Phone</span>
        </div>

        {/* Email */}
        {contactMethod === "email" && (
          <div>
            <label htmlFor="email" className="text-sm text-white/70">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="you@example.com"
              required
              className="w-full bg-neutral-900 border border-white/10 rounded-lg px-4 py-2 mt-1 text-white placeholder-white/40 focus:ring-2 focus:ring-lime-400/50 focus:outline-none"
            />
          </div>
        )}

        {/* Phone */}
        {contactMethod === "phone" && (
          <div>
            <label htmlFor="phone" className="text-sm text-white/70">
              Phone Number
            </label>
            <div className="flex mt-1">
              <select
                name="countryCode"
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                className="bg-neutral-900 border border-white/10 rounded-l-lg px-3 py-2 text-sm text-white"
              >
                {countryCodes.map(({ code, country }) => (
                  <option key={code} value={code}>
                    +{code} ({country})
                  </option>
                ))}
              </select>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={phoneNumber}
                onChange={handlePhoneChange}
                placeholder="Phone Number"
                required
                className="flex-1 bg-neutral-900 border-t border-r border-b border-white/10 rounded-r-lg px-4 py-2 text-white placeholder-white/40 focus:ring-2 focus:ring-lime-400/50 focus:outline-none"
              />
            </div>
          </div>
        )}

        {/* Message */}
        <div>
          <label htmlFor="message" className="text-sm text-white/70">
            Message (optional)
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Type your message..."
            className="w-full bg-neutral-900 border border-white/10 rounded-lg px-4 py-2 h-24 resize-none text-white placeholder-white/40 focus:ring-2 focus:ring-lime-400/50 focus:outline-none mt-1"
          ></textarea>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-lime-400 hover:bg-lime-300 text-black font-semibold py-2 px-4 rounded-lg transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PopupForm;

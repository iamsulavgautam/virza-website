"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";

type PopupFormProps = {
  togglePopup: () => void;
};

const PopupForm: React.FC<PopupFormProps> = ({ togglePopup }) => {
  const [contactMethod, setContactMethod] = useState<"email" | "phone">(
    "email"
  );
  const [countryCode, setCountryCode] = useState("977");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = {
      access_key: process.env.NEXT_PUBLIC_FORM_KEY || "",

      name: (form.elements.namedItem("name") as HTMLInputElement)?.value,
      email:
        contactMethod === "email"
          ? (form.elements.namedItem("email") as HTMLInputElement)?.value
          : undefined,
      phone: contactMethod === "phone" ? phoneNumber : undefined,
      countryCode: contactMethod === "phone" ? countryCode : undefined,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        ?.value,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) setSuccess(true);
      else alert("❌ Submission failed.");
    } catch (err) {
      alert("❌ Something went wrong.");
    } finally {
      setLoading(false);
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
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="relative max-w-md w-full rounded-2xl border border-white/10 bg-neutral-950/80 backdrop-blur-lg p-6 text-white shadow-2xl"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23262626' fill-opacity='0.5'%3E%3Cpath d='M0 39L39 0H40V1L1 40H0V39Z'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
        backgroundSize: "40px 40px",
      }}
    >
      {/* Close Button */}
      {!success && (
        <button
          onClick={togglePopup}
          className="absolute top-3 right-4 text-gray-400 hover:text-lime-400 text-2xl font-light transition-colors"
          aria-label="Close"
        >
          ×
        </button>
      )}

      <AnimatePresence mode="wait">
        {success ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center py-8 text-center"
          >
            <CheckCircle className="w-12 h-12 text-lime-400 mb-3" />
            <h3 className="text-xl font-semibold">
              Message sent successfully!
            </h3>
            <p className="text-white/70 mt-1">We will reply to you soon.</p>
            <button
              onClick={togglePopup}
              className="mt-6 bg-lime-400 hover:bg-lime-300 text-black font-semibold py-2 px-4 rounded-lg transition"
            >
              Close
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <h2 className="text-2xl font-semibold text-white">Let’s Connect</h2>

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
              disabled={loading}
              className={`w-full ${
                loading
                  ? "bg-lime-300 cursor-not-allowed"
                  : "bg-lime-400 hover:bg-lime-300"
              } text-black font-semibold py-2 px-4 rounded-lg transition-colors`}
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default PopupForm;

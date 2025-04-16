"use client";
import Tag from "@/components/Tag";
import { useState } from "react";
import { Plus } from "lucide-react";

import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
  {
    question: "How is Virza different from other tech service companies?",
    answer:
      "Virza stands out by offering end-to-end digital solutions with a focus on performance, scalability, and sleek UI/UX. We combine expert development with business insight to deliver truly impactful results.",
  },
  {
    question: "Is there a learning curve to using Virza-built systems?",
    answer:
      "Not at all. We design systems that are intuitive, user-friendly, and tailored to your workflow—whether it's a mobile app, dashboard, or automation tool. We also offer full onboarding and support.",
  },
  {
    question: "How do you handle updates and version control?",
    answer:
      "We use modern version control and CI/CD pipelines to manage updates. Every change is documented, testable, and reversible—ensuring your systems remain stable and easy to evolve.",
  },
  {
    question: "Can your systems work offline or in low-connectivity areas?",
    answer:
      "Yes. We can build offline-first applications that sync automatically when reconnected, ideal for businesses in areas with limited internet access.",
  },
  {
    question: "How does Virza handle collaboration with clients?",
    answer:
      "We believe in transparent, agile collaboration. From planning to delivery, you’re involved through regular updates, demos, and open communication via tools like Slack, Trello, or Notion.",
  },
];
export default function Faqs() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section className="py-24 ">
      <div className="container">
        <div className="flex justify-center">
          <Tag>Faqs</Tag>
        </div>
        <h2 className="text-6xl font-medium mt-6 text-center max-w-xl mx-auto">
          Questions? We&apos;ve got{" "}
          <span className="text-lime-400">answers</span>
        </h2>

        <div className="mt-12 flex flex-col gap-6 max-w-xl mx-auto">
          {faqs.map((faq, faqIndex) => (
            <div
              key={faq.question}
              onClick={() => setSelectedIndex(faqIndex)}
              className="bg-neutral-900 rounded-2xl border border-white/10 p-6 "
            >
              <div className="flex justify-between items-start">
                <h3 className="font-medium m-0">{faq.question}</h3>
                <Plus
                  size={30}
                  className={twMerge(
                    "feather feather-plus text-lime-400 flex-shrink-0 transition duration-300",
                    selectedIndex === faqIndex && "rotate-45"
                  )}
                />
              </div>

              <AnimatePresence>
                {selectedIndex === faqIndex && (
                  <motion.div
                    initial={{
                      height: 0,
                      marginTop: 0,
                    }}
                    animate={{
                      height: "auto",
                      marginTop: 24,
                    }}
                    exit={{
                      height: 0,
                      marginTop: 0,
                    }}
                    className="overflow-hidden"
                  >
                    <p className="text-white/50">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

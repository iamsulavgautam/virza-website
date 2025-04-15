import Tag from "@/components/Tag";
import { section } from "framer-motion/client";
import { twMerge } from "tailwind-merge";

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
  const selectedIndex = 0;
  return (
    <section className="py-24">
      <div className="container">
        <div className="flex justify-center">
          <Tag>Faqs</Tag>
        </div>
        <h2 className="text-4xl font-medium mt-6 text-center max-w-xl mx-auto">
          Questions? We've got <span className="text-lime-400">answers</span>
        </h2>
        <div className="mt-12 flex flex-col gap-6 max-w-xl mx-auto">
          {faqs.map((faq, faqIndex) => (
            <div
              key={faq.question}
              className="bg-neutral-900 rounded-2xl border border-white/10 p-6 "
            >
              <div className="flex justift-between items-center ">
                <h3 className="font-medium">{faq.question}</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={twMerge(
                    "feather feather-plus text-lime-400 flex-shrink-0",
                    selectedIndex === faqIndex && "rotate-45"
                  )}
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </div>
              <div
                className={twMerge(
                  "mt-6",
                  selectedIndex !== faqIndex && "hidden"
                )}
              >
                <p className="text-white/50">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

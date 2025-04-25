import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Virza',
  description: 'Learn how we handle your data with our privacy-first open source tools.',
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-black text-white font-sans px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-lime-400">Privacy Policy</h1>

        <p className="mb-4 text-gray-300">
          At Virza, we value your privacy and build open-source tools that minimize data collection and maximize user control.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3 text-lime-400">1. No Unnecessary Data</h2>
        <p className="mb-4 text-gray-300">
          Our apps avoid collecting personal data unless explicitly required for functionality. Any optional usage is strictly permission-based.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3 text-lime-400">2. Transparent Open Source</h2>
        <p className="mb-4 text-gray-300">
          Everything we build is open-source. You can inspect, audit, or fork our apps anytime. Nothing is hidden.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3 text-lime-400">3. Local First</h2>
        <p className="mb-4 text-gray-300">
          Most features work fully offline or locally. When server interaction is needed, it’s always clear and minimal.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3 text-lime-400">4. Got Questions?</h2>
        <p className="mb-4 text-gray-300">
          Contact us anytime. We're committed to building trust through clarity, control, and community.
        </p>
      </div>
    </main>
  );
}

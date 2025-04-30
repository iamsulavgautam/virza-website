import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Virza',
  description: 'Our Pomodoro app respects your privacy completely. We do not collect or share any data.',
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-black text-white font-sans px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-lime-400">Privacy Policy</h1>

        <p className="mb-4 text-gray-300"><strong>Effective Date:</strong> April 30, 2025</p>
        <p className="mb-4 text-gray-300"><strong>App Name:</strong> Pomodoro</p>
        <p className="mb-4 text-gray-300"><strong>Package Name:</strong> com.virza.pomodoro.pomodoro</p>
        <p className="mb-4 text-gray-300"><strong>Company:</strong> Virza</p>
        <p className="mb-4 text-gray-300"><strong>Developers:</strong> Sulav Gautam,Rijan Tamang, Pranzal Khatiwada</p>
        <p className="mb-4 text-gray-300"><strong>Google Play Publisher:</strong> Sunil Gautam</p>

        <h2 className="text-2xl font-semibold mt-8 mb-3 text-lime-400">1. No Data Collection</h2>
        <p className="mb-4 text-gray-300">
          This app does <strong>not collect</strong> any personal information, usage data, or device identifiers.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3 text-lime-400">2. No Network Usage</h2>
        <p className="mb-4 text-gray-300">
          Our app functions entirely offline. There are <strong>no internet requests</strong> or server communication involved.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3 text-lime-400">3. No Third-Party Services</h2>
        <p className="mb-4 text-gray-300">
          We do <strong>not use</strong> any third-party services, analytics tools, or advertising libraries.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3 text-lime-400">4. No Permissions Required</h2>
        <p className="mb-4 text-gray-300">
          The app does <strong>not request</strong> any permissions from the user or access sensitive system features.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3 text-lime-400">5. Contact Us</h2>
        <p className="mb-4 text-gray-300">
          For any questions or concerns, contact us at: <span className="text-white font-medium">pranzal@virza.tech</span>
        </p>
        <p className="mb-4 text-gray-400">
          Website: <a href="https://virza.tech" className="text-sky-400 hover:underline" target="_blank">https://virza.tech</a>
        </p>

        <p className="text-sm text-gray-500 mt-8">
          *This privacy policy is provided to comply with Google Play requirements. This app does not collect, share, or store any user data.
        </p>
      </div>
    </main>
  );
}

import { Container } from '../components/shared/container';

export const PrivacyPolicyPage = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-950 text-gray-200 overflow-hidden">
      {/* Абстрактные фоновые элементы */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-1/5 w-3 h-48 bg-gradient-to-b from-pink-700 to-transparent transform rotate-12 opacity-20 animate-pulse"></div>
        <div className="absolute top-1/4 right-1/4 w-48 h-3 bg-gradient-to-r from-indigo-600 to-transparent transform -rotate-45 opacity-30"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-64 bg-gradient-to-t from-blue-600 to-transparent transform rotate-45 opacity-25"></div>
        <div className="absolute top-1/2 right-1/5 w-32 h-32 border-2 border-fuchsia-600 rounded-full opacity-10 animate-spin-slow"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-gradient-to-tr from-purple-700 via-pink-700 to-transparent rounded-full opacity-15 animate-ping"></div>
      </div>

      <Container className="relative z-10 py-24 lg:py-32">
        {/* Заголовок */}
        <header className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-400 drop-shadow-lg">
            BIABIA
          </h1>
          <p className="mt-4 text-xl max-w-3xl mx-auto text-gray-400 leading-relaxed">
            Your ultimate music sanctuary — where beats meet emotion, and every sound tells a story.
          </p>
        </header>

        {/* Основной контент */}
        <section className="max-w-4xl mx-auto space-y-16">
          {/* Пункт 1 */}
          <article className="bg-gray-900/70 rounded-3xl p-10 shadow-xl border border-purple-700 hover:scale-[1.03] transition-transform duration-300">
            <h2 className="text-3xl font-bold mb-4 text-pink-500">1. What Data We Collect</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              At BIABIA, we value your privacy deeply. We collect minimal information necessary to enhance your experience: device type, browser, session duration, and interaction data — always anonymously and securely.
            </p>
            <p className="text-gray-400 leading-relaxed">
              We do not collect sensitive personal data such as your name, email, or location unless you explicitly provide it (e.g., newsletter subscription). Your trust powers our rhythm.
            </p>
          </article>

          {/* Пункт 2 */}
          <article className="bg-gray-900/70 rounded-3xl p-10 shadow-xl border border-indigo-700 hover:scale-[1.03] transition-transform duration-300">
            <h2 className="text-3xl font-bold mb-4 text-indigo-400">2. How We Use Your Data</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Your data helps us create a personalized music journey — recommending playlists, stories, and beats that resonate with your vibe.
            </p>
            <p className="text-gray-400 leading-relaxed">
              We analyze anonymous usage trends to improve BIABIA’s performance, fix bugs, and design fresh features that keep you engaged with the music you love.
            </p>
          </article>

          {/* Пункт 3 */}
          <article className="bg-gray-900/70 rounded-3xl p-10 shadow-xl border border-pink-600 hover:scale-[1.03] transition-transform duration-300">
            <h2 className="text-3xl font-bold mb-4 text-pink-400">3. Your Rights & Control</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              BIABIA empowers you to own your data. At any time, you can request access to your data, correct inaccuracies, or ask for deletion.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Reach out to us via our <a href="/contacts" className="text-pink-500 underline">contact page</a> — your privacy is our priority.
            </p>
          </article>

          {/* Пункт 4 */}
          <article className="bg-gray-900/70 rounded-3xl p-10 shadow-xl border border-violet-600 hover:scale-[1.03] transition-transform duration-300">
            <h2 className="text-3xl font-bold mb-4 text-violet-400">4. Updates to Privacy Policy</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              As BIABIA evolves, so may this policy. We commit to transparent updates — we’ll notify you of significant changes and encourage regular review to keep you informed.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Your continued use of BIABIA after changes means you accept the updated terms.
            </p>
          </article>
        </section>

        {/* Контактный блок */}
        <section className="mt-24 text-center max-w-3xl mx-auto">
          <h3 className="text-4xl font-extrabold text-white mb-6">Questions about your privacy?</h3>
          <p className="text-gray-400 mb-8 text-lg leading-relaxed">
            We’re here to help you enjoy music worry-free. Contact our dedicated support team anytime for privacy inquiries or assistance.
          </p>
          <a
            href="/contacts"
            className="inline-block px-12 py-4 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 rounded-full text-white font-semibold shadow-lg hover:scale-105 transform transition-all duration-300"
          >
            Contact Support
          </a>
        </section>

        {/* Подвал */}
        <footer className="mt-32 max-w-4xl mx-auto flex justify-between text-sm text-gray-500">
          <p>© 2025 BIABIA — Feel the music, own the moment.</p>
          <p>Last updated: June 2025</p>
        </footer>
      </Container>

      {/* Анимации */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 35s linear infinite;
        }
      `}</style>
    </div>
  );
};

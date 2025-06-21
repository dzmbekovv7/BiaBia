import { Container } from './container';

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white overflow-hidden">
      {/* Декорации футуризма */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-500 opacity-20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-[60%] right-10 w-16 h-16 bg-emerald-400 opacity-10 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute top-0 right-1/3 w-1 h-32 bg-gradient-to-b from-cyan-400 to-transparent rotate-45 opacity-20"></div>
        <div className="absolute bottom-0 left-1/4 w-12 h-12 border-2 border-teal-500 rounded-full opacity-20 animate-spin-slow"></div>
        <div className="absolute top-[40%] left-[20%] w-20 h-20 border-2 border-cyan-500 rounded-full animate-spin-slow-reverse opacity-10"></div>
      </div>

      <Container>
        <div className="py-24 space-y-20">
          {/* ЛОГО + ТЕКСТ */}
          <div className="text-center space-y-6">
            <h2 className="text-5xl font-extrabold tracking-tight">
              <span className="text-white">BIA</span>
              <span className="text-cyan-400">BIA</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              We shape the intersection of <span className="text-cyan-400 font-semibold">technology</span>, <span className="text-emerald-400 font-semibold">architecture</span>, and <span className="text-sky-400 font-semibold">design</span> — engineering tomorrow’s cities and ideas.
            </p>
          </div>

          {/* 2 БЛОКА */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* ЛЕВЫЙ */}
            <div className="bg-gradient-to-br from-slate-800/30 to-gray-800/30 p-8 rounded-3xl border border-cyan-600 shadow-xl transform -rotate-2 hover:rotate-0 transition duration-300">
              <h3 className="text-3xl font-bold mb-4 text-white">Why BIABIA?</h3>
              <ul className="space-y-3 text-gray-400 text-lg">
                <li>🏗️ Smart infrastructure insights every week</li>
                <li>📊 Real case studies from architects and engineers</li>
                <li>🌐 Urban innovation trends, delivered straight to you</li>
              </ul>
            </div>

            {/* ПРАВЫЙ */}
            <div className="bg-gradient-to-br from-cyan-900/30 to-teal-900/30 p-8 rounded-3xl border border-emerald-600 shadow-xl transform rotate-3 hover:rotate-0 transition duration-300">
              <h3 className="text-3xl font-bold mb-4 text-white">Join the Network</h3>
              <p className="text-gray-300 mb-6 text-lg">
                Subscribe for expert insights, futuristic strategies, and exclusive resources.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-5 py-3 rounded-lg bg-gray-800/60 border border-cyan-500 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
                />
                <button className="bg-gradient-to-r from-cyan-600 to-emerald-600 px-6 py-3 rounded-lg font-semibold hover:scale-105 hover:shadow-lg transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* КОПИРАЙТ */}
          <div className="text-center text-gray-500 text-sm pt-10 border-t border-gray-800">
            © {new Date().getFullYear()} BIABIA. All rights reserved. Engineered with precision.
          </div>
        </div>
      </Container>
    </footer>
  );
}

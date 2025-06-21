import { Container } from '../components/shared/container'

export function AboutPage() {
	return (
		<div className='min-h-screen bg-gradient-to-br from-gray-950 to-gray-950 '>
			{/* Dynamic floating particles */}
			<div className='fixed inset-0 pointer-events-none overflow-hidden'>
				<div className='absolute top-20 left-1/4 w-2 h-40 bg-gradient-to-b from-violet-500 to-transparent transform rotate-12 opacity-30 animate-pulse'></div>
				<div className='absolute top-1/3 right-1/4 w-32 h-2 bg-gradient-to-r from-emerald-500 to-transparent transform -rotate-45 opacity-40'></div>
				<div className='absolute bottom-1/4 left-1/3 w-1 h-48 bg-gradient-to-t from-pink-500 to-transparent transform rotate-45 opacity-35'></div>
				<div className='absolute top-1/2 right-1/6 w-24 h-24 border-2 border-cyan-300 transform rotate-45 opacity-20 animate-spin-slow'></div>
			</div>

			<Container className='relative  py-12 lg:py-20'>
				{/* Hero Introduction Section */}
	<section className="mb-24 lg:mb-4 overflow-hidden relative px-6 lg:px-20 py-24">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
    
    {/* Левый блок — Текст о BIABIA */}
    <div className="lg:w-1/2 space-y-10">
      <h2 className="text-5xl sm:text-6xl font-extrabold leading-tight tracking-tight bg-gradient-to-r from-cyan-400 to-emerald-400 text-transparent bg-clip-text">
        BIABIA:
        <br />
        Architecting the Future
      </h2>
      <p className="text-gray-300 text-lg leading-relaxed max-w-md">
        Join a movement shaping smart cities, bold infrastructure, and the digital foundations of tomorrow.
      </p>
      <p className="text-gray-400 max-w-md">
        From AI-powered design to sustainable urban planning — BIABIA is where innovation meets structure.
      </p>
      <a
        href="/about"
        className="inline-block mt-4 px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-600 to-emerald-500 hover:from-cyan-700 hover:to-emerald-600 transition-transform transform hover:scale-105 font-semibold shadow-lg"
      >
        Learn More
      </a>
    </div>

    {/* Правый блок — Иллюстрация + детали */}
    <div className="lg:w-1/2 relative group">
      <div className="rounded-3xl overflow-hidden border border-cyan-700/20 shadow-[0_10px_60px_rgba(0,255,255,0.1)] transform transition-transform duration-700 group-hover:scale-[1.03]">
        <img
          src="https://images.ctfassets.net/v7wr16nrr0mz/2NbBeQcEp2PVWXO6m9tkVe/00ff0465ddc313684a7e99930a4f627e/smart-architecture-image2.jpg?w=1920&h=1080&fit=fill&f=center&fm=webp"
          alt="Smart Architecture"
          className="w-full h-auto object-cover"
          draggable={false}
        />
      </div>

      {/* Цитата в стиле tech */}
      <blockquote className="absolute bottom-6 right-6 bg-gray-900/70 backdrop-blur-sm rounded-xl p-6 max-w-sm text-sm italic text-cyan-300 shadow-md">
        "The future belongs to those who build it." — BIABIA Manifesto
      </blockquote>

      {/* Акценты */}
      <div className="absolute top-6 left-6 w-4 h-4 bg-cyan-500 rounded-full opacity-70 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-3 h-3 bg-emerald-400 rounded-full opacity-50 animate-bounce"></div>
      <div className="absolute top-16 right-16 w-5 h-5 bg-cyan-300 rounded-full opacity-60 animate-ping"></div>
    </div>
  </div>
</section>
<section className="text-white py-28 px-6 lg:px-20 relative overflow-hidden">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-16">
    <div className="lg:w-1/2 relative group">
      <div className="rounded-3xl overflow-hidden shadow-2xl border border-cyan-700/30 transform transition duration-700 group-hover:scale-[1.03]">
        <img
          src="https://assets.weforum.org/editor/briCgO2M4-m98uSKc9SFkSZ11MDmfq4-PMejpoJcqQE.jpg"
          alt="Futuristic building"
          className="w-full h-auto object-cover"
        />
      </div>
      <blockquote className="absolute -bottom-8 right-0 bg-gray-900/70 p-5 rounded-xl shadow-lg max-w-md text-sm text-cyan-300 italic backdrop-blur-md">
        "We don’t predict the future — we build it."
      </blockquote>
    </div>
    <div className="lg:w-1/2 space-y-10">
      <h2 className="text-5xl lg:text-6xl font-extrabold leading-tight bg-gradient-to-r from-cyan-400 to-emerald-500 text-transparent bg-clip-text">
        Our Vision:
        <br />
        Building Bold Futures
      </h2>
      <p className="text-gray-300 text-lg leading-relaxed">
        At BIABIA, we believe that every structure tells a story. Our mission is to build smarter, cleaner, and more human-centric systems that shape how we live, move, and connect.
      </p>
      <p className="text-gray-400 leading-relaxed">
        From intelligent urban design to responsive architecture and digital infrastructure — we pioneer solutions that redefine cities, industries, and possibilities.
      </p>
    </div>
  </div>

  {/* Декоративные элементы */}
  <div className="absolute top-20 left-10 w-36 h-36 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
  <div className="absolute bottom-10 right-20 w-24 h-24 bg-emerald-400/10 rounded-full blur-2xl animate-bounce"></div>
</section>
<section className="bg-white py-28 px-6 lg:px-24 rounded-full text-gray-900">
  <div className="max-w-7xl mx-auto text-center mb-20">
    <h2 className="text-4xl lg:text-5xl font-extrabold mb-6">
      What Drives <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">BIABIA</span>
    </h2>
    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
      We are more than engineers or designers — we are visionaries building sustainable ecosystems, one smart layer at a time.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
    {/* Feature 1 */}
    <div className="bg-gradient-to-br from-indigo-50 to-white border border-purple-200 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
      <div className="w-14 h-14 mb-4 bg-purple-500 text-white rounded-full flex items-center justify-center text-2xl shadow-md">
        🏗️
      </div>
      <h3 className="text-xl font-bold mb-2">Smart Infrastructure</h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        From urban mobility to intelligent buildings, we design infrastructure that adapts to real-time needs.
      </p>
    </div>

    {/* Feature 2 */}
    <div className="bg-gradient-to-br from-pink-50 to-white border border-pink-200 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
      <div className="w-14 h-14 mb-4 bg-pink-500 text-white rounded-full flex items-center justify-center text-2xl shadow-md">
        🧠
      </div>
      <h3 className="text-xl font-bold mb-2">Human-Centered AI</h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        BIABIA's systems learn from people — not replace them. We create tools that empower, not automate away.
      </p>
    </div>

    {/* Feature 3 */}
    <div className="bg-gradient-to-br from-emerald-50 to-white border border-emerald-200 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
      <div className="w-14 h-14 mb-4 bg-emerald-500 text-white rounded-full flex items-center justify-center text-2xl shadow-md">
        ♻️
      </div>
      <h3 className="text-xl font-bold mb-2">Sustainable by Default</h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        We bake eco-efficiency into every decision — from materials to microchips.
      </p>
    </div>
  </div>
</section>

		
				{/* Team Section with Geometric Cards */}
<section className="mt-[80px] py-24 px-8 lg:px-24 bg-black text-white overflow-hidden">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-16">
    {/* Левый блок — Заголовок и описание */}
    <div className="lg:w-1/3 space-y-8">
      <h2 className="text-5xl font-extrabold leading-tight bg-gradient-to-r from-cyan-400 to-emerald-400 text-transparent bg-clip-text">
        Meet the<br />BIABIA Core
      </h2>
      <p className="text-lg text-gray-300 leading-relaxed">
        The minds behind the innovation. Our team fuses design, data, and infrastructure to build digital systems that move the world forward.
      </p>
      <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full" />
    </div>

    {/* Правый блок — Команда */}
    <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-10">
      {[
        {
          name: "Amina Sydykova",
          role: "System Architect",
          desc: "Leads the structure of BIABIA’s digital framework — balancing scale, performance, and adaptability.",
          img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&auto=format&fit=crop&w=150&h=150&crop=face",
          accentFrom: "from-cyan-500",
          accentTo: "to-emerald-500"
        },
        {
          name: "Daniel Kurban",
          role: "AI & Data Strategist",
          desc: "Transforms complex data into real-time decisions. Architect of BIABIA’s predictive systems.",
          img: "https://images.unsplash.com/photo-1603415526960-f7e0328a1e33?q=80&auto=format&fit=crop&w=150&h=150&crop=face",
          accentFrom: "from-purple-500",
          accentTo: "to-fuchsia-500"
        },
        {
          name: "Malika Tursunova",
          role: "UX Systems Designer",
          desc: "Builds futuristic interfaces with logic and beauty. She makes complex systems feel human.",
          img: "https://images.unsplash.com/photo-1583337130417-3346a1d3a5fd?q=80&auto=format&fit=crop&w=150&h=150&crop=face",
          accentFrom: "from-pink-500",
          accentTo: "to-rose-500"
        },
        {
          name: "Alex Tanabayev",
          role: "Infrastructure Lead",
          desc: "Handles the core infrastructure — from cloud to edge — ensuring everything stays fast, secure, and online.",
          img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&auto=format&fit=crop&w=150&h=150&crop=face",
          accentFrom: "from-blue-500",
          accentTo: "to-indigo-600"
        }
      ].map(({ name, role, desc, img, accentFrom, accentTo }, i) => (
        <div key={i} className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-transform hover:scale-[1.02]">
          {/* Верхний индикатор */}
          <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-1 rounded-full bg-gradient-to-r ${accentFrom} ${accentTo}`} />
          
          {/* Аватар */}
          <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-gray-800 shadow-lg mx-auto mb-5">
            <img src={img} alt={name} className="w-full h-full object-cover" />
          </div>

          {/* Имя */}
          <h3 className="text-2xl font-bold text-center mb-1">{name}</h3>

          {/* Роль */}
          <p className={`text-center text-transparent bg-clip-text bg-gradient-to-r ${accentFrom} ${accentTo} font-semibold mb-4`}>
            {role}
          </p>

          {/* Описание */}
          <p className="text-sm text-gray-400 text-center leading-relaxed">{desc}</p>

          {/* Номер */}
          <div className="absolute top-4 left-4 bg-gray-800 text-white rounded-full w-9 h-9 flex items-center justify-center font-mono text-sm font-bold">
            {i + 1 < 10 ? `0${i + 1}` : i + 1}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>



				{/* Bottom decorative elements */}
				<div className='flex justify-center space-x-8'>
					<div className='w-32 h-1 bg-gradient-to-r from-transparent via-violet-500 to-transparent'></div>
					<div className='w-2 h-2 bg-violet-500 transform rotate-45'></div>
					<div className='w-32 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent'></div>
				</div>
			</Container>
		</div>
	)
}

// Add styles to head if not already present
if (typeof document !== 'undefined' && !document.getElementById('about-page-styles')) {
	const style = document.createElement('style')
	style.id = 'about-page-styles'
	style.textContent = `
		/* Custom animation for slow spin */
		@keyframes spin-slow {
			from { 
				transform: rotate(0deg); 
			}
			to { 
				transform: rotate(360deg); 
			}
		}

		.animate-spin-slow {
			animation: spin-slow 20s linear infinite;
		}

		/* Responsive adjustments for clip-path */
		@media (max-width: 768px) {
			[style*="clip-path"] {
				clip-path: none !important;
			}
		}

		/* Ensure proper spacing on mobile */
		@media (max-width: 640px) {
			.transform.skew-x-12,
			.transform.-skew-x-12 {
				transform: none !important;
			}
		}
	`
	document.head.appendChild(style)
}
export function AboutSection() {
	return (
		<section className="relative w-full bg-white overflow-hidden py-24">
			{/* Декоративные элементы */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute top-10 left-1/3 w-36 h-36 bg-gradient-to-br from-indigo-300 to-teal-400 rounded-full blur-3xl opacity-40"></div>
				<div className="absolute bottom-10 right-1/4 w-28 h-28 bg-gradient-to-tr from-purple-300 to-blue-400 rounded-full blur-2xl opacity-30"></div>
			</div>

			<div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
				{/* Верхний заголовок */}
				<div className="mb-20">
					<h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
						Cities Built for People —
						<span className="block bg-gradient-to-r from-indigo-700 via-teal-600 to-blue-600 bg-clip-text text-transparent">
							By Visionary Design.
						</span>
					</h2>
					<p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto font-medium">
						From sustainable masterplans to human-centric architecture — we turn cities into living ecosystems of innovation and inclusion.
					</p>
				</div>

				{/* Картинки и центральный текст */}
				<div className="flex flex-col md:flex-row justify-center items-center gap-14">
					{/* Левая картинка */}
					<div className="md:w-1/3">
						<img
							src="https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?auto=format&fit=crop&w=800&q=80"
							alt="Urban design"
							className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
						/>
					</div>

					{/* Текст в центре */}
					<div className="md:w-1/3 text-left">
						<h3 className="text-3xl font-bold text-indigo-700 mb-5">
							The Future of Cities Starts Here
						</h3>
						<p className="text-gray-700 leading-relaxed text-lg">
							We create smarter, greener, and more resilient urban spaces. Every blueprint is a step toward better living, deeper connection, and environmental harmony.
						</p>
						<p className="mt-4 text-gray-600">
							Whether it’s reimagining transportation, revitalizing public spaces, or engineering smarter infrastructure — we build for people.
						</p>
					</div>

					{/* Правая картинка */}
					<div className="md:w-1/3">
						<img
							src="https://images.unsplash.com/photo-1508459855340-fb63ac591728?auto=format&fit=crop&w=800&q=80"
							alt="Architectural model"
							className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
						/>
					</div>
				</div>

				{/* Нижняя часть — блог / проекты */}
				<div className="mt-24 bg-gradient-to-r from-indigo-700 to-teal-600 text-white px-10 py-14 rounded-3xl shadow-2xl">
					<h3 className="text-4xl font-extrabold mb-6 leading-tight">
						🏙 Explore Our Urban Vision
					</h3>
					<p className="text-xl max-w-3xl mx-auto font-light">
						Learn how we’re transforming cities worldwide — from blueprint to skyline. Our stories reveal the people, processes, and ideas shaping tomorrow’s urban life.
					</p>

					<a
						href="/projects"
						className="inline-block mt-10 px-8 py-4 bg-white text-indigo-700 font-bold text-lg rounded-full hover:bg-gray-100 transition"
					>
						Explore Projects
					</a>
				</div>
			</div>
		</section>
	);
}

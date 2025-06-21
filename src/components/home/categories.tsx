import { useGetArticles } from '@/hooks/useArticles';

export function CategoriesSection() {
	const { data: articles, isLoading } = useGetArticles();
	const categories = [...new Set(articles?.map(article => article.type))];

	return (
		<section className="relative bg-gradient-to-br from-[#1c1c1e] via-[#2e2e38] to-[#202124] text-white py-28 overflow-hidden">
			{/* Декоративные световые элементы */}
			<div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[50vw] h-[50vw] bg-teal-500 opacity-10 blur-[100px] rounded-full" />
			<div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-400 opacity-10 blur-3xl rounded-full" />

			{/* Заголовок */}
			<div className="relative z-10 max-w-4xl mx-auto px-6 text-center mb-20">
				<h2 className="text-[2.8rem] md:text-[4rem] font-extrabold leading-tight bg-gradient-to-r from-cyan-400 via-emerald-500 to-teal-400 text-transparent bg-clip-text">
					Shaping Cities,
					<br />
					Designing the Future.
				</h2>
				<p className="mt-6 text-lg text-gray-300 font-light leading-relaxed tracking-wide">
					Explore categories covering modern architecture, urban evolution, infrastructure innovation, and sustainable engineering.
				</p>
			</div>

			{/* Категории */}
			<div className="relative z-10 max-w-7xl mx-auto px-6">
				{isLoading ? (
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
						{Array.from({ length: 8 }).map((_, i) => (
							<div
								key={i}
								className="h-48 bg-gray-800/40 animate-pulse rounded-[50%_50%_30%_70%/60%_30%_70%_40%] shadow-inner"
							/>
						))}
					</div>
				) : (
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
						{categories.map((category) => (
							<a
								key={category}
								href={`/blog?type=${encodeURIComponent(category || '')}`}
								className="relative group block bg-gradient-to-br from-slate-800 via-gray-700 to-zinc-800 text-white px-6 py-8 rounded-[32px] shadow-xl hover:shadow-2xl transition-transform hover:scale-105 duration-500 border border-white/10"
							>
								<div className="absolute top-4 right-4 w-4 h-4 bg-white rounded-full opacity-10 group-hover:scale-125 transition-transform" />
								<h3 className="text-2xl font-semibold tracking-wider text-white mb-2 group-hover:text-teal-300 transition-colors">
									{category?.toUpperCase()}
								</h3>
								<p className="text-sm text-gray-400">
									Explore the future of <span className="text-teal-400">{category}</span>.
								</p>
							</a>
						))}
					</div>
				)}
			</div>

			{/* Bottom accent line */}
			<div className="mt-24 flex justify-center">
				<div className="w-56 h-1 bg-gradient-to-r from-transparent via-teal-500 to-transparent rounded-full animate-pulse" />
			</div>
		</section>
	);
}

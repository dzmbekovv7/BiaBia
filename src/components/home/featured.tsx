import { useGetArticles } from '@/hooks/useArticles'
import ArticleCardSmall from '../shared/article-card/article-card-small'
import ArticleCardSmallSkeleton from '../shared/article-card/article-card-small-skeleton'

export function FeaturedArticlesSection() {
	const { data: articles, isLoading } = useGetArticles();

	return (
		<section className="relative bg-gradient-to-br from-gray-50 via-slate-100 to-zinc-100 py-20 lg:py-32 overflow-hidden">
			{/* Декоративные элементы */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute top-16 left-1/4 w-2 h-40 bg-gradient-to-b from-teal-500 to-transparent transform rotate-12 opacity-20 animate-pulse"></div>
				<div className="absolute bottom-1/4 left-1/6 w-1 h-52 bg-gradient-to-t from-indigo-500 to-transparent transform rotate-45 opacity-25"></div>
				<div className="absolute top-1/2 right-1/3 w-32 h-32 border-2 border-teal-300 transform rotate-45 opacity-10 animate-spin-slow"></div>
			</div>

			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Заголовок */}
				<div className="text-center mb-20 relative px-6">
					<h2 className="relative text-6xl sm:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-slate-700 to-teal-600 select-none">
						<span className="block mb-2">FEATURED INSIGHTS</span>
						<span className="block text-teal-600 drop-shadow-md">
							ARCHITECTURE & URBANISM
						</span>
					</h2>

					<div className="mt-10 max-w-3xl mx-auto">
						<p className="text-xl sm:text-2xl font-medium text-gray-700">
							Discover how cities evolve, how design shapes human experience, and how engineering redefines the future of urban life.
						</p>
						<p className="mt-4 text-lg text-gray-500 italic">
							Innovation meets structure — curated articles from visionaries, designers, and builders.
						</p>
					</div>
				</div>

				{/* Сетка статей */}
				<div className="relative z-10 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
					{isLoading
						? Array.from({ length: 3 }).map((_, index) => (
								<div key={index} className="relative">
									<div className="bg-gray-200 rounded-xl shadow-lg p-4 animate-pulse">
										<ArticleCardSmallSkeleton />
									</div>
								</div>
						  ))
						: articles?.slice(0, 3).map((article, index) => (
								<div key={article.id} className="relative group">
									<div className="relative overflow-hidden rounded-xl shadow-xl transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
										<div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent z-0"></div>
										<div className="relative z-10 p-5 bg-white bg-opacity-90 rounded-xl">
											<ArticleCardSmall article={article} />
										</div>

										<div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-teal-500 shadow-md flex items-center justify-center text-white text-xs font-bold">
											{String(index + 1).padStart(2, '0')}
										</div>
									</div>
								</div>
						  ))}
				</div>

				{/* Кнопка — CTA */}
				<div className="mt-20 text-center">
					<a
						href="/blog"
						className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-gray-800 to-teal-600 text-white font-bold text-lg lg:text-xl rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110"
					>
						Explore More Articles
						<svg
							className="ml-3 w-5 h-5"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
						</svg>
					</a>
				</div>
			</div>
		</section>
	);
}


// Добавляем стили в head если их еще нет
if (typeof document !== 'undefined' && !document.getElementById('featured-articles-styles')) {
	const style = document.createElement('style')
	style.id = 'featured-articles-styles'
	style.textContent = `
		/* Clip-path utilities for geometric shapes */
		.clip-path-slant-left {
			clip-path: polygon(0 0, 100% 0, 85% 100%, 0 100%);
		}

		.clip-path-slant-right {
			clip-path: polygon(15% 0, 100% 0, 100% 100%, 0 100%);
		}

		.clip-path-corner-cut {
			clip-path: polygon(0 0, 100% 0, 100% 85%, 15% 100%, 0 15%);
		}

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

		/* Responsive adjustments */
		@media (max-width: 768px) {
			.clip-path-slant-left,
			.clip-path-slant-right,
			.clip-path-corner-cut {
				clip-path: none;
			}
		}

		/* Ensure article cards have proper height and text wrapping */
		@media (min-width: 1024px) {
			.featured-article-card {
				min-height: 400px;
			}
		}

		@media (min-width: 768px) and (max-width: 1023px) {
			.featured-article-card {
				min-height: 380px;
			}
		}

		@media (max-width: 767px) {
			.featured-article-card {
				min-height: 350px;
			}
		}
	`
	document.head.appendChild(style)
}

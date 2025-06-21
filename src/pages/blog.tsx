import ArticleCardMedium from '@/components/shared/article-card/article-card-medium'
import { Container } from '@/components/shared/container'
import { useGetArticles } from '@/hooks/useArticles'
import { XIcon } from 'lucide-react'
import { Link, useSearchParams } from 'react-router'

export function BlogPage() {
	const [searchParams] = useSearchParams()
	const type = searchParams.get('type') || ''
	const { data: articles = [], isLoading, isError } = useGetArticles()

	if (isLoading) {
		return (
			<div className='relative min-h-screen bg-gradient-to-br from-gray-50 via-indigo-50 to-purple-50 overflow-hidden'>
				{/* Dynamic floating particles */}
				<div className='absolute inset-0 pointer-events-none'>
					<div className='absolute top-20 left-1/4 w-2 h-32 bg-gradient-to-b from-violet-500 to-transparent transform rotate-12 opacity-40 animate-pulse'></div>
					<div className='absolute top-1/3 right-1/4 w-24 h-2 bg-gradient-to-r from-emerald-500 to-transparent transform -rotate-45 opacity-30'></div>
					<div className='absolute bottom-1/4 left-1/3 w-1 h-48 bg-gradient-to-t from-pink-500 to-transparent transform rotate-45 opacity-50'></div>
				</div>

				<Container>
					<section className='relative z-10 py-20'>
						{/* Loading state with geometric design */}
						<div className='text-center space-y-8'>
							<div className='relative inline-block'>
								<h1 className='text-4xl lg:text-6xl font-black text-gray-900 leading-tight'>
									<span className='block'>ЗАГРУЖАЕМ</span>
									<span className='block text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-pink-600 -mt-2'>
										КОНТЕНТ
									</span>
								</h1>
								<div className='absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-violet-500 to-transparent transform -translate-y-1/2 opacity-50'></div>
							</div>
							
							{/* Loading spinner */}
							<div className='flex justify-center'>
								<div className='w-16 h-16 border-4 border-violet-200 border-t-violet-600 rounded-full animate-spin'></div>
							</div>
						</div>

						{/* Loading skeleton grid */}
						<div className='mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
							{Array.from({ length: 6 }).map((_, index) => (
								<div key={index} className='group relative'>
									<div className={`
										relative h-64 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse shadow-xl transform hover:scale-105 transition-all duration-500
										${index % 3 === 0 
											? 'clip-path-slant-left'
											: index % 3 === 1
											? 'clip-path-corner-cut'
											: 'clip-path-slant-right'
										}
									`}>
									</div>
									<div className={`
										absolute -top-2 -right-2 w-8 h-8 rounded-full animate-pulse
										${index % 2 === 0 ? 'bg-gray-300' : 'bg-gray-400'}
									`}></div>
								</div>
							))}
						</div>
					</section>
				</Container>
			</div>
		)
	}

	if (isError) {
		return (
			<div className='relative min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 overflow-hidden'>
				{/* Error state particles */}
				<div className='absolute inset-0 pointer-events-none'>
					<div className='absolute top-20 left-1/4 w-2 h-32 bg-gradient-to-b from-red-500 to-transparent transform rotate-12 opacity-40 animate-pulse'></div>
					<div className='absolute top-1/3 right-1/4 w-24 h-2 bg-gradient-to-r from-orange-500 to-transparent transform -rotate-45 opacity-30'></div>
				</div>

				<Container>
					<section className='relative z-10 py-20'>
						<div className='text-center space-y-8'>
							<div className='relative inline-block'>
								<h1 className='text-4xl lg:text-6xl font-black text-gray-900 leading-tight'>
									<span className='block'>ОШИБКА</span>
									<span className='block text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600 -mt-2'>
										ЗАГРУЗКИ
									</span>
								</h1>
								<div className='absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent transform -translate-y-1/2 opacity-50'></div>
							</div>
							
							<p className='text-xl text-gray-700 max-w-2xl mx-auto'>
								Не удалось загрузить статьи. Пожалуйста, попробуйте позже или 
								<span className='bg-yellow-200 px-2 py-1 rounded-lg font-bold text-gray-900 mx-1'>
									обновите страницу
								</span>
							</p>

							<div className='pt-6'>
								<button 
									onClick={() => window.location.reload()}
									className='group inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-orange-700 text-white font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300'
									style={{clipPath: 'polygon(0 0, 90% 0, 100% 30%, 90% 100%, 0 100%)'}}>
									<span>Обновить страницу</span>
									<div className='ml-4 w-6 h-6 bg-white/20 flex items-center justify-center transform group-hover:rotate-180 transition-transform duration-300'>
										<svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
											<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' />
										</svg>
									</div>
								</button>
							</div>
						</div>
					</section>
				</Container>
			</div>
		)
	}

	const filteredArticles = type
		? articles?.filter(article => article.type === type)
		: articles

	return (
		<div className='relative min-h-screen bg-white overflow-hidden'>
		

			<Container>
<section className='relative z-10 py-16 lg:py-24 '>
					
				  {/* Title */}
  <div className='text-center mb-16'>
    <div className='relative inline-block'>

      {/* Main Title */}
      <div className='relative overflow-hidden'>
        <h1 className='text-5xl sm:text-6xl lg:text-7xl font-black leading-none text-white'>
          <span className='block transform hover:-translate-y-1 text-black transition-transform duration-500'>BIABIA</span>
          <span className='block text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-indigo-500 transform hover:translate-y-1 transition-transform duration-500 -mt-3'>
            BLOG
          </span>
        </h1>

        {/* Divider */}
      </div>

    
    </div>

    {/* Subtitle */}
    <div className='mt-8 space-y-4 px-4'>
      <p className='text-xl lg:text-2xl text-indigo-200 font-medium leading-relaxed max-w-4xl mx-auto'>
        Explore the rhythm of creativity, <br className='hidden sm:block' />
        where every post resonates with the <span className='text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-400 font-bold px-2 py-1 rounded-lg inline-block'>
          soul of sound
        </span>.
      </p>
    </div>
  </div>

					{/* Filter display */}
					{type && (
						<div className='mb-12'>
							<div className='flex justify-center'>
								<div className='relative group'>
									{/* Background geometric accent */}
									<div className='absolute -inset-4 bg-gradient-to-r from-violet-100 to-pink-100 transform rotate-1 opacity-60 group-hover:rotate-0 transition-transform duration-300'></div>
									
									<div className='relative bg-white p-6 shadow-xl border-l-4 border-violet-500'
										 style={{clipPath: 'polygon(0 0, 95% 0, 100% 15%, 95% 100%, 0 100%)'}}>
										
										<div className='flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left'>
											<div className='flex items-center space-x-3'>
												<div className='w-4 h-4 bg-violet-500 transform rotate-45'></div>
												<span className='text-lg font-bold text-gray-700'>Фильтр по категории:</span>
											</div>
											
											<div className='flex items-center gap-3 flex-wrap justify-center sm:justify-start'>
												<span 
													className='text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-pink-600'
													style={{overflowWrap: "anywhere"}}
												>
													{type}
												</span>
												
												<Link 
													to='/blog'
													className='group/btn flex items-center justify-center w-10 h-10 bg-gradient-to-r from-violet-600 to-purple-700 hover:from-violet-700 hover:to-purple-800 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300'
												>
													<XIcon 
														className='w-5 h-5 text-white group-hover/btn:rotate-90 transition-transform duration-300' 
														strokeWidth={2} 
													/>
												</Link>
											</div>
										</div>
									</div>

									{/* Floating accent */}
									<div className='absolute -top-2 -right-2 w-6 h-6 bg-emerald-500 rounded-full animate-pulse'></div>
								</div>
							</div>
						</div>
					)}

					{/* Articles grid or empty state */}
					{filteredArticles && filteredArticles.length > 0 ? (
						<div className='relative'>
							{/* Central floating element */}
							<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0'>
								<div className='w-32 h-32 border-4 border-violet-200 transform rotate-45 opacity-10 animate-spin-slow'></div>
								<div className='absolute inset-0 w-20 h-20 border-2 border-pink-200 rounded-full opacity-20 animate-ping'></div>
							</div>

							{/* Articles grid with geometric design */}
							<div className='relative z-10 grid gap-8 md:gap-10 lg:gap-12 grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
								{filteredArticles?.map((article) => (
									<div key={article.id} className='group relative'>
										{/* Geometric container with dynamic shapes */}
										<div className={`
											relative overflow-hidden transform hover:scale-105 hover:rotate-1 transition-all duration-500 min-h-[400px] flex flex-col
										
										`}>
											{/* Inner glow effect */}
											<div className='absolute inset-0 bg-gradient-to-br from-white/50 to-transparent group-hover:from-white/70 transition-all duration-500'></div>
											
											{/* Article card wrapper */}
											<div className='relative z-10 p-3 flex-1 flex flex-col'>
												<ArticleCardMedium article={article} />
											</div>

											{/* Animated background pattern */}
											<div className='absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500'>
												<div className='absolute top-4 left-4 w-6 h-6 border-2 border-violet-500 transform rotate-45 group-hover:rotate-90 transition-transform duration-500'></div>
												<div className='absolute bottom-4 right-4 w-4 h-4 bg-pink-500 rounded-full group-hover:scale-150 transition-transform duration-500'></div>
												<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-1 bg-emerald-500 group-hover:w-16 transition-all duration-500'></div>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					) : (
						/* Empty state with geometric design */
						<div className='text-center py-20'>
							<div className='relative inline-block'>
								{/* Background accent */}
								<div className='absolute -inset-8 bg-gradient-to-r from-gray-100 to-indigo-100 transform rotate-2 opacity-60'></div>
								
								<div className='relative bg-white p-12 shadow-xl'
									 style={{clipPath: 'polygon(0 0, 90% 0, 100% 20%, 90% 100%, 0 100%)'}}>
									
									<div className='space-y-6'>
										{/* Empty state icon */}
										<div className='flex justify-center'>
											<div className='w-24 h-24 bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center shadow-lg transform rotate-45'>
												<div className='text-4xl font-black text-gray-600 transform -rotate-45'>∅</div>
											</div>
										</div>

										<h3 className='text-3xl lg:text-4xl font-bold text-gray-900'>
											<span className='block'>Статьи не найдены</span>
											{type && (
												<span className='block text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-pink-600 text-xl mt-2'>
													для категории "{type}"
												</span>
											)}
										</h3>
										
										<p className='text-lg text-gray-600 max-w-md mx-auto'>
											Попробуйте изменить фильтр или вернитесь к просмотру всех статей
										</p>

										{type && (
											<div className='pt-4'>
												<Link
													to='/blog'
													className='group inline-flex items-center px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-700 text-white font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300'
													style={{clipPath: 'polygon(0 0, 85% 0, 100% 30%, 85% 100%, 0 100%)'}}>
													<span>Показать все статьи</span>
													<div className='ml-3 w-5 h-5 bg-white/20 flex items-center justify-center transform group-hover:translate-x-1 transition-transform duration-300'>
														<svg className='w-3 h-3' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
															<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7l5 5m0 0l-5 5m5-5H6' />
														</svg>
													</div>
												</Link>
											</div>
										)}
									</div>
								</div>

								{/* Floating decorative elements */}
								<div className='absolute -top-4 -right-4 w-6 h-6 bg-yellow-400 transform rotate-45 animate-bounce'></div>
								<div className='absolute -bottom-4 -left-4 w-4 h-4 bg-emerald-500 rounded-full animate-pulse'></div>
							</div>
						</div>
					)}

					{/* Bottom decorative line */}
					<div className='mt-20 flex justify-center space-x-8'>
						<div className='w-24 h-1 bg-gradient-to-r from-transparent via-violet-500 to-transparent'></div>
						<div className='w-2 h-2 bg-violet-500 transform rotate-45'></div>
						<div className='w-24 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent'></div>
					</div>
				</section>
			</Container>
		</div>
	)
}

// Добавляем стили в head если их еще нет
if (typeof document !== 'undefined' && !document.getElementById('blog-page-styles')) {
	const style = document.createElement('style')
	style.id = 'blog-page-styles'
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

		.clip-path-diamond {
			clip-path: polygon(0 10%, 90% 0, 100% 90%, 10% 100%);
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
			.clip-path-corner-cut,
			.clip-path-diamond {
				clip-path: none;
				border-radius: 12px;
			}
		}

		/* Ensure proper spacing and heights */
		@media (min-width: 1280px) {
			.blog-article-card {
				min-height: 400px;
			}
		}

		@media (min-width: 768px) and (max-width: 1279px) {
			.blog-article-card {
				min-height: 380px;
			}
		}

		@media (max-width: 767px) {
			.blog-article-card {
				min-height: 350px;
			}
		}
	`
	document.head.appendChild(style)
}
import {
	ArticleComments,
	ArticleContent,
	ArticleFeatured,
	ArticleHeader,
	ArticleLatest,
	ArticleNavigation,
	ArticlePopular,
} from '@/components/article'
import { Container } from '@/components/shared/container'
import { useGetArticleBySlug, useGetArticles } from '@/hooks/useArticles'
import { useParams } from 'react-router'

export function ArticlePage() {
	const { slug } = useParams()

	const { data: article, isLoading: isArticleLoading } = useGetArticleBySlug(
		slug || ''
	)
	const { data: articles, isLoading: isArticlesLoading } = useGetArticles()

	if (isArticleLoading || isArticlesLoading) {
		return (
			<div className='relative min-h-screen bg-gradient-to-br from-gray-50 via-indigo-50 to-purple-50 overflow-hidden'>
				{/* Dynamic loading particles */}
				<div className='absolute inset-0 pointer-events-none'>
					<div className='absolute top-20 left-1/4 w-2 h-32 bg-gradient-to-b from-violet-500 to-transparent transform rotate-12 opacity-40 animate-pulse'></div>
					<div className='absolute top-1/3 right-1/4 w-24 h-2 bg-gradient-to-r from-emerald-500 to-transparent transform -rotate-45 opacity-30'></div>
					<div className='absolute bottom-1/4 left-1/3 w-1 h-48 bg-gradient-to-t from-pink-500 to-transparent transform rotate-45 opacity-50'></div>
				</div>
				
				<Container>
			<div className="relative z-10 py-20 flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-900 text-white px-6">
  {/* Анимированная геометрия — в стиле виниловой пластинки */}
  <div className="relative w-36 h-36 mx-auto mb-10">
    {/* Внешний вращающийся градиентный круг */}
    <div
      className="absolute inset-0 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 animate-spin-slow"
      style={{
        clipPath:
          'polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)',
      }}
    ></div>
    {/* Внутренний белый круг с логотипом "MUSIC" */}
    <div className="absolute inset-6 bg-white rounded-full flex items-center justify-center">
      <div className="text-3xl font-extrabold text-indigo-900 select-none tracking-widest">MUSIC</div>
    </div>
  </div>

  {/* Текстовая часть */}
  <div className="max-w-lg text-center space-y-4">
    <h2 className="text-3xl font-bold tracking-tight drop-shadow-lg">
      Elevate Your Musical Experience
    </h2>
    <p className="text-lg text-indigo-200 leading-relaxed">
      Immerse yourself in exclusive sounds and beats that inspire and move. 
      We're loading the freshest tracks and stories straight to your soul.
    </p>
    <p className="italic text-indigo-300 text-sm">
      * Stay tuned and feel the rhythm *
    </p>
  </div>
</div>

<style>
  {`
    @keyframes spin-slow {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
    .animate-spin-slow {
      animation: spin-slow 10s linear infinite;
    }
  `}
</style>

				</Container>
			</div>
		)
	}

	if (!article) {
		return (
			<div className='relative min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 overflow-hidden'>
				{/* Error particles */}
				<div className='absolute inset-0 pointer-events-none'>
					<div className='absolute top-1/4 left-1/4 w-32 h-32 border-2 border-red-400 transform rotate-45 opacity-20 animate-spin-slow'></div>
					<div className='absolute bottom-1/3 right-1/4 w-2 h-40 bg-gradient-to-t from-red-500 to-transparent opacity-30'></div>
				</div>
				
				<Container>
					<div className='relative z-10 py-20 flex items-center justify-center min-h-screen'>
						<div className='text-center space-y-8'>
							<div className='w-24 h-24 mx-auto bg-red-500 transform rotate-45 flex items-center justify-center'>
								<div className='text-white text-2xl font-bold transform -rotate-45'>404</div>
							</div>
							<div className='space-y-4'>
								<h2 className='text-4xl font-black text-white'>Height Not Found</h2>
								<p className='text-gray-300 text-lg'>This article has disappeared into the clouds</p>
								<a href='/blog' className='inline-block mt-6 px-8 py-3 bg-gradient-to-r from-violet-600 to-purple-700 text-white font-bold hover:scale-105 transform transition-all duration-300'>
									Return to Explorations
								</a>
							</div>
						</div>
					</div>
				</Container>
			</div>
		)
	}

	return (
		<div className='relative bg-gradient-to-br from-white via-gray-50 to-indigo-50 min-h-screen overflow-hidden'>
			{/* Dynamic floating particles */}
			<div className='absolute inset-0 pointer-events-none'>
				<div className='absolute top-16 left-1/6 w-2 h-40 bg-gradient-to-b from-violet-500 to-transparent transform rotate-12 opacity-30 animate-pulse'></div>
				<div className='absolute top-1/4 right-1/5 w-28 h-2 bg-gradient-to-r from-emerald-500 to-transparent transform -rotate-45 opacity-40'></div>
				<div className='absolute bottom-1/3 left-1/4 w-1 h-52 bg-gradient-to-t from-pink-500 to-transparent transform rotate-45 opacity-35'></div>
				<div className='absolute top-1/2 right-1/6 w-24 h-24 border-2 border-cyan-300 transform rotate-45 opacity-20 animate-spin-slow'></div>
				<div className='absolute bottom-1/4 right-1/3 w-16 h-16 bg-violet-100 transform rotate-45 opacity-30'></div>
			</div>

			<Container>
				<div className='relative z-10 py-12 lg:py-20'>
					{/* Hero Section with Geometric Design */}
					<div className='relative mb-16'>
						{/* Background geometric accent */}
						<div className='absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-violet-600/10 via-purple-600/5 to-pink-600/10 transform -skew-y-1 origin-top-left'></div>
						
						{/* Article Header with enhanced styling */}
						<div className='relative bg-white/80 backdrop-blur-sm shadow-xl border-l-8 border-violet-500 p-8 lg:p-12 mb-12 transform hover:scale-[1.02] transition-all duration-500'
							 style={{clipPath: 'polygon(0 0, 97% 0, 100% 15%, 97% 100%, 0 100%)'}}>
							<ArticleHeader article={article} />
							
							{/* Floating accent elements */}
							<div className='absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 transform rotate-45 flex items-center justify-center shadow-lg'>
								<div className='w-3 h-3 bg-white rounded-full'></div>
							</div>
							<div className='absolute -bottom-3 -left-3 w-8 h-8 bg-emerald-500 rounded-full shadow-lg animate-pulse'></div>
						</div>
					</div>

					{/* Main Content Grid with Revolutionary Layout */}
					<div>
						{/* Left Column - Article Content */}
						<div className='xl:col-span-8 order-2 xl:order-1'>
							<div className='space-y-12'>
								{/* Article Navigation with Geometric Design */}
								<div className='relative bg-gradient-to-br from-indigo-50 to-purple-50 p-6 lg:p-8 transform hover:scale-[1.01] transition-all duration-300'
									 style={{clipPath: 'polygon(0 0, 95% 0, 100% 20%, 95% 100%, 0 100%)'}}>
									
									{/* Navigation accent line */}
									<div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500'></div>
									
									<ArticleNavigation currentArticle={article} articles={articles} />
									
									{/* Floating decorative element */}
									<div className='absolute -top-2 -right-2 w-6 h-6 bg-violet-500 transform rotate-45'></div>
								</div>

								{/* Article Content with Enhanced Container */}
								<div className='relative'>
									{/* Content background with geometric design */}
									<div className='absolute -inset-4 bg-gradient-to-br from-white via-gray-50 to-indigo-50 transform rotate-1 opacity-60 shadow-2xl'></div>
									
									<div className='relative bg-white/90 backdrop-blur-sm p-8 lg:p-12 shadow-xl border-t-4 border-violet-500'>
										<ArticleContent article={article} />
										
										{/* Content decorative elements */}
										<div className='absolute top-4 right-4 w-4 h-16 bg-gradient-to-b from-violet-500 to-transparent opacity-30'></div>
										<div className='absolute bottom-4 left-4 w-16 h-4 bg-gradient-to-r from-emerald-500 to-transparent opacity-30'></div>
									</div>
								</div>
							</div>
						</div>

						{/* Right Column - Sidebar with Futuristic Design */}
						<div className='xl:col-span-4 order-1 xl:order-2'>
							<div className='sticky top-8 space-y-8'>
								{/* Comments Section */}
								<div className='relative group'>
									<div className='absolute -inset-2 bg-gradient-to-br from-violet-600/20 to-purple-600/20 transform rotate-1 group-hover:rotate-2 transition-transform duration-300 opacity-60'></div>
									<div className='relative bg-white p-6 lg:p-8 shadow-xl border-l-4 border-violet-500 transform group-hover:scale-[1.02] transition-all duration-300'
										 style={{clipPath: 'polygon(0 0, 100% 0, 100% 90%, 10% 100%, 0 90%)'}}>
										<ArticleComments article={article} />
										
										{/* Section accent */}
										<div className='absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-violet-500 to-purple-700 transform rotate-45 flex items-center justify-center shadow-lg'>
											<div className='text-white text-xs font-bold transform -rotate-45'>💬</div>
										</div>
									</div>
								</div>

								{/* Latest Articles */}
								<div className='relative group'>
									<div className='absolute -inset-2 bg-gradient-to-br from-emerald-600/20 to-teal-600/20 transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300 opacity-60'></div>
									<div className='relative bg-white p-6 lg:p-8 shadow-xl border-l-4 border-emerald-500 transform group-hover:scale-[1.02] transition-all duration-300'
										 style={{clipPath: 'polygon(0 0, 90% 0, 100% 10%, 100% 100%, 0 100%)'}}>
										<ArticleLatest articles={articles} />
										
										{/* Section accent */}
										<div className='absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-700 transform rotate-45 flex items-center justify-center shadow-lg'>
											<div className='text-white text-xs font-bold transform -rotate-45'>🆕</div>
										</div>
									</div>
								</div>

								{/* Popular Articles */}
								<div className='relative group'>
									<div className='absolute -inset-2 bg-gradient-to-br from-amber-600/20 to-orange-600/20 transform rotate-1 group-hover:rotate-2 transition-transform duration-300 opacity-60'></div>
									<div className='relative bg-white p-6 lg:p-8 shadow-xl border-l-4 border-amber-500 transform group-hover:scale-[1.02] transition-all duration-300'
										 style={{clipPath: 'polygon(10% 0, 100% 0, 100% 90%, 0 100%, 0 10%)'}}>
										<ArticlePopular articles={articles} />
										
										{/* Section accent */}
										<div className='absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-700 transform rotate-45 flex items-center justify-center shadow-lg'>
											<div className='text-white text-xs font-bold transform -rotate-45'>🔥</div>
										</div>
									</div>
								</div>

								{/* Featured Articles */}
								<div className='relative group'>
									<div className='absolute -inset-2 bg-gradient-to-br from-pink-600/20 to-rose-600/20 transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300 opacity-60'></div>
									<div className='relative bg-white p-6 lg:p-8 shadow-xl border-l-4 border-pink-500 transform group-hover:scale-[1.02] transition-all duration-300'
										 style={{clipPath: 'polygon(0 0, 100% 0, 90% 100%, 0 100%)'}}>
										<ArticleFeatured articles={articles} />
										
										{/* Section accent */}
										<div className='absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-pink-500 to-rose-700 transform rotate-45 flex items-center justify-center shadow-lg'>
											<div className='text-white text-xs font-bold transform -rotate-45'>⭐</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

				</div>
			</Container>
		</div>
	)
}

// Add styles to head if they don't exist yet
if (typeof document !== 'undefined' && !document.getElementById('article-page-styles')) {
	const style = document.createElement('style')
	style.id = 'article-page-styles'
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

		/* Enhanced hover effects */
		.group:hover .group-hover:rotate-2 {
			transform: rotate(2deg);
		}

		.group:hover .group-hover:-rotate-2 {
			transform: rotate(-2deg);
		}

		.group:hover .group-hover:scale-[1.02] {
			transform: scale(1.02);
		}

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

		/* Responsive adjustments */
		@media (max-width: 768px) {
			.clip-path-slant-left,
			.clip-path-slant-right,
			.clip-path-corner-cut {
				clip-path: none;
			}
			
			/* Simplify geometric shapes on mobile */
			[style*="clip-path"] {
				clip-path: none !important;
			}
		}

		/* Smooth scroll behavior */
		html {
			scroll-behavior: smooth;
		}

		/* Enhanced focus states for accessibility */
		.focus-visible:focus {
			outline: 2px solid #8b5cf6;
			outline-offset: 2px;
		}

		/* Performance optimizations */
		.backdrop-blur-sm {
			backdrop-filter: blur(4px);
			-webkit-backdrop-filter: blur(4px);
		}

		/* Sticky sidebar optimization */
		.sticky {
			position: -webkit-sticky;
			position: sticky;
		}

		/* Button hover optimizations */
		a[class*="hover:scale-"] {
			will-change: transform;
		}
	`
	document.head.appendChild(style)
}

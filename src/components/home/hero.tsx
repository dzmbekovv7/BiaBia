import { Container } from '@/components/shared/container'

export function Hero() {

	return (
		<section className='relative min-h-screen bg-white overflow-hidden'>

			{/* Абстрактные элементы фона */}
			<div className='absolute inset-0 pointer-events-none'>
				<div className='absolute top-20 left-1/3 w-40 h-40 bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 opacity-20 rounded-full blur-2xl animate-pulse'></div>
				<div className='absolute bottom-10 right-1/4 w-64 h-64 bg-gradient-to-br from-teal-300 via-blue-500 to-violet-600 opacity-20 rounded-full blur-3xl animate-spin-slow'></div>
				<div className='absolute top-1/2 left-10 w-20 h-20 bg-indigo-300 rounded-full opacity-10 blur-xl animate-bounce'></div>
			</div>

			{/* Фоновое изображение */}
			<div className='absolute inset-0 z-0'>
				<img
					src='https://online.maryville.edu/wp-content/uploads/sites/97/2023/09/computer-programmers-1.jpg'
					alt='Urban design'
					className='w-full h-full object-cover opacity-30'
				/>
			</div>

			<Container className='relative z-10 flex items-center min-h-screen py-20 px-6'>
				<div className='max-w-6xl mx-auto w-full'>
					<div className='flex flex-col gap-14'>

						<h1 className='text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-900 via-purple-700 to-teal-500 leading-tight tracking-tight'>
							Reimagining the Cities of Tomorrow
						</h1>

						<p className='text-xl md:text-2xl text-gray-700 max-w-3xl'>
							We are a multidisciplinary collective of architects, engineers, and urban thinkers transforming global cities into sustainable, smart, and inclusive spaces for all.
						</p>

						<div className='grid md:grid-cols-3 gap-8 text-white'>

							<div className='p-6 bg-gradient-to-tr from-indigo-700 via-blue-800 to-teal-700 rounded-2xl shadow-xl hover:scale-105 transition-transform'>
								<h3 className='text-2xl font-bold mb-3'>Sustainable Urbanism</h3>
								<p>
									Designing eco-friendly cities that prioritize green spaces, public transport, and energy-efficient buildings.
								</p>
							</div>

							<div className='p-6 bg-gradient-to-tr from-purple-800 via-indigo-800 to-sky-700 rounded-2xl shadow-xl hover:scale-105 transition-transform'>
								<h3 className='text-2xl font-bold mb-3'>Smart Infrastructure</h3>
								<p>
									Integrating cutting-edge technology into urban planning to enhance connectivity, mobility, and public services.
								</p>
							</div>

							<div className='p-6 bg-gradient-to-tr from-teal-800 via-blue-900 to-indigo-700 rounded-2xl shadow-xl hover:scale-105 transition-transform'>
								<h3 className='text-2xl font-bold mb-3'>Inclusive Architecture</h3>
								<p>
									Building spaces that are accessible and welcoming, designed for people from all walks of life and backgrounds.
								</p>
							</div>

						</div>

						<div className='flex gap-6 mt-8 flex-wrap'>
							<a
								href='/projects'
								className='px-10 py-4 bg-indigo-800 text-white font-semibold rounded-xl hover:bg-indigo-700 transition'
							>
								Our Projects
							</a>
							<a
								href='/team'
								className='px-10 py-4 border-2 border-indigo-700 text-indigo-800 font-semibold rounded-xl hover:bg-indigo-700 hover:text-white transition'
							>
								Meet the Team
							</a>
						</div>

					</div>
				</div>
			</Container>
		</section>
	)
}

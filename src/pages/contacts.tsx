import { ContactForm } from '../components/shared/contact-form'

export function ContactsPage() {
  return (
    <>
      {/* Hero Section с анимированным текстом */}
   <section className="relative bg-gradient-to-tr from-gray-900 via-gray-800 to-blue-900 py-28 overflow-hidden">
  <div className="absolute inset-0 pointer-events-none">
    {/* Вертикальные архитектурные световые линии */}
    <div className="absolute top-16 left-12 w-2 h-48 bg-gradient-to-b from-blue-500 to-transparent rounded-xl opacity-25 animate-pulse"></div>
    <div className="absolute top-1/4 right-1/3 w-48 h-3 bg-gradient-to-r from-gray-600 to-transparent rounded-xl opacity-20 animate-pulse"></div>
    <div className="absolute bottom-28 left-1/4 w-4 h-56 bg-gradient-to-t from-indigo-600 to-transparent rounded-xl opacity-15 animate-pulse"></div>
    {/* Крупный круг с архитектурным контуром */}
    <div className="absolute top-1/2 right-1/2 w-52 h-52 border-4 border-cyan-500 rounded-full opacity-10 animate-spin-slow"></div>
    {/* Стилевой элемент — схематичный контур здания */}
    <svg
      className="absolute bottom-20 right-16 w-20 h-20 stroke-cyan-400 opacity-25 animate-bounce"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="M3 21V3h18v18H3z"></path>
      <path d="M9 21V9h6v12"></path>
      <path d="M12 3v6"></path>
    </svg>
  </div>

  <div className="relative max-w-4xl mx-auto px-6 text-center text-white">
    <h1
      className="text-5xl md:text-6xl font-extrabold tracking-tight mb-8 leading-tight
        bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent
        transition-colors duration-1000 cursor-default"
    >
      BIABIA
    </h1>
    <p
      className="max-w-lg mx-auto text-base md:text-lg font-light opacity-90 leading-relaxed
        text-white/90"
    >
      Explore the future of architecture and urban spaces — <br className="hidden sm:block" />
      where design meets innovation and cities come alive.
    </p>

    <p className="mt-4 max-w-md mx-auto text-sm italic opacity-70 text-cyan-300">
      “Architecture is the learned game, correct and magnificent, of forms assembled in the light.” – Le Corbusier
    </p>

    <div className="mt-14 flex justify-center items-center space-x-10 animate-pulse">
      <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 rounded-full shadow-lg"></div>
      <div className="w-6 h-6 bg-cyan-500 rounded-full shadow-lg animate-pulse"></div>
      <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 via-blue-400 to-cyan-400 rounded-full shadow-lg"></div>
    </div>
  </div>
</section>

{/* Основной блок с формой и текстом */}
<section className="relative bg-gradient-to-br from-gray-50 via-gray-100 to-cyan-100 py-24 px-8 sm:px-16 lg:px-28">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
    {/* Форма слева */}
    <div
      className="bg-white rounded-3xl shadow-2xl p-12 relative overflow-hidden
      animate-fade-slide-left"
    >
      <div className="absolute -top-14 -right-14 w-48 h-48 bg-cyan-400 opacity-25 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-12 left-10 w-32 h-32 bg-blue-400 opacity-20 rounded-full blur-xl animate-pulse"></div>
      <ContactForm />
    </div>

    {/* Текст справа */}
    <div className="pl-6 sm:pl-12 animate-fade-slide-right">
      <h2
        className="text-4xl font-extrabold text-gray-900 mb-8
        bg-gradient-to-r from-cyan-500 to-blue-700 bg-clip-text text-transparent
        animate-gradient-move"
      >
        Connect & Shape Urban Futures
      </h2>
      <p
        className="text-gray-700 mb-6 leading-relaxed text-lg drop-shadow-md animate-fade-in"
      >
        Share your ideas, projects, and visions for sustainable, innovative, and human-centric urban environments.
      </p>
      <p
        className="text-gray-600 italic mb-12 max-w-md animate-fade-in delay-200"
      >
        “Cities have the capability of providing something for everybody, only because, and only when, they are created by everybody.” – Jane Jacobs
      </p>

      <div className="flex space-x-6">
        <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 animate-pulse"></div>
        <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full shadow-md animate-pulse"></div>
        <div className="w-24 h-10 bg-gradient-to-r from-indigo-600 to-cyan-500 rounded-xl shadow-lg animate-pulse"></div>
      </div>
    </div>
  </div>
</section>

{/* Footer CTA */}
<section className="bg-blue-900 py-16 text-center text-white">
  <h3
    className="text-3xl font-extrabold mb-5
      bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent"
  >
    JOIN THE <span className="text-cyan-400">URBAN REVOLUTION</span>
  </h3>
  <p className="max-w-lg mx-auto mb-10 opacity-80 text-lg">
    Stay updated with the latest trends, projects, and insights in architecture and urban design. Subscribe and build the cities of tomorrow.
  </p>
  <div className="flex justify-center space-x-12 animate-pulse">
    <div className="w-28 h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 rounded-full shadow-lg"></div>
    <div className="w-4 h-4 bg-cyan-400 rounded-full animate-pulse shadow-lg"></div>
    <div className="w-28 h-1 bg-gradient-to-r from-indigo-500 via-blue-400 to-cyan-400 rounded-full shadow-lg"></div>
  </div>
</section>


      {/* Кастомные анимации */}
      <style>{`
        @keyframes fadeSlideUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeSlideLeft {
          0% {
            opacity: 0;
            transform: translateX(40px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeSlideRight {
          0% {
            opacity: 0;
            transform: translateX(-40px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-fade-slide-up {
          animation: fadeSlideUp 1s ease forwards;
        }
        .animate-fade-slide-left {
          animation: fadeSlideLeft 1s ease forwards;
        }
        .animate-fade-slide-right {
          animation: fadeSlideRight 1s ease forwards;
        }
        .animate-fade-in {
          animation: fadeIn 1.2s ease forwards;
        }
        .animate-gradient-move {
          background-size: 200% 200%;
          animation: gradientMove 4s ease infinite;
        }
      `}</style>
    </>
  )
}

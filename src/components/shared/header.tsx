import { useLocation, Link } from 'react-router';
import { Container } from './container';
import { useState } from 'react';

const LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contacts', href: '/contacts' },
  { label: 'Privacy', href: '/privacy-policy' },
];

export function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // Фон и цвета по маршрутам
  let headerBg = 'bg-white';
  let textColor = 'text-gray-900';
  let linkHoverColor = 'hover:text-indigo-600';
  let linkBgHover = 'hover:bg-indigo-100';

  switch (location.pathname) {
    case '/':
    case '/blog':
      headerBg = 'bg-white';
      textColor = 'text-gray-900';
      linkHoverColor = 'hover:text-indigo-600';
      linkBgHover = 'hover:bg-indigo-100';
      break;
    case '/about':
      headerBg = 'bg-gradient-to-br from-gray-950 to-gray-950';
      textColor = 'text-white';
      linkHoverColor = 'hover:text-pink-400';
      linkBgHover = 'hover:bg-pink-900/30';
      break;
    case '/contacts':
      headerBg = 'bg-gradient-to-tr from-gray-900 via-gray-800 to-blue-900';
      textColor = 'text-white';
      linkHoverColor = 'hover:text-cyan-300';
      linkBgHover = 'hover:bg-cyan-900/30';
      break;
    case '/privacy-policy':
      headerBg = 'bg-gradient-to-br from-black via-gray-900 to-purple-950';
      textColor = 'text-white';
      linkHoverColor = 'hover:text-purple-400';
      linkBgHover = 'hover:bg-purple-900/30';
      break;
  }

  return (
    <header className={`relative overflow-hidden transition-colors duration-700 shadow-md ${headerBg}`}>
      <Container>
        <div className="relative z-10 py-5 lg:py-8 flex items-center justify-between">
          {/* Логотип слева */}
          <div
            className={`text-4xl font-extrabold tracking-tight cursor-default select-none ${textColor} drop-shadow-md`}
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            BiaBia
          </div>

          {/* Навигация справа */}
          <nav className="hidden md:flex gap-8">
            {LINKS.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`
                  relative px-5 py-2 rounded-lg text-xl font-semibold transition 
                  ${textColor} ${linkHoverColor} ${linkBgHover} 
                  hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400
                  active:scale-95
                  `}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
                {/* Эффект "подчеркивания" при ховере */}
                <span className={`absolute left-1/2 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full transition-all group-hover:w-full group-focus:w-full`} />
              </Link>
            ))}
          </nav>

          {/* Кнопка меню для мобилки */}
          <button
            className={`md:hidden flex flex-col justify-center items-center gap-1 w-8 h-8 z-50 focus:outline-none
              ${menuOpen ? 'text-pink-400' : textColor}
            `}
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span
              className={`block w-6 h-0.5 rounded bg-current transform transition duration-300 ${
                menuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 rounded bg-current transition duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 rounded bg-current transform transition duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}
            ></span>
          </button>
        </div>
      </Container>

      {/* Мобильное меню */}
      <div
        className={`fixed top-0 left-0 w-full h-full z-40 transform transition-transform duration-300 ease-in-out md:hidden
          ${menuOpen ? 'translate-x-0' : '-translate-x-full'}
          ${location.pathname === '/about' || location.pathname === '/contacts' || location.pathname === '/privacy-policy'
            ? 'bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900'
            : 'bg-white'}
        `}
      >
        <Container>
          <nav className="flex flex-col items-center justify-center min-h-screen gap-10">
            {LINKS.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`
                  text-3xl font-semibold transition 
                  ${
                    location.pathname === '/about' || location.pathname === '/contacts' || location.pathname === '/privacy-policy'
                      ? 'text-white hover:text-pink-400'
                      : 'text-gray-900 hover:text-indigo-600'
                  }
                  hover:scale-105 active:scale-95
                `}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </Container>
      </div>
    </header>
  );
}

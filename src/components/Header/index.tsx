'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const today = new Date().toLocaleDateString('pt-BR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white border-b border-gray-200">

      <div className="max-w-6xl mx-auto px-3 sm:px-4 py-2 sm:py-3 flex items-center justify-between text-[10px] sm:text-xs font-semibold text-gray-500 uppercase tracking-wider">
        <span className="hidden sm:inline">{today}</span>
        <span className="sm:hidden">{new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' })}</span>
        <div className="space-x-2 sm:space-x-4 hidden md:flex">
          <span className="hover:text-red-700 cursor-pointer">Assine</span>
          <span className="hover:text-red-700 cursor-pointer">Newsletter</span>
          <span className="hover:text-red-700 cursor-pointer">Login</span>
        </div>
        <div className="md:hidden flex space-x-3 text-xs">
          <span className="hover:text-red-700 cursor-pointer">Login</span>
        </div>
      </div>
      

      <div className="max-w-6xl mx-auto px-3 sm:px-4 py-4 sm:py-6 text-center border-t border-gray-100">
        <Link href="/" className="inline-block">
          <h1 className="serif-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black tracking-tighter hover:text-red-700 transition-colors">
            NEWSHUB<span className="text-red-700">.</span>
          </h1>
        </Link>
        <p className="mt-1 sm:mt-2 text-[10px] sm:text-xs md:text-sm text-gray-400 font-medium tracking-widest uppercase px-2">
          Excelência em Jornalismo Independente
        </p>
      </div>

      <nav className="bg-black text-white">
        <div className="max-w-6xl mx-auto px-3 sm:px-4">
          {/* Desktop Navigation */}
          <ul className="hidden md:flex overflow-x-auto space-x-6 py-3 text-xs font-bold uppercase tracking-widest">
            <li className="whitespace-nowrap hover:text-red-400">
              <Link href="/">Página Inicial</Link>
            </li>
            <li className="whitespace-nowrap hover:text-red-400 cursor-pointer">Política</li>
            <li className="whitespace-nowrap hover:text-red-400 cursor-pointer">Economia</li>
            <li className="whitespace-nowrap hover:text-red-400 cursor-pointer">Tecnologia</li>
            <li className="whitespace-nowrap hover:text-red-400 cursor-pointer">Esportes</li>
            <li className="whitespace-nowrap hover:text-red-400 cursor-pointer">Cultura</li>
            <li className="whitespace-nowrap hover:text-red-400 cursor-pointer">Saúde</li>
          </ul>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="w-full flex items-center justify-between py-3 text-xs font-bold uppercase tracking-widest"
              aria-label="Toggle menu"
            >
              <span>Menu</span>
              <svg
                className={`w-5 h-5 transition-transform ${isMobileMenuOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isMobileMenuOpen && (
              <ul className="pb-3 space-y-2 text-xs font-bold uppercase tracking-widest border-t border-gray-800 pt-2">
                <li className="hover:text-red-400">
                  <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>Página Inicial</Link>
                </li>
                <li className="hover:text-red-400 cursor-pointer">Política</li>
                <li className="hover:text-red-400 cursor-pointer">Economia</li>
                <li className="hover:text-red-400 cursor-pointer">Tecnologia</li>
                <li className="hover:text-red-400 cursor-pointer">Esportes</li>
                <li className="hover:text-red-400 cursor-pointer">Cultura</li>
                <li className="hover:text-red-400 cursor-pointer">Saúde</li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}


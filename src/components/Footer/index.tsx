export default function Footer() {
    return (
      <footer className="bg-white border-t border-gray-200 py-6 sm:py-8 md:py-12 mt-6 sm:mt-8 md:mt-12">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4 sm:gap-6">
          <div className="mb-4 md:mb-0">
            <h1 className="serif-title text-xl sm:text-2xl font-black text-black tracking-tighter">
              NEWSHUB<span className="text-red-700">.</span>
            </h1>
            <p className="text-[10px] sm:text-xs text-gray-400 font-medium uppercase tracking-widest mt-1">
              Desde 2025 • Todos os direitos reservados.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gray-500">
            <span className="hover:text-red-700 cursor-pointer whitespace-nowrap">Quem Somos</span>
            <span className="hover:text-red-700 cursor-pointer whitespace-nowrap">Expediente</span>
            <span className="hover:text-red-700 cursor-pointer whitespace-nowrap">Privacidade</span>
            <span className="hover:text-red-700 cursor-pointer whitespace-nowrap">Contato</span>
          </div>
        </div>
      </footer>
    );
  }


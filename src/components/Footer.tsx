export default function Footer() {
    return (
      <footer className="bg-white border-t border-gray-200 py-12 mt-12">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-6 md:mb-0">
            <h1 className="serif-title text-2xl font-black text-black tracking-tighter">
              NEWSHUB<span className="text-red-700">.</span>
            </h1>
            <p className="text-xs text-gray-400 font-medium uppercase tracking-widest mt-1">
              Desde 2025 • Todos os direitos reservados.
            </p>
          </div>
          <div className="flex space-x-6 text-xs font-bold uppercase tracking-widest text-gray-500">
            <span className="hover:text-red-700 cursor-pointer">Quem Somos</span>
            <span className="hover:text-red-700 cursor-pointer">Expediente</span>
            <span className="hover:text-red-700 cursor-pointer">Privacidade</span>
            <span className="hover:text-red-700 cursor-pointer">Contato</span>
          </div>
        </div>
      </footer>
    );
  }
export default function Loading() {
  return (
    <section className="py-4 sm:py-6 md:py-8">
      <div className="flex items-center justify-between mb-4 sm:mb-6 md:mb-8 border-b-2 border-black pb-2">
        <h2 className="text-xs sm:text-sm font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-black">
          Manchetes do Dia
        </h2>
        <div className="flex items-center space-x-1.5 sm:space-x-2">
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-700 animate-pulse"></span>
          <span className="text-[9px] sm:text-[10px] font-bold text-gray-400 uppercase tracking-widest">Ao Vivo</span>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center py-20">
        <div className="w-12 h-12 border-4 border-gray-200 border-t-red-700 rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-500 font-medium animate-pulse">Carregando últimas notícias...</p>
      </div>
    </section>
  );
}


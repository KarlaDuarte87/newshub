import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] py-12 px-4 text-center">
      <div className="mb-8">
        <Image 
          src="/dino.png" 
          alt="Dino 404" 
          width={200} 
          height={200}
          className="object-contain brightness-0"
        />
      </div>
      <h1 className="serif-title text-6xl sm:text-7xl md:text-8xl font-black text-black mb-4">
        404
      </h1>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4">
        Ops! Página não encontrada
      </h2>
      <p className="text-gray-600 mb-8 max-w-md text-sm sm:text-base">
        A página que você está procurando não existe ou foi movida.
      </p>
      <Link 
        href="/"
        className="inline-flex items-center px-6 py-3 bg-red-700 text-white font-bold uppercase tracking-widest text-sm hover:bg-red-800 transition-colors"
      >
        Voltar para a página inicial
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </Link>
    </div>
  );
}


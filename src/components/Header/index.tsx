import Link from 'next/link';

export default function Header() {
  const today = new Date().toLocaleDateString('pt-BR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <header className="bg-white border-b border-gray-200">

      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between text-xs font-semibold text-gray-500 uppercase tracking-wider">
        <span>{today}</span>
        <div className="space-x-4 hidden md:flex">
          <span className="hover:text-red-700 cursor-pointer">Assine</span>
          <span className="hover:text-red-700 cursor-pointer">Newsletter</span>
          <span className="hover:text-red-700 cursor-pointer">Login</span>
        </div>
      </div>
      

      <div className="max-w-6xl mx-auto px-4 py-6 text-center border-t border-gray-100">
        <Link href="/" className="inline-block">
          <h1 className="serif-title text-4xl md:text-6xl font-black text-black tracking-tighter hover:text-red-700 transition-colors">
            NEWSHUB<span className="text-red-700">.</span>
          </h1>
        </Link>
        <p className="mt-2 text-sm text-gray-400 font-medium tracking-widest uppercase">
          Excelência em Jornalismo Independente
        </p>
      </div>

      <nav className="bg-black text-white">
        <div className="max-w-6xl mx-auto px-4">
          <ul className="flex overflow-x-auto space-x-6 py-3 text-xs font-bold uppercase tracking-widest">
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
        </div>
      </nav>
    </header>
  );
}


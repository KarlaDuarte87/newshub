import { fetchArticles } from '@/api/backend';
import ArticleGrid from '@/components/ArticleGrid';

export default async function Home() {

  const articles = await fetchArticles();

  return (
    <section className="py-8">
      {/* Cabeçalho da seção */}
      <div className="flex items-center justify-between mb-8 border-b-2 border-black pb-2">
        <h2 className="text-sm font-black uppercase tracking-[0.2em] text-black">
          Manchetes do Dia
        </h2>
        <div className="flex space-x-2">
          <span className="w-2 h-2 rounded-full bg-red-700 animate-pulse"></span>
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Ao Vivo</span>
        </div>
      </div>

      {/* Grid de artigos */}
      <ArticleGrid articles={articles} />
    </section>
  );
}
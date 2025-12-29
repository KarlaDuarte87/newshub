import { Article } from '@/types/article';
import ArticleCard from '@/components/ArticleCard';

interface ArticleGridProps {
  articles: Article[];
  isLoading?: boolean;
}

export default function ArticleGrid({ articles, isLoading = false }: ArticleGridProps) {
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <div className="w-12 h-12 border-4 border-gray-200 border-t-red-700 rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-500 font-medium animate-pulse">Carregando últimas notícias...</p>
      </div>
    );
  }

  if (articles.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500 text-lg">Nenhum artigo encontrado.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-8 py-8">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
}


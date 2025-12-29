import Link from 'next/link';
import Image from 'next/image';
import { Article } from '@/types/article';

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="group flex flex-col h-full bg-white border border-gray-200 rounded-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link href={`/articles/${article.slug}`} className="block relative h-48 overflow-hidden">
        <Image 
          src={article.imageUrl} 
          alt={article.title}
          width={800}
          height={450}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-red-700 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider">
            {article.category}
          </span>
        </div>
      </Link>
      
      <div className="p-5 flex flex-col flex-grow">
        <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2">
          {article.publishDate}
        </span>
        
        <Link href={`/articles/${article.slug}`} className="hover:text-red-700 transition-colors">
          <h2 className="serif-title text-xl font-bold leading-tight mb-3">
            {article.title}
          </h2>
        </Link>
        
        <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-grow">
          {article.summary}
        </p>
        
        <Link 
          href={`/articles/${article.slug}`}
          className="inline-flex items-center text-xs font-extrabold uppercase tracking-widest text-black hover:text-red-700"
        >
          Leia mais 
          <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  );
}


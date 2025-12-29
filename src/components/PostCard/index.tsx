import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/types/post';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="group flex flex-col h-full bg-white border border-gray-200 rounded-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link href={`/posts/${post.slug}`} className="block relative h-40 sm:h-44 md:h-48 overflow-hidden">
        <Image 
          src={post.imageUrl} 
          alt={post.title}
          width={800}
          height={450}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 md:top-4 md:left-4">
          <span className="bg-red-700 text-white text-[9px] sm:text-[10px] font-bold px-1.5 sm:px-2 py-0.5 sm:py-1 uppercase tracking-wider">
            {post.category}
          </span>
        </div>
      </Link>
      
      <div className="p-3 sm:p-4 md:p-5 flex flex-col flex-grow">
        <span className="text-[10px] sm:text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-1.5 sm:mb-2">
          {post.publishDate}
        </span>
        
        <Link href={`/posts/${post.slug}`} className="hover:text-red-700 transition-colors">
          <h2 className="serif-title text-lg sm:text-xl font-bold leading-tight mb-2 sm:mb-3 line-clamp-2 sm:line-clamp-3">
            {post.title}
          </h2>
        </Link>
        
        <p className="text-gray-600 text-xs sm:text-sm line-clamp-2 sm:line-clamp-3 mb-3 sm:mb-4 flex-grow">
          {post.summary}
        </p>
        
        <Link 
          href={`/posts/${post.slug}`}
          className="inline-flex items-center text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-black hover:text-red-700"
        >
          Leia mais 
          <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  );
}


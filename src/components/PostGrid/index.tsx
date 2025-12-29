import { Post } from '@/types/post';
import PostCard from '@/components/PostCard';
import ErrorMessage from '@/components/ErrorMessage';

interface PostGridProps {
  posts: Post[];
  isLoading?: boolean;
  error?: boolean;
}

export default function PostGrid({ posts, isLoading = false, error = false }: PostGridProps) {
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <div className="w-12 h-12 border-4 border-gray-200 border-t-red-700 rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-500 font-medium animate-pulse">Carregando últimas notícias...</p>
      </div>
    );
  }

  if (error) {
    return (
      <ErrorMessage 
        message="Não foi possível conectar com o servidor. Verifique sua conexão e tente recarregar a página."
      />
    );
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500 text-lg mb-2">Nenhum post encontrado.</p>
        <p className="text-gray-400 text-sm">Tente recarregar a página ou verifique sua conexão.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 sm:gap-y-8 md:gap-y-10 gap-x-4 sm:gap-x-6 md:gap-x-8 py-4 sm:py-6 md:py-8">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}


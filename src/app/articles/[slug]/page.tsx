import { fetchArticle } from '@/api/backend';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  
  const article = await fetchArticle(slug);

  if (!article) {
    notFound();
  }

  const shareUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/posts/${slug}`;
  const shareText = encodeURIComponent(article.title);

  return (
    <div className="py-8 max-w-4xl mx-auto">
      {/* Botão Voltar */}
      <Link 
        href="/" 
        className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-red-700 mb-8"
      >
        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
        </svg>
        Voltar para a listagem
      </Link>

      {/* Header do artigo */}
      <header className="mb-8">
        <span className="bg-red-700 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider mb-4 inline-block">
          {article.category}
        </span>
        <h1 className="serif-title text-4xl md:text-5xl font-black leading-tight text-black mb-6">
          {article.title}
        </h1>
        
        {/* Autor e data */}
        <div className="flex items-center space-x-4 border-t border-b border-gray-100 py-4 mb-8">
          <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
            <Image 
              src={`https://ui-avatars.com/api/?name=${encodeURIComponent(article.author)}&size=100`}
              alt={article.author}
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-bold text-black uppercase tracking-tight">Por {article.author}</p>
            <p className="text-xs text-gray-400">{article.publishDate}</p>
          </div>
        </div>
      </header>

      {/* Imagem principal */}
      <div className="mb-10 rounded-sm overflow-hidden">
        <Image 
          src={article.imageUrl} 
          alt={article.title} 
          width={800}
          height={450}
          className="w-full h-auto object-cover max-h-[500px]"
        />
        <p className="text-[10px] text-gray-400 mt-2 uppercase text-right tracking-widest">
          Foto: Reprodução / NewsHub Imagens
        </p>
      </div>

      {/* Conteúdo HTML */}
      <div 
        className="prose prose-lg max-w-none text-gray-800 leading-relaxed font-serif text-lg"
        dangerouslySetInnerHTML={{ __html: article.content }} 
      />

      {/* Footer com compartilhamento social */}
      <footer className="mt-16 pt-8 border-t border-gray-100">
        <h3 className="text-sm font-bold uppercase tracking-widest mb-4">Compartilhe esta notícia</h3>
        <div className="flex space-x-2">
          {/* Facebook */}
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8"
            aria-label="Compartilhar no Facebook"
          >
            <Image 
              src="/facebook.png" 
              alt="Facebook" 
              width={32} 
              height={32}
              className="w-8 h-8"
            />
          </a>
          
          {/* Twitter */}
          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${shareText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8"
            aria-label="Compartilhar no Twitter"
          >
            <Image 
              src="/twitter.png" 
              alt="Twitter" 
              width={32} 
              height={32}
              className="w-8 h-8"
            />
          </a>
          
          {/* WhatsApp */}
          <a
            href={`https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8"
            aria-label="Compartilhar no WhatsApp"
          >
            <Image 
              src="/whatsapp.png" 
              alt="WhatsApp" 
              width={32} 
              height={32}
              className="w-8 h-8"
            />
          </a>
          
          {/* Instagram */}
          <a
            href={`https://www.instagram.com/`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8"
            aria-label="Seguir no Instagram"
          >
            <Image 
              src="/instagram.png" 
              alt="Instagram" 
              width={32} 
              height={32}
              className="w-8 h-8"
            />
          </a>
        </div>
      </footer>
    </div>
  );
}


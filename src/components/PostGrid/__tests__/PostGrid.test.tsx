import { render, screen } from '@testing-library/react';
import PostGrid from '../index';
import { Post } from '@/types/post';

const mockPosts: Post[] = [
  {
    id: '1',
    slug: 'article-1',
    title: 'Article 1',
    summary: 'Summary 1',
    content: '<p>Content 1</p>',
    author: 'Author 1',
    publishDate: '2024-12-27',
    category: 'Tech',
    imageUrl: 'https://picsum.photos/800/450',
  },
  {
    id: '2',
    slug: 'article-2',
    title: 'Article 2',
    summary: 'Summary 2',
    content: '<p>Content 2</p>',
    author: 'Author 2',
    publishDate: '2024-12-28',
    category: 'News',
    imageUrl: 'https://picsum.photos/800/450',
  },
];

describe('PostGrid', () => {
  it('renders all posts', () => {
    render(<PostGrid posts={mockPosts} />);
    expect(screen.getByText('Article 1')).toBeInTheDocument();
    expect(screen.getByText('Article 2')).toBeInTheDocument();
  });

  it('displays loading state when isLoading is true', () => {
    render(<PostGrid posts={[]} isLoading={true} />);
    expect(screen.getByText(/Carregando últimas notícias/)).toBeInTheDocument();
  });

  it('displays empty state when posts array is empty', () => {
    render(<PostGrid posts={[]} isLoading={false} />);
    expect(screen.getByText(/Nenhum post encontrado/)).toBeInTheDocument();
  });

  it('displays error message when error is true', () => {
    render(<PostGrid posts={[]} isLoading={false} error={true} />);
    expect(screen.getByText(/Erro ao carregar conteúdo/)).toBeInTheDocument();
    expect(screen.getByText(/Não foi possível conectar com o servidor/)).toBeInTheDocument();
  });

  it('renders correct number of post cards', () => {
    const { container } = render(<PostGrid posts={mockPosts} />);
    const articles = container.querySelectorAll('article');
    expect(articles).toHaveLength(2);
  });

  it('does not show loading state when isLoading is false', () => {
    render(<PostGrid posts={mockPosts} isLoading={false} />);
    expect(screen.queryByText(/Carregando últimas notícias/)).not.toBeInTheDocument();
  });
});


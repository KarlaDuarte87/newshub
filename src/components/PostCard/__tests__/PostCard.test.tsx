import { render, screen } from '@testing-library/react';
import PostCard from '../index';
import { Post } from '@/types/post';

const mockPost: Post = {
  id: '1',
  slug: 'test-article',
  title: 'Test Article Title',
  summary: 'This is a test article summary that describes the content.',
  content: '<p>Test content</p>',
  author: 'Test Author',
  publishDate: '27 de Dezembro de 2024',
  category: 'Tecnologia',
  imageUrl: 'https://picsum.photos/800/450',
};

describe('PostCard', () => {
  it('renders post title', () => {
    render(<PostCard post={mockPost} />);
    expect(screen.getByText('Test Article Title')).toBeInTheDocument();
  });

  it('renders post summary', () => {
    render(<PostCard post={mockPost} />);
    expect(screen.getByText(/This is a test article summary/)).toBeInTheDocument();
  });

  it('renders post publish date', () => {
    render(<PostCard post={mockPost} />);
    expect(screen.getByText('27 de Dezembro de 2024')).toBeInTheDocument();
  });

  it('renders post category', () => {
    render(<PostCard post={mockPost} />);
    expect(screen.getByText('Tecnologia')).toBeInTheDocument();
  });

  it('renders link to post detail page', () => {
    render(<PostCard post={mockPost} />);
    const links = screen.getAllByRole('link');
    const detailLink = links.find(link => link.getAttribute('href') === '/posts/test-article');
    expect(detailLink).toBeInTheDocument();
  });

  it('renders "Leia mais" link', () => {
    render(<PostCard post={mockPost} />);
    expect(screen.getByText('Leia mais')).toBeInTheDocument();
  });

  it('renders article element with correct structure', () => {
    const { container } = render(<PostCard post={mockPost} />);
    const article = container.querySelector('article');
    expect(article).toBeInTheDocument();
  });
});


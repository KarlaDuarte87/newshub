import { Post } from "@/types/post";

const getApiUrl = () => {
  if (process.env.NEXT_PUBLIC_API_URL) {
    return process.env.NEXT_PUBLIC_API_URL;
  }

  return typeof window === 'undefined' 
    ? 'http://127.0.0.1:3001' 
    : 'http://localhost:3001';
};

export async function fetchPosts (): Promise<Post[]> {
    const API_URL = getApiUrl();
    try {
        const response = await fetch(`${API_URL}/posts`, {
            cache: 'no-store',
            headers: {
                'Content-Type': 'application/json',
            },
            signal: AbortSignal.timeout(10000),
        });
        
        if (!response.ok) {
            throw new Error(`Erro ao buscar posts: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        return data;
    } catch (error: any) {
        return [];
    }
}

export async function fetchPost (slug: string): Promise<Post | null> {
    const API_URL = getApiUrl();
    try {
        const response = await fetch(`${API_URL}/posts/${slug}`, {
            cache: 'no-store',
            headers: {
                'Content-Type': 'application/json',
            },
            signal: AbortSignal.timeout(10000),
        });
        if (!response.ok) {
            if (response.status === 404) {
                return null;
            }
            throw new Error(`Erro ao buscar post: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    } catch (error: any) {
        return null;
    }
}


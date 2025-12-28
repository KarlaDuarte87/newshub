import { Article } from "@/types/article";
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export async function fetchArticles () : Promise<Article[]> {
    try {
        const response = await fetch(`${API_URL}/articles`, {
            cache: 'no-store',
        });
        if (!response.ok) {
            throw new Error('Erro ao buscar artigos');
        }
        return await response.json();
    } catch (error) {
        console.error('Erro ao buscar artigos:', error);
        
        console.log ("Testando o fetch de artigos");
        return [];

    }
}

export async function fetchArticle (slug: string) : Promise<Article | null> {

    try {
        const response = await fetch(`${API_URL}/articles/${slug}`, {
            cache: 'no-store',
        });
        if (!response.ok) {
            if (response.status === 404) {
                return null;
            }
            throw new Error('Erro ao buscar artigo');
        }
        return await response.json();
    } catch (error) {
        console.error('Erro ao buscar artigo:', error);
        return null;
    }
}
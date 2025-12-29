'use client';

import { useEffect } from 'react';
import ErrorMessage from '@/components/ErrorMessage';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <ErrorMessage 
          message="Ocorreu um erro inesperado. Por favor, tente novamente."
          onRetry={reset}
        />
        <div className="text-center mt-6">
          <Link 
            href="/"
            className="text-red-700 hover:text-red-800 font-bold text-sm uppercase tracking-widest"
          >
            Voltar para a página inicial
          </Link>
        </div>
      </div>
    </div>
  );
}


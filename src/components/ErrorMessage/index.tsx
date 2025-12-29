interface ErrorMessageProps {
  message?: string;
  onRetry?: () => void;
}

export default function ErrorMessage({ 
  message = 'Ocorreu um erro ao carregar os dados. Por favor, tente novamente mais tarde.',
  onRetry 
}: ErrorMessageProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4">
      <div className="max-w-md text-center">
        <div className="mb-4">
          <svg 
            className="w-16 h-16 mx-auto text-red-700" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
            />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-gray-800 mb-2">
          Erro ao carregar conteúdo
        </h3>
        <p className="text-gray-600 text-sm mb-6">
          {message}
        </p>
        {onRetry && (
          <button
            onClick={onRetry}
            className="px-6 py-2 bg-red-700 text-white font-bold uppercase tracking-widest text-sm hover:bg-red-800 transition-colors"
          >
            Tentar novamente
          </button>
        )}
      </div>
    </div>
  );
}


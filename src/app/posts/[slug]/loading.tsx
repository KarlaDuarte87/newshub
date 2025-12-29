export default function PostLoading() {
  return (
    <div className="py-4 sm:py-6 md:py-8 max-w-4xl mx-auto px-3 sm:px-4">
      <div className="mb-4 sm:mb-6 md:mb-8">
        <div className="w-24 h-4 bg-gray-200 rounded animate-pulse"></div>
      </div>

      <header className="mb-6 sm:mb-8">
        <div className="w-20 h-6 bg-gray-200 rounded mb-3 sm:mb-4 animate-pulse"></div>
        <div className="w-full h-12 bg-gray-200 rounded mb-4 sm:mb-6 animate-pulse"></div>
        
        <div className="flex items-center space-x-3 sm:space-x-4 border-t border-b border-gray-100 py-3 sm:py-4 mb-6 sm:mb-8">
          <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse"></div>
          <div className="flex-1">
            <div className="w-32 h-4 bg-gray-200 rounded mb-2 animate-pulse"></div>
            <div className="w-24 h-3 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
      </header>

      <div className="mb-6 sm:mb-8 md:mb-10">
        <div className="w-full h-64 sm:h-80 md:h-96 bg-gray-200 rounded-sm animate-pulse"></div>
      </div>

      <div className="space-y-4">
        <div className="w-full h-4 bg-gray-200 rounded animate-pulse"></div>
        <div className="w-full h-4 bg-gray-200 rounded animate-pulse"></div>
        <div className="w-3/4 h-4 bg-gray-200 rounded animate-pulse"></div>
        <div className="w-full h-4 bg-gray-200 rounded animate-pulse"></div>
        <div className="w-5/6 h-4 bg-gray-200 rounded animate-pulse"></div>
      </div>
    </div>
  );
}


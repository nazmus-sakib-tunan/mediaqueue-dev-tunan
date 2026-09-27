const Loading = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50">
      <div className="flex flex-col items-center">

        {/* Animated Loader */}
        <div className="relative flex h-16 w-16 items-center justify-center">
          <div className="absolute h-16 w-16 animate-spin rounded-full border-4 border-slate-200 border-t-blue-600"></div>

          <div className="h-7 w-7 rounded-full bg-blue-600 animate-pulse"></div>
        </div>

        {/* Text */}
        <p className="mt-5 text-sm font-medium text-slate-600">
          Finding the best tutors...
        </p>

        {/* Animated dots */}
        <div className="mt-2 flex gap-1">
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-blue-600"></span>
          <span
            className="h-1.5 w-1.5 animate-bounce rounded-full bg-blue-600"
            style={{ animationDelay: "150ms" }}
          ></span>
          <span
            className="h-1.5 w-1.5 animate-bounce rounded-full bg-blue-600"
            style={{ animationDelay: "300ms" }}
          ></span>
        </div>

      </div>
    </div>
  );
};

export default Loading;
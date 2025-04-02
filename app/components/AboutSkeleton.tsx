const AboutSkeleton = () => (
    <div className="bg-base-200 p-10 rounded-lg shadow-lg pt-20">
      <h1 className="text-5xl font-bold mb-10 text-left">About Me</h1>
      <div className="hero-content flex-col lg:flex-row items-center gap-10">
        {/* Image Placeholder */}
        <div className="w-72 h-96 skeleton rounded-lg hidden lg:block"></div>
  
        {/* Text Content */}
        <div className="w-full lg:w-1/2 space-y-4">
          <div className="skeleton h-4 w-3/4"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-5/6"></div>
          <div className="divider"></div>
  
          <div className="grid grid-cols-2 gap-4">
            {Array(6)
              .fill(0)
              .map((_, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="skeleton h-4 w-1/3"></div>
                  <div className="skeleton h-4 w-2/3"></div>
                </div>
              ))}
          </div>
  
          <div className="skeleton h-10 w-40 mt-4"></div>
        </div>
      </div>
    </div>
  );
  
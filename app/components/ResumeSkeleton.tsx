const ResumeSkeleton = () => (
    <div className="bg-base-200 p-10 rounded-lg shadow-lg pt-20">
      <h1 className="text-5xl font-bold mb-10">Resume</h1>
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Sidebar */}
        <div className="lg:w-1/4 space-y-4">
          {Array(6)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="skeleton h-10 w-full rounded"></div>
            ))}
        </div>
  
        {/* Content Area */}
        <div className="lg:w-3/4 space-y-6">
          {Array(2)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="skeleton h-24 w-full rounded"></div>
            ))}
        </div>
      </div>
    </div>
  );
  
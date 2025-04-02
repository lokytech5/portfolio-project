const ProjectsSkeleton = () => (
    <div className="bg-base-200 p-10 rounded-lg shadow-lg pt-20">
      <h1 className="text-5xl font-bold mb-10">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Array(2)
          .fill(0)
          .map((_, idx) => (
            <div key={idx} className="card w-full bg-base-100 shadow-xl p-4 space-y-4">
              <div className="skeleton h-48 w-full rounded"></div>
              <div className="skeleton h-6 w-1/2 rounded"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-3/4"></div>
              <div className="flex gap-2 flex-wrap">
                {Array(4)
                  .fill(0)
                  .map((_, i) => (
                    <div key={i} className="skeleton h-6 w-20 rounded-full"></div>
                  ))}
              </div>
              <div className="skeleton h-10 w-32 mt-2"></div>
            </div>
          ))}
      </div>
    </div>
  );
  
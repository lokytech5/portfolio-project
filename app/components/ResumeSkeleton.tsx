const ResumeSkeleton = () => (
    <div className="bg-base-200 p-10 rounded-lg shadow-lg pt-20">
  <h1 className="text-5xl font-bold mb-10">Resume</h1>
  <div className="flex flex-col lg:flex-row gap-6">
    {/* Fake Sidebar */}
    <div className="flex flex-col gap-4 lg:w-1/4">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="skeleton h-10 w-full rounded-lg"></div>
      ))}
    </div>

    {/* Fake Main Content */}
    <div className="flex flex-col gap-6 lg:w-3/4">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="skeleton h-24 w-full rounded-xl"></div>
      ))}
    </div>
  </div>
</div>

  );
  export default ResumeSkeleton;
  
const SkeletonLoader = () => {
    return (
      <div className="bg-base-200 p-10 rounded-lg shadow-lg pt-20">
        <h1 className="text-5xl font-bold mb-10 text-left">About Me</h1>
        <div className="flex w-52 flex-col gap-4">
  <div className="skeleton h-32 w-full"></div>
  <div className="skeleton h-4 w-28"></div>
  <div className="skeleton h-4 w-full"></div>
  <div className="skeleton h-4 w-full"></div>
</div>
      </div>
    );
  };
  
  export default SkeletonLoader;
  
const SkeletonLoader = () => (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-10 w-full">
      {/* Skeleton Image */}
      <div className="skeleton w-60 h-60 rounded-lg"></div>
  
      {/* Text + Details Skeleton */}
      <div className="flex-1 space-y-4 w-full max-w-xl">
        {/* Title Skeleton */}
        <div className="skeleton h-8 w-2/3"></div>
  
        {/* Paragraph Lines */}
        <div className="space-y-2">
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-5/6"></div>
          <div className="skeleton h-4 w-2/3"></div>
        </div>
  
        {/* Divider */}
        <div className="skeleton h-1 w-full my-4"></div>
  
        {/* Personal Info Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="skeleton h-4 w-5/6"></div>
          <div className="skeleton h-4 w-5/6"></div>
          <div className="skeleton h-4 w-4/6"></div>
          <div className="skeleton h-4 w-4/6"></div>
          <div className="skeleton h-4 w-3/6"></div>
        </div>
  
        {/* Button Skeleton */}
        <div className="skeleton h-10 w-32 mt-6"></div>
      </div>
    </div>
  );
  
  export default SkeletonLoader;
  
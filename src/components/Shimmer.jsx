// Shimmer.jsx
export const ShimmerCard = () => (
  <div className="w-40 h-60 bg-gray-800 rounded-md animate-pulse"></div>
);

export const ShimmerRow = ({ title }) => (
  <div className="mt-6">
    <div className="h-6 w-40 bg-gray-700 rounded mb-3 animate-pulse">
      {title}
    </div>
    <div className="flex gap-3 overflow-x-scroll scrollbar-hide">
      {Array(8)
        .fill("")
        .map((_, i) => (
          <ShimmerCard key={i} />
        ))}
    </div>
  </div>
);

export const BrowseShimmer = () => (
  <div className="bg-black text-white min-h-screen">
    <div className="w-full h-[60vh] bg-gray-800 animate-pulse"></div>
    <div className="px-6 -mt-24 relative z-10">
      <ShimmerRow />
      <ShimmerRow />
      <ShimmerRow />
      <ShimmerRow />
    </div>
  </div>
);

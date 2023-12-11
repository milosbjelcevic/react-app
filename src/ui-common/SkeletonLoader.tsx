const SkeletonLoader = ({ isFullWidth }: { isFullWidth?: boolean }) => {
  const containerWidthClass = isFullWidth && "w-full";
  return (
    <div
      className={`skeleton-loader ${containerWidthClass} p-8 flex flex-wrap bg-white`}
    >
      <div className="skeleton-line"></div>
      <div className="skeleton-line"></div>
      <div className="skeleton-line"></div>
    </div>
  );
};

export default SkeletonLoader;

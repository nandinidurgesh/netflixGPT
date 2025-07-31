import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ShimmerCard = () => {
  return (
    <div className="w-40 flex-shrink-0">
      <Skeleton height={225} borderRadius={6} />
    </div>
  );
};

export default ShimmerCard;

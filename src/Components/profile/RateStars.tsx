import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfAlt,
  faStar as faStarEmpty,
} from "@fortawesome/free-solid-svg-icons";

interface RateStarsProps {
  rating: number;
 
  className?: string;
}

const RateStars: React.FC<RateStarsProps> = ({ rating, className }) => {
    const maxStars = 5
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = maxStars - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {[...Array(fullStars)].map((_, index) => (
          <FontAwesomeIcon
            key={`full-${index}`}
            icon={faStar}
            className={`text-[#FADB14]  h-[25px] w-[25px] md:h-[32px] md:w-[32px]`}
          />
        ))}
        {halfStar && (
          <FontAwesomeIcon
            key="half"
            icon={faStarHalfAlt}
            className={`text-[#FADB14]  h-[25px] w-[25px] md:h-[32px] md:w-[32px]`}
          />
        )}
        {[...Array(emptyStars)].map((_, index) => (
          <FontAwesomeIcon
            key={`empty-${index}`}
            icon={faStarEmpty}
            className={`text-gray-300 h-[25px] w-[25px] md:h-[32px] md:w-[32px]`}
          />
        ))}
      </>
    );
  };

  return <div className="flex">{renderStars(rating)}</div>;
};

export default RateStars;

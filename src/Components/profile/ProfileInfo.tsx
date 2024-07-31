
import Img from "@/Components/profile/Img";
import RateStars from "./RateStars";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

interface ProfileInfoProps {
  photo: string;
  name: string;
  occupation: string;
  location: string;
  rating: number;
  onCompleteProfileClick?: () => void;
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({
  photo,
  name,
  occupation,
  location,
  rating,
 
  onCompleteProfileClick,
}) => {
  return (
    <div className="flex flex-1  flex-col  items-start bg-white border-2 rounded-xl p-8 gap-4 w-full">
     
        <Img src={photo} alt="Profile Picture" className="w-40 h-40 " />
     
     
      <h2 className="text-2xl font-bold">{name}</h2>
      
        <p>{occupation}</p>
        <p>
          {location} -
          <span className="font-semibold text-blue-600"> Contact Info</span>
        </p>
        <RateStars rating={rating} className="" />
        <Link to='/completeProfile'>
        <Button variant={"outline"} onClick={onCompleteProfileClick}>
          Complete your profile
        </Button>
        </Link>
      
    </div>
  );
};

export default ProfileInfo;

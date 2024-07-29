import { MdOutlineModeEdit } from "react-icons/md";
import Img from "@/Components/profile/Img";
import RateStars from "./RateStars";
import { Button } from "../ui/button";

interface ProfileInfoProps {
  photo: string;
  name: string;
  occupation: string;
  location: string;
  rating: number;
  onEditClick?: () => void;
  onCompleteProfileClick?: () => void;
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({
  photo,
  name,
  occupation,
  location,
  rating,
  onEditClick,
  onCompleteProfileClick,
}) => {
  return (
    <div className="flex flex-col justify-center items-start bg-white border-2 rounded-xl p-8 gap-4">
      <div className="flex flex-row justify-between w-full items-center">
        <Img src={photo} alt="Profile Picture" className="w-40 h-40 " />
        <MdOutlineModeEdit className="w-5 h-5" onClick={onEditClick} />
      </div>
      <h2 className="text-2xl font-bold">{name}</h2>
      <div className="flex flex-col justify-center items-start gap-2 ">
        <p>{occupation}</p>
        <p>
          {location} -
          <span className="font-semibold text-blue-600"> Contact Info</span>
        </p>
        <RateStars rating={rating} className="" />
        <Button variant={"outline"} onClick={onCompleteProfileClick}>
          Complete your profile
        </Button>
      </div>
    </div>
  );
};

export default ProfileInfo;

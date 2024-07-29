import { useState, useRef, useEffect } from "react";
import { MdOutlineModeEdit } from "react-icons/md";

interface AboutProps {
  about: string;
  onEditClick?: () => void;
}

const About: React.FC<AboutProps> = ({ about, onEditClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showSeeMore, setShowSeeMore] = useState(false);
  const aboutRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const element = aboutRef.current;
    if (element) {
      const lineHeight = parseInt(window.getComputedStyle(element).lineHeight, 10);
      const lines = element.scrollHeight / lineHeight;
      if (lines > 5) {
        setShowSeeMore(true);
      }
    }
  }, [about]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex flex-col justify-center items-start bg-white border-2 rounded-xl p-8 gap-4">
      <div className="flex flex-col justify-center items-center gap-y-4">
        <div className="flex flex-row w-full justify-between items-center">
          <h1 className="text-xl font-bold">About</h1>
          <MdOutlineModeEdit className="w-5 h-5" onClick={onEditClick} />
        </div>
        <div className={`relative ${isExpanded ? "" : "line-clamp-5"}`}>
          <p ref={aboutRef} className="">
            {about}
          </p>
          {!isExpanded && showSeeMore && (
            <div
              className="absolute bottom-0 right-0 bg-white px-2 cursor-pointer font-bold text-gray-600"
              onClick={toggleExpand}
            >
              ...See more
            </div>
          )}
        </div>
        {isExpanded && showSeeMore && (
          <button className="text-blue-500 mt-2" onClick={toggleExpand}>
            See less
          </button>
        )}
      </div>
    </div>
  );
};

export default About;




interface ProfilePictureProps {
  src: string;
  alt: string;
  className?: string;
}

const Img: React.FC<ProfilePictureProps> = ({ src, alt, className }) => {
  return (
    <div className={`w-full h-full flex    ${className}`}>
      <img src={src} alt={alt} className="rounded-full object-cover w-40 h-40 border-4 border-primary " />
    </div>
  );
};

export default Img;
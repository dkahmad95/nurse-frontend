import About from "@/Components/profile/About";
import ProfileInfo from "@/Components/profile/ProfileInfo";
import photo from "@/assets/profile.jpg";

const Profile = () => {
  return (
    <main className="min-h-[100vh]  gap-8 ">
      <div className="p-4 md:py-10 flex flex-row justify-center items-start gap-8 md:container">
        <div className=" w-full flex flex-col gap-y-4">
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <ProfileInfo
              photo={photo}
              name="Ahmad Dekmak"
              occupation="Registered Nurse"
              location="Beirut, Lebanon"
              rating={4.5}
            />
            <About
              about={
                "Lorem ipsum dolor sit amet corem ips cosum doorem ipsum dolor sit amet corem ipsum dolor sitt amet corem ips  sit cosum doorem ipsum dolor sit amet corem ipsum dolor sitt amet ccorem ipsum dolor sit  ipsc"
              }
            />
          </div>
          <About
              about={
                "Lorem ipsum dolor sit amet corem ipsum dolor sit cosum doorem ipsum dolor sit amet corem ipsum dolor sitt amet corem ips amet corem ipsum lor  sit cosum doorem ipsum dolor sit amet corem ipsum dolor sitt amet corem ips  sit cosum doorem ipsum dolor sit amet corem ipsum dolor sitt amet corem ips sit corem ipsum dolor sit  ipsc"
              }
            />
        </div>
        {/* <div className="hidden md:flex flex-col w-1/4 bg-white border-2 rounded-xl p-8">
          <h2 className="text-xl font-bold mb-4">Content 2</h2>
          <p>complete profile</p>
        </div> */}
      </div>
    </main>
  );
};

export default Profile;

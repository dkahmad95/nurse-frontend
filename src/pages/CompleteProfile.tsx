import AvailabilityForm from "@/Components/CompleteProfile/AvailabilityForm";
import CertificationAndLicenseForm from "@/Components/CompleteProfile/CertificationAndLicenseForm";
import CoverageForm from "@/Components/CompleteProfile/CoverageForm";
import EducationInfoForm from "@/Components/CompleteProfile/EducationInfoForm";
import ExperienceForm from "@/Components/CompleteProfile/ExperienceForm";
import LanguagesForm from "@/Components/CompleteProfile/LanguagesForm";
import PersonalInfoForm from "@/Components/CompleteProfile/PersonalInfoForm";
import SkillsForm from "@/Components/CompleteProfile/SkillsForm";
import CollapsibleForm from "@/Components/ui/CollapsibleForm";




const CompleteProfile = () => {
 
  return (
    <main className="min-h-[100vh]  gap-8">
      <div className="p-4 md:py-10 flex flex-row justify-center items-start gap-8 md:container">
        <div className=" w-full md:w-3/4 flex flex-col gap-y-4">
        <div className="flex flex-col">

<span className="w-full text-sm text-center font-bold text-green-700">Complete your profile to get verified and go public🎉</span>
<span className="w-full text-sm text-center font-bold text-red-700">You are not verified!</span>
        </div>
          {/* personal info */}
          <CollapsibleForm title="Personal Information" completion={true}>
            <PersonalInfoForm />
          </CollapsibleForm>

          {/* education info */}
          <CollapsibleForm title="Education" completion={true}>
            <EducationInfoForm />
          </CollapsibleForm>

          {/* Experience info */}
          <CollapsibleForm title="Experience" completion={false}>
            <ExperienceForm />
          </CollapsibleForm>


          {/* Skills info */}
          <CollapsibleForm title="Skills" completion={false} >
            <SkillsForm />
          </CollapsibleForm>
          
          {/* Languages info */}
          <CollapsibleForm title="Languages" completion={true}>
            <LanguagesForm />
          </CollapsibleForm>

          {/* Availability info */}
          <CollapsibleForm title="Availability" completion={false}>
            <AvailabilityForm />
          </CollapsibleForm>
        
          {/* Coverage info */}
          <CollapsibleForm title="Coverage area" completion={true}>
            <CoverageForm />
          </CollapsibleForm>
        
          {/* CertificationAndLicense info */}
          <CollapsibleForm title="Legal certifications*" completion={true}>
            <CertificationAndLicenseForm />
          </CollapsibleForm>
        
        </div>
      </div>
    </main>
  );
};

export default CompleteProfile;

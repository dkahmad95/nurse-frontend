
import { Formik, Form, FieldArray, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { MinusCircleIcon } from "lucide-react";
import { Textarea } from "../ui/textarea";

// Validation schema for experience
const validationSchema = Yup.object({
  experience: Yup.array()
    .of(
      Yup.object({
        jobTitle: Yup.string().required("Job Title is required"),
        company: Yup.string().required("Company is required"),
        location: Yup.string().required("Location is required"),
        startDate: Yup.date().required("Start Date is required"),
        endDate: Yup.date().required("End Date is required"),
        description: Yup.string(),
      })
    )
    .required("Must have at least one experience entry")
    .min(1, "Minimum of one experience entry is required"),
});

const ExperienceForm = () => {
  return (
    <Formik
      initialValues={{
        experience: [
          {
            jobTitle: "",
            company: "",
            location: "",
            startDate: "",
            endDate: "",
            description: "",
          },
        ],
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log("Form Values:", values);
        window.alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, values }) => (
        <Form className="shadow-md flex flex-col justify-center items-start bg-white border-2 rounded-xl p-8 gap-4">
          <FieldArray name="experience">
           
            {({ remove, push }) => (
              <div className="w-full">
                {/* @ts-ignore */}
                {values.experience.map((exp, index) => (
                  <div className="mb-4 w-full" key={index}>
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-bold">Experience {index + 1}</h3>
                      <MinusCircleIcon className="h-6 w-6 text-[#052533] cursor-pointer"  onClick={() => remove(index)}/>
                    </div>
                    <div className="mb-4 w-full">
                      <label
                        htmlFor={`experience.${index}.jobTitle`}
                        className="block text-gray-700 font-bold mb-2"
                      >
                        Job Title
                      </label>
                      <Field
                        name={`experience.${index}.jobTitle`}
                        as={Input}
                        type="text"
                        className="w-full p-2 border rounded"
                      />
                      <ErrorMessage
                        name={`experience.${index}.jobTitle`}
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>

                    <div className="mb-4 w-full">
                      <label
                        htmlFor={`experience.${index}.company`}
                        className="block text-gray-700 font-bold mb-2"
                      >
                        Company
                      </label>
                      <Field
                        name={`experience.${index}.company`}
                        as={Input}
                        type="text"
                        className="w-full p-2 border rounded"
                      />
                      <ErrorMessage
                        name={`experience.${index}.company`}
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>

                    <div className="mb-4 w-full">
                      <label
                        htmlFor={`experience.${index}.location`}
                        className="block text-gray-700 font-bold mb-2"
                      >
                        Location
                      </label>
                      <Field
                        name={`experience.${index}.location`}
                        as={Input}
                        type="text"
                        className="w-full p-2 border rounded"
                      />
                      <ErrorMessage
                        name={`experience.${index}.location`}
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>

                    <div className="mb-4 w-full">
                      <label
                        htmlFor={`experience.${index}.startDate`}
                        className="block text-gray-700 font-bold mb-2"
                      >
                        Start Date
                      </label>
                      <Field
                        name={`experience.${index}.startDate`}
                        as={Input}
                        type="date"
                        className="w-full p-2 border rounded"
                      />
                      <ErrorMessage
                        name={`experience.${index}.startDate`}
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>

                    <div className="mb-4 w-full">
                      <label
                        htmlFor={`experience.${index}.endDate`}
                        className="block text-gray-700 font-bold mb-2"
                      >
                        End Date
                      </label>
                      <Field
                        name={`experience.${index}.endDate`}
                        as={Input}
                        type="date"
                        className="w-full p-2 border rounded"
                      />
                      <ErrorMessage
                        name={`experience.${index}.endDate`}
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>

                    <div className="mb-4 w-full">
                      <label
                        htmlFor={`experience.${index}.description`}
                        className="block text-gray-700 font-bold mb-2"
                      >
                        Description
                      </label>
                      <Field
                        name={`experience.${index}.description`}
                        as={Textarea}
                        type="text"
                        className="w-full p-2 border rounded"
                      />
                      <ErrorMessage
                        name={`experience.${index}.description`}
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>
                  </div>
                ))}
                <Button
                  type="button"
                  onClick={() =>
                    push({
                      jobTitle: "",
                      company: "",
                      location: "",
                      startDate: "",
                      endDate: "",
                      description: "",
                    })
                  }
                  className="text-white p-2 rounded"
                >
                  Add Experience
                </Button>
              </div>
            )}
          </FieldArray>
          <div className="w-full text-end">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="text-white p-2 rounded"
            >
              Submit
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ExperienceForm;

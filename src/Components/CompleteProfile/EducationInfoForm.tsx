
import { Formik, Form, FieldArray, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { MinusCircleIcon } from "lucide-react";
import { Textarea } from "../ui/textarea";

const validationSchema = Yup.object({
  education: Yup.array()
    .of(
      Yup.object({
        degree: Yup.string().required("Degree is required"),
        institution: Yup.string().required("Institution is required"),
        grade: Yup.string(),
        startDate: Yup.date().required("Start Date is required"),
        endDate: Yup.date().required("End Date is required"),
        description: Yup.string(),
      })
    )
    .required("Must have at least one education entry")
    .min(1, "Minimum of one education entry is required"),
});

const EducationInfoForm = () => {

  return (
    <Formik
      initialValues={{
        education: [
          {
            degree: "",
            institution: "",
            grade: "",
            startDate: "",
            endDate: "",
            description: "",
          },
        ],
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        window.alert(JSON.stringify(values, null, 2));
        console.log("Form Values:", values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, values }) => (
        <Form className="shadow-md flex flex-col justify-center items-start bg-white border-2 rounded-xl p-8 gap-4">
          <FieldArray name="education">
        
            {({ remove, push }) => (
              <div className="w-full">
                {/* @ts-ignore */}
                {values.education.map((education, index) => (
                  
                  <div className="mb-4 w-full" key={index}>
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-bold">
                        Education {index + 1}
                      </h3>
                      <MinusCircleIcon className="h-6 w-6 text-[#052533] cursor-pointer"  onClick={() => remove(index)}/>
                     
                    </div>
                    <div className="mb-4 w-full">
                      <label
                        htmlFor={`education.${index}.degree`}
                        className="block text-gray-700 font-bold mb-2"
                      >
                        Degree*
                      </label>
                      <Field
                        name={`education.${index}.degree`}
                        as={Input}
                        type="text"
                        className="w-full p-2 border rounded"
                      />
                      <ErrorMessage
                        name={`education.${index}.degree`}
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>

                    <div className="mb-4 w-full">
                      <label
                        htmlFor={`education.${index}.institution`}
                        className="block text-gray-700 font-bold mb-2"
                      >
                        Institution*
                      </label>
                      <Field
                        name={`education.${index}.institution`}
                        as={Input}
                        type="text"
                        className="w-full p-2 border rounded"
                      />
                      <ErrorMessage
                        name={`education.${index}.institution`}
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>

                   

                    <div className="mb-4 w-full">
                      <label
                        htmlFor={`education.${index}.grade`}
                        className="block text-gray-700 font-bold mb-2"
                      >
                        Grade
                      </label>
                      <Field
                        name={`education.${index}.grade`}
                        as={Input}
                        type="text"
                        className="w-full p-2 border rounded"
                      />
                      <ErrorMessage
                        name={`education.${index}.grade`}
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>

                    <div className="mb-4 w-full">
                      <label
                        htmlFor={`education.${index}.startDate`}
                        className="block text-gray-700 font-bold mb-2"
                      >
                        Start Date*
                      </label>
                      <Field
                        name={`education.${index}.startDate`}
                        as={Input}
                        type="date"
                        className="w-full p-2 border rounded"
                      />
                      <ErrorMessage
                        name={`education.${index}.startDate`}
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>

                    <div className="mb-4 w-full">
                      <label
                        htmlFor={`education.${index}.endDate`}
                        className="block text-gray-700 font-bold mb-2"
                      >
                        End Date*
                      </label>
                      <Field
                        name={`education.${index}.endDate`}
                        as={Input}
                        type="date"
                        className="w-full p-2 border rounded"
                      />
                      <ErrorMessage
                        name={`education.${index}.endDate`}
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>

                    <div className="mb-4 w-full">
                      <label
                        htmlFor={`education.${index}.description`}
                        className="block text-gray-700 font-bold mb-2"
                      >
                        Description
                      </label>
                      <Field
                        name={`education.${index}.description`}
                        as={Textarea}
                        type="text"
                        className="w-full p-2 border rounded"
                      />
                      <ErrorMessage
                        name={`education.${index}.description`}
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
                      degree: "",
                      institution: "",
                      fieldOfStudy: "",
                      grade: "",
                      startDate: "",
                      endDate: "",
                      description: "",
                    })
                  }
                  className="text-white p-2 rounded"
                >
                  Add Education
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

export default EducationInfoForm;

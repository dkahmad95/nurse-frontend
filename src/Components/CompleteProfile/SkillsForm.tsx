
import { Formik, Form, FieldArray, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { MinusCircleIcon } from "lucide-react";

// Validation schema for skills
const validationSchema = Yup.object({
  skills: Yup.array()
    .of(Yup.string().required("Skill is required"))
    .required("Must have at least one skill")
    .min(1, "Minimum of one skill is required"),
});

const SkillsForm = () => {
  return (
    <Formik
      initialValues={{ skills: [""] }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log("Form Values:", values);
        window.alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, values }) => (
        <Form className="shadow-md flex flex-col justify-center items-start bg-white border-2 rounded-xl p-8 gap-4">
          <FieldArray name="skills">
            {({ remove, push }) => (
              <div className="w-full">
                {/* @ts-ignore */}
                {values.skills.map((skill, index) => (
                  <div className="mb-4 w-full flex items-center flex-row justify-center" key={index}>
                    <div className="flex-grow mr-2">
                      <label
                        htmlFor={`skills.${index}`}
                        className="block text-gray-700 font-bold mb-2"
                      >
                        Skill {index + 1}
                      </label>
                      <Field
                        name={`skills.${index}`}
                        as={Input}
                        type="text"
                        className="w-full p-2 border rounded"
                      />
                      <ErrorMessage
                        name={`skills.${index}`}
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>
                    <MinusCircleIcon className="h-6 w-6 text-[#052533] cursor-pointer"  onClick={() => remove(index)}/>
                  </div>
                ))}
                <Button
                  type="button"
                  onClick={() => push("")}
                  className="text-white p-2 rounded"
                >
                  Add Skill
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

export default SkillsForm;

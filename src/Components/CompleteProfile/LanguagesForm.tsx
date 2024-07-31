
import { Formik, Form, FieldArray, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { MinusCircleIcon } from "lucide-react";

// Validation schema for languages
const validationSchema = Yup.object({
  languages: Yup.array().of(
    Yup.object({
      language: Yup.string().required("Language is required"),
      proficiency: Yup.string().required("Proficiency is required"),
    })
  )
    .required("Must have at least one language entry")
    .min(1, "Minimum of one language entry is required"),
});

// List of proficiency options
const proficiencyOptions = [
  "Beginner",
  "Intermediate",
  "Advanced",
  "Fluent",
];

const LanguagesForm = () => {
  return (
    <Formik
      initialValues={{
        languages: [
          {
            language: "",
            proficiency: "",
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
          <FieldArray name="languages">
            {({ remove, push }) => (
              <div className="w-full">
                {/* @ts-ignore */}
                {values.languages.map((lang, index) => (
                  <div className="mb-4 w-full" key={index}>
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-bold">Language {index + 1}</h3>
                      <MinusCircleIcon className="h-6 w-6 text-[#052533] cursor-pointer"  onClick={() => remove(index)}/>
                    </div>
                    <div className="mb-4 w-full">
                      <label
                        htmlFor={`languages.${index}.language`}
                        className="block text-gray-700 font-bold mb-2"
                      >
                        Language
                      </label>
                      <Field
                        name={`languages.${index}.language`}
                        as={Input}
                        type="text"
                        className="w-full p-2 border rounded"
                      />
                      <ErrorMessage
                        name={`languages.${index}.language`}
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>

                    <div className="mb-4 w-full">
                      <label
                        htmlFor={`languages.${index}.proficiency`}
                        className="block text-gray-700 font-bold mb-2"
                      >
                        Proficiency
                      </label>
                      <Field
                        as="select"
                        name={`languages.${index}.proficiency`}
                        className="w-full p-2 border rounded"
                      >
                        <option value="">Select proficiency</option>
                        {proficiencyOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </Field>
                      <ErrorMessage
                        name={`languages.${index}.proficiency`}
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
                      language: "",
                      proficiency: "",
                    })
                  }
                  className="text-white p-2 rounded"
                >
                  Add Language
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

export default LanguagesForm;

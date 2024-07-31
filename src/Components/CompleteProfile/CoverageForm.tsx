import React from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { Button } from "../ui/button";

// Define types for the form values
interface CoverageFormValues {
  areas: string[];
}

// Validation schema for coverage
const validationSchema = Yup.object({
  areas: Yup.array().of(Yup.string().required("Area is required")).min(1, "At least one area must be selected"),
});

// List of coverage area options
const coverageOptions = [
  "North Region",
  "South Region",
  "East Region",
  "West Region",
  "Central Region",
];

const CoverageForm: React.FC = () => {
  return (
    <Formik<CoverageFormValues>
      initialValues={{
        areas: [], // Initialize with an empty array
      }}
      validationSchema={validationSchema}
      onSubmit={(values: CoverageFormValues, { setSubmitting }: FormikHelpers<CoverageFormValues>) => {
        console.log("Form Values:", values);
        window.alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, values, setFieldValue }) => (
        <Form className="shadow-md flex flex-col justify-center items-start bg-white border-2 rounded-xl p-8 gap-4">
          <div className="mb-4 w-full">
            <label className="block text-gray-700 font-bold mb-2">Areas of Coverage</label>
            {coverageOptions.map((option) => (
              <div className="flex items-center space-x-2" key={option}>
                <Field
                  type="checkbox"
                  name="areas"
                  value={option}
                  className="mr-2"
                  checked={values.areas.includes(option)}
                  onChange={() => {
                    const currentAreas = [...values.areas];
                    if (currentAreas.includes(option)) {
                      setFieldValue("areas", currentAreas.filter((area) => area !== option));
                    } else {
                      setFieldValue("areas", [...currentAreas, option]);
                    }
                  }}
                />
                <label>{option}</label>
              </div>
            ))}
            <ErrorMessage
              name="areas"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
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

export default CoverageForm;

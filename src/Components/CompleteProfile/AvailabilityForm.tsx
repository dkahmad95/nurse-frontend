import React from "react";
import { Formik, Form, ErrorMessage, Field, FormikHelpers } from "formik";
import * as Yup from "yup";
import { Button } from "../ui/button";

// Define types for the form values
interface AvailabilityFormValues {
  shifts: string[];
}

// Validation schema for availability
const validationSchema = Yup.object({
  shifts: Yup.array()
    .of(Yup.string().required("Shift is required"))
    .min(1, "At least one shift must be selected"),
});

// List of shift options
const shiftOptions = [
  "Day Shift",
  "Night Shift",
  "Day or Night Shift",
  "24hr",
];

const AvailabilityForm: React.FC = () => {
  return (
    <Formik<AvailabilityFormValues>
      initialValues={{
        shifts: [], // Initialize with an empty array
      }}
      validationSchema={validationSchema}
      onSubmit={(values: AvailabilityFormValues, { setSubmitting }: FormikHelpers<AvailabilityFormValues>) => {
        console.log("Form Values:", values);
        window.alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, values, setFieldValue }) => (
        <Form className="shadow-md flex flex-col justify-center items-start bg-white border-2 rounded-xl p-8 gap-4">
          <div className="mb-4 w-full">
            <label className="block text-gray-700 font-bold mb-2">Shifts</label>
            {shiftOptions.map((option) => (
              <div className="flex items-center space-x-2" key={option}>
                <Field
                  type="checkbox"
                  name="shifts"
                  value={option}
                  className="mr-2"
                  checked={values.shifts.includes(option)}
                  onChange={() => {
                    const currentShifts = [...values.shifts];
                    if (currentShifts.includes(option)) {
                      setFieldValue(
                        "shifts",
                        currentShifts.filter((shift) => shift !== option)
                      );
                    } else {
                      setFieldValue(
                        "shifts",
                        [...currentShifts, option]
                      );
                    }
                  }}
                />
                <label>{option}</label>
              </div>
            ))}
            <ErrorMessage
              name="shifts"
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

export default AvailabilityForm;

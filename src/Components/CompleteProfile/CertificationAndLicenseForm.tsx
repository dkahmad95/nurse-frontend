import React, { useState } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const validationSchema = Yup.object({
  certificationDegree: Yup.mixed().required("Last certification degree file is required"),
  practiceLicense: Yup.mixed().required("Professional practice license file is required"),
});

const CertificationAndLicenseForm: React.FC = () => {
  const [certificationPreview, setCertificationPreview] = useState<string | ArrayBuffer | null>(null);
  const [licensePreview, setLicensePreview] = useState<string | ArrayBuffer | null>(null);

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void,
    setPreview: React.Dispatch<React.SetStateAction<string | ArrayBuffer | null>>
  ) => {
    const file = e.currentTarget.files?.[0];
    setFieldValue(e.currentTarget.name, file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <Formik
      initialValues={{
        certificationDegree: null,
        practiceLicense: null,
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log("Form Values:", values);
        window.alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, setFieldValue }) => (
        <Form className="shadow-md flex flex-col justify-center items-start bg-white border-2 rounded-xl p-8 gap-4">
          <div className="mb-4 w-full">
            <label
              htmlFor="certificationDegree"
              className="block text-gray-700 font-bold mb-2"
            >
              Last Certification Degree (Upload File)
            </label>
            {certificationPreview && (
              <img
                src={certificationPreview as string}
                alt="Certification Preview"
                className="mt-2 w-42 h-32 object-cover border-2 border-black rounded"
              />
            )}
            <Input
              id="certificationDegree"
              name="certificationDegree"
              type="file"
              className="w-full p-2 border rounded"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                handleFileChange(event, setFieldValue, setCertificationPreview)
              }
            />
            <ErrorMessage
              name="certificationDegree"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div className="mb-4 w-full">
            <label
              htmlFor="practiceLicense"
              className="block text-gray-700 font-bold mb-2"
            >
              Professional Practice License (Upload File)
            </label>
            {licensePreview && (
              <img
                src={licensePreview as string}
                alt="License Preview"
                className="mt-2 w-42 h-32 object-cover border-2 border-black rounded aspect-video"
              />
            )}
            <Input
              id="practiceLicense"
              name="practiceLicense"
              type="file"
              className="w-full p-2 border rounded"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                handleFileChange(event, setFieldValue, setLicensePreview)
              }
            />
            <ErrorMessage
              name="practiceLicense"
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

export default CertificationAndLicenseForm;

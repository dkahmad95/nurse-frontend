import React, { useState } from 'react';
import { Formik, Form,  ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';

const validationSchema = Yup.object({
  fullName: Yup.string().required('Full name is required'),
  position: Yup.string().required('Position is required'),
  country: Yup.string().required('Country is required'),
  city: Yup.string().required('City is required'),
  about: Yup.string().required('About is required'),
  number: Yup.string().required('Number is required').matches(/^[0-9]+$/, "Must be only digits").min(10, 'Must be exactly 10 digits').max(10, 'Must be exactly 10 digits'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  personalPhoto: Yup.mixed().required('A photo is required'),
});

const PersonalInfoForm = () => {
  const [photoPreview, setPhotoPreview] = useState<string | ArrayBuffer | null>(null);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>, setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void) => {
    const file = e.currentTarget.files?.[0];
    setFieldValue('personalPhoto', file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPhotoPreview(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <Formik
      initialValues={{
        personalPhoto: null,
        fullName: '',
        position: '',
        country: '',
        city: '',
        number: '',
        email: '',
        about: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        window.alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, setFieldValue }) => (
        <Form className="  shadow-md  flex flex-col justify-center items-start bg-white border-2 rounded-xl p-8 gap-4 ">
            
                 <div className="mb-4 flex flex-col gap-2">
            <label htmlFor="personalPhoto" className="block text-gray-700 font-bold mb-2">Personal Photo</label>
                 {photoPreview && <img src={photoPreview as string} alt="Preview" className="mt-2 w-32 h-32 object-cover border-2 border-black rounded-full" />}
            <Input
              id="personalPhoto"
              name="personalPhoto"
              type="file"
              className="w-full p-2 border rounded"
              onChange={(event) => handlePhotoChange(event, setFieldValue)}
            />
            <ErrorMessage name="personalPhoto" component="div" className="text-red-500 text-sm" />
          
          </div>

          <div className="mb-4 w-full">
            <label htmlFor="fullName" className="block text-gray-700 font-bold mb-2">Full Name</label>
            <Field name="fullName" type="text" className="w-full p-2 border rounded" />
            <ErrorMessage name="fullName" component="div" className="text-red-500 text-sm" />
          </div>

          <div className="mb-4 w-full">
            <label htmlFor="position" className="block text-gray-700 font-bold mb-2">Position</label>
            <Field name="position" type="text" className="w-full p-2 border rounded" />
            <ErrorMessage name="position" component="div" className="text-red-500 text-sm" />
          </div>

          <div className="mb-4 w-full">
            <label htmlFor="country" className="block text-gray-700 font-bold mb-2">Country</label>
            <Field name="country" type="text" className="w-full p-2 border rounded" />
            <ErrorMessage name="country" component="div" className="text-red-500 text-sm" />
          </div>

          <div className="mb-4 w-full">
            <label htmlFor="city" className="block text-gray-700 font-bold mb-2">City</label>
            <Field name="city" type="text" className="w-full p-2 border rounded" />
            <ErrorMessage name="city" component="div" className="text-red-500 text-sm" />
          </div>


          <div className="mb-4 w-full">
            <label htmlFor="number" className="block text-gray-700 font-bold mb-2">Number</label>
            <Field name="number" type="text" className="w-full p-2 border rounded" />
            <ErrorMessage name="number" component="div" className="text-red-500 text-sm" />
          </div>

          <div className="mb-4 w-full">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <Field name="email" type="email" className="w-full p-2 border rounded" />
            <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
          </div>

          <div className="mb-4 w-full">
            <label htmlFor="coverage" className="block text-gray-700 font-bold mb-2">About</label>
            <Field as={Textarea} name="coverage" type="text" className="w-full p-2 border rounded" />
            <ErrorMessage name="coverage" component="div" className="text-red-500 text-sm" />
          </div>

     
          <div className="w-full text-end">
            <Button type="submit" disabled={isSubmitting} className=" text-white p-2 rounded">
              Submit
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default PersonalInfoForm;

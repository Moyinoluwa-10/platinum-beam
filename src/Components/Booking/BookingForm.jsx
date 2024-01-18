// form
import { Formik, Form } from "formik";
import toast from "react-hot-toast";
import * as Yup from "yup";
import ContactInfo from "./ContactInfo";
import ServiceInfo from "./ServiceInfo";

const BookingForm = () => {
  return (
    <>
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        validationSchema={Yup.object({
          firstName: Yup.string().required("Required"),
          lastName: Yup.string().required("Required"),
          phoneNumber: Yup.string().required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          address: Yup.string().required("Required"),
          city: Yup.string().required("Required"),
          state: Yup.string().required("Required"),
          cleaningFrequency: Yup.string().required(""),
          cleaningMode: Yup.string(),
          message: Yup.string().required("Required"),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          const toastID = toast.loading("Submitting...");
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            toast.success("Form submitted successfully", {
              id: toastID,
            });
            setSubmitting(false);
            resetForm();
          }, 3000);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="max-w-5xl mx-auto mb-20">
            <ContactInfo />
            <ServiceInfo />

            <button
              type="submit"
              className="py-5 px-14 md:px-20 bg-primary disabled:bg-[#dda107] disabled:cursor-not-allowed rounded-2xl text-white block mt-10"
              disabled={isSubmitting}
            >
              Book Service
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default BookingForm;

// form
import { Formik, Field, Form, ErrorMessage } from "formik";
import toast from "react-hot-toast";
import * as Yup from "yup";

const ContactForm = () => {
  return (
    <>
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        validationSchema={Yup.object({
          name: Yup.string().required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
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
            <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
              <div>
                <Field
                  name="name"
                  type="text"
                  className="transition-all border border-black focus:border-2 focus:border-secondary  py-4 px-5 rounded-2xl w-full outline-none"
                  placeholder="Your Name"
                />
                <div className="text-red-500 text-sm">
                  <ErrorMessage name="name" />
                </div>
              </div>

              <div>
                <Field
                  name="email"
                  type="email"
                  className="transition-all border border-black focus:border-2 focus:border-secondary  py-4 px-5 rounded-2xl w-full outline-none"
                  placeholder="Email Address"
                />
                <div className="text-red-500 text-sm">
                  <ErrorMessage name="email" />
                </div>
              </div>
            </div>

            <div>
              <Field
                name="message"
                as={"textarea"}
                cols="30"
                rows="10"
                className="transition-all border border-black focus:border-2 focus:border-secondary py-4 px-5 rounded-2xl w-full outline-none resize-none"
                placeholder="Your Message"
              />
              <div className="text-red-500 text-sm">
                <ErrorMessage name="message" />
              </div>
            </div>

            <button
              type="submit"
              className="uppercase py-5 px-14 md:px-20 bg-secondary disabled:bg-gray-700 disabled:cursor-not-allowed rounded-2xl text-white block mx-auto mt-10"
              disabled={isSubmitting}
            >
              Send
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ContactForm;

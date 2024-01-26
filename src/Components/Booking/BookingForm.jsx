// react
import PropTypes from "prop-types";

// form
import { Formik, Form } from "formik";
import toast from "react-hot-toast";
import * as Yup from "yup";

// components
import ContactInfo from "./ContactInfo";
import ServiceInfo from "./ServiceInfo";

const BookingForm = ({ onSuccess }) => {
  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          phoneNumber: "",
          email: "",
          address: "",
          city: "",
          state: "",
          cleaningService: [],
          homeType: "",
          homeTypeOther: "",
          commercialType: "",
          commercialTypeOther: "",
          cleaningFrequency: "weekly",
          cleaningMode: "",
          noOfBathrooms: "",
          noOfBedrooms: "",
          noOfLivingRooms: "",
          date: "",
          termsAndConditions: false,
        }}
        validationSchema={Yup.object({
          firstName: Yup.string().required("Required"),
          lastName: Yup.string().required("Required"),
          phoneNumber: Yup.string().required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          address: Yup.string().required("Required"),
          city: Yup.string().required("Required"),
          state: Yup.string()
            .required("Select a state")
            .oneOf(
              ["ekiti", "oyo", "lagos", "abeokuta"],
              "Incorrect selection"
            ),
          cleaningService: Yup.array().min(
            1,
            "Select at least one cleaning service"
          ),
          homeType: Yup.string().when("cleaningService", {
            is: (cleaningService) => cleaningService.includes("residential"),
            then: () => Yup.string().required("Select an option"),
          }),
          homeTypeOther: Yup.string().when("homeType", {
            is: "others",
            then: () => Yup.string().required("Required"),
          }),
          commercialType: Yup.string().when("cleaningService", {
            is: (cleaningService) => cleaningService.includes("commercial"),
            then: () => Yup.string().required("Select an option"),
          }),
          commercialTypeOther: Yup.string().when("commercialType", {
            is: "others",
            then: () => Yup.string().required("Required"),
          }),
          cleaningFrequency: Yup.string()
            .required("Select an option")
            .oneOf(
              ["weekly", "biweekly", "monthly", "once"],
              "Incorrect selection"
            ),
          cleaningMode: Yup.string().when("cleaningService", {
            is: (cleaningService) =>
              cleaningService.includes("residential") ||
              cleaningService.includes("commercial"),
            then: () =>
              Yup.string()
                .required("Required")
                .oneOf(["basic", "deep"], "Incorrect selection"),
          }),
          noOfBathrooms: Yup.string().when("cleaningService", {
            is: (cleaningService) => cleaningService.includes("residential"),
            then: () => Yup.string().required("Required"),
          }),
          noOfBedrooms: Yup.string().when("cleaningService", {
            is: (cleaningService) => cleaningService.includes("residential"),
            then: () => Yup.string().required("Required"),
          }),
          noOfLivingRooms: Yup.string().when("cleaningService", {
            is: (cleaningService) => cleaningService.includes("residential"),
            then: () => Yup.string().required("Required"),
          }),
          date: Yup.string().required("Choose a date"),
          termsAndConditions: Yup.boolean().oneOf(
            [true],
            "You must agree to the terms and conditions to submit the form"
          ),
        })}
        onSubmit={(values, { setSubmitting }) => {
          const toastID = toast.loading("Submitting...");
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            toast.success("Form submitted successfully", {
              id: toastID,
            });
            setSubmitting(false);
            onSuccess();
            // resetForm();
          }, 2000);
        }}
      >
        {({ isSubmitting, values, setFieldValue }) => (
          <Form className="max-w-5xl mx-auto mb-20">
            <ContactInfo />
            <ServiceInfo values={values} onFieldValue={setFieldValue} />

            <button
              type="submit"
              className="py-4 px-14 md:px-20 z-0 block overflow-hidden bg-secondary text-2xl  disabled:bg-gray-700 disabled:cursor-not-allowed mx-auto mt-10 rounded-md text-white relative border border-transparent hover:border-secondary hover:text-secondary transition-all duration-300 before:absolute before:block before:top-0 before:-left-[100%] before:w-full before:h-full before:bg-white before:-z-10 hover:before:left-0 before:transition-all before:duration-300"
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

BookingForm.propTypes = {
  onSuccess: PropTypes.func,
};

export default BookingForm;

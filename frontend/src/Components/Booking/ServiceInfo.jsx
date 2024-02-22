// react
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GoInfo } from "react-icons/go";
import PropTypes from "prop-types";

// components
import CleaningService from "./CleaningService";
import { MyCheckbox, MyRadio, MySelect, MyTextInput } from "./FormComponents";
import services from "./services.json";
import { CommercialType, HomeType } from "./CleaningServiceType";

// form
import { ErrorMessage, Field } from "formik";

export const ServiceInfo = ({ values, onFieldValue }) => {
  const [isOpen, setIsOpen] = useState(null);

  useEffect(() => {
    if (values.homeType !== "others") onFieldValue("homeTypeOther", "");
    if (values.commercialType !== "others")
      onFieldValue("commercialTypeOther", "");
    // eslint-disable-next-line
  }, [values.commercialType, values.homeType]);

  return (
    <>
      <div className="mb-10 mt-20">
        <h2 className="uppercase font-pt-bold text-2xl mb-1">
          Cleaning service information
        </h2>
        <hr />
      </div>

      <div className="mb-8 grid md:grid-cols-2 gap-x-10 gap-y-8">
        <div>
          <div className="mb-10">
            <p className="text-xl mb-2 font-medium">
              What type of cleaning service?
            </p>
            <p className="text-xs mb-5">
              Hint: Click on <GoInfo className="inline text-secondary" /> to get
              more information.
            </p>

            <div className="flex flex-col gap-2">
              {services.map((service, i) => (
                <CleaningService
                  key={i}
                  {...service}
                  id={i + 1}
                  isOpen={isOpen}
                  onOpen={setIsOpen}
                />
              ))}
              <div className="text-red-500 text-sm">
                <ErrorMessage name="cleaningService" />
              </div>
            </div>
          </div>

          {values.cleaningService.includes("residential") && (
            <HomeType values={values} />
          )}

          {values.cleaningService.includes("commercial") && (
            <CommercialType values={values} />
          )}
        </div>

        <div>
          <div className="mb-10">
            <p className="text-xl mb-2 font-medium">Frequency of Cleaning</p>
            <MySelect name="cleaningFrequency">
              <option value="weekly">Weekly</option>
              <option value="biweekly">Bi-weekly</option>
              <option value="monthly">Monthly</option>
              <option value="once">One Time</option>
            </MySelect>
          </div>

          {(values.cleaningService.includes("residential") ||
            values.cleaningService.includes("commercial")) && (
            <div className="mb-10">
              <p className="text-xl mb-2 font-medium">Mode of Cleaning</p>
              <MyRadio name="cleaningMode" value="basic">
                Basic Cleaning
              </MyRadio>
              <MyRadio name="cleaningMode" value="deep">
                Deep Cleaning
              </MyRadio>
              <div className="text-red-500 text-sm">
                <ErrorMessage name="cleaningMode" />
              </div>
            </div>
          )}

          {values.cleaningService.includes("residential") && (
            <div className="flex flex-col gap-10 mb-10">
              <MyTextInput
                label={"Number of bathrooms"}
                name="noOfBathrooms"
                type="number"
                placeholder="1"
                min="1"
              />

              <MyTextInput
                label={"Number of bedrooms"}
                name="noOfBedrooms"
                type="number"
                placeholder="1"
                min="1"
              />

              <MyTextInput
                label={"Number of Living rooms"}
                name="noOfLivingRooms"
                type="number"
                placeholder="1"
                min="1"
              />
            </div>
          )}

          <div className="mb-10">
            <p className="text-xl mb-2 font-medium">
              Which day works best for you?
            </p>
            <Field
              type="date"
              name="date"
              className="transition-all border border-black focus:border-2 focus:border-secondary py-4 px-5 rounded-2xl w-full max-w-xs outline-none"
            />
            <div className="text-red-500 text-sm">
              <ErrorMessage name="date" />
            </div>
          </div>
        </div>
      </div>

      <MyCheckbox name="termsAndConditions">
        <p>
          By submitting this you are agreeing to our{" "}
          <Link
            to={"/terms-and-conditions"}
            className="text-secondary inline"
            target="_blank"
          >
            Terms & Conditions
          </Link>{" "}
          for any services rendered
        </p>
      </MyCheckbox>
      <div className="text-red-500 text-sm">
        <ErrorMessage name="termsAndConditions" />
      </div>
    </>
  );
};

ServiceInfo.propTypes = {
  values: PropTypes.object,
  onFieldValue: PropTypes.func,
};

export default ServiceInfo;

// react
import PropTypes from "prop-types";

// components
import { MyRadio } from "./FormComponents";

// form
import { ErrorMessage, Field } from "formik";

export const CommercialType = ({ values }) => {
  return (
    <div className="mb-10 flex flex-col gap-2">
      <p className="text-xl mb-2 font-medium">Type of home</p>
      <MyRadio name="commercialType" value="office">
        Office
      </MyRadio>
      <MyRadio name="commercialType" value="industry">
        Industry
      </MyRadio>
      <MyRadio name="commercialType" value="apartment">
        Business Outlet
      </MyRadio>
      <MyRadio name="commercialType" value="hotel">
        Hotel
      </MyRadio>
      <MyRadio name="commercialType" value="others">
        <div>
          <Field
            name="commercialTypeOther"
            className="transition-all border border-black disabled:border-gray-300 disabled:bg-gray-100 focus:border-2 focus:border-secondary  py-2 px-3 rounded-lg outline-none"
            disabled={values.commercialType !== "others"}
          />
          <div className="text-red-500 text-sm">
            <ErrorMessage name="commercialTypeOther" />
          </div>
        </div>
      </MyRadio>
      <div className="text-red-500 text-sm">
        <ErrorMessage name="commercialType" />
      </div>
    </div>
  );
};

CommercialType.propTypes = {
  values: PropTypes.object,
};

export const HomeType = ({ values }) => {
  return (
    <div className="mb-10 flex flex-col gap-2">
      <p className="text-xl mb-2 font-medium">Type of home</p>
      <MyRadio name="homeType" value="duplex">
        Duplex
      </MyRadio>
      <MyRadio name="homeType" value="airbnb">
        Airbnb
      </MyRadio>
      <MyRadio name="homeType" value="apartment">
        Apartment
      </MyRadio>
      <MyRadio name="homeType" value="bungalow">
        Bungalow
      </MyRadio>
      <MyRadio name="homeType" value="selfcon">
        Self Contain
      </MyRadio>
      <MyRadio name="homeType" value="others">
        <div>
          <Field
            name="homeTypeOther"
            className="transition-all border border-black disabled:border-gray-300 disabled:bg-gray-100 focus:border-2 focus:border-secondary  py-2 px-3 rounded-lg outline-none"
            disabled={values.homeType !== "others"}
          />
          <div className="text-red-500 text-sm">
            <ErrorMessage name="homeTypeOther" />
          </div>
        </div>
      </MyRadio>
      <div className="text-red-500 text-sm">
        <ErrorMessage name="homeType" />
      </div>
    </div>
  );
};

HomeType.propTypes = {
  values: PropTypes.object,
};

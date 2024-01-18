import PropTypes from "prop-types";
import { useField } from "formik";

export const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      {label && (
        <label
          htmlFor={props.id || props.name}
          className="inline-block mb-2 font-medium"
        >
          {label}
        </label>
      )}

      <input
        className="transition-all border border-black focus:border-2 focus:border-[#728ad3]  py-4 px-5 rounded-2xl w-full outline-none"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="text-red-500 text-sm">{meta.error}</div>
      ) : null}
    </div>
  );
};

MyTextInput.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
};

export const MyCheckbox = ({ children, ...props }) => {
  // React treats radios and checkbox inputs differently from other input types: select and textarea.
  // Formik does this too! When you specify `type` to useField(), it will
  // return the correct bag of props for you -- a `checked` prop will be included
  // in `field` alongside `name`, `value`, `onChange`, and `onBlur`
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <div>
      <label className="checkbox-input">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="text-red-500 text-sm">{meta.error}</div>
      ) : null}
    </div>
  );
};

MyCheckbox.propTypes = {
  children: PropTypes.node,
};

export const MyRadio = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "radio" });
  return (
    <div>
      <label className="flex items-center gap-2">
        <input type="radio" {...field} {...props} className="h-4 w-4" />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="text-red-500 text-sm">{meta.error}</div>
      ) : null}
    </div>
  );
};

MyRadio.propTypes = {
  children: PropTypes.node,
};

export const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select
        {...field}
        {...props}
        className="transition-all border border-black focus:border-2 focus:border-[#728ad3]  py-4 px-5 rounded-2xl w-full outline-none"
      />
      {meta.touched && meta.error ? (
        <div className="text-red-500 text-sm">{meta.error}</div>
      ) : null}
    </div>
  );
};

MySelect.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
};

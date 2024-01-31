// components
import { MySelect, MyTextInput } from "./FormComponents";

const ContactInfo = () => {
  return (
    <>
      <div className="mb-10">
        <h2 className="uppercase font-pt-bold text-2xl mb-1">
          Your contact information
        </h2>
        <hr />
      </div>

      <div className="mb-8 grid md:grid-cols-2 gap-x-10 gap-y-8">
        <MyTextInput name="firstName" type="text" placeholder="First Name" />

        <MyTextInput name="lastName" type="text" placeholder="Last Name" />

        <MyTextInput name="phoneNumber" type="tel" placeholder="Phone number" />

        <MyTextInput name="email" type="email" placeholder="Email Address" />
      </div>

      <div className="mb-8">
        <MyTextInput name="address" type="text" placeholder="Home Address" />
      </div>

      <div className="mb-8 grid md:grid-cols-2 gap-x-10 gap-y-8">
        <div>
          <MySelect name="state">
            <option value="">State</option>
            <option value="ekiti">Ekiti</option>
            <option value="oyo">Oyo</option>
            <option value="lagos">Lagos</option>
            <option value="abeokuta">Abeokuta</option>
          </MySelect>
          <p className="text-xs">
            We are only available in the states listed above.
          </p>
        </div>

        <MyTextInput name="city" type="text" placeholder="City" />
      </div>
    </>
  );
};

export default ContactInfo;

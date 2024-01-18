import { MyRadio, MySelect, MyTextInput } from "./FormComponents";
import { GoInfo } from "react-icons/go";
import { MdOutlineCancel } from "react-icons/md";

const ServiceInfo = () => {
  return (
    <>
      <div className="mb-10 mt-20">
        <h2 className="uppercase font-medium text-2xl mb-1">
          Cleaning service information
        </h2>
        <hr />
      </div>

      <div className="mb-8 grid md:grid-cols-2 gap-x-10 gap-y-8">
        <div>
          <div>
            <p>What type of cleaning service?</p>
            <p className="text-xs">
              Hint: Click on <GoInfo className="inline" /> to get more
              information.
            </p>
            <div className="flex items-center">
              <input type="checkbox" name="xyz" id="" />{" "}
              <label htmlFor="">Residential Cleaning</label>
              <GoInfo />
            </div>
            <div className="p-10 bg-white shadow-xl text-lg md:text-xl">
              <MdOutlineCancel className="text-3xl ml-auto mb-5" />
              This service is tailored to homeowners who wish to maintain a
              pristine living environment. It involves thorough cleaning of all
              areas of the home, including kitchens, bathrooms, living rooms,
              and bedrooms. Special attention is given to high-touch surfaces,
              corners, and hard-to-reach areas.
            </div>
          </div>

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
              <input className="transition-all border border-black focus:border-2 focus:border-[#728ad3]  py-2 px-3 rounded-lg outline-none" />
            </MyRadio>
          </div>
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

          <div className="mb-10">
            <p className="text-xl mb-2 font-medium">Mode of Cleaning</p>
            <MyRadio name="cleaningMode" value="basic">
              Basic Cleaning
            </MyRadio>
            <MyRadio name="cleaningMode" value="deep">
              Deep Cleaning
            </MyRadio>
          </div>

          <div className="flex flex-col gap-10">
            <MyTextInput
              label={"Number of bathrooms"}
              name="noOfBathrooms"
              type="number"
              placeholder="1"
            />

            <MyTextInput
              label={"Number of bedrooms"}
              name="noOfBedrooms"
              type="number"
              placeholder="1"
            />

            <MyTextInput
              label={"Number of Living rooms"}
              name="noOfLivingRooms"
              type="number"
              placeholder="1"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceInfo;

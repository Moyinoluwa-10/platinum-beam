const ContactForm = () => {
  return (
    <form className="max-w-5xl mx-auto mb-20">
      <div className="mb-10 md:mb-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
        <div className="w-full">
          <input
            type="text"
            name="name"
            id="name"
            className="border-[#728ad3] border-2 py-6 pl-5 rounded-2xl w-full focus:border-secondary outline-none"
            placeholder="Your Name"
          />
        </div>
        <div>
          <input
            type="text"
            name="email"
            id="email"
            className="border-[#728ad3] border-2 py-6 pl-5 rounded-2xl w-full focus:border-secondary outline-none"
            placeholder="Email Address"
          />
        </div>
      </div>
      <div className="mb-16">
        <textarea
          name=""
          id=""
          className="border-[#728ad3] border-2 py-6 pl-5 rounded-2xl w-full resize-none focus:border-secondary outline-none"
          cols="30"
          rows="10"
          placeholder="Your Message"
        ></textarea>
      </div>
      <div>
        <button className="uppercase py-5 px-14 md:px-20 bg-primary rounded-2xl text-white block mx-auto">
          Send
        </button>
      </div>
    </form>
  );
};

export default ContactForm;

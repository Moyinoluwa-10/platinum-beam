import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Transform from "../Components/Transform";
import image from "../assets/images/image.png";

const Service = () => {
  return (
    <div className="font-lato">
      <section className="hero min-h-screen text-white flex flex-col">
        <Header />
        <div className="p-5 container flex-grow flex place-items-center">
          <p className="text-2xl max-w-2xl mx-auto text-center">
            Our Services <br /> Tailor-Made Cleaning Solutions for Every Need
          </p>
        </div>
      </section>

      <section className="p-5 container"></section>

      <section className="p-5 py-24 container">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 mb-20 md:mb-40">
          <div>
            <img src={image} alt="image" />
          </div>
          <div className="lg:max-w-xl">
            <h3 className="text-secondary text-2xl md:text-3xl mb-4 font-bold">
              Professional Cleaning Services
            </h3>
            <p className="text-xl md:text-2xl mb-10">
              We offer bespoke cleaning solutions tailored to the specific needs
              of each space, whether it's a cozy home or a sprawling corporate
              office.
            </p>
            <p>
              <a href="" className="text-primary text-xl md:text-2xl">
                Let's do this
              </a>
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse justify-between items-center gap-12 mb-20">
          <div>
            <img src={image} alt="image" />
          </div>
          <div className="lg:max-w-xl">
            <h3 className="text-secondary text-2xl md:text-3xl mb-4 font-bold">
              Specialized Cleaning Services
            </h3>
            <p className="text-xl md:text-2xl mb-10">
              Our expertise extends to post-construction clean-up, rental revamp
              cleaning, and intricate carpet cleaning services, all performed
              with meticulous attention to detail.
            </p>
            <p>
              <a href="" className="text-primary text-xl md:text-2xl">
                Let's do this
              </a>
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 mb-20 md:mb-40">
          <div>
            <img src={image} alt="image" />
          </div>
          <div className="lg:max-w-xl">
            <h3 className="text-secondary text-2xl md:text-3xl mb-4 font-bold">
              Horticulture and Landscaping
            </h3>
            <p className="text-xl md:text-2xl mb-10">
              Extend the luxury beyond your indoor spaces. We integrate
              eco-friendly practices in our horticulture and landscaping
              services, enhancing the beauty and sustainability of your outdoor
              spaces.
            </p>
            <p>
              <a href="" className="text-primary text-xl md:text-2xl">
                Let's do this
              </a>
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse justify-between items-center gap-12 mb-20">
          <div>
            <img src={image} alt="image" />
          </div>
          <div className="lg:max-w-xl">
            <h3 className="text-secondary text-2xl md:text-3xl mb-4 font-bold">
              Premium Product Line
            </h3>
            <p className="text-xl md:text-2xl mb-10">
              Our exclusive range of cleaning products, aromatic candles,
              diffusers, and custom oils are specially designed to elevate the
              ambiance of corporate and hotel environments.
            </p>
            <p>
              <a href="" className="text-primary text-xl md:text-2xl">
                Let's do this
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="p-5 container">
        <div className="mb-32">
          <h3 className="text-4xl md:text-6xl mb-6 font-bold text-secondary text-center">
            Innovative Training and Consultancy
          </h3>
          <img src={image} alt="" className="mx-auto mb-6 md:hidden" />
          <p className="text-center max-w-5xl mx-auto text-xl md:text-2xl md:mb-6">
            We're not just cleaning service providers; we're educators and
            innovators. Our training and consultancy services aim to empower the
            next generation of cleaning professionals, sharing our knowledge and
            expertise to elevate industry standards.
          </p>
          <img src={image} alt="" className="mx-auto hidden md:inline-block" />
        </div>

        <div className="mb-32">
          <h3 className="text-4xl md:text-6xl mb-6 font-bold text-secondary text-center">
            Leadership and Management Team
          </h3>
          <img src={image} alt="" className="mx-auto mb-6 md:hidden" />
          <p className="text-center max-w-5xl mx-auto text-xl md:text-2xl md:mb-6">
            Our team is a blend of experienced professionals dedicated to
            maintaining the highest standards, ensuring Platinum Beam Concept
            remains a leader in the cleaning services sector.
          </p>
          <img src={image} alt="" className="mx-auto hidden md:inline-block" />
        </div>

        <div className="mb-32">
          <h3 className="text-4xl md:text-6xl mb-6 font-bold text-secondary text-center">
            Unique Selling Proposition
          </h3>
          <img src={image} alt="" className="mx-auto mb-6 md:hidden" />
          <p className="text-center max-w-5xl mx-auto text-xl md:text-2xl md:mb-6">
            We redefine cleaning with our luxurious, holistic approach, focusing
            on leadership, eco-friendly practices, community engagement, and
            innovative training and consultancy services.
          </p>
          <img src={image} alt="" className="mx-auto hidden md:inline-block" />
        </div>

        <div className="mb-32">
          <h3 className="text-4xl md:text-6xl mb-6 font-bold text-secondary text-center">
            Quality Assurance
          </h3>
          <img src={image} alt="" className="mx-auto mb-6 md:hidden" />
          <p className="text-center max-w-5xl mx-auto text-xl md:text-2xl md:mb-6">
            We promise the highest quality in every service through standardized
            cleaning protocols, customer feedback, continuous staff training,
            and a commitment to eco-friendly and sustainable cleaning solutions.
          </p>
          <img src={image} alt="" className="mx-auto hidden md:inline-block" />
        </div>

        <div className="mb-32">
          <h3 className="text-4xl md:text-6xl mb-6 font-bold text-secondary text-center">
            Community Engagement
          </h3>
          <img src={image} alt="" className="mx-auto mb-6 md:hidden" />
          <p className="text-center max-w-5xl mx-auto text-xl md:text-2xl md:mb-6">
            Our role extends beyond cleaning services; we actively participate
            in community development to improve lifestyles and promote a sense
            of belonging among our clients and staff.
          </p>
          <img src={image} alt="" className="mx-auto hidden md:inline-block" />
        </div>
      </section>

      <Transform />
      <Footer />
    </div>
  );
};

export default Service;

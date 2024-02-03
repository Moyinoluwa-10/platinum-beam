// components
import Hero from "../Components/Hero";
import Services from "../Components/Services/Services";
import PageChange from "../hooks/PageChange";

// images
import bgImg from "../assets/images/bg-services.png";

const Commercial = () => {
  return (
    <>
      <PageChange pageTitle="Commercial Cleaning - Platinum Beam" />

      <Hero
        bgImg={bgImg}
        pageTitle={"Commercial Cleaning"}
        pageText={"Basic and deep cleanings tailored to your taste"}
      />

      <Services>
        <section className="container p-5 py-20 max-w-6xl mx-auto">
          <p className="text-center md:text-xl text-2xl">
            Designed for business spaces. This service ensures that offices,
            retail spaces, and other commercial premises are not just clean, but
            also presentable and conducive to productivity. The focus is on
            creating a hygienic and organized workspace, which might include
            regular cleaning, deep cleaning, and maintenance services. We pay
            attention to detail, ensuring every aspect of the space reflects
            professionalism and operational excellence.
          </p>
        </section>

        <hr className="max-w-6xl mx-auto border-1" />

        <section className="container p-5 py-20 grid md:grid-cols-2 max-w-6xl mx-auto gap-10">
          <div>
            <h3 className="text-2xl font-pt-bold mb-2 uppercase">
              Common tasks completed
            </h3>
            <p className="text-xl">
              Dust & wipe down all surfaces throughout building (including
              entrances, offices & all other areas). <br />
              Clean & disinfect all staff & client bathrooms. <br />
              Disinfect & clean kitchen, if applicable. <br />
              Sweep, vacuum & wash floors throughout the building. <br />
              Spot wash any noticeable mess on walls, doors etc. <br />
              Windex any fingerprints on windows/doors. <br />
              Plus any other essentials we feel are necessary to make your
              offices shine. <br />
              The cleaning task list will be customized to your space.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-pt-bold mb-2 uppercase">
              Deep cleaning
            </h3>
            <p className="text-xl">
              Clean interior windows (remove window stickers). <br />
              Carpet cleaning available by request. <br />
              Wipe down computer chairs/desk legs. <br />
              Deep kitchen clean. <br />
              Baseboards/casings & doors.
            </p>
          </div>
        </section>
      </Services>
    </>
  );
};

export default Commercial;

// components
import Hero from "../Components/Hero";
import Services from "../Components/Services/Services";

// images
import bgImg from "../assets/images/bg-services.png";

const ResidentialDeep = () => {
  return (
    <>
      <Hero
        bgImg={bgImg}
        pageTitle={"Residential Cleaning"}
        pageText={"Basic and deep cleanings tailored to your taste"}
      />

      <Services>
        <section className="container p-5 py-20">
          <h2 className="text-2xl font-pt-bold mb-10 text-center uppercase">
            Deep Cleaning
          </h2>

          <div className="grid md:grid-cols-2 max-w-6xl mx-auto gap-10">
            <div>
              <h3 className="text-2xl font-medium mb-2 uppercase">Bathroom</h3>
              <p className="text-xl">
                Light ﬁxtures dusted. <br />
                Doors and trim dusted, spot cleaned. <br />
                Baseboards dusted and scrubbed. <br />
                Sink scrubbed, rinsed and polished. <br />
                Countertops and taps disinfected and polished. <br />
                Small appliances dusted, sprayed and polished. <br />
                Small appliances dusted, sprayed and polished. <br />
                Backsplash washed and polished. <br />
                Cabinet exteriors washed and polished (all sides). <br />
                Fridge exterior sprayed + polished, handles disinfected. <br />
                Range top scrubbed and polished. <br />
                Microwave interior/exterior scrubbed and polished. <br />
                Dishwasher exterior sprayed and polished. <br />
                Table disinfected, chairs sprayed and polished. <br />
                Barstools sprayed and wiped. <br />
                Door handles disinfected. <br />
                Blinds dusted, windowsills dusted, tracks scrubbed. <br />
                Light switches dusted, disinfected and washed. <br />
                Floors vacuumed and hand washed. <br />
                Trash emptied and relined with trash bag.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-medium mb-2 uppercase">Kitchen</h3>
              <p className="text-xl">
                Light ﬁxtures dusted. <br />
                Doors and trim dusted, spot cleaned. <br />
                Baseboards dusted and scrubbed. <br />
                Sink scrubbed, rinsed and polished. <br />
                Countertops and taps disinfected and polished. <br />
                Small appliances dusted, sprayed and polished. <br />
                Small appliances dusted, sprayed and polished. <br />
                Backsplash washed and polished. <br />
                Cabinet exteriors washed and polished (all sides). <br />
                Fridge exterior sprayed + polished, handles disinfected. <br />
                Range top scrubbed and polished. <br />
                Microwave interior/exterior scrubbed and polished. <br />
                Dishwasher exterior sprayed and polished. <br />
                Table disinfected, chairs sprayed and polished. <br />
                Barstools sprayed and wiped. <br />
                Door handles disinfected. <br />
                Blinds dusted, windowsills dusted, tracks scrubbed. <br />
                Light switches dusted, disinfected and washed. <br />
                Floors vacuumed and hand washed. <br />
                Trash emptied and relined with trash bag.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-medium mb-2 uppercase">Bedrooms</h3>
              <p className="text-xl">
                Light ﬁxtures dusted. <br />
                Baseboards dusted and scrubbed. <br />
                Door knobs disinfected. <br />
                Blinds dusted, windowsills dusted, tracks scrubbed. <br />
                Light switches dusted, disinfected and washed. <br />
                Dressers, night stands, decor dusted. <br />
                Floors vacuumed and mopped (if hard floors). <br />
              </p>
            </div>
          </div>
        </section>
      </Services>
    </>
  );
};

export default ResidentialDeep;

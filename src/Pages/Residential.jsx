import Services from "../Components/Services/Services";

const Residential = () => {
  return (
    <>
      <Services>
        <section className="grid md:grid-cols-2 max-w-4xl mx-auto gap-10 container p-5 py-20">
          <div>
            <h3 className="text-2xl font-medium mb-2">KITCHEN</h3>
            <p className="text-xl">
              Wipe down table legs, chairs, barstools. <br /> Wipe down cabinet
              exterior. <br />
              Wash under sink by garbage.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-medium mb-2">BATHROOM</h3>
            <p className="text-xl">
              Wipe-wash-polish sinks, tub/shower. <br /> Wipe-wash-polish
              toilets, base & bowl. <br /> Clean mirrors. <br /> Wipe down
              cabinet exterior. <br /> Polish all chrome surfaces. <br /> Wipe
              down baseboards.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-medium mb-2">BEDROOM</h3>
            <p className="text-xl">
              Quick tidy & pick up. <br /> Dust all surfaces throughout home.{" "}
              <br /> Make beds.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-medium mb-2">ENTIRE HOME</h3>
            <p className="text-xl">
              Quick tidy & pick up dust all surfaces throughout home. <br /> Wet
              wipe all surfaces throughout home. <br /> Sanitize door knobs &
              light switches. <br /> Empty all garbage. <br /> Sweep/Vacuum &
              wash all floors. <br />
              <br />
              PLUS: <br /> Wipe down windowsills. <br /> Spot wash interior
              windows.
            </p>
          </div>
        </section>

        <section className="container p-5 py-10 text-center">
          <h3 className="text-2xl font-semibold mb-1">CLEANING OPTIONS</h3>
          <p className="text-xl mb-5">Enhance your cleaning experience </p>
          <div className="flex items-center justify-center gap-10 text-primary font-medium">
            <a href="">BASIC CLEANING</a>
            <a href="">DEEP CLEANING</a>
          </div>
        </section>
      </Services>
    </>
  );
};

export default Residential;

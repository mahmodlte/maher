import InfoCard from "./InfoCard";
import { Search, PhoneCall, Handshake } from "lucide-react";
const HowItWorks = () => {
  return (
    <section className="py-24 ">
      <h3 className="text-center sm:text-3xl text-2xl my-5 font-heading">
        How Maher Works
      </h3>

      <div className="flex sm:flex-row flex-col sm:space-x-7 sm:space-y-0 space-y-7 items-center justify-center ">
        <InfoCard
          Icon={Search}
          title={"Search"}
          description={"Broswe skilled workers by category or place"}
        />
        <InfoCard
          Icon={PhoneCall}
          title={"Connect"}
          description={"View profiles and contact directly"}
        />{" "}
        <InfoCard
          Icon={Handshake}
          title={"Get The Job Done."}
          description={"Work the trusted local profassionels"}
        />
      </div>
    </section>
  );
};
export default HowItWorks;

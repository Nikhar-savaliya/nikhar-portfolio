import { techStack } from "@/lib/techStack";
import TechIcon from "@/components/ui/techIcon";

const TechStack = () => {
  const { frontEnd, backEnd, other } = techStack;

  return (
    <section className="max-w-6xl mx-auto mt-8 p-6 ">
      <p className="font-serif text-2xl md:text-3xl px-3 py-10  md:max-w-full text-left md:text-center ">
        ⚒️ Tools and Technologies I work with
      </p>
      <div className="grid lg:grid-cols-2 gap-4">
        {/* frontend */}
        <div className="p-6 border rounded-2xl bg-popover ">
          <h2 className="pb-4 px-4 font-bold text-base">
            🥇 Frontend Web Development
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {frontEnd.map((item, index) => {
              return <TechIcon name={item.name} icon={item.icon} key={index} />;
            })}
          </div>
        </div>

        {/* backend */}
        <div className="p-6 border rounded-2xl bg-popover ">
          <h2 className="pb-4 px-4 font-bold text-base">
            🥈 Backend Web Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {backEnd.map((item, index) => {
              return <TechIcon name={item.name} icon={item.icon} key={index} />;
            })}
          </div>
        </div>

        {/* other */}
        <div className="p-6 border rounded-2xl bg-popover ">
          <h2 className="pb-4 px-4 font-bold text-base">
            🥉 Other Tools & Languages
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {other.map((item, index) => {
              return <TechIcon name={item.name} icon={item.icon} key={index} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;

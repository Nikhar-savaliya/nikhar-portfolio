import Image from "next/image";
import { Badge } from "./badge";

interface TechStack {
  name: string;
  icon: string;
}

const TechIcon: React.FC<TechStack> = (props: TechStack) => {
  return (
    <div className=" px-3 py-1 font-sans flex items-center justify-start gap-4 bg-secondary/60 text-secondary-foreground border-2 border-secondary overflow-x-hidden rounded-full">
      <div className="flex py-1 items-center justify-start mr-auto">
        <Image
          src={props.icon}
          alt={props.name}
          className="w-6 h-6 aspect-square dark:invert opacity-75 p-0.5  mr-2 "
        />
        <p className="border-l-2 border-accent pl-3 text-sm font-semibold leading-6">
          {props.name}
        </p>
      </div>
    </div>
  );
};

export default TechIcon;

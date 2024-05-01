import { ArrowUpRight, LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface cardData {
  icon: LucideIcon;
  projectName: string;
  projectLink: string;
  repository: string;
  projectDescription: string[];
  techStack: Array<string>;
}

const project = (props: cardData) => {
  return (
    <li className="w-full border-2 rounded-xl flex flex-col bg-card text-card-foreground">
      <div className="flex items-center gap-3 p-3 border-b-2">
        <props.icon className="text-card-foreground" width={22} />
        <div className="flex flex-col">
          <a
            href={props.projectLink}
            className="text-xs hover:underline"
            target="_blank"
          >
            <p className="text-base font-medium text-card-foreground ">
              {props.projectName}
            </p>
          </a>
        </div>
      </div>

      <div className="flex-grow p-3 text-sm  ">
        <ul className="p-1 px-6 text-start text-muted-foreground list-disc  mb-auto leading-6">
          {props.projectDescription.map((feature, index) => {
            return (
              <li key={index} className="my-0.5">
                {feature}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex gap-x-2 gap-y-2 flex-wrap p-4  ">
        {props.techStack.map((item) => (
          <Badge variant="secondary" key={item}>
            {item}
          </Badge>
        ))}
      </div>

      <div className="p-3 relative border-t-2  flex flex-col justify-end mt-5 text-md ">
        <a
          href={props.repository}
          target="_blank"
          className="flex cursor-pointer items-center gap-[2px] text-accent-foreground text-sm hover:underline pl-1 "
        >
          code
          <ArrowUpRight size={14} className="mt-[2px]" />
        </a>
      </div>
    </li>
  );
};

export default project;

import Link from "next/link";

interface articleData {
  title: string;
  link: string;
  description: string;
  time: string;
}

const Article = ({ title, link, description, time }: articleData) => {
  return (
    <div className=" p-3 m-3 my-4 px-4 max-w-5xl border border-border rounded-lg bg-popover mx-auto">
      <div className="px-2">
        <div className="flex flex-row items-center gap-2">
          <Link
            href={link}
            target="_black"
            className="flex gap-1 items-center hover:underline"
          >
            <p className="my-2 font-serif text-lg pb-2">{title}</p>
          </Link>
        </div>
        <p className="text-[10px] text-primary pb-1">{`${time} minutes read`}</p>
        <p className="text-xs text-muted-foreground line-clamp-2 md:line-clamp-1">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Article;

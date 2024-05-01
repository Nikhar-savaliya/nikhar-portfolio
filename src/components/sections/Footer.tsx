import { ContactLinks } from "@/lib/navlinks";
import scanme from "@/assets/scanMe.svg";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-10 px-4 border-t-2  mt-24">
      <div className="flex max-w-5xl mx-auto items-start justify-around">
        <div className="container max-w-6xl mx-auto flex flex-col items-start justify-center">
          <ul className="flex gap-3 pb-4 ">
            {ContactLinks.map((link) => {
              return (
                <li
                  key={link.link}
                  title={link.text}
                  className="text-foreground hover:text-primary"
                >
                  <Link
                    href={link.link}
                    target="_blank"
                    aria-label={`Contact Nikhar via ${link.text}`}
                  >
                    <link.icon size={22} />
                  </Link>
                </li>
              );
            })}
          </ul>
          <p className="text-[10px] text-muted-foreground">
            The development work was carried out <br></br>by @nikharsavaliya
          </p>
        </div>
        {/* <Image
          src={scanme}
          alt="mailto Nikhar - QR code"
          className="max-w-20 dark:invert"
        /> */}
      </div>
    </footer>
  );
};

export default Footer;

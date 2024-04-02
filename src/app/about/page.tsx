import Nikhar from "@/assets/Nikhar.png";
import scetLogo from "@/assets/scet-logo.png";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section className="max-w-6xl mx-auto my-12 px-5 py-6">
      <p className="text-2xl pb-4 font-serif mb-4 text-center md:text-left">
        Unveiling the Person Behind the Greeting
      </p>
      <div className="container flex gap-10 flex-col md:flex-row items-center md:items-start ">
        <div className="w-[200px] md:w-48 h-[200px] md:h-48 rounded-3xl">
          <Image
            src={Nikhar}
            alt="Photo"
            className="overflow-hidden object-contain aspect-square center max-w-[200px] md:max-w-48"
          />
        </div>
        <div>
          <ul className=" flex flex-col gap-2 mt-4 leading-6 list-inside list-disc text-sm">
            <li className="max-w-md text-muted-foreground">
              I am Nikhar, a highly skilled and experienced web developer and
              designer from India. I am actively seeking freelance or full-time
              opportunities where I can showcase my expertise and contribute to
              the success of a project. I am confident in my ability to create
              exceptional interactive products that exceed expectations.
            </li>
            <li className="max-w-md text-muted-foreground">
              Let`s work together to bring your ideas to life and surpass your
              online objectives. I am committed to providing you with
              outstanding results that will leave you completely satisfied.
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-16">
        <p className="text-2xl font-serif mb-4 max-md:text-center  ">
          Academic and professional Experience
        </p>
        <div className="flex items-center rounded-lg space-x-2 border w-fit pr-12 p-6 py-3 bg-popover ">
          <div className="w-12 h-12">
            <Image
              src={scetLogo}
              alt="collage logo"
              className="w-12 dark:bg-foreground rounded-full"
            />
          </div>
          <div className="text-sm p-1">
            <p className="font-serif text-base text-popover-foreground">
              B.Tech in Computer Science
            </p>
            <p className="text-xs text-muted-foreground">
              <Link
                href="https://scet.ac.in"
                className="hover:underline"
                target="_blank"
              >
                sarvajanik collage of engineering and technology
              </Link>
            </p>
            <p className="text-xs text-muted-foreground">2021-2025</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import Preview_Article from "@/components/preview-section/articles";
import Preview_Projects from "@/components/preview-section/projects";
import TechStack from "@/components/sections/TechStack";
import { Button } from "@/components/ui/button";
import { CircleUserRound, Mail } from "lucide-react";

import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="container flex flex-col items-center text-center max-w-md mx-auto">
        <h1 className="text-4xl font-semibold text-foreground md:text-5xl pt-[100px] px-2 md:px-0 font-serif">
          Hey, I am Nikhar Savaliya
        </h1>
        <p className="pt-4 text-muted-foreground text-sm md:text-md ">
          I am a programmer and web developer from India, currently pursuing a
          degree in Computer Engineering.
          <br />
          {/* trying to solve problems for greater good. */}
        </p>
        <div className="flex items-center justify-center gap-4 mt-8">
          <Link href="mailto:nikhar663@gmail.com" target="_blank">
            <Button className="flex gap-2 items-center " variant="default">
              <Mail size={18} />
              Contact me
            </Button>
          </Link>
          <Link href="/about">
            <Button className="flex gap-2 items-center " variant="outline">
              <CircleUserRound size={18} />
              About me
            </Button>
          </Link>
        </div>
      </main>

      {/* Projects */}
      <Preview_Projects />

      {/* Tech stack */}
      <TechStack />

      {/* Articles */}
      <Preview_Article />
    </>
  );
}

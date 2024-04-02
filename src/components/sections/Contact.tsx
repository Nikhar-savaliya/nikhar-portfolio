import { Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Badge } from "@/components/ui/badge";

const Contact = () => {
  return (
    <section className="flex flex-col gap-2 items-center justify-center max-w-6xl mt-36 mb-24 px-4 mx-auto">
      <Badge variant="secondary" className="flex items-center gap-1">
        <p>Open for full-time jobs or freelance</p>
      </Badge>

      <p className="font-serif text-3xl md:text-4xl max-w-lg text-center text-foreground">
        Feel free to contact me anytime!
      </p>
      <p className="max-w-md text-xs md:text-sm pt-1 pb-6 text-center text-muted-foreground">
        I am eagerly searching for fresh opportunities to level up my skills. If
        you`re interested, let`s have a chat!
      </p>
      <Link href="mailto:nikhar663@gmail.com" target="_blank">
        <div title="Mail To: nikhar663@gmail.com">
          <Button variant="default" className="flex items-center gap-2">
            <Mail width={18} />
            Get in Touch
          </Button>
        </div>
      </Link>
    </section>
  );
};

export default Contact;

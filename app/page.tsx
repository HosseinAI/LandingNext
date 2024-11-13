import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { TextEffect } from "@/components/core/TextEffect";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>
          <TextEffect per="char" preset="fade">
            Make&nbsp;
          </TextEffect>
        </span>
        <span className={title({ color: "violet" })}>beautiful&nbsp;</span>
        <br />
        <span className={title()}>
          <TextEffect per="char" preset="fade">
            websites regardless of your design experience.
          </TextEffect>
        </span>
        <div className={subtitle({ class: "mt-4" })}>
          <TextEffect per="char" preset="fade">
            Beautiful, fast and modern React UI library.
          </TextEffect>
        </div>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.webapp}
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}

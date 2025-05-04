import { RippleButton } from "@/components/magicui/ripple-button";
import { AnimatedSpan, Terminal, TypingAnimation } from "@/components/magicui/terminal";
import Link from "next/link";;

export default function Home() {
  return (
    <div className="flex items-center justify-center py-[250px] overflow-hidden">
      <Terminal>
        <TypingAnimation>&gt; wget -p http://parth-portfolio.vercel.app</TypingAnimation>

        <AnimatedSpan delay={1500} className="text-green-500">
          <span>✔ Preflight checks.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={2000} className="text-green-500">
          <span>✔ Verifying framework. Found Next.js.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={2500} className="text-green-500">
          <span>✔ Validating Tailwind CSS.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={3000} className="text-green-500">
          <span>✔ Validating import alias.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={3500} className="text-green-500">
          <span>✔ Writing components.json.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={4000} className="text-green-500">
          <span>✔ Checking registry.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={4500} className="text-green-500">
          <span>✔ Updating tailwind.config.ts</span>
        </AnimatedSpan>

        <AnimatedSpan delay={5000} className="text-green-500">
          <span>✔ Updating app/globals.css</span>
        </AnimatedSpan>

        <AnimatedSpan delay={5500} className="text-green-500">
          <span>✔ Installing dependencies.</span>
        </AnimatedSpan>

        <TypingAnimation delay={6500} className="text-muted-foreground">
          Success! Portfolio initialization completed.
        </TypingAnimation>

        <TypingAnimation delay={7000} className="text-muted-foreground">
          click the button below to start
        </TypingAnimation>

        <AnimatedSpan delay={8000} className="text-green-500">
          <Link href="/home">
            <RippleButton className="w-full border-white text-white" rippleColor="#ADD8E6">Start</RippleButton>
          </Link>
        </AnimatedSpan>
      </Terminal>
    </div>
  );
}

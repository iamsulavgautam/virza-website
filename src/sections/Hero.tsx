"use client";

import Button from "@/components/button";
import designExample1 from "@/assets/images/design-example-1.png";
import designExample2 from "@/assets/images/design-example-2.png";
import Image from "next/image";
import Pointer from "@/components/Pointer";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";
import cursorImage from "@/assets/images/cursor-you.svg";

export default function Hero() {
  const [leftDesignScope, leftDesignAnimate] = useAnimate();
  const [leftPointerScope, leftPointerAnimate] = useAnimate();

  const [rightDesignScope, rightDesignAnimate] = useAnimate();
  const [rightPointerScope, rightPointerAnimate] = useAnimate();

  useEffect(() => {
    leftDesignAnimate([
      [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
    ]);

    leftPointerAnimate([
      [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftPointerScope.current, { y: 0, x: -100 }, { duration: 0.5 }],
      [
        leftPointerScope.current,
        { y: [0, 16, 0], x: 0 },
        { duration: 0.5, ease: "easeInOut" },
      ],
    ]);

    rightDesignAnimate([
      [rightDesignScope.current, { opacity: 1 }, { duration: 0.5, delay: 1.5 }],
      [rightDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
    ]);

    rightPointerAnimate([
      [
        rightPointerScope.current,
        { opacity: 1 },
        { duration: 0.5, delay: 1.5 },
      ],
      [rightPointerScope.current, { y: 0, x: 175 }, { duration: 0.5 }],
      [
        rightPointerScope.current,
        { y: [0, 20, 0], x: 0 },
        { duration: 0.5, ease: "easeInOut" },
      ],
    ]);
  }, []);

  return (
    <section
      className="py-24 overflow-x-clip"
      id="#"
      style={{
        cursor: `url(${cursorImage.src}), auto`,
      }}
    >
      <div className="container relative">
        {/* Left Design Image */}
        <motion.div
          ref={leftDesignScope}
          initial={{ opacity: 0, y: 100, x: -100 }}
          className="absolute -left-32 top-16 hidden lg:block"
          drag
        >
          <Image
            draggable={false}
            src={designExample1}
            alt="design example 1"
          />
        </motion.div>

        {/* Left Pointer */}
        <motion.div
          ref={leftPointerScope}
          initial={{ opacity: 0, y: 100, x: -200 }}
          className="absolute top-96 left-56 hidden lg:block"
        >
          <Pointer name="Rijan" />
        </motion.div>

        {/* Right Design Image */}
        <motion.div
          initial={{ opacity: 0, y: 100, x: 100 }}
          ref={rightDesignScope}
          className="absolute -right-64 -top-16 hidden lg:block"
          drag
        >
          <Image
            draggable={false}
            src={designExample2}
            alt="design example 2"
          />
        </motion.div>

        {/* Right Pointer */}
        <motion.div
          ref={rightPointerScope}
          initial={{ opacity: 0, x: 275, y: 100 }}
          className="absolute -top-4 right-80 hidden lg:block"
        >
          <Pointer color="red" name="Sulav" />
        </motion.div>

        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold text-sm shadow-md">
            ✨ Your Digital Buddy
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-center leading-tight tracking-tight text-white">
          Build with clarity. <br className="hidden md:block" /> Design with
          impact.
        </h1>

        {/* Subheading */}
        <p className="text-center text-lg md:text-xl text-white/60 mt-6 max-w-2xl mx-auto">
          Virza empowers you to go from idea to execution—without the chaos.
          Smart tools, seamless experience, stunning results.
        </p>

        {/* CTA */}
        <form className="mx-auto flex border border-white/20 bg-white/5 rounded-full p-2 mt-10 max-w-lg backdrop-blur-md">
          <input
            type="email"
            placeholder="Enter your email to connect"
            className="bg-transparent px-4 flex-1 w-full text-white placeholder-white/40 outline-none"
          />
          <Button
            size="sm"
            className="whitespace-nowrap"
            type="submit"
            variant="primary"
          >
            Sign Up
          </Button>
        </form>
      </div>
    </section>
  );
}

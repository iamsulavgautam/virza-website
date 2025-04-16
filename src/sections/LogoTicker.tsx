"use client";

import vingreli from "@/assets/images/vingreli.svg";
import acmeLogo from "@/assets/images/acme-corp.svg";
import echoValleyLogo from "@/assets/images/echo-valley.svg";
import realradisson from "@/assets/images/realradisson.svg";
import gurukulyatra from "@/assets/images/gurukulYatra.svg";
import gurukul from "@/assets/images/gurukul.svg";
import hwepc from "@/assets/images/hwepc.svg";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const logos = [
  { name: "Gurukul", image: gurukul },
  { name: "Vingreli", image: vingreli },
  { name: "hwepc", image: hwepc },
  { name: "Gurukul Yatra", image: gurukulyatra },
];

export default function LogoTicker() {
  return (
    <section className="py-24 overflow-x-clip">
      <div className="container">
        <h3 className="text-center text-white/50 text-xl">
          Showcasing Our Latest Builds
        </h3>
        <div className="flex overflow-hidden mt-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            animate={{
              x: "-50%",
            }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex gap-24 pr-24 "
          >
            {Array.from({ length: 2 }).map((_, i) => (
              <React.Fragment key={i}>
                {logos.map((each) => (
                  <Image src={each.image} alt={each.name} key={each.name} />
                ))}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

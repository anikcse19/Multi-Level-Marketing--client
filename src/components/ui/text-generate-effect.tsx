"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 0.5,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className=" text-black opacity-0"
              style={{
                filter: filter ? "blur(10px)" : "none",
                // color: idx === 6 ? "crimson" : idx === 15 ? "#52D139" : "",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("", className)}>
      <div className="mt-4">
        <div
          // style={{
          //   textShadow: "#FC0 1px 10px 10px",
          //   // fontFamily: "super-shiny",
          // }}
          className="super-shiny text-black text-sm lg:text-base leading-snug tracking-widest"
        >
          {renderWords()}
        </div>
      </div>
    </div>
  );
};

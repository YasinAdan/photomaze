import React, {useEffect} from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function useScroll() {
  const controls = useAnimation();
  const [ref, view] = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (view) {
      controls.start("show");
    } else {
      controls.start("hidden");
    }
  }, [view, controls]);

  return [ref, controls];
}

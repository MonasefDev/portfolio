import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export function useAosAnimation() {
  useEffect(() => {
    Aos.init();
  });
}

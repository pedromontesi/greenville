import { useEffect, useState } from "react";

type AnimatedNumberProps = {
  target: number;
  start: boolean;
};

export const AnimatedNumber = ({ target, start }: AnimatedNumberProps) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const step = Math.ceil(target / 40);
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setValue(target);
        clearInterval(timer);
      } else {
        setValue(current);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [target, start]);

  return <span>+{value}</span>;
};

import Image from "next/image";
import React from "react";

type DayStateProps = {
  day: boolean | undefined;
};

export default function DayState({ day }: DayStateProps) {
  let image: [string, string, number?] = ["/gray-mark.svg", "gray mark", 12];
  if (day) {
    image = ["/checked.svg", "checked icon", 24];
  }
  if (day === false) {
    image = ["/x.svg", "icon x", 24];
  }

  const [src, alt, size] = image;
  return (
    <div className="flex items-center justify-center h-9">
      <Image src={src} width={size} height={size} alt={alt} />
    </div>
  );
}

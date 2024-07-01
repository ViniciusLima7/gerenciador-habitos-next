"use client";

import { deleteHabit } from "@/app/actions";
import Image from "next/image";

type DeleteButtonProps = {
  habit: string;
};

export default function DeleteButton({ habit }: DeleteButtonProps) {
  return (
    <button onClick={() => deleteHabit(habit)}>
      <Image src={"/trash.svg"} width={20} height={20} alt="Icon trash red" />
    </button>
  );
}

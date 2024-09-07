import { Minus, Plus } from "@phosphor-icons/react";
import { CounterContainer } from "./styles";
import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLElement>

export function Counter({ ...rest }: Props) {
  return (
    <CounterContainer {...rest}>
      <button type="button">
        <Minus size={14} />
      </button>
      <span>1</span>
      <button type="button">
        <Plus size={14} />
      </button>
    </CounterContainer>
  )
}
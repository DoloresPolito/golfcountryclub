import {
  Children,
  cloneElement,
  isValidElement,
  type CSSProperties,
  type ReactElement,
  type ReactNode,
} from "react";

// Separa el texto en palabras para que entren de a una. Se usa dentro de un
// elemento con `data-reveal="words"` (ver styles/base/_reveal.scss).
// Respeta los <br /> y los <span> anidados (ej. el acento de color).
export default function RevealWords({ children }: { children: ReactNode }) {
  let index = 0;

  const split = (node: ReactNode): ReactNode =>
    Children.map(node, (child) => {
      if (typeof child === "string") {
        return child.split(/(\s+)/).map((part, i) =>
          part.trim() ? (
            <span key={i} data-word style={{ "--w": index++ } as CSSProperties}>
              {part}
            </span>
          ) : (
            part
          ),
        );
      }
      if (
        isValidElement<{ children?: ReactNode }>(child) &&
        child.props.children
      ) {
        return cloneElement(
          child as ReactElement<{ children?: ReactNode }>,
          undefined,
          split(child.props.children),
        );
      }
      return child;
    });

  return split(children);
}

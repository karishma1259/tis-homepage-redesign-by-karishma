import type { ReactNode } from "react";

type Variant = "primary" | "outline" | "outlineOnDark";

interface BaseProps {
  variant?: Variant;
  className?: string;
  children: ReactNode;
}

interface LinkButtonProps extends BaseProps {
  href: string;
}

interface NativeButtonProps extends BaseProps {
  href?: undefined;
  type?: "button" | "submit";
  onClick?: () => void;
}

type ButtonProps = LinkButtonProps | NativeButtonProps;

const base =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-[0.95rem] font-semibold transition duration-200 active:scale-[0.97]";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-brand hover:brightness-110",
  outline: "border border-ink/25 text-ink hover:bg-ink hover:text-bg",
  outlineOnDark: "border border-white/40 text-white hover:bg-white hover:text-brand",
};

/** Renders an <a> when given an href, otherwise a <button>. */
export default function Button(props: ButtonProps) {
  const { variant = "primary", className = "", children } = props;
  const classes = `${base} ${variants[variant]} ${className}`;

  if (props.href !== undefined) {
    const external = props.href.startsWith("http");
    return (
      <a
        href={props.href}
        className={classes}
        {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={props.type ?? "button"} onClick={props.onClick} className={classes}>
      {children}
    </button>
  );
}

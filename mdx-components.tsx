import type { ComponentPropsWithoutRef, JSX, ReactNode } from "react";
import type { MDXComponents } from "mdx/types";

type ElementProps<T extends keyof JSX.IntrinsicElements> =
  ComponentPropsWithoutRef<T>;

const cx = (...classes: Array<string | undefined>) =>
  classes.filter(Boolean).join(" ");

const textFromNode = (node: ReactNode): string => {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(textFromNode).join(" ");
  if (node && typeof node === "object" && "props" in (node as any)) {
    return textFromNode((node as any).props.children);
  }
  return "";
};

const slugify = (input: ReactNode, fallback = "section") => {
  const text = textFromNode(input).trim().toLowerCase();
  const slug = text
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
  return slug || fallback;
};

const heading =
  (Tag: "h1" | "h2" | "h3", base: string) =>
  ({ className, id, children, ...props }: ElementProps<typeof Tag>) => {
    const headingId = id ?? slugify(children);
    return (
      <Tag
        {...props}
        id={headingId}
        className={cx(base, className)}
      >
        {children}
      </Tag>
    );
  };

const components: MDXComponents = {
  h1: heading(
    "h1",
    "mb-6 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl",
  ),
  h2: heading(
    "h2",
    "mt-10 mb-4 text-2xl font-semibold tracking-tight text-slate-900",
  ),
  h3: heading("h3", "mt-8 mb-3 text-xl font-semibold text-slate-900"),
  p: ({ className, ...props }: ElementProps<"p">) => (
    <p
      {...props}
      className={cx(
        "mt-4 text-base leading-7 text-slate-800 md:text-[17px]",
        className,
      )}
    />
  ),
  ul: ({ className, ...props }: ElementProps<"ul">) => (
    <ul
      {...props}
      className={cx(
        "mt-4 ml-5 list-disc space-y-2 text-base leading-7 text-slate-800",
        className,
      )}
    />
  ),
  ol: ({ className, ...props }: ElementProps<"ol">) => (
    <ol
      {...props}
      className={cx(
        "mt-4 ml-5 list-decimal space-y-2 text-base leading-7 text-slate-800",
        className,
      )}
    />
  ),
  li: ({ className, ...props }: ElementProps<"li">) => (
    <li {...props} className={cx("leading-7 text-slate-800", className)} />
  ),
  blockquote: ({ className, ...props }: ElementProps<"blockquote">) => (
    <blockquote
      {...props}
      className={cx(
        "mt-6 border-l-4 border-slate-200 bg-slate-50/70 px-4 py-3 text-slate-800",
        className,
      )}
    />
  ),
  code: ({ className, ...props }: ElementProps<"code">) => {
    const isBlock = className?.includes("language-");
    return (
      <code
        {...props}
        className={cx(
          "font-mono text-[13px] text-slate-900",
          isBlock
            ? "block"
            : "rounded-md border border-slate-200 bg-slate-50 px-1.5 py-0.5 font-semibold",
          className,
        )}
      />
    );
  },
  pre: ({ className, ...props }: ElementProps<"pre">) => (
    <pre
      {...props}
      className={cx(
        "mt-6 overflow-x-auto rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-7 text-slate-900",
        className,
      )}
    />
  ),
  hr: ({ className, ...props }: ElementProps<"hr">) => (
    <hr {...props} className={cx("my-10 border-slate-200", className)} />
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}

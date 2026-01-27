'use client';

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

type TocItem = { id: string; text: string; level: number };

const buildToc = (selector: string): TocItem[] => {
  const root = document.querySelector(selector);
  if (!root) return [];

  return Array.from(root.querySelectorAll<HTMLHeadingElement>("h2, h3"))
    .filter((heading) => heading.id)
    .map((heading) => ({
      id: heading.id,
      text: heading.textContent?.trim() ?? "",
      level: Number(heading.tagName.replace("H", "")),
    }));
};

export default function RightToc({ contentSelector }: { contentSelector: string }) {
  const pathname = usePathname();
  const [items, setItems] = useState<TocItem[]>([]);

  useEffect(() => {
    setItems(buildToc(contentSelector));
  }, [contentSelector, pathname]);

  const handleClick = (id: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", `#${id}`);
    }
  };

  if (items.length === 0) {
    return (
      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
        Contents
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Contents
        </p>
      </div>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id} className={item.level === 3 ? "pl-3" : undefined}>
            <a
              href={`#${item.id}`}
              onClick={handleClick(item.id)}
              className="block rounded-lg px-2 py-1 text-sm font-medium text-slate-800 transition hover:bg-slate-100"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

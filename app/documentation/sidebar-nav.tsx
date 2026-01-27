"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavSection = {
  title: string;
  items: Array<{ href: string; label: string }>;
};

export default function SidebarNav({ sections }: { sections: NavSection[] }) {
  const pathname = usePathname();

  return (
    <nav className="space-y-7">
      {/*<div>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
          Documentation
        </p>
        <p className="mt-2 text-sm text-slate-600">
          Browse guides and references for Hera.
        </p>
      </div>*/}
      {sections.map((section) => (
        <div key={section.title} className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            {section.title}
          </p>
          <div className="space-y-1.5">
            {section.items.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold transition ${
                    active
                      ? "bg-slate-900 text-white shadow-sm shadow-slate-300"
                      : "text-slate-800 hover:bg-slate-100"
                  }`}
                >
                  <span className="inline-flex h-1.5 w-1.5 rounded-full bg-slate-400" />
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </nav>
  );
}

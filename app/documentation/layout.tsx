import type { ReactNode } from "react";
import SidebarNav from "./sidebar-nav";
import RightToc from "./right-toc";

const navSections = [
  {
    title: "Hera",
    items: [
      { href: "/documentation", label: "Welcome" },
      { href: "/documentation/hera/introduction", label: "Introduction" },
      {
        href: "/documentation/hera/getting-started",
        label: "Getting Started",
      },
      { href: "/documentation/hera/architecture", label: "Architecture" },
      { href: "/documentation/hera/renderer", label: "Renderer" },
      { href: "/documentation/hera/protocol", label: "Protocol" },
    ],
  },
  {
    title: "Hera Kit",
    items: [
      { href: "/documentation/hera-kit/introduction", label: "Introduction" },
      {
        href: "/documentation/hera-kit/getting-started",
        label: "Getting Started",
      },
      { href: "/documentation/hera-kit/layout", label: "Layout" },
      { href: "/documentation/hera-kit/components", label: "Components" },
    ],
  },
  {
    title: "React Native",
    items: [
      {
        href: "/documentation/react-native/introduction",
        label: "Introduction",
      },
      {
        href: "/documentation/react-native/components",
        label: "Components",
      },
    ],
  },
];

export default function DocumentationLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[260px_minmax(0,1fr)_240px]">
        <div className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 px-6 py-4 shadow-sm shadow-slate-200 ring-1 ring-slate-100 lg:hidden">
          <details className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-700">
              Hera
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition group-open:rotate-180">
                <svg
                  aria-hidden="true"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.7a.75.75 0 1 1 1.06 1.06l-4.24 4.25a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>
            <div className="pt-5">
              <SidebarNav sections={navSections} />
            </div>
          </details>
        </div>
        <aside className="hidden border-b border-slate-200 bg-white/90 px-6 py-8 shadow-sm shadow-slate-200 ring-1 ring-slate-100 lg:sticky lg:top-0 lg:block lg:h-screen lg:border-b-0 lg:border-r">
          <div className="lg:h-full lg:overflow-auto lg:pr-2 lg:pt-8 xl:pt-10">
            <SidebarNav sections={navSections} />
          </div>
        </aside>
        <main className="flex-1 px-6 pb-12 pt-12 md:pl-8 md:pr-10 lg:pl-10 lg:pr-12 lg:pb-16 lg:pt-12 mt-6">
          <div id="doc-content" className="mx-auto w-full max-w-5xl">
            {children}
          </div>
        </main>
        <aside className="hidden border-l border-slate-200 bg-white/70 px-6 py-8 text-sm text-slate-800 shadow-sm shadow-slate-200 ring-1 ring-slate-100 lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col">
          <div className="flex-1 overflow-auto pr-1 pt-10">
            <RightToc contentSelector="#doc-content" />
          </div>
        </aside>
      </div>
    </div>
  );
}

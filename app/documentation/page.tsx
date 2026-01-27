import type { Metadata } from "next";
import OverviewIntroduction from "./hera/introduction/page.mdx";

export const metadata: Metadata = {
  title: "Hera Documentation",
  description: "Guides and architecture notes for the Hera stack.",
};

export default function DocumentationPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-3 border-b border-slate-200 pb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
          Welcome
        </p>
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            Hera Documentation
          </h1>
          <p className="text-base text-slate-700 md:text-lg">
            Explore the architecture and fundamentals of Hera. Use the
            navigation on the left to jump between guides, or start with the
            overview below.
          </p>
        </div>
      </header>

      <div className="space-y-6">
        <OverviewIntroduction />
      </div>
    </div>
  );
}

import { codeToHtml } from "shiki";

export default async function Home() {
  const rustCode = `
impl View for SomeComponent {
    fn build(&self, rt: &mut Runtime, env: &mut Environment) -> UiNode {
        h_stack()
          .child(spacer())
          .child(
            view(Color::rgba(0.2, 0.5, 0.9, 1.0))
              .frame(120.0, 40.0)
              .radius(self.radius)
              .shadow(Color::rgba(0.0, 0.0, 0.0, 0.2), 0.0, 4.0, 6.0))
          .child(spacer())
          .build(rt, env)
    }
}
`.trim();

  const rustHtml = await codeToHtml(rustCode, {
    lang: "rust",
    theme: "gruvbox-light-soft",
    colorReplacements: {
      "#f2e5bc": "transparent",
    },
    cssVariablePrefix: "--code-",
  });

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900">
      <main className="relative mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:py-24">
        <header className="flex flex-col gap-10">
          {/* Top Pills */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm ring-1 ring-slate-200 cursor-pointer transition-shadow duration-500 hover:bg-slate-50 hover:shadow-[0_0_48px_rgba(251,146,60,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500">
              <span className="inline-flex h-2 w-2 rounded-full bg-amber-500" />
              Hera — Alpha v0.0.15
            </div>
            <div className="hidden items-center gap-3 text-sm text-slate-700 sm:flex">
              <span className="rounded-full bg-white font-semibold px-5 py-2 ring-1 ring-slate-200 cursor-pointer transition-shadow duration-500 ease-out hover:bg-slate-50 hover:shadow-[0_0_48px_rgba(251,146,60,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500">
                Documentation
              </span>
              <a
                className="rounded-full bg-white font-semibold px-5 py-2 ring-1 ring-slate-200 cursor-pointer transition-shadow duration-500 ease-out hover:bg-slate-50 hover:shadow-[0_0_48px_rgba(251,146,60,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
                href="https://github.com/herastack/hera/releases"
              >
                Downloads
              </a>
              <a
                className="rounded-full bg-white font-semibold px-5 py-2 ring-1 ring-slate-200 cursor-pointer transition-shadow duration-500 ease-out hover:bg-slate-50 hover:shadow-[0_0_48px_rgba(251,146,60,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
                href="https://github.com/herastack"
              >
                Github
                <span aria-hidden="true" className="ml-2">
                  ↗
                </span>
              </a>
            </div>
          </div>
          {/* Hero */}
          <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:items-start mt-16">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-6xl font-semibold leading-[1.1em] tracking-tight text-balance text-slate-900 sm:text-6xl lg:text-8xl">
                  <span className="text-xl sm:text-3xl lg:text-3xl tracking-wide">
                    Introducing
                  </span>
                  <br />
                  Hera
                </h1>
                <p className="max-w-2xl text-lg text-slate-700">
                  A modern open-source application stack targeting Embedded
                  Linux environments.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                <a
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-100/90 via-orange-200/90 to-rose-200/90 px-6 py-3 text-base font-semibold text-slate-900 shadow-sm ring-1 ring-amber-200/70 transition duration-500 ease-out hover:from-amber-300/90 hover:via-orange-300/90 hover:to-rose-300/90 hover:shadow-[0_0_28px_rgba(251,191,36,0.2)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
                  href="/documentation/hera/getting-started"
                >
                  Get Started
                  <span aria-hidden="true">→</span>
                </a>
                <a
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-slate-900 ring-1 ring-slate-200 transition-shadow duration-500 ease-out hover:bg-slate-50 hover:shadow-[0_0_48px_rgba(251,146,60,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
                  href="/documentation"
                >
                  Documentation
                </a>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-slate-200">
              <div
                id="codebg"
                className="pointer-events-none absolute -inset-[35%] bg-[radial-gradient(circle_at_30%_20%,rgba(251,146,60,0.18),transparent_35%),radial-gradient(circle_at_70%_40%,rgba(248,113,113,0.16),transparent_30%),radial-gradient(circle_at_60%_90%,rgba(251,191,36,0.12),transparent_30%)] animate-codebg"
              />
              <div className="relative p-8 sm:p-4">
                {/*<div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-slate-500">
                  <span>Local workflow</span>
                  <span>heractl</span>
                </div>*/}
                <div className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-mono text-slate-800">
                  {/*<div className="rounded-lg bg-slate-900 px-4 py-3 text-slate-50 shadow-sm">
                    <p className="text-[13px]">
                      $ cargo add herastack --rename hera
                    </p>
                    <p className="mt-1 text-[13px] text-emerald-200">
                      ✓ linked to prod • 3 services detected
                    </p>
                  </div>*/}
                  <div className="rounded-lg border border-slate-200 bg-white p-3">
                    <p className="text-[12px] text-slate-500">main.rs</p>
                    <div
                      className="mt-2 text-[11px] leading-6 [&_.line]:px-0 [&_.line]:text-slate-800 [&_.line]:font-mono [&_.line]:text-[11px] font-semibold overflow-hidden bg-white"
                      dangerouslySetInnerHTML={{ __html: rustHtml }}
                    />
                  </div>
                  {/*<div className="rounded-lg border border-slate-200 bg-white p-3">
                    <p className="text-[12px] text-slate-500">apply</p>
                    <p className="mt-2 text-[13px]">
                      $ heractl release apply ./release.yaml --watch
                    </p>
                  </div>*/}
                </div>
              </div>
            </div>
          </div>
        </header>

        <section
          id="features"
          className="mt-12 sm:mt-20 lg:mt-24 space-y-6 lg:space-y-8"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                For builders
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                A Modern Application Stack
              </h2>
            </div>
            {/*<a
              href="#early-access"
              className="hidden items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-300 sm:inline-flex"
            >
              View onboarding notes
              <span aria-hidden="true">↗</span>
            </a>*/}
          </div>

          <div className="grid gap-5 sm:gap-6 lg:grid-cols-3">
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 sm:p-4 lg:col-span-2 shadow-2xl shadow-slate-200">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-amber-100/80 via-orange-100/70 to-rose-100/60" />
              <div className="relative h-full">
                <div className="flex h-full flex-col gap-4 rounded-2xl border border-slate-200 bg-slate-50/90 p-6 sm:p-7">
                  <div className="flex items-center justify-between gap-3 text-sm text-slate-800">
                    <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-500/30">
                      Design
                    </span>
                    {/*<span className="text-xs uppercase tracking-[0.18em] text-slate-500">
                      Always-on
                    </span>*/}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 sm:text-2xl">
                    Architecture
                  </h3>
                  <p className="text-sm text-slate-700">
                    Hera's architecture enables advanced animation and
                    compositional effects by pushing semantic information down
                    the stack all while minimizing GPU contention.
                  </p>
                  {/*<div className="mt-6 rounded-2xl border border-amber-200/70 bg-gradient-to-br from-amber-50 via-white to-rose-50 p-4 shadow-sm">
                    <p className="text-xs uppercase tracking-[0.16em] text-amber-700">
                      Architecture Stack
                    </p>*/}
                  <div className="relative mt-auto">
                    {[
                      {
                        type: "double",
                        items: [
                          {
                            title: "Surface Manager",
                            description: 'Privileged Application ("Launcher")',
                            accent: "bg-amber-500",
                          },
                          {
                            title: "Application",
                            description: "User Application",
                            accent: "bg-amber-500",
                          },
                        ],
                      },
                      {
                        type: "double",
                        items: [
                          {
                            title: "Hera Kit",
                            description: "Native UI library in Rust",
                            accent: "bg-orange-500",
                          },
                          {
                            title: "React Native",
                            description:
                              "Fabric Integration (New Architecture)",
                            accent: "bg-rose-500",
                          },
                        ],
                      },
                      {
                        type: "single",
                        title: "Compositor / Renderer",
                        description: '("Hera")',
                        accent: "bg-amber-600",
                      },
                      {
                        type: "single",
                        title: "GPU",
                        accent: "bg-slate-900",
                      },
                    ]
                      .map((layer) => {
                        if (layer.type === "double") {
                          return (
                            <div
                              key="dual-row"
                              className="relative grid gap-4 sm:grid-cols-2"
                            >
                              {(layer.items ?? []).map((item) => (
                                <div
                                  key={item.title}
                                  className="group relative flex flex-col items-center gap-4 rounded-xl border border-slate-200 bg-white/80 px-4 py-4 text-center"
                                >
                                  <div className="flex flex-col">
                                    <p className="text-sm font-semibold text-slate-900">
                                      {item.title}
                                    </p>
                                    <p className="text-xs text-slate-600">
                                      {item.description}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          );
                        }

                        return (
                          <div
                            key={layer.title}
                            className="group relative flex flex-col items-center gap-4 rounded-xl border border-slate-200 bg-white/80 px-4 py-4 text-center"
                          >
                            <div className="flex flex-col">
                              <p className="text-sm font-semibold text-slate-900">
                                {layer.title}
                              </p>
                              <p className="text-xs text-slate-600">
                                {layer.description}
                              </p>
                            </div>
                          </div>
                        );
                      })
                      .map((node, idx) => (
                        <div key={idx} className={idx > 0 ? "mt-4" : ""}>
                          {node}
                        </div>
                      ))}
                    {/*</div>*/}
                  </div>
                  {/*<div className="mt-auto space-y-4 rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-800">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-emerald-500" />
                        Canary window
                      </span>
                      <span>15m / 30% ramp</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-indigo-500" />
                        Mitigations
                      </span>
                      <span>Auto-revert + Ramp block</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-fuchsia-500" />
                        Alerts
                      </span>
                      <span>Slack • PagerDuty</span>
                    </div>
                  </div>*/}
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-b from-amber-50 via-white to-white p-8 sm:p-4 lg:col-start-1 lg:row-start-2 shadow-2xl shadow-slate-200">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(251,146,60,0.18),transparent_40%),radial-gradient(circle_at_0%_50%,rgba(248,113,113,0.14),transparent_34%)]" />
              <div className="relative h-full">
                <div className="flex h-full flex-col gap-4 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/90 p-6 sm:p-7">
                  <div className="flex items-center justify-between text-sm text-slate-800">
                    {/*<span className="rounded-full bg-blue-600/100 text-white px-3 py-1 text-xs font-semibold shadow-sm">*/}
                    <span className="rounded-full bg-amber-400/20 px-3 py-1 text-xs font-semibold text-amber-800 ring-1 ring-amber-300/40">
                      Customization
                    </span>
                    {/*<span className="text-xs uppercase tracking-[0.18em] text-slate-500">
                      Guarded
                    </span>*/}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 sm:text-2xl">
                    Surface Managers
                  </h3>
                  <p className="text-sm text-slate-700">
                    Develop custom window managers, launchers and experiences
                    that define your systems experience.
                  </p>
                  <div className="mt-auto grid grid-cols-2 gap-3 text-xs text-slate-800">
                    <div className="col-span-2 mt-1 -mb-10 sm:-mb-10 -mr-10 p-4 overflow-hidden rounded-2xl border border-slate-200 bg-white/95">
                      <p className="text-[12px] text-slate-500">main.rs</p>
                      <div
                        className="mt-2 text-[11px] leading-6 [&_.line]:px-0 [&_.line]:text-slate-800 [&_.line]:font-mono [&_.line]:text-[11px] overflow-hidden"
                        dangerouslySetInnerHTML={{ __html: rustHtml }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-amber-50 via-white to-rose-50 p-8 sm:p-4 shadow-2xl shadow-slate-200">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(251,146,60,0.22),transparent_36%),radial-gradient(circle_at_90%_80%,rgba(248,113,113,0.16),transparent_32%)]" />
              <div className="relative h-full">
                <div className="flex h-full flex-col gap-4 rounded-2xl border border-slate-200 bg-slate-50/90 p-6 sm:p-7 overflow-hidden">
                  <div className="flex items-center justify-between text-sm text-slate-800">
                    <span className="rounded-full bg-amber-400/20 px-3 py-1 text-xs font-semibold text-amber-800 ring-1 ring-amber-300/40">
                      Graphics
                    </span>
                    {/*<span className="text-xs uppercase tracking-[0.18em] text-slate-500">
                      Unified
                    </span>*/}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 sm:text-2xl">
                    Vulkan Rendering
                  </h3>
                  <p className="text-sm text-slate-700">
                    A performant, highly-optimized Vulkan renderer with support
                    for modern graphics effects.
                  </p>
                  {/*<div className="mt-auto flex flex-col flex-1 gap-3 text-sm text-slate-800">
                    <div className="flex flex-1 items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 overflow-hidden">
                      <div className="border border-slate-200 w-[200px] h-[300px] rounded-tr-2xl -ml-10 -mb-40"></div>
                    </div>
                  </div>*/}
                  <div className="group relative mt-auto flex-1 overflow-hidden rounded-2xl border border-slate-200 bg-white/80 text-sm text-slate-800 min-h-64">
                    <div className="absolute inset-0 bg-linear-to-br from-amber-100/30 via-white/0 to-rose-100/40" />
                    <div className="absolute bottom-0 left-0 h-3/5 w-1/2 rounded-tr-3xl bg-white/80 shadow-[0_0_64px_rgba(251,146,60,0.85)]"></div>
                    <div
                      className="absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 will-change-transform animate-orbit"
                      style={{ ["--orbit-radius" as string]: "32%" }}
                    >
                      <div className="h-full w-full rounded-full border-4 border-white/50 bg-white/30 backdrop-blur-md shadow-xl" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 sm:p-4 lg:col-start-2 lg:row-start-2 shadow-2xl shadow-slate-200">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(251,146,60,0.12),transparent_34%)]" />
              <div className="relative h-full">
                <div className="flex h-full flex-col gap-4 rounded-2xl border border-slate-200 bg-slate-50/90 p-6 sm:p-7">
                  <div className="flex items-center justify-between text-sm text-slate-800">
                    <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-500/30">
                      Security
                    </span>
                    {/*<span className="text-xs uppercase tracking-[0.18em] text-slate-500">
                      No redeploys
                    </span>*/}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 sm:text-2xl">
                    Isolated Clients
                  </h3>
                  <p className="text-sm text-slate-700">
                    Clients are un-priviledged and isolated from each other.
                    Priviledged clients can compose the display.
                  </p>
                  <div className="flex flex-1 flex-col justify-center space-y-3 text-sm text-slate-800">
                    <div className="rounded-xl border border-slate-200 bg-white p-3 text-center">
                      Surface Manager
                    </div>
                    <div className="relative flex items-center justify-center">
                      <svg
                        viewBox="0 0 200 24"
                        className="h-6 w-full text-amber-500"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        role="presentation"
                        aria-hidden="true"
                      >
                        <path d="M2 12c18-12 22 12 40 0s22 12 40 0 22 12 40 0 22 12 40 0 22 12 36 2" />
                      </svg>
                      <div
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-200/30 via-orange-100/40 to-rose-200/30 blur-md"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="rounded-xl border border-slate-200 bg-white p-3 text-center">
                      Application One
                    </div>
                    <div className="relative flex items-center justify-center">
                      <svg
                        viewBox="0 0 200 24"
                        className="h-6 w-full text-amber-500"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        role="presentation"
                        aria-hidden="true"
                      >
                        <path d="M2 12c18-12 22 12 40 0s22 12 40 0 22 12 40 0 22 12 40 0 22 12 36 2" />
                      </svg>
                      <div
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-200/30 via-orange-100/40 to-rose-200/30 blur-md"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="rounded-xl border border-slate-200 bg-white p-3 text-center">
                      Application Two
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-amber-50 via-white to-rose-50 p-8 sm:p-4 lg:col-start-3 lg:row-start-2 shadow-2xl shadow-slate-200">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(251,146,60,0.22),transparent_36%),radial-gradient(circle_at_90%_80%,rgba(248,113,113,0.16),transparent_32%)]" />
              <div className="relative h-full">
                <div className="flex h-full flex-col gap-4 rounded-2xl border border-slate-200 bg-slate-50/90 p-6 sm:p-7">
                  <div className="flex items-center justify-between text-sm text-slate-800">
                    {/*<span className="rounded-full bg-blue-600/100 text-white px-3 py-1 text-xs font-semibold shadow-sm">*/}
                    <span className="rounded-full bg-amber-400/20 px-3 py-1 text-xs font-semibold text-amber-800 ring-1 ring-amber-300/40">
                      Input
                    </span>
                    {/*<span className="text-xs uppercase tracking-[0.18em] text-slate-500">
                      Unified
                    </span>*/}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 sm:text-2xl">
                    Gesture Support
                  </h3>
                  <p className="text-sm text-slate-700">
                    Support for the gestures users have come to expect from
                    modern applications.
                  </p>
                  <div className="relative mt-auto flex-1 overflow-hidden rounded-2xl border border-slate-200 bg-white/80 text-sm text-slate-800 min-h-64 group">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.08)_1px,transparent_1px)] bg-[size:24px_24px]" />
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-100/30 via-white/0 to-rose-100/40" />
                    <div className="relative flex h-full items-center justify-center gap-14">
                      <span className="relative z-10 h-10 w-10 -translate-y-6 rounded-full bg-gradient-to-br from-amber-200/90 via-orange-200/90 to-rose-200/90 shadow-[0_0_20px_rgba(251,191,36,0.2)] ring-4 ring-white/70 transition-transform duration-700 ease-out group-hover:-translate-x-1 group-hover:-translate-y-8 group-hover:from-amber-300/90 group-hover:via-orange-300/90 group-hover:to-rose-300/90 group-hover:shadow-[0_0_28px_rgba(251,191,36,0.2)]" />
                      <span
                        className="absolute left-1/2 top-1/2 h-0.5 w-36 -translate-x-1/2 -translate-y-1/2 rotate-[25deg] group-hover:rotate-[30deg] duration-700 bg-[radial-gradient(circle,rgba(15,23,42,0.55)_1px,transparent_1px)] bg-[length:10px_2px]"
                        aria-hidden="true"
                      />
                      <span className="relative z-10 h-14 w-14 translate-y-6 rounded-full bg-gradient-to-br from-amber-200/90 via-orange-200/90 to-rose-200/90 shadow-[0_0_22px_rgba(251,191,36,0.22)] ring-4 ring-white/70 transition-transform duration-700 ease-out group-hover:translate-x-1 group-hover:translate-y-8 group-hover:from-amber-300/90 group-hover:via-orange-300/90 group-hover:to-rose-300/90 group-hover:shadow-[0_0_30px_rgba(251,191,36,0.2)]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*<section
          id="early-access"
          className="mt-16 flex flex-col gap-4 rounded-3xl border border-slate-200 bg-gradient-to-r from-amber-100 via-white to-rose-100 p-8 text-center shadow-lg shadow-slate-200 sm:mt-20 sm:p-10"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
            Early access
          </p>
          <h3 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
            Bring Hera into your next launch window.
          </h3>
          <p className="mx-auto max-w-2xl text-base text-slate-700">
            We onboard a handful of teams each week to keep the feedback loop
            tight. Share your stack, your blast radius, and what “safe” means
            for your team.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <a
              href="mailto:hello@hera.build"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-slate-200 transition hover:translate-y-[-1px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
            >
              Talk to us
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-slate-900 shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-300"
            >
              Explore the bento
              <span aria-hidden="true">↺</span>
            </a>
          </div>
        </section>*/}
      </main>
    </div>
  );
}

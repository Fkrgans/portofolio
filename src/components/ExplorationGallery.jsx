import { useEffect, useState } from "react";
import { ArrowUpRight, Award, FolderGit2 } from "lucide-react";

import FlexCarousel from "./FlexCarousel";
import { CERTIFICATES } from "../data/certificates";
import { PROJECT_META } from "../data/projectMeta";

const PROJECT_ITEMS = PROJECT_META.map((project) => ({
  id: `project-${project.id}`,
  kind: "project",
  src: project.img || project.thumbnail,
  alt: `Preview proyek ${project.title}`,
  title: project.title,
  subtitle: project.category,
  project,
}));

const CERTIFICATE_ITEMS = CERTIFICATES.map((certificate) => ({
  id: `certificate-${certificate.id}`,
  kind: "certificate",
  src: certificate.thumbnail,
  alt: `Sertifikat ${certificate.title}`,
  title: certificate.title,
  subtitle: `${certificate.issuer} · ${certificate.date}`,
  certificate,
}));

const ITEMS = [];
const MAX_ITEMS = Math.max(PROJECT_ITEMS.length, CERTIFICATE_ITEMS.length);

for (let index = 0; index < MAX_ITEMS; index += 1) {
    const project = PROJECT_ITEMS[index];
    const certificate = CERTIFICATE_ITEMS[index];

    if (project) ITEMS.push(project);
    if (certificate) ITEMS.push(certificate);
}

const PROJECT_COUNT = PROJECT_ITEMS.length;
const CERTIFICATE_COUNT = CERTIFICATE_ITEMS.length;

function openItem(item, onOpenProject) {
    if (!item) return;

    if (item.kind === "certificate") {
        window.open(item.certificate.pdf, "_blank", "noopener,noreferrer");
        return;
    }

    onOpenProject?.(item.project);
}

function FallbackGallery({ items, onOpen }) {
    return (
        <div className="flex h-full snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {items.map((item) => (
                <button
                    key={item.id}
                    type="button"
                    onClick={() => onOpen(item)}
                    className="group relative aspect-[1.414/1] w-[72vw] shrink-0 snap-center self-center overflow-hidden rounded-[4px] border border-white/10 bg-[#0b0d10] text-left transition-colors hover:border-lime-400/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 sm:w-[44vw] lg:w-[31vw]"
                >
                    <img
                        src={item.src}
                        alt={item.alt}
                        loading="lazy"
                        decoding="async"
                        className={`h-full w-full opacity-80 transition-opacity duration-300 group-hover:opacity-100 ${item.kind === "certificate" ? "bg-white object-contain" : "object-cover"}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-4">
                        <p className="font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-lime-400">
                            {item.kind === "certificate" ? "Certificate" : "Project"}
                        </p>
                        <h3 className="mt-1 text-sm font-bold leading-snug text-white sm:text-base">
                            {item.title}
                        </h3>
                    </div>
                </button>
            ))}
        </div>
    );
}

export default function ExplorationGallery({ onOpenProject }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [webgl2, setWebgl2] = useState(null);

    useEffect(() => {
        let supported = false;

        try {
            const canvas = document.createElement("canvas");
            supported = Boolean(canvas.getContext("webgl2"));
        } catch {
            supported = false;
        }

        setWebgl2(supported);
    }, []);

    const activeItem = ITEMS[activeIndex] ?? ITEMS[0];
    const isCertificate = activeItem?.kind === "certificate";

    const handleOpen = () => openItem(activeItem, onOpenProject);

    const handleSelect = (index, item) => {
        setActiveIndex(index);
        openItem(item, onOpenProject);
    };

    return (
        <section className="relative overflow-hidden bg-[#050608] py-20 sm:py-24">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-50"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
                    backgroundSize: "72px 72px",
                    maskImage: "linear-gradient(to bottom, black, transparent 88%)",
                    WebkitMaskImage: "linear-gradient(to bottom, black, transparent 88%)",
                }}
            />

            <div className="relative mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-24">
                <div className="flex items-center gap-4">
                    <div className="h-2 w-2 shrink-0 rounded-full bg-lime-400 shadow-[0_0_8px_rgba(163,230,53,0.8)]" />
                    <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white/40 sm:text-xs sm:tracking-[0.26em]">
                        02. Past_Explorations
                    </span>
                    <div className="h-px flex-1 bg-white/5" />
                </div>

                <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                    <h2 className="text-5xl font-black uppercase leading-[0.9] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl">
                        Past
                        <br />
                        <span className="text-lime-400">Explorations</span>
                    </h2>

                    <div className="max-w-md">
                        <p className="text-sm leading-6 text-white/50 sm:text-base">
                            Certified learning and shipped experiments — a running archive of what I have built and completed.
                        </p>
                        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[10px] uppercase tracking-[0.16em] text-white/30">
                            <span>
                                <span className="text-lime-400">{String(PROJECT_COUNT).padStart(2, "0")}</span> Projects
                            </span>
                            <span className="text-white/15">/</span>
                            <span>
                                <span className="text-lime-400">{String(CERTIFICATE_COUNT).padStart(2, "0")}</span> Certificates
                            </span>
                        </div>
                    </div>
                </div>

                <div className="relative mt-10 h-[330px] sm:mt-12 sm:h-[420px] lg:h-[540px]">
                    {webgl2 === null && (
                        <div className="flex h-full items-center justify-center border border-white/5 bg-white/[0.02]">
                            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">
                                Loading archive...
                            </span>
                        </div>
                    )}

                    {webgl2 === true && (
                        <FlexCarousel
                            items={ITEMS}
                            preset="liquid"
                            intro="rise"
                            cardHeight={0.58}
                            gap={20}
                            radius={4}
                            fit="natural"
                            focusOnClick={false}
                            autoplay={false}
                            captions={false}
                            captureWheel={false}
                            bend={0.14}
                            dispersion={0.16}
                            reach={0.28}
                            onChange={(index) => setActiveIndex(index)}
                            onSelect={handleSelect}
                            className="project-card h-full w-full"
                        />
                    )}

                    {webgl2 === false && (
                        <FallbackGallery items={ITEMS} onOpen={(item) => openItem(item, onOpenProject)} />
                    )}

                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#050608] via-[#050608]/70 to-transparent sm:w-16 lg:w-24"
                    />
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#050608] via-[#050608]/70 to-transparent sm:w-16 lg:w-24"
                    />
                </div>

                <div className="mt-6 flex flex-col gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-lime-400">
                            {isCertificate ? <Award size={13} strokeWidth={2.2} /> : <FolderGit2 size={13} strokeWidth={2.2} />}
                            <span>{isCertificate ? "Certificate" : "Project"}</span>
                            <span className="text-white/20">/</span>
                            <span className="text-white/35">
                                {String(activeIndex + 1).padStart(2, "0")} of {String(ITEMS.length).padStart(2, "0")}
                            </span>
                        </div>

                        <h3 className="mt-2 max-w-3xl text-lg font-bold leading-snug text-white sm:text-xl">
                            {activeItem?.title}
                        </h3>
                        <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-white/35 sm:text-[11px]">
                            {activeItem?.subtitle}
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={handleOpen}
                        className="group inline-flex shrink-0 items-center justify-center gap-2 border border-lime-400 bg-lime-400 px-5 py-3 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-black transition-colors hover:bg-lime-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050608]"
                    >
                        {isCertificate ? "Buka Sertifikat" : "Lihat Project"}
                        <ArrowUpRight
                            size={15}
                            strokeWidth={2.5}
                            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                    </button>
                </div>

                <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.16em] text-white/25 sm:text-[10px]">
                    Drag untuk menjelajah · Klik kartu aktif atau tombol untuk membuka
                </p>
            </div>
        </section>
    );
}

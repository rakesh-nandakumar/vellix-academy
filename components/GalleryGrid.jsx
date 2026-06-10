import Image from "next/image";
import Icon from "@/components/Icon";

export default function GalleryGrid({ images }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((img, i) => (
        <figure
          key={i}
          className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl bg-slate-100"
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <figcaption className="absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white ring-1 ring-white/25 backdrop-blur-sm">
              <Icon name="maximize" className="h-4 w-4" />
            </span>
            <span className="text-sm font-semibold text-white">{img.alt}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

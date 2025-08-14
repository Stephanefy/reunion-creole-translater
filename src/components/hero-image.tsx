import Image from "next/image";


interface HeroImageProps {
    src: string;
    alt: string;
    imageText?: string;
}

export default function HeroImage({src, alt, imageText}: HeroImageProps) {
    return (
      <div className="relative w-full aspect-[16/9]"> {/* or h-64 sm:h-80 md:h-96 */}
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/10">
          <h1 className="absolute bottom-0 left-0 text-sm md:text-1xl font-bold text-white text-center p-4">
            <span className="font-bold">{imageText}</span>
          </h1>
        </div>
      </div>
    )
  }
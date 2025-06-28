import Image from "next/image";
import { CSSProperties } from "react";

interface ImageBlockProps {
    src: any;
    alt: string;
    title?: string;
    caption?: string;
    className?: string;
    imgFit?: CSSProperties['objectFit'];
    imageClassName?: string;
}

export default function ImageBlock({
    src,
    alt,
    title,
    caption,
    className = "",
    imageClassName = "",
    imgFit = "contain",
}: ImageBlockProps) {
    // console.log("test", imgFit)
    return (
        <div className={`space-y-4 ${className}`}>
            {title && (
                <h3 className="text-xl font-semibold text-gray-900">
                    {title}
                </h3>
            )}

            <div className="w-full relative h-64">
                <Image
                    src={src}
                    alt={alt}
                    fill
                    style={{ objectFit: imgFit}}
                    className={`w-full h-auto rounded-lg ${imageClassName}`}
                />
            </div>

            {caption && (
                <p className="text-sm text-gray-500 italic">
                    {caption}
                </p>
            )}
        </div>
    );
}

"use client"
import Image, { StaticImageData } from 'next/image';

interface ProductDisplayCardProps {
    gradientFrom: string;
    gradientTo: string;
    image: StaticImageData;
    imageAlt: string;
    productName: string;
    productSpecs: string;
    className?: string;
    aspectRatio?: 'video' | 'portrait';
    hideBanner?: boolean;
}

export default function ProductDisplayCard({
    gradientFrom,
    gradientTo,
    image,
    imageAlt,
    productName,
    productSpecs,
    className = "",
    aspectRatio = "video",
    hideBanner = false
}: ProductDisplayCardProps) {
    const aspectClass = aspectRatio === "portrait" ? "aspect-[9/16]" : "aspect-video";

    return (
        <div className={`w-full ${className}`}>
            <div className="relative group cursor-pointer">
                {/* Full Image Card */}
                <div className={`${aspectClass} rounded-sm overflow-hidden shadow-2xl transition-all duration-300 transform  group-hover:shadow-3xl`}>
                    <Image
                        src={image}
                        alt={imageAlt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    {/* Glossy Overlay at Bottom */}
                    {!hideBanner && (
                        <>
                            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                                {/* Glossy Background for Title */}
                                <div className="absolute bottom-0 left-0 right-0 backdrop-blur-md bg-white/10 dark:bg-black/20 border-t border-white/20">
                                    <div className="p-4">
                                        <h3 className="text-white font-bold text-sm sm:text-lg leading-tight mb-1 drop-shadow-lg">
                                            {productName}
                                        </h3>
                                        <p className="text-white/90 text-xs font-medium drop-shadow-md">
                                            {productSpecs}
                                        </p>
                                    </div>

                                    {/* Shine Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out"></div>
                                </div>
                            </div>
                            {/* Subtle Inner Shadow */}
                            <div className="absolute inset-0 rounded-2xl shadow-inner pointer-events-none"></div>
                        </>

                    )}

                    {/* Bottom Gradient Overlay */}

                </div>
            </div>
        </div>
    );
}

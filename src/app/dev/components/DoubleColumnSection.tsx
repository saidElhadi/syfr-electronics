import { ReactNode } from 'react';

interface DoubleColumnSectionProps {
    leftColumn: ReactNode;
    rightColumn: ReactNode;
    className?: string;
    gap?: string;
    maxWidth?: string;
}

export default function DoubleColumnSection({
    leftColumn,
    rightColumn,
    className = "",
    gap = "gap-8",
    maxWidth = "max-w-6xl"
}: DoubleColumnSectionProps) {
    return (
        <section className={`py-8 ${className}`}>
            <div className={`${maxWidth} mx-auto px-4`}>
                <div className={`grid grid-cols-1 md:grid-cols-2 ${gap}`}>
                    {/* Left Column */}
                    {leftColumn}

                    {/* Right Column */}
                    {rightColumn}
                </div>
            </div>
        </section>
    );
}

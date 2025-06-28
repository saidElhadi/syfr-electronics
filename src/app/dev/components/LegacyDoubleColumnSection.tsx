import { ReactNode } from 'react';
import ContentBlock from './ContentBlock';

// Legacy interface for backward compatibility
interface ColumnData {
    type: 'text' | 'image';
    title?: string;
    content?: string;
    src?: any;
    alt?: string;
    caption?: string;
    imageClassName?: string;
    textClassName?: string;
    imgFit?: string;    
}

interface LegacyDoubleColumnSectionProps {
    leftColumn: ColumnData;
    rightColumn: ColumnData;
    className?: string;
}

export default function LegacyDoubleColumnSection({
    leftColumn,
    rightColumn,
    className = ""
}: LegacyDoubleColumnSectionProps) {
    console.log(leftColumn, rightColumn)
    return (
        <section className={`py-8 ${className}`}>
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <ContentBlock {...leftColumn} />

                    {/* Right Column */}
                    <ContentBlock {...rightColumn} />
                </div>
            </div>
        </section>
    );
}

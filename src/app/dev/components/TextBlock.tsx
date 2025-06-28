interface TextBlockProps {
  title?: string;
  content: string;
  className?: string;
  textClassName?: string;
}

export default function TextBlock({
  title,
  content,
  className = "",
  textClassName = ""
}: TextBlockProps) {
  return (
    <div className={`space-y-4 ${className} ${textClassName}`}>
      {title && (
        <h3 className="text-xl font-semibold text-gray-900">
          {title}
        </h3>
      )}
      
      <p className="text-gray-600 leading-relaxed">
        {content}
      </p>
    </div>
  );
}

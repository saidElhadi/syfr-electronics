import TextBlock from './TextBlock';
import ImageBlock from './ImageBlock';

interface ContentBlockProps {
  type: 'text' | 'image';
  title?: string;
  content?: string;
  src?: string;
  alt?: string;
  caption?: string;
  className?: string;
  imageClassName?: string;
  textClassName?: string;
  imgFit?: string;
}

export default function ContentBlock({
  type,
  title,
  content,
  src,
  alt,
  caption,
  className = "",
  textClassName = "",
  imageClassName = "",
  imgFit = ""
}: ContentBlockProps) {
  if (type === 'image' && src && alt) {
    return (
      <ImageBlock
        src={src}
        alt={alt}
        title={title}
        caption={caption}
        className={className}
        imageClassName={imageClassName}
        imgFit={imgFit}
      />
    );
  }

  if (type === 'text' && content) {
    return (
      <TextBlock
        title={title}
        content={content}
        className={className}
        textClassName={textClassName}
      />
    );
  }

  return null;
}

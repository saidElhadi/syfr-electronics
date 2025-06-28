'use client';

import { useDirection } from '@/hooks/useDirection';
import { ReactNode } from 'react';

interface RTLAwareProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function RTLAware({ children, className = '', style = {} }: RTLAwareProps) {
  const { direction, isRTL } = useDirection();

  return (
    <div 
      dir={direction}
      className={`${className} ${isRTL ? 'rtl' : 'ltr'}`}
      style={style}
    >
      {children}
    </div>
  );
}

// Arrow component that flips direction based on RTL
interface RTLArrowProps {
  direction?: 'left' | 'right';
  className?: string;
}

export function RTLArrow({ direction = 'right', className = '' }: RTLArrowProps) {
  const { isRTL } = useDirection();
  
  // Flip the arrow direction for RTL
  const actualDirection = isRTL 
    ? (direction === 'right' ? 'left' : 'right')
    : direction;

  return (
    <svg 
      className={`${className} ${isRTL ? 'rtl-flip' : ''}`}
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      {actualDirection === 'right' ? (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      )}
    </svg>
  );
}

// Flex container that reverses order for RTL
interface RTLFlexProps {
  children: ReactNode;
  className?: string;
  reverse?: boolean; // If true, reverses the normal direction
}

export function RTLFlex({ children, className = '', reverse = false }: RTLFlexProps) {
  const { isRTL } = useDirection();
  
  const shouldReverse = isRTL ? !reverse : reverse;
  
  return (
    <div className={`flex ${shouldReverse ? 'flex-row-reverse' : 'flex-row'} ${className}`}>
      {children}
    </div>
  );
}

// Text alignment utility
interface RTLTextProps {
  children: ReactNode;
  align?: 'left' | 'right' | 'center';
  className?: string;
}

export function RTLText({ children, align = 'left', className = '' }: RTLTextProps) {
  const { isRTL } = useDirection();
  
  let textAlign = align;
  if (align === 'left' && isRTL) {
    textAlign = 'right';
  } else if (align === 'right' && isRTL) {
    textAlign = 'left';
  }
  
  return (
    <div className={`text-${textAlign} ${className}`}>
      {children}
    </div>
  );
}

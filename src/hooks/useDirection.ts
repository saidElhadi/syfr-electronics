'use client';

import { useLocale } from 'next-intl';
import { getLangDir } from 'rtl-detect';

export function useDirection() {
  const locale = useLocale();
  const direction = getLangDir(locale);
  const isRTL = direction === 'rtl';

  return {
    direction,
    isRTL,
    isLTR: !isRTL,
  };
}

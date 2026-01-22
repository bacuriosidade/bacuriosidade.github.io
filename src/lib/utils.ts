import { clsx, type ClassValue } from 'clsx';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const parseJSON = (json: string): object | null => {
  try {
    const jsonObj = JSON.parse(json);
    if (jsonObj && typeof jsonObj === 'object') return jsonObj;
  } catch (e) {
    if (e) return null;
    return null;
  }
  return null;
};

export default function useIsVisible(ref: React.RefObject<Element | null>) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting));
    if (ref.current) observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}

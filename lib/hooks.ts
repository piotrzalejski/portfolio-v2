import { useActiveSectionContext } from '@/context/active-section-context';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import type { SectionName } from './types';

export default function useSectionInView(
  sectionName: SectionName,
  thresh = 0.5,
  once = false
) {
  const { ref, inView } = useInView({ threshold: thresh, triggerOnce: once });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, timeOfLastClick, sectionName]);

  return { ref, inView };
}

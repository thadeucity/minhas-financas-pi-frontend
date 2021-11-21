import { PropsWithChildren, useEffect, useState, useRef, useMemo } from 'react';
import { createPortal } from 'react-dom';

export interface IPortal {
  selector?: string;
}

export const Portal = ({
  selector = '__ROOT_PORTAL__',
  children,
}: PropsWithChildren<IPortal>): React.ReactPortal => {
  const ref = useRef<Element>();
  const [mounted, setMounted] = useState(false);

  const selectorPrefixed = useMemo(
    () => `#${selector.replace(/^#/, '')}`,
    [selector],
  );

  useEffect(() => {
    ref.current = document.querySelector(selectorPrefixed);

    if (!ref.current) {
      const div = document.createElement('div');
      div.setAttribute('id', selector);
      document.body.appendChild(div);
      ref.current = div;
    }

    setMounted(true);
  }, [selector, selectorPrefixed]);

  return mounted ? createPortal(children, ref.current) : null;
};

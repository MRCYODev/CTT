import type {ReactNode} from 'react';
import ThemeEffects from '@site/src/components/ThemeEffects';
import ThemePicker from '@site/src/components/ThemePicker';

export default function Root({
  children,
}: {
  children: ReactNode;
}): ReactNode {
  return (
    <>
      <ThemeEffects />
      <ThemePicker />
      {children}
    </>
  );
}

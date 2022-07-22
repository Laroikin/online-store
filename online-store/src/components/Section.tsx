import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import cn from 'classnames';

interface SectionProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: React.ReactNode;
}

function Section({ children, className: derivedClassName }: SectionProps) {
  return (
    <div className={cn('w-screen flex justify-center', derivedClassName)}>
      <div className="max-w-[1440px] w-full">
        {children}
      </div>
    </div>
  );
}

export default Section;

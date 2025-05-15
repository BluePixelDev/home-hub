import { IonIcon } from "@ionic/react";
import type { ReactNode } from "react";

interface PowerListItemProps {
  children?: ReactNode;
  icon: string;
  label: string;
}

export const PowerListItem = ({
  children,
  icon,
  label,
}: PowerListItemProps) => (
  <div className="flex justify-between items-center w-full border-b border-white/10 pb-2">
    <div className="flex items-center gap-3 min-w-[7rem]">
      <IonIcon icon={icon} className="text-[clamp(1.75rem,3vw,2.5rem)]" />
      <span className="text-lg md:text-xl">{label}</span>
    </div>
    {children}
  </div>
);

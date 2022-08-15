import { CSSProperties } from "react";
import * as Icons from "react-icons/fa";

export interface IMyIcon {
    icon: keyof typeof Icons;
    styleIcon: CSSProperties;
    classIcon: string;
}
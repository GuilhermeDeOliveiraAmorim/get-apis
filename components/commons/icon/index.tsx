import { CSSProperties } from "react";
import * as Icons from "react-icons/fa";

interface IMyIcon {
    icon: string;
    styleIcon: CSSProperties;
    classIcon: string;
}

export default function MyIcon(props: IMyIcon) {

    const { icon, styleIcon, classIcon } = props;

    const IconComponent = Icons[icon];

    return (<IconComponent style={styleIcon} className={classIcon} />);
}
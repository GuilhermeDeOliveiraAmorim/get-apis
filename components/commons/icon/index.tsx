import * as Icons from "react-icons/fa";
import { IMyIcon } from "../../../interfaces/icon";

export default function MyIcon(props: IMyIcon) {

    const { icon, styleIcon, classIcon } = props;

    const IconComponent = Icons[icon];

    return (<IconComponent style={styleIcon} className={classIcon} />);
}
import * as Icons from "react-icons/fa";
import { IMyIcon } from "../../../interfaces/icon";

export default function MyIcon(props: IMyIcon) {
  const { icon, styleIcon, classIcon } = props;

  const IconComponent = icon;

  return <IconComponent style={styleIcon} className={classIcon} />;
}

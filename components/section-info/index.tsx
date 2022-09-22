import { ISectionInfo } from "../../interfaces/apis_info";
import SectionInfoStyle from "./SectionInfo.module.css";

export default function SectionInfo(props: ISectionInfo) {
  const { titleSection, textSection, color } = props;

  return (
    <div className={SectionInfoStyle.info}>
      <h1 style={color} className={SectionInfoStyle.h1}>
        {titleSection}
      </h1>
      {textSection.map((p) => (
        <p key={p.length + Math.random()} style={color} className={SectionInfoStyle.p}>
          {p}
        </p>
      ))}
    </div>
  );
}

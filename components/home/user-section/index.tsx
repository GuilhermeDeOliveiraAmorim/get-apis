import useGetGitUserInfo from "../../../hooks/use-github/useGetGitUserInfo";
import StyleUser from "./User.module.css";
import { changeColor } from "../../../util/util_change_color";
import { colors } from "../../../util/util_colors";
import { socialIcons } from "../../../data/apis";
import Link from "next/link";
import MyIcon from "../../commons/icon";

export default function UserInfo() {
    const user = useGetGitUserInfo();

    return (
        <section className={StyleUser.user}>
            <div className={StyleUser.picture}>
                <img className={StyleUser.img} src={user.data?.avatar_url} />
                <h1 className={StyleUser.h1}>{user.data?.name}</h1>
                <h2 className={StyleUser.h2}>Desenvolvedor full stack</h2>
                <div className={StyleUser.info}>
                {socialIcons.map(s =>
                    <Link
                        key={s.id}
                        passHref
                        target="_blank"
                        href={s.link}
                    >
                        <a>
                            <MyIcon icon={s.icon} styleIcon={changeColor(colors)} classIcon={StyleUser.icon} />
                        </a>
                    </Link>
                )}
                </div>
            </div>
        </section>
    );
}

import Image from "next/image";
import useGetGitUserInfo from "../../../hooks/use-github/useGetGitUserInfo";
import StyleUser from "./User.module.css";

export default function UserInfo() {

    const user = useGetGitUserInfo();

    return (
        <div className={StyleUser.user}>
            <div className={StyleUser.picture}>
                <img className={StyleUser.img} src={user.data?.avatar_url} />
                <h1 className={StyleUser.h1}>
                    {user.data?.name}
                </h1>
                <h2 className={StyleUser.h2}>
                    Desenvolvedor full stack
                </h2>
            </div>
            <div className={StyleUser.info}>

            </div>
        </div>
    )
}
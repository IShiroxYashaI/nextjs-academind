import Link from "next/link";
import style from "./button.module.css";

export default function Button(props) {
    const { children } = props;

    if (props.link) {
        return (
            <Link href={props.link} className={style.btn}>
                {children}
            </Link>
        );
    }

    return (
        <button className={style.btn} onClick={props.onClick}>
            {children}
        </button>
    );
}
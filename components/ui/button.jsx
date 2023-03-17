import Link from "next/link";
import style from "./button.module.css";

export default function Button(props) {
    const { children } = props;

    return (
        <Link href="/events" className={style.btn}>
            {children}
        </Link>
    );
}
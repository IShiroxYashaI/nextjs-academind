import style from "./main-header.module.css";
import Link from "next/link";

export default function MainHeader(props) {
    return (
        <header className={style.header}>
        <div className={style.logo}>
            <Link href='/'>NextEvents</Link>
        </div>
        <nav className={style.navigation}>
            <ul>
                <li>
                    <Link href="/events">Browse All Events</Link>
                </li>
            </ul>
        </nav>
        </header>
    );
    }
export default function EventItem(props) { 
    return (
        <li>
            <img src={props.image} alt={props.title} />
            <div>
                <div>
                    <h2>{props.title}</h2>
                    <div>
                        <time>{props.date}</time>
                    </div>
                    <div>
                        <address>{props.location}</address>
                    </div>
                </div>
                <div>
                    <button>Explore Event</button>
                </div>
            </div>
        </li>
    );
}
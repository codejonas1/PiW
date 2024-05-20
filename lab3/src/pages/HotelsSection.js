import arrow from "../Assets/Arrow.svg"
import { Link } from "react-router-dom";
import hotels from "../data";

const HotelsSection = () => {
    return (
        hotels.map((hotel) => (
            <article key={hotel.id} className="hotel-card">
                <div className="card-image" style={{backgroundImage: `url(${require(`../Assets/${hotel.img_card}`)})`,}}>
                    <p className="chip">{hotel.country}</p>
                    <p className="chip">🤍</p>
                </div>
                <p className="text-middle">{hotel.name}</p>
                <p className="text-small">{hotel.text}</p>
                <div className="hotel-card-footer">
                    <p className="text-middle">{hotel.stars}</p>
                    <p className="text-middle">{hotel.price}</p>
                </div>
                <Link to="/hotelPage" className="button primary">View offer <img src={arrow} alt="arrow" /></Link>
            </article>
        ))
    )
}

export default HotelsSection;
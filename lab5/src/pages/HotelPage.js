import { useState, useEffect } from "react";
import { getHotelById } from "../data/hotelsService";
import { useLocation } from "react-router-dom";
import { MailModal } from "../data/Mail";

const HotelPage = () => {
    const location = useLocation();
    const id = location.pathname.split("/").pop();

    const [mailModalIsOpen, setMailModalIsOpen] = useState(false);
    const [hotelData, setHotelData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getHotelById(id).then((data) => {
        setHotelData(data);
        setIsLoading(false);
        });
    }, [id]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return(
        <>
        <section className="hero-section grid">
        <article className="hero-title">
            <p className="title-large hero-title">{hotelData.name}</p>
        </article>

        <article className="hotel-promo">
            <div className="card-image" style={{
            backgroundImage: `url(${require(`../Assets/${hotelData.img_card}`)})`,
          }}>
                <p className="chip">Add to favorites 🤍</p>
            </div>
        </article>

        <article className="hotel-description">
            <div>
                <ul>
                    <li><b>Location:</b> {hotelData.country}</li>
                    <li><b>Local category:</b> {hotelData.stars}</li>
                    <li><b>Price:</b> {hotelData.price}$/per room</li>
                    <li><b>Description:</b></li>
                </ul>
                <p>{hotelData.text}</p>
                <button className="button primary" onClick={()=>setMailModalIsOpen(true)}>Contact 📧</button>

                <MailModal
                    modalIsOpen={mailModalIsOpen}
                    setModalIsOpen={setMailModalIsOpen}
                />
               
            </div>
            <div className="hotel-images">
                <div style={{
            backgroundImage: `url(${require(`../Assets/${hotelData.img_card}`)})`,
          }}></div>
                <div style={{
            backgroundImage: `url(${require(`../Assets/${hotelData.img_card}`)})`,
          }}></div>
            </div>
        </article>
   </section>
    </>
    )
};


export default HotelPage;
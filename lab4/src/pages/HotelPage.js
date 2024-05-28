import { useState, useEffect } from "react";
import { getHotelById } from "../data/hotelsService";
import { useLocation } from "react-router-dom";

const HotelPage = () => {
    const openDialog = () =>{
        const favdialog = document.getElementById("dialog");
        favdialog.showModal();
    }

    const closeDialog = () => {
        const favdialog = document.getElementById("dialog");
        favdialog.close();
    }

    const location = useLocation();
    const id = location.pathname.split("/").pop();

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
                <button className="button primary" onClick={openDialog}>Contact 📧</button>

                <dialog id="dialog">
                    <form method="dialog">
                        <div className="close-btn">
                            <button className="button" onClick={closeDialog}>X</button>
                        </div>
                        <p className="title-large">Contact</p>
                        <p>You're contacting the [hotel name] hotel</p>
                    
                        <textarea name="" id="" rows="10"></textarea>
                        <div className="dialog-footer-buttons">
                            <button className="button" type="reset">Clear</button>
                            <button className="button primary" type="submit">Send</button>
                        </div>
                    </form>
                </dialog>
                  
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
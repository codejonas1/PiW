const HotelPage = () => {
    const openDialog = () =>{
        const favdialog = document.getElementById("dialog");
        favdialog.showModal();
    }

    const closeDialog = () => {
        const favdialog = document.getElementById("dialog");
        favdialog.close();
    }

    return(
        <>
        <section className="hero-section grid">
        <article className="hero-title">
            <p className="title-large hero-title">Serene Retreat</p>
        </article>

        <article className="hotel-promo">
            <div className="card-image">
                <p className="chip">Add to favorites 🤍</p>
            </div>
        </article>

        <article className="hotel-description">
            <div>
                <ul>
                    <li><b>Location:</b> Madrid</li>
                    <li><b>Local category:</b> ★★★★★</li>
                    <li><b>Price:</b> 70$/per room</li>
                    <li><b>Description:</b></li>
                </ul>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi odit harum, mollitia voluptates aperiam incidunt illo, veniam alias laudantium corrupti maiores! Distinctio consectetur molestias porro vel dolore quam obcaecati nostrum? Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
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
                <div></div>
                <div></div>
            </div>
        </article>
   </section>
    </>
    )
};


export default HotelPage;
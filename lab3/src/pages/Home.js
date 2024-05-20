import arrow from "../Assets/Arrow.svg";
import HotelsSection from "./HotelsSection";
import { Link } from "react-router-dom";

const Home = () => {
    return(
        <>
        <section id="hero" className="grid hero-section">
        <article className="hero-details">
            <p className="title-large">Your tranquillity oasis awaits</p>
            <p className="text-middle">TranquilTravels is designed to help you find a serene retreat for your next holidays. With us searching for the hotels nestled amidst picturesque landscapes is easier than ever. </p>
            <div className="hero-cards">
                <div className="card-image">
                    <p className="chip">New hotels <img src={arrow} alt="arrow"  /></p>
                </div>
                <div className="card-image">
                    <p className="chip">Best reviews <img src={arrow} alt="arrow"  /></p>
                </div>
            </div>
        </article>
        <div className="hero-image-container"></div>
    </section>

    <section id="browse" className="browse-section">
        <p className="title-middle">Explore the hotels</p>
        <input className="searchbar" placeholder="Search by hotel name, place etc." />
        <section className="grid hotel-cards">
            {<HotelsSection />}
        </section>
        <Link to="browseHotels" className="button secondary">Find more <img src={arrow} alt="arrow" /></Link>
    </section>
    <section id="rent" className="footer grid">
        <div className="card-image"></div>
        <article className="footer-details">
            <p className="title-large">Rent with us!</p>
            <p className="text-middle">If you’re a hotel or an apartament owner who’s looking to reach more customers you can now rent your property with TranquilTravels. </p>
            <button className="button secondary">Learn more <img src={arrow} alt="arrow" /></button>
        </article>
    </section>
    </>
    );
  };
  
export default Home;
  
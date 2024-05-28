import React from "react";
import HotelsSection from "./HotelsSection";
import { readHotelsData } from "../data/hotelsService";

const BrowseHotels = () => {
    return(
    <section id="browse" className="browse-section">
        <p className="title-middle">Explore the hotels</p>

        <input className="searchbar" placeholder="Search by hotel name, place etc." />
        <section className="grid hotel-cards">

            {<HotelsSection />}

        </section>
    </section>
    );
  };
  
  export default BrowseHotels;
  
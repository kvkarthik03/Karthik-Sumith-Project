import React from "react";
import Navbar from "./Navbar";

function Room() {
    return(
        <div>
        <div className="row">
            <div className="col-md-4">
                <img src="./room1.jpg"></img>
            </div>

            <div className="col-md-7">
                <h1>Luxury Ambience Inn</h1>
                <p>Rating: ⭐⭐⭐⭐⭐</p>
                <p>Room Type: Deluxe A/c</p>

                <div>
                    <button className="btn btn-primary">Book Now</button>
                </div>

            </div>
        </div>

        </div>
    )
}
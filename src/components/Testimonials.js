import React from "react";
import ratings from "../images/rating.png";
import profile1 from "../images/profile1.jpg";
import profile2 from "../images/profile2.jpg";
import profile3 from "../images/profile3.jpg";
import profile4 from "../images/profile4.jpg";

const Testimonials = () =>{
    return(
        <section>
            <div className="testimonials">
                <div className="testimonials-header">
                    <h2>Testimonials</h2>
                </div>

                <div className="review-container">
                    <div className="review">
                        <img id="profile" src={profile1} alt="Customer Pic" />
                        <h2>Robin M.</h2>
                        <img id="rating" src={ratings} alt="ratings"/>
                        <p>"The greek salad was magnificent!"😋</p>
                    </div>

                    <div className="review">
                        <img id="profile" src={profile2} alt="Customer Pic" />
                        <h2>Anna T.</h2>
                        <img id="rating" src={ratings} alt="ratings"/>
                        <p>"Really enjoyed the vibe"😍</p>
                    </div>

                    <div className="review">
                        <img id="profile" src={profile3} alt="Customer Pic" />
                        <h2>Sydney S.</h2>
                        <img id="rating" src={ratings} alt="ratings"/>
                        <p>"You have to try their Lemon Dessert! It's amazing."🤤❤️</p>
                    </div>

                    <div className="review">
                        <img id="profile" src={profile4} alt="Customer Pic" />
                        <h2>Scarlett J.</h2>
                        <img id="rating" src={ratings} alt="ratings"/>
                        <p>"Awesome place with peaceful atmosphere and delicious food"🥰</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials;
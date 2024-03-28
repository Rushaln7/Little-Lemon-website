import React from "react";
import restaurantChefs from "../images/Mario and Adrian A.jpg";
import restaurant from "../images/restaurant.jpg";


const About = () => {
    return(
        <section>
            <div className="about">
                <div className="about-content">
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut diam quam nulla porttitor massa id neque. Eros donec ac odio tempor orci. 
                        Pellentesque dignissim enim sit amet venenatis urna cursus eget. 
                        Ultricies tristique nulla aliquet enim tortor at. Tincidunt dui ut ornare lectus sit amet. 
                        Vel turpis nunc eget lorem dolor sed viverra. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus. 
                        Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam. 
                    </p>
                </div>

                <div className="owners">
                    <img id="chefs" src={restaurantChefs} alt="Owner" />
                    <img id="restaurant" src={restaurant} alt="Setup" />
                </div>
            </div>
        </section>
    );
};

export  default About;
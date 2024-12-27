import { Check } from "lucide-react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import BMICalculator from "./BMICalculator";
import Footer from "./Footer";
import Contact from "./Contact";

const Pricing = () => {

  const navigate = useNavigate();
  const pricing = [
    {
      imgUrl: "/pricing.jpg",
      title: "QUARTERLY",
      price: 18000,
      length: 3,
    },
    {
      imgUrl: "/pricing.jpg",
      title: "HEAL_YEARLY",
      price: 32000,
      length: 6,
    },
    {
      imgUrl: "/pricing.jpg",
      title: "YEARLY",
      price: 65000,
      length: 12,
    },
  ];
  return (

    <>
      <section className="pricing" style={{ marginTop: '-30px' }}>
        <h1><u style={{ color: '#0095ff' }}>MUSCLEMIND FITNESS PLANS</u> </h1>
        <div className="wrapper">
          {pricing.map((element) => {
            return (
              <div className="card" key={element.title}>
                <img src={element.imgUrl} alt={element.title} />
                <div className="title">
                  <h1>{element.title}</h1>
                  <h1>PACKAGE</h1>
                  <h3>Rs {element.price}</h3>
                  <p>For {element.length} Months</p>
                </div>
                <div className="description">
                  <p>
                    {/* check is come lucid react */}
                    <Check /> Equipment
                  </p>
                  <p>
                    <Check /> All Day Fre Training & persoanl trainer also available
                  </p>
                  <p>
                    <Check /> Free Restroom
                  </p>
                  <p>
                    <Check /> 24/7 Skilled Support
                  </p>
                  <p>
                    <Check /> 20 Days Freezing Option
                  </p>
                  <Link to="/form">Join Now</Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <Contact />
      <BMICalculator />
      {/* <Footer /> */}
    </>
  );
};

export default Pricing;
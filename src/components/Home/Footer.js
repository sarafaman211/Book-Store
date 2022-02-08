import React from 'react';
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <div className="footer" style={{ textTransform: "upperCase" }}>

        <div className="box-container container">

          <div className="box">
            <h3>our locations</h3>
            <Link to="#"> <i className="fas fa-map-marker-alt"></i> india </Link>
            <Link to="#"> <i className="fas fa-map-marker-alt"></i> USA </Link>
            <Link to="#"> <i className="fas fa-map-marker-alt"></i> russia </Link>
            <Link to="#"> <i className="fas fa-map-marker-alt"></i> france </Link>
            <Link to="#"> <i className="fas fa-map-marker-alt"></i> japan </Link>
            <Link to="#"> <i className="fas fa-map-marker-alt"></i> africa </Link>
          </div>

          <div className="box">
            <h3>quick links</h3>
            <Link to="/"> <i className="fas fa-arrow-right"></i> home </Link>
            <Link to="/newArrival"> <i className="fas fa-arrow-right"></i> New Arrivals </Link>
          </div>

          <div className="box">
            <h3>extra links</h3>
            <Link to="#"> <i className="fas fa-arrow-right"></i> account info </Link>
            <Link to="#"> <i className="fas fa-arrow-right"></i> ordered items </Link>
            <Link to="#"> <i className="fas fa-arrow-right"></i> privacy policy </Link>
            <Link to="#"> <i className="fas fa-arrow-right"></i> payment method </Link>
            <Link to="#"> <i className="fas fa-arrow-right"></i> our serivces </Link>
          </div>

          <div className="box">
            <h3>contact info</h3>
            <Link to="#"> <i className="fas fa-phone"></i> +123-456-7890 </Link>
            <Link to="#"> <i className="fas fa-phone"></i> +111-222-3333 </Link>
            <Link to="#"> <i className="fas fa-envelope"></i> sarafaman211@gmail.com </Link>
            <img src="image/worldmap.png" className="map" alt="" />
          </div>

        </div>

        <div className="share">
          <a href="https://www.facebook.com/" target="_blank" className="fab fa-facebook-f"></a>
          <a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D" target="_blank" className="fab fa-twitter"></a>
          <a href="#https://www.instagram.com/sem/campaign/emailsignup/?campaign_id=13530338610&extra_1=s|c|547419127631|e|instagram%20%27|&placement=&creative=547419127631&keyword=instagram%20%27&partner_id=googlesem&extra_2=campaignid%3D13530338610%26adgroupid%3D126262414014%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-1321618851291%26loc_physical_ms%3D9302961%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAiAo4OQBhBBEiwA5KWu_0qxLOLAGN-ZBFUKoHlJQ7Ui340DtR1ibazImvMjueosFs9AVE_qphoCANsQAvD_BwE" target="_blank" className="fab fa-instagram"></a>
          <a href="https://www.pinterest.com/" target="_blank" className="fab fa-pinterest"></a>
        </div>

        <div className="credit pb-3"> created by <span>mr. Aman Saraf</span> | all rights reserved! </div>
      </div>
    </>
  );
};

export default Footer;

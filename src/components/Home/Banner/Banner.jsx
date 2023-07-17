import "./Banner.scss";
import BannerImg from '../../../assets/banner-img.png';
import { Fragment } from "react";

const Banner = () => {
    return(
        <Fragment>
            <div className="hero-banner">
                <div className="content">
                    <div className="text-content">
                        <h1>SALES</h1>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, aperiam dolores? Corporis unde tempora ratione ex error dolores illum eius non commodi magnam dolorum possimus eaque animi, explicabo ipsam natus!
                        </p>
                        <div className="ctas">
                            <div className="banner-cta">
                                Read More
                            </div>
                            <div className="banner-cta v2">Shop Now</div>
                        </div>
                    </div>
                    <img className="banner-img" src={BannerImg} alt="BannerImg" />
                </div>
            </div>
        </Fragment>
    )
};

export default Banner;

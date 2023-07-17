 import { Fragment, useEffect, useState } from "react";
import "./Header.scss";
import { TbSearch } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { CgShoppingCart } from "react-icons/cg";
const Header = () => {

    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if(offset>200){
            setScrolled(true)
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll", handleScroll);
    },[])

    return(
        <Fragment>
            <header className={`main-header ${scrolled ?'sticky-header':''}`}>
                <div className="header-content">
                    <ul className="left">
                        <li>Home</li>
                        <li>About</li>
                        <li>Category</li>

                    </ul>
                    <div className="center">
                    RD Musical World
                    </div>

                    <div className="right">
                        <TbSearch />
                        <AiOutlineHeart />
                        <span className="cart-icon">
                            <CgShoppingCart />
                            <span>5</span>
                        </span>
                    </div>
                    
                </div>
            </header>
        </Fragment>
    )
};

export default Header;

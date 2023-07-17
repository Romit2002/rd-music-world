import { Fragment } from "react";
import "./Products.scss";
import Product from './Product/Product';
const Products = () => {
    return(
        <Fragment>
            <div className="products-container">
                <div className="sec-heading">Section Heading
                </div>
                <div className="products">
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
            </div>
        </Fragment>
    )
};

export default Products;

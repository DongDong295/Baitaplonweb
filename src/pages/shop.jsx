import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/hero";
import { books } from '../data/data.json'
import Item from '../components/item';
import '../pages/shop.css'

const Shop = () => {
    return (
        <div className="row">
            <div className="col-12 col-md-2">
                <Hero />
            </div>
            <div className="col-12 col-md-10 d-flex justify-content-center">
                <div className="d-flex flex-wrap justify-content-center">
                    {books.map((item, i) => {
                        const quantitySoldText = item.quantity_sold ? item.quantity_sold.text : '';
                        return (
                            <Link className="product" key={i} to={`/product/${item.id}`}>
                                <Item
                                    id={item.id}
                                    images={item.images[0].medium_url}
                                    name={item.name}
                                    price={item.list_price}
                                    rating={item.rating_average}
                                    quantity_sold={quantitySoldText}
                                />
                            </Link>
                        );
                    })}
                </div>
            </div>
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" href="#">Next</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Shop;

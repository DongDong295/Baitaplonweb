import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { books } from '../data/data.json';
import Item from '../components/item';
import '../pages/shop.css';
import Hero from './hero';

const Result = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const searchTerm = searchParams.get('search') || '';

    const filteredProducts = searchTerm 
        ? books.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
        : books;

    return (
        <div className="row">
            <div className="col-12 col-md-2">
                <Hero />
            </div>
            <div className="col-12 col-md-10 d-flex justify-content-center">
                <div className="d-flex flex-wrap justify-content-center">
                    {filteredProducts.map((item, i) => {
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
        </div>
    );
}

export default Result;
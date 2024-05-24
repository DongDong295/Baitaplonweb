import React from "react";
import Card from 'react-bootstrap/Card';
import './item.css'
import star from '../image/star.png'

function Item(props) {
    return(
    <Card className="item-display mx-2 my-2">
        <Card.Img className="card-img" variant="top" src={props.images}/>
        <Card.Body>
          <Card.Title className="card-title">{props.name}</Card.Title>
          <Card.Text className="card-text">
          <div className="rating d-flex">
              <img className="star" src={star} alt=""/>
              <img className="star" src={star} alt=""/>
              <img className="star" src={star} alt=""/>
              <img className="star" src={star} alt=""/>
              <img className="star" src={star} alt=""/>
              <div className="quantity-sold text-muted mx-4">
                    {props.quantity_sold}
              </div>
          </div>
          <div className="price-display">{props.price}₫</div>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <div className="footer text-muted d-flex">Giao hàng nhanh 2h</div>
        </Card.Footer>
      </Card>
    )
}
export default Item
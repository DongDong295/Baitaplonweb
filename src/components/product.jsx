import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ListGroup } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { books } from '../data/data.json';
import '../components/product.css'
import AppHeader from './header';
import star from '../image/star.png'
import Buy from './buy';
import Footer from './footer';
import { Provider } from 'react-redux';
import store from '../store';

const Product = () => {
    const { id } = useParams(); // Lấy id từ URL

    const [product, setProduct] = useState(null);
    const [nsb, setNsb] = useState(null);
    const [date, setDate] = useState(null);
    const [dimension, setDimension] = useState(null);
    const [dg, setDg] = useState(null);
    const [bc, setBc] = useState(null);
    const [pn, setPn] = useState(null);
    const [manufactor, setManufactor] = useState(null);
    useEffect(() => {
        const foundProduct = books.find(item => item.id === id);
        if (foundProduct) {
            setProduct(foundProduct);
        }
        if (foundProduct.specifications) {
            foundProduct.specifications.forEach(spec => {
                spec.attributes.forEach(attr => {
                    if (attr.code === 'publisher_vn') {
                        setNsb(attr.value);
                    }
                    if (attr.code === 'publication_date') {
                        setDate(attr.value);
                    }
                    if (attr.code === 'dimensions') {
                        setDimension(attr.value);
                    }
                    if (attr.code === 'dich_gia') {
                        setDg(attr.value);
                    }
                    if (attr.code === 'book_cover') {
                        setBc(attr.value);
                    }
                    if (attr.code === 'number_of_page') {
                        setPn(attr.value);
                    }
                    if (attr.code === 'manufacturer') {
                        setManufactor(attr.value);
                    }
                });
            });
        }
    }, [id]);

    return (  
        <>
        <div>
        <AppHeader/>
        <Container className='product-display flex-container'>
            {product && (
                <Row>
                    <div className='col-md-3'>
                        <div className="image-container">
                            <img src={product.images[0].base_url} alt="" />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="flex-wrap d-flex">
                            <ListGroup>
                            <ListGroup.Item className='product-header'>
                                <div>Tác giả: {product.authors && product.authors.length > 0 ? product.authors[0].name : 'Đang cập nhật'}</div>
                            
                                <div className='title'>{product.name}</div>
                                <div className="rating d-flex flex-row">
                                    <div className='rating-point'>{product.rating_average}</div>
                                    <img className="star" src={star} alt=""/>
                                    <img className="star" src={star} alt=""/>
                                    <img className="star" src={star} alt=""/>
                                    <img className="star" src={star} alt=""/>
                                    <img className="star" src={star} alt=""/>
                                    <div className="quantity-sold text-muted mx-4 overflow-hidden">
                                        {product.quantity_sold ? product.quantity_sold.text : 'Đang cập nhật'}
                                    </div>
                                </div>
                                <div className='price'>{product.list_price}₫</div>
                                <div className='thong-tin-header'>Thông tin chi tiết</div>
                            </ListGroup.Item>
                                <div className='body'>
                                <ListGroup.Item>
                                    <span className='text-muted'>Công ty phát hành</span>
                                    <span className='mx-5'>{nsb}</span>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <span className='text-muted'>Ngày phát hành</span>
                                    <span className='mx-5'>{date}</span>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <span className='text-muted'>Kích thước</span>
                                    <span className='mx-5'>{dimension}</span>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <span className='text-muted'>Dịch giả</span>
                                    <span className='mx-5'>{dg}</span>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <span className='text-muted'>Loại bìa</span>
                                    <span className='mx-5'>{bc}</span>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <span className='text-muted'>Số trang</span>
                                    <span className='mx-5'>{pn}</span>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <span className='text-muted'>Nhà xuất bản</span>
                                    <span className='mx-5'>{manufactor}</span>
                                </ListGroup.Item>
                                </div>
                                <div style={{ fontWeight: 'bold', marginTop: '30px' }}>Mô tả sản phẩm</div>
                                <div className='description' dangerouslySetInnerHTML={{ __html: product.description}} />
                            </ListGroup>
                        </div>
                    </div>
                    <div className='col-md-3'>
                    <div className="quantity-selector">
                        <Provider store={store}>
                             <Buy product={product}/>
                        </Provider>
                    </div>
                    </div>
                </Row>
            )}
        </Container>
        </div>
        <Footer/>
        </>
    );
}

export default Product;

import React, { useState } from "react";
import './hero.css'

const Hero = () => {
    // Khởi tạo state để lưu trữ trạng thái của các checkbox
    const [checkboxes, setCheckboxes] = useState({
        checkbox1: false,
        checkbox2: false,
        checkbox3: false,
        checkbox4: false
    });

    // Hàm xử lý thay đổi trạng thái của checkbox khi được nhấp
    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setCheckboxes({ ...checkboxes, [name]: checked });
    };

    return(
        <div className="hero">
            <div className="hero-left d-none d-lg-block container mx-5">
                <h5>Danh mục sản phẩm</h5>
                <ul className="hero-list">
                    <li>English Books</li>
                    <li>Sách tiếng Việt</li>
                    <li>Văn phòng phẩm</li>
                    <li>Quà lưu niệm</li>
                </ul>
                <h5>Nhà cung cấp</h5>
                <ul className="checkbox-list">
                    <li>
                        <input
                            type="checkbox"
                            id="checkbox1"
                            name="checkbox1"
                            checked={checkboxes.checkbox1}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="checkbox1">Nhà sách Fahasa</label>
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            id="checkbox2"
                            name="checkbox2"
                            checked={checkboxes.checkbox2}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="checkbox2">Bamboo Books</label>
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            id="checkbox3"
                            name="checkbox3"
                            checked={checkboxes.checkbox3}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="checkbox3">Times Books</label>
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            id="checkbox4"
                            name="checkbox4"
                            checked={checkboxes.checkbox4}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="checkbox4">Nhà Sách Trẻ Online</label>
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            id="checkbox5"
                            name="checkbox5"
                            checked={checkboxes.checkbox5}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="checkbox5">Vbooks</label>
                    </li>
                </ul>
            </div>
        </div>      
    ) 
}
export default Hero;
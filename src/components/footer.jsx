// Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-column">
          <h3>Hỗ trợ khách hàng</h3>
          <ul>
            <li>Hotline</li>
            <li>Gửi yêu cầu</li>
            <li>Câu hỏi</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Về TIKI</h3>
          <ul>
            <li>Giới thiệu</li>
            <li>Tuyển dụng</li>
            <li>Điều khoản</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Hợp tác và liên kết</h3>
          <ul>
            <li>Quy chế hoạt động</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Phương thức thanh toán</h3>
          <ul>
            <li>Dịch vụ giao hàng</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Kết nối với chúng tôi</h3>
          <ul>
            <li>Tải ứng dụng điện thoại</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

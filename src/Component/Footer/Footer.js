import React from "react";
import { Container } from 'react-bootstrap';
import Socialmedia from '../../assets/Socialmedia.png';
import map from '../../assets/map.png';
import Pin from '../../assets/Pin.png';
import phone from '../../assets/phone.png';
import Message from '../../assets/Message.png';
import logo from '../../assets/logo.png';
import line from '../../assets/Line.png';
import './Footer.css';

function Footer() {
    return (
        < div className="Container" >
            <Container className="Box1" >

                <div className="Div1">
                    <div>
                        <h6 className="text">تابعنا على</h6>
                        <img
                            src={Socialmedia}
                            className="Social" />
                    </div>
                    <div>
                        <img
                            src={map}
                            className="map" />
                        <img
                            src={Pin}
                            className="pin" />
                    </div>
                </div>

                <div className="Div2">
                    <h6 className="com1">تواصل معنا </h6>
                    <div className="phone">
                        <h6 className="no">0592700722</h6>
                        <img src={phone} className="tele" />
                    </div>
                    <div className="com2" >
                        <h6 className="email">eng.mohammadalhabil@gmail.com</h6>
                        <img src={Message} className="ee" />
                    </div>
                </div>

                <div className="Div3">
                    <h6 className="Services">خدماتنا</h6>
                    <h6 className="rrrr">
                        تنظيف المنازل
                        التنظيف التجاري
                        تنظيف السجاد
                        تنظيف النوافذ
                        تنظيف السيارات
                        تنظيف بعد البناء
                    </h6>
                </div>

                <div className="Div4">
                    <div className="title">
                        <img src={logo} className="logo" />
                        <h6 className="iii">
                            <span className="c">كلين   </span>
                            <span className="s">ستيد   </span>
                        </h6>
                    </div>

                    <p className="pp">هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص.</p>
                </div>
            </Container>

            <Container className="Box2">

                <img src={line} className="line" />
                <div>
                <h6 className="txxt">جميع الحقوق محفوظة © 2022</h6>
                </div>
            </Container>
        </div>
    );
}
export default Footer;
import React from "react";
import './Body.css';
import light from '../../assets/light.png';
import Image1 from '../../assets/Image1.png';
import { Container } from 'react-bootstrap';

function Body() {
    return (
        <section>
            < Container className='container'>
                <Container className="person">
                    <img
                        src={Image1}
                        title="Image1"
                    />
                </Container>
                <div >
                    <Container className="Box1">
                        <img
                            src={light}
                            className="light"
                        />
                        <p className="title">من نحن</p>
                    </Container>

                    <Container className="Box2" >
                        <p className="txt">هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
                            إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية</p>

                    </Container>
                    < Container className="Box3">
                        <button className="butt2" >تواصل معنا</button>

                    </Container>
                </div>
            </Container>
        </section>

    );
}
export default Body;
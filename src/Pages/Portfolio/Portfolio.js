import React from 'react';

import img1 from '../../assets/images/01.png';
import img2 from '../../assets/images/02.png';
import img3 from '../../assets/images/03.png';
import img4 from '../../assets/images/04.png';
import img5 from '../../assets/images/05.png';
import img6 from '../../assets/images/06.png';

const Portfolio = () => {
    return (
        <div className='mx-5'>
            <div class="mockup-phone ml-7 mt-5">
                <div class="camera"></div>
                <div class="display">
                    <div class="artboard artboard-demo phone-1">
                        <img src={img1} alt="" />
                    </div>
                </div>
            </div>
            <div class="mockup-phone ml-7 mt-5">
                <div class="camera"></div>
                <div class="display">
                    <div class="artboard artboard-demo phone-1">
                        <img src={img2} alt="" />
                    </div>
                </div>
            </div>
            <div class="mockup-phone ml-7 mt-5">
                <div class="camera"></div>
                <div class="display">
                    <div class="artboard artboard-demo phone-1">
                        <img src={img3} alt="" />
                    </div>
                </div>
            </div>
            <div class="mockup-phone ml-7 mt-5">
                <div class="camera"></div>
                <div class="display">
                    <div class="artboard artboard-demo phone-1">
                        <img src={img4} alt="" />
                    </div>
                </div>
            </div>
            <div class="mockup-phone ml-7 mt-5">
                <div class="camera"></div>
                <div class="display">
                    <div class="artboard artboard-demo phone-1">
                        <img src={img5} alt="" />
                    </div>
                </div>
            </div>
            <div class="mockup-phone ml-7 mt-5">
                <div class="camera"></div>
                <div class="display">
                    <div class="artboard artboard-demo phone-1">
                        <img src={img6} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
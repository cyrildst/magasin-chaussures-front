import React, { Component } from 'react';

class ShoeColoredIcon extends Component {

    render() {
        return (
            <div style={{align:'center', width:'50px'}}>
                <svg height="32px" version="1.1" viewBox="0 0 32 32" width="32px" xmlns="http://www.w3.org/2000/svg" sketch="http://www.bohemiancoding.com/sketch/ns" xlink="http://www.w3.org/1999/xlink">
                    <title />
                    <desc />
                    <defs />
                    <g fill='none' fillRule="evenodd" id="Page-1-Copy" stroke="none" strokeWidth="1">
                        <g fill={this.props.color} id="icon-48-sports-shoe">
                            <path d="M12.3999996,12.6453372 L12.9004905,13.4146232 C12.759157,13.5244874 12.6200677,13.6326057 12.4831348,13.7375719 L11.9382174,12.8999996 L11.1000004,13.4453365 L11.6736554,14.3270802 C11.5220912,14.4288833 11.3732771,14.5223259 11.227069,14.6051021 L10.6382172,13.6999998 L9.80000019,14.2453367 L10.2753895,14.9760399 C10.1825324,14.9917642 10.0907515,15 10,15 C8,14.9999999 7.00544417,15 7.00544417,15 C5.34558319,15 4,16.3496704 4,18.0092545 C4,20.2132824 5.79793835,22 8.00281647,22 L26.9964051,22 C28.10296,22 29.0104668,21.0998238 29.0049515,20.007983 C29.0049515,20.007983 29.2791748,11 27,11 C24.7208252,11 25,12.9714355 22,12.9714355 C19,12.9714355 19.5,11 18,11 C16.8711405,11 15.8463075,11.4161057 14.908725,11.9799029 L14.4191085,11.2273316 L13.5808915,11.7726684 L14.0736778,12.5301119 C13.9463245,12.6205345 13.8206687,12.7123155 13.6966604,12.8046572 L13.2382166,12.1000004 L12.3999996,12.6453372 Z M27.861749,15.5996176 C27.9379008,16.3923181 27.9821587,17.2106587 28.0024589,18 L22,18 C20.0825253,18 19.5,18 17.4805014,18.2636385 C17.4564519,18.1145188 17.4078454,17.947657 17.3222136,17.7763932 C17.0840689,17.3001039 16.6339131,17 16,17 L10.5,17 C9.82141316,17 9.42781896,16.7376039 9.19721361,16.2763932 C9.15098062,16.1839272 9.11429063,16.0903772 9.08572384,16 C9.33299718,16 9.63129724,16 9.99999996,16 C10.2862572,16 10.5673495,15.9540283 10.8533177,15.8643518 L11.2936525,16.5411741 L12.1318695,15.9958372 L11.7734086,15.4448604 C11.8965787,15.3733653 12.0222159,15.2952148 12.1509688,15.2105554 C12.1735931,15.1956792 12.196274,15.1806332 12.2190528,15.1653902 L12.5936527,15.7411739 L13.4318697,15.195837 L13.0300563,14.5782246 C13.0516745,14.5617275 13.0735804,14.5449699 13.0957895,14.5279406 C13.1432609,14.4915408 13.285136,14.3815646 13.4476508,14.2556429 L13.893652,14.9411746 L14.7318689,14.3958378 L14.2432575,13.6448113 C14.3720116,13.5487433 14.4975255,13.4571772 14.6201262,13.3700373 L15.0745439,14.0685058 L15.9127608,13.523169 L15.45487,12.819362 C15.5607868,12.7557451 15.6647467,12.6960261 15.7670375,12.6401385 L15.7906087,12.6884744 C15.7906087,12.6884744 16.4002393,13.6073461 16.8964466,14.1035534 C18.0790416,15.2861484 19.6087236,16 21.5,16 C23.3411912,16 25.0164813,15.5072676 26.4928215,14.6870786 C26.8773636,14.4734441 27.5068097,14.0409629 27.6220108,13.95044 C27.728602,14.4378552 27.8033416,14.9916282 27.861749,15.5996176 Z M28.0159223,18.9642382 C28.0165574,19.2347461 28.014546,19.4986342 28.0102517,19.7533976 C28.0083957,19.8635085 28.0065697,19.9396088 28.0054145,19.9775548 C28.0076649,20.547674 27.5516073,21 26.9964051,21 L8.00281647,21 C7.11411316,21 6.31422081,20.6132976 5.76388989,20.0000001 L13,20 C14.4093234,20 15.3913658,19.6736493 17.3032466,19.3435373 C19.5,18.9642382 20.8656616,18.9642382 22,18.9642382 L28.0159223,18.9642382 L28.0159223,18.9642382 Z M5.16939242,19 C5.05969446,18.6897853 5,18.3563194 5,18.0092545 C5,16.9007272 5.89909525,16 7.00544418,16 C7.04065746,16 7.04065746,16 7.21692887,16 C7.57792029,15.9999999 7.78598766,15.9999999 8.05270437,15.9999999 C8.14432866,16.3424883 8.257124,16.632282 8.30278643,16.7236068 C8.69718112,17.5123961 9.42858691,18 10.5,18 L16,18 C16.2410868,18 16.353431,18.0748961 16.4277864,18.2236068 C16.4805851,18.3292042 16.5,18.4456936 16.5,18.5 C15.1790149,18.8462025 14.1739435,19 13,19 L5.16939242,19 L5.16939242,19 L5.16939242,19 Z M18,12 C18.1281581,12 18.1573083,12.0179121 18.3443391,12.2387492 C18.3311836,12.2232158 18.5955384,12.5435656 18.6896412,12.6495756 C19.4672467,13.525575 20.428428,13.9714355 22,13.9714355 C23.5222433,13.9714355 24.4064013,13.592566 25.4113426,12.753231 C25.4568265,12.7152425 25.5249661,12.6577355 25.6285801,12.5704234 C26.1628308,12.1225726 26.4241298,12 27,12 C26.9817976,12 27.1365427,12.1809634 27.3306727,12.7370769 C27.4412776,13.0539203 27.413071,12.9547294 27.413071,12.9547294 C27.413071,12.9547294 27.113107,13.0941784 27.0945132,13.1082151 C26.7763191,13.3484227 26.4129123,13.5875137 26.0071785,13.8129214 C24.6710187,14.5552324 23.1588088,15 21.5,15 C19.8912764,15 18.6084584,14.4013516 17.6035534,13.3964466 C17.2843253,13.0772185 16.7926102,12.3950292 16.7926102,12.3950292 L16.6714137,12.2314116 C17.1217139,12.0747506 17.5542829,12 18,12 Z" id="sports-shoe" />
                        </g>
                    </g>
                </svg>
                <div style={{fontSize:'x-small', position:'relative', top:'-15px'}}>{this.props.color}</div>
            </div>
        )
    }
}

export default ShoeColoredIcon;
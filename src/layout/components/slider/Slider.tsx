import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {S} from './Slider_Styles';
import {Link} from "../Link";
import webTemplate from "../../../assets/images/blog-web-template.webp"

type SlidePropsType = {
    title: string,
    // text: string,
    // img: string,
}

const Slide = (props: SlidePropsType) => {
    return (
        <S.Slide>
            <S.Image src={webTemplate}/>
            <div>
                <S.Title>{props.title}</S.Title>
                <S.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua Ut enim
                </S.Text>
                <Link>Learn more</Link>
            </div>
        </S.Slide>
    )
}

const items = [
    <Slide title={"How to make web templates"}/>,
    <Slide title={"How1 to make web templates"}/>,
    <Slide title={"How2 to make web templates"}/>,
];

export const Slider = () => (
    <S.Slider>
        <AliceCarousel
            mouseTracking
            items={items}
        />
    </S.Slider>

);


// import React from 'react';
// import webTemplate from "../../../assets/images/blog-web-template.webp"
// import {FlexWrapper} from '../FlexWrapper';
// import {Link} from "../Link";
//
// export const Slider: React.FC = () => {
//     return (
//         <S.Slider>
//             <FlexWrapper>
//                 <S.Slide>
//                     <S.Image src={webTemplate}/>
//                     <div>
//                         <S.Title>How to make web templates</S.Title>
//                         <S.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
//                             ut
//                             labore et dolore magna aliqua Ut enim</S.Text>
//                         <Link>Learn more</Link>
//                     </div>
//                 </S.Slide>
//             </FlexWrapper>
//             <S.Pagination>
//                 <span> </span>
//                 <span className={"active"}> </span>
//                 <span> </span>
//             </S.Pagination>
//         </S.Slider>
//     );
// };

import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { S } from "./Slider_Styles";
import { Link } from "../Link";
import webTemplate from "../../../assets/images/blog-web-template.webp";
import "../../../styles/slider.css"
import { Icon } from "../icon/Icon";

type SlidePropsType = {
    title: string;
    text: string;
    img: any;
};

const Slide = (props: SlidePropsType) => {
    return (
        <S.Slide>
            <S.Image src={props.img} />
            <div>
                <S.Title>{props.title}</S.Title>
                <S.Text>{props.text}</S.Text>
                <Link>Learn more</Link>
            </div>
        </S.Slide>
    );
};

const items = [
    <Slide
        img={webTemplate}
        title={"How to make web templates"}
        text={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
        }
    />,
    <Slide
        img={webTemplate}
        title={"1 How to make web templates"}
        text={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
        }
    />,
    <Slide
        img={webTemplate}
        title={"2 How to make web templates"}
        text={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
        }
    />,
];

export const Slider = () => (
    <S.Slider>
        <AliceCarousel 
        mouseTracking
        // disableButtonsControls
        renderPrevButton={()=>{
            return <Icon iconId={"reactSvg"} width="20px" height="20px"/>
        }}
        items={items} />
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

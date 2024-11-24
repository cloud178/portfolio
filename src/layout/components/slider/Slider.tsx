import React from 'react';
import webTemplate from "../../../assets/images/blog-web-template.webp"
import {FlexWrapper} from '../FlexWrapper';
import {Link} from "../Link";
import { S } from './Slider_Styles';

export const Slider = () => {
    return (
        <S.Slider>
            <FlexWrapper>
                <S.Slide>
                    <S.Image src={webTemplate}/>
                    <div>
                        <S.Title>How to make web templates</S.Title>
                        <S.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                            ut
                            labore et dolore magna aliqua Ut enim</S.Text>
                        <Link>Learn more</Link>
                    </div>
                </S.Slide>
            </FlexWrapper>
            <S.Pagination>
                <span> </span>
                <span className={"active"}> </span>
                <span> </span>
            </S.Pagination>
        </S.Slider>
    );
};

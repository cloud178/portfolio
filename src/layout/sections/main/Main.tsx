import React from 'react';
import profilePicture from '../../../assets/images/photo.webp'
import {FlexWrapper} from "../../components/FlexWrapper";
import {Container} from "../../components/Container";
import { S } from './Main_Styles';
import Typewriter from 'typewriter-effect';

export const Main: React.FC = () => {
    return (
        <S.Main id='Home'>
            <Container>
                <S.StyledFlexWrapper justify="space-between" align={"center"} wrap={"wrap"}
                                   gap={"100px"}
                >
                    <FlexWrapper direction={"column"} justify={"center"}
                                 flexGrow={1}
                                 flexBasis={"50%"}

                    >
                        <S.SmallText>Hi There,</S.SmallText>
                        <S.Name>My name is <span>Denis Biryukov</span></S.Name>
                        <S.MainTitle>
                            <p>I am a Web developer</p>
                        <Typewriter
                            options={{
                                strings: ['I am a Web developer.'],
                                autoStart: true,
                                loop: true,
                                delay: 45,
                            }}
                        />
                        </S.MainTitle>
                        <S.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt praesentium, voluptas?
                            Amet
                            aperiam eos facere, illo laborum nulla odio reprehenderit. Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Adipisci alias aspernatur beatae consectetur consequuntur
                            deserunt
                            eos exercitationem, illum itaque, magnam mollitia necessitatibus nemo non pariatur
                            repellendus
                            sequi ut. Alias, quisquam?</S.Text>
                    </FlexWrapper>
                    <S.PhotoWrapper>
                        <S.Photo src={profilePicture} alt="my profile picture"/>
                    </S.PhotoWrapper>
                </S.StyledFlexWrapper>
            </Container>
        </S.Main>
    );
};

import React from 'react'
import {SectionTitle} from '../../components/SectionTitle'
import {Button} from '../../components/Button'
import {Container} from "../../components/Container";
import { S } from './Contacts_Styles';

export const Contacts = () => {
    return (
        <S.Contacts id='contact'>
            <Container>
                <SectionTitle>Contacts</SectionTitle>
                <S.Form>
                    <S.Field placeholder='John Doe'/>
                    <S.Field placeholder='example@mail.com'/>
                    <S.Field as={"textarea"} placeholder='Message'/>
                    <Button type={"submit"}>Send message</Button>
                </S.Form>
            </Container>
        </S.Contacts>
    )
}

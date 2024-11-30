import React, {ElementRef, useRef} from 'react'
import {SectionTitle} from '../../components/SectionTitle'
import {Button} from '../../components/Button'
import {Container} from "../../components/Container";
import {S} from './Contacts_Styles';
import {Fade} from "react-awesome-reveal";
import emailjs from '@emailjs/browser';

export const Contacts = () => {

    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();

        if (!form.current) return;

        emailjs
            .sendForm('service_ilw7yeg', 'template_f6faums', form.current, {
                publicKey: 'xbjnqg6ol40BFKOVj',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        e.target.reset() // когда письмо отправится, эта строка когда очистит форму, тем самым юзер пойсёт что письмо отправлено
    };


    return (
        <S.Contacts id='contact'>
            <Container>
                <SectionTitle>Contacts</SectionTitle>
                <Fade delay={200}>
                    <> {/* заглушка иначе fade конфликтует с emailjs и письмо не отправляется */}
                        <S.Form ref={form} onSubmit={sendEmail}>
                            <S.Field placeholder='*name' name={'user_name'} required/>
                            <S.Field placeholder='*email' name={'user_email'} type={"email"} required/>
                            <S.Field placeholder='*subject' name={'subject'} required/>
                            <S.Field as={"textarea"} placeholder='*Message' name={'message'} required/>
                            <Button type={"submit"}>Send message</Button>
                        </S.Form>
                    </>
                </Fade>
            </Container>
        </S.Contacts>
    )
}

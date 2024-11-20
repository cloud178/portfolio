import React from 'react'
import styled from 'styled-components'
import {SectionTitle} from '../../components/SectionTitle'
import {Button} from '../../components/Button'
import {Container} from "../../components/Container";
import { theme } from '../../../styles/Theme';

export const Contacts = () => {
    return (
        <StyledContacts id='Contacts'>
            <Container>
                <SectionTitle>Contacts</SectionTitle>
                <StyledForm>
                    <StyledField placeholder='John Doe'/>
                    <StyledField placeholder='example@mail.com'/>
                    <StyledField as={"textarea"} placeholder='Message'/>
                    <Button type={"submit"}>Send message</Button>
                </StyledForm>
            </Container>
        </StyledContacts>
    )
}

const StyledContacts = styled.section`
`

const StyledForm = styled.form`
    max-width: 540px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin: 0 auto;
    
    textarea {
        resize: none;
        height: 155px;
    }
`

const StyledField = styled.input`
    width: 100%;
    background-color: ${theme.colors.primaryBg};
    border: 1px solid ${theme.colors.borderColor};
    padding: 7px 15px;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 12px;
    letter-spacing: 0.05em;
    color: ${theme.colors.font.fontPrimary};
    
    &::placeholder {
        color: ${theme.colors.placeholderColor};
        text-transform: uppercase;
    }
    
    &:focus {
        outline: 1px solid ${theme.colors.borderColor};
    }
`

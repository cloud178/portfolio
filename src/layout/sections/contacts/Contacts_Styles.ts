import styled from "styled-components";
import {theme} from "../../../styles/Theme";

const Contacts = styled.section`
    min-height: 85vh;
`

const Form = styled.form`
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

const Field = styled.input`
    position: relative;
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

export const S = {
    Contacts,
    Form,
    Field,
}

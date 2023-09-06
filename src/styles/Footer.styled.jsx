import  styled  from "styled-components";

export const FormContainer = styled.div`
    width:40%;
    @media(max-width:${({theme})=>theme.breakpoints.mobile}){
      width:90%;
      margin:auto
    }

`
export const FormLabel = styled.label`
    color: ${({theme})=>theme.colors.para_text_color};
    padding-bottom:10px;
`
export const FormInput= styled.input`
    width:100%;
    background-color:${({theme})=>theme.colors.primary_light};
    color: ${({theme})=>theme.colors.para_text_color};
    border:1px solid ${({theme})=>theme.colors.para_text_color};
    padding:10px;
    border-radius:5px;

    &::placeholder{
        color: ${({theme})=>theme.colors.para_text_color};
    }
`
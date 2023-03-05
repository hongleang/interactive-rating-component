import styled from "styled-components";

export const Button = styled.button`
    background: rgba(252, 118, 20, 1);
    border: none;
    height: 45px;
    width: 100%;
    color: white;
    border-radius: 22.5px;
    text-transform: uppercase;
    font-size: 15px;
    font-weight: 700;
    line-height: 19px;
    letter-spacing: 2px;
    transition: all .3s linear;
    cursor: pointer;

    &:hover{
        background: white;
        color: rgba(252, 118, 20, 1);
    }
`;
import styled, { css } from "styled-components";

type CardProps = {
    thankYou?: any;
}

export const Card = styled.div<CardProps>`
    background: radial-gradient(98.96% 98.96% at 50% 0%, #232A34 0%, #181E27 100%);
    border-radius: 30px;
    padding: 32px;

    .card-hader {
        font-size: 28px;
        font-weight: 700;
        line-height: 35px;
    }
    ${(props) => {
        if (props.thankYou) {
            return css`
                & {
                    text-align: center
                }
                .image-wrapper {
                    display: flex;
                    justify-content: center;
                }
                .rating-result {
                    background: rgba(38, 46, 56, 1);
                    width: 193px;
                    border-radius: 22.5px;
                    margin: 30px auto auto;
                    padding-top: 5px;
                    padding-bottom: 5px;
                    color: rgba(252, 118, 20, 1);
                    font-family: Overpass;
                    font-size: 15px;
                    font-weight: 400;
                }
            `
        }
    }}
`;
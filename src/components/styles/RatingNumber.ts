import styled from "styled-components";
import { device } from "../../utils/deviceSize";

type RatingNumberProps = {
    selected: boolean;
}

export const RatingWrapper = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
    margin-bottom: 30px;
`;

export const RatingNumber = styled.li<RatingNumberProps>`
    width: 51px;
    height: 51px;
    border-radius: 50%;
    background: ${(props) => (props.selected ? "rgba(124, 135, 152, 1)" : "rgba(38, 46, 56, 1)")};
    color: ${(props) => (props.selected ? "rgba(255, 255, 255, 1)" : "rgba(150, 159, 173, 1)")};
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    display:flex;
    justify-content: center;
    align-items: center;
    transition: all .3s linear;
    cursor: pointer;

    &:hover {
        background: rgba(252, 118, 20, 1);
        color: rgba(255, 255, 255, 1);
    }
`;
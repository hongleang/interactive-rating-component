import styled from "styled-components";
import { device } from "../../utils/deviceSize";

export const Container = styled.div`
  max-width: 400px;
  width: 100%;
  padding: 0 2rem; 
  @media ${device.mobileM} { 
    max-width: 100%;
  }
  @media ${device.tablet} { 
    max-width: 500px;
  }
  @media ${device.laptop} { 
    max-width: 500px;
  }
`;
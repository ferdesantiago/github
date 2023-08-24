import styled from "styled-components";

export const RemoveButton = styled.button`
  background: none;
  border: none;
  color: inherit;
  font: inherit;
  line-height: normal;
  overflow: visible;
  padding: 0.5rem;
  cursor: pointer;
  outline: inherit;
  opacity: 0;
  transition: opacity 0.3s ease;
  position: absolute;
  top: 30%;
  right: 5px;
`;

export const CardContainer = styled.div<{ color?: string }>`
  display: flex;
  width: 100%;
  max-width: 29.625rem;
  height: 80px;
  padding: 1rem 1.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  box-sizing: border-box;
  background: #272736;
  margin-top: 1rem;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 100%;
    border-radius: 5px 0 0 5px;
    background-color: ${(props) => props.color};
  }
  &:hover ${RemoveButton} {
    opacity: 1;
  }
`;
export const FlexContainer = styled.div`
  display: flex;
`;

export const TitleSC = styled.span`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  color: #bfbdd9;
`;
export const Title2SC = styled.span`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 700;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  color: #ffffff;
`;

export const LastCommit = styled.span`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  color: #bfbdd9;
  margin-left: 0.5rem;
`;

export const Followers = styled.span`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  color: #fff;
`;

export const IconFollower = styled.i<{
  height: string;
  width: string;
  $ml: string;
}>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  stroke: #fff;
  margin-left: ${(props) => props.$ml}rem;
`;

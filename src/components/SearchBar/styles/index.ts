import styled from "styled-components";

export const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 474px;
  height: 60px;
  border-radius: 4px;
  z-index: 1;
`;

export const InputSearch = styled.input`
  width: 100%;
  height: 60px;
  padding: 10px 5px 10px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #8383af;
  padding-left: 1.5rem;
  box-sizing: border-box;
  &::placeholder {
    font-family: Roboto;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    color: #8383af;
  }
  &:focus, &:active, &:focus-visible {
    border-bottom: none;
    outline: none;
  }
`;

export const SearchIcon = styled.div`
  position: absolute;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;

export const ResultsList = styled.ul`
  position: absolute;
  width: 100%;
  max-width: 472px;
  max-height: 200px;
  overflow-y: auto;
  background-color: #ffffff;
  border: 1px solid #ccc;
  z-index: -1;
  padding-left: 0px;
  top: 39px;
  list-style: none;
  &::-webkit-scrollbar {
    width: 0px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: rgba(0, 0, 0, 0.4);
  }

  &::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const ResultItem = styled.li`
  padding: 8px;
  cursor: pointer;
  padding: 1rem 1.3rem;
  &:hover {
    background-color: #f7f7f7;
  }
`;

export const ResultaName = styled.span`
  font-family: Avenir Next;
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  color: #8383af;
`;

export const ResultaLanguage = styled.span`
  font-family: Roboto;
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  color: #37374a;
`;

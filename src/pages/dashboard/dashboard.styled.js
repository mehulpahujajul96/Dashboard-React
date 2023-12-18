import styled from "styled-components";

export const PageBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;
export const PageTitle = styled.h1`
  width: auto;
  font-size: 30px;
  font-weight: 600;
  line-height: 1;
  margin: 0px;
`;

export const GridBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  & > div:nth-child(odd) {
    margin-left: 0px;
  }
  & > div:nth-child(even) {
    margin-right: 0px;
  }
`;
export const Box = styled.div`
  width: 100%;
  display: flex;
  max-width: calc(50% - 16px);
  margin: 0px 16px 16px 16px;
  background-color: #ffffff;
  padding: 16px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.24);
  border-radius: 20px;
  @media(max-width: 1300px){
    max-width: 100%;
    margin: 0px 0px 16px 0px;
  }
`;

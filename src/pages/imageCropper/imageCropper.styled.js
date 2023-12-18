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
export const ImageBox = styled.div`
  width: auto;
  margin: 0px auto 0px 0px;
  position: relative;
  max-width: 150px;
  button {
    background-color: #4f005f;
    border: none;
    padding: 0px;
    width: 30px;
    top: -18px;
    position: relative;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 50%;
    transform: translateX(-50%);
  }
`;

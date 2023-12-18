import styled from "styled-components";

export const HeaderBox = styled.div`
  position: fixed;
  top: 0;
  right: 0px;
  z-index: 99;
  padding: 15px 30px;
  border-radius: 0;
  margin: 0;
  background: #fff;
  border-radius: 0;
  margin: 0;
  border-radius: 0;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: calc(100% - 250px);
  height: auto;
  justify-content: space-between;
  height: 85px;
  box-shadow: 0 0 26px -4px rgba(0, 0, 0, 0.1);
`;
export const RightPart = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  margin: 0px 0px 0px auto;
  button {
    padding: 0.5rem 1.5rem;
  }
`;
export const Image = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin: 0px 20px 0px 0px;
  border-radius: 100px;
`;

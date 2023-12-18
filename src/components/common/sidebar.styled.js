import styled from "styled-components";

export const Sidebar = styled.div`
  height: 100vh;
  left: 0;
  top: 0;
  z-index: 99;
  padding-bottom: 50px;
  position: fixed;
  width: 250px;
  z-index: 999;
  overflow: hidden;
  overflow-y: auto;
  background: #392467;
  box-shadow: 0 12px 30px rgba(80, 143, 244, 0.1);
  transition: 0.3s;
`;
export const LogoBox = styled.div`
  background: #5d3587;
  margin: 0;
  padding: 24px;
  margin-bottom: 0;
`;
export const Image = styled.img`
  width: 134px;
  height: auto;
  margin: 0px auto 0px 0px;
  display: block;
`;
export const List = styled.ul`
  margin: 0;
  padding: 20px 0px 0px 0px;
  width: 100%;
  list-style: none;
`;
export const ListItem = styled.li`
  width: 100%;
  padding: 0px;
  margin: 0px;
  a {
    padding: 0 25px 0 0;
    transition: 0.3s;
    position: relative;
    display: grid;
    grid-template-columns: 24px auto;
    grid-gap: 15px;
    align-items: center;
    position: relative;
    background: 0 0;
    color: #8f91aa;
    padding: 10px 10px 10px 26px;
    border-radius: 0;
    text-decoration: none;
    &:hover,
    &.active {
      background: #610c9f;
    }
    img {
      width: 19px;
      height: auto;
    }
  }
`;
export const ListTitle = styled.span`
  color: #fff;
  font-size: 16px;
  font-weight: 300;
`;

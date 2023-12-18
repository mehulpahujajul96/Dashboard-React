import styled from "styled-components";

export const List = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 0px;
`;
export const ListItem = styled.li`
  width: 100%;
  max-width: calc(50% - 16px);
  position: relative;
  list-style: none;
  padding: 32px;
  background: #fff;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.24);
  margin: 0px 16px 16px 16px;
  cursor: pointer;
  &:nth-child(odd) {
    margin-left: 0px;
  }
  &:nth-child(even) {
    margin-right: 0px;
  }
  &:hover {
    background: #610c9f;
    h3,
    p {
      color: #fff;
    }
    button {
      background-color: #fff;
      color: #4f005f;
    }
  }
`;
export const ListContent = styled.div`
  width: 100%;
  max-width: calc(100% - 84px);
  button {
    background-color: #4f005f;
    color: #fff;
    padding: 10px 20px;
    margin: 15px 0px 0px 0px;
    &:hover,
    &:active {
      background-color: #4f005f;
      color: #fff;
      border-color: #4f005f;
    }
  }
`;
export const Actions = styled.div`
  width: auto;
  margin: 0px 0px 0px auto;
  padding: 0px;
  position: absolute;
  top: 20px;
  right: 20px;
  button {
    background-color: transparent !important;
    border: none;
    padding: 0px;
    &:hover,
    &:active {
      background-color: transparent !important;
    }
    svg {
      width: 30px;
      height: auto;
      &.edit {
        width: 26px;
        margin-right: 10px;
        position: relative;
        top: -2px;
      }
    }
  }
`;
export const Title = styled.h3`
  width: 100%;
  font-size: 24px;
  font-weight: 600;
  margin: 0px 0px 4px 0px;
  line-height: 1;
`;
export const SubTitle = styled.p`
  width: 100%;
  font-size: 16px;
  margin-bottom: 0px;
  line-height: 1;
  opacity: 0.6;
  line-height: 1;
`;
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
export const AddUserBox = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0px auto 0px 0px;
  & .actions {
    text-align: left;
  }
`;
export const Image = styled.img`
  width: 15px;
  height: auto;
  margin: 0px 10px 0px 0px;
`;
export const EmptyBox = styled.div`
  width: 100%;
  margin: 0px auto;
  background: #ffffff;
  box-shadow: 1px 2px 10px #e1e3ec;
  border-radius: 20px;
  padding: 32px;
  display: flex;
  align-items: center;
  flex-direction: column;
  &.detailBox{
    align-items: flex-start;
    max-width: 600px;
    margin: 0px auto 0px 0px;
    h4{
      font-weight: bold;
      font-size: 22px;
    }
    p{
      font-size: 16px;
      margin:0px 0px 10px 0px;
    }
  }
}
`;
export const ImageBox = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  border-radius: 200px;
  justify-content: center;
  background-color: #f7fafc;
  box-shadow: 0px 2px 1px #e1e3ec;

  img {
    width: 170px;
  }
`;

export const Message = styled.h4`
  color: #4f005f;
  font-size: 1.5rem;
  font-weight: 500;
  margin-top: 0.85rem;
  margin-bottom: 0px;
`;
export const SubMessage = styled.p`
  color: #a2a5b9;
  font-size: 0.875rem;
`;

import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: relative;
  width: 100%;
  padding: 15px;
  background: #9053c7;
  background: -webkit-linear-gradient(-135deg, #c850c0, #4158d0);
  background: -o-linear-gradient(-135deg, #c850c0, #4158d0);
  background: -moz-linear-gradient(-135deg, #c850c0, #4158d0);
  background: linear-gradient(-135deg, #c850c0, #4158d0);
`;
export const LoginBox = styled.div`
 width:100%;
 max-width: 500px;
 display: flex;
 flex-direction: column;
 padding: 40px;
 border-radius: 20px;
 background-color: #ffffff;
 box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
 margin: auto;
 position: relative;
 z-index: 2;
 .login {
  width: 90%;
  max-width: 40rem;
  margin: 2rem auto;
  padding: 2rem;
}
}
`;
export const Image = styled.img`
  width: 100px;
  height: auto;
  margin: 0px auto;
  display: block;
`;
export const Heading = styled.h2`
  width: 100%;
  margin: 10px auto 20px;
  display: flex;
  justify-content: center;
  line-height: 1.2;
  font-size: 24px;
  font-weight: bold;
  color: #333333;
`;

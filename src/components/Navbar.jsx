import React from "react";
import logo from "../assets/Logo.png";
import styled from "styled-components";

const Container = styled.div`
  background-color: #212529;
  color: #fff;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;
const Logo = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;
const Links = styled.div`
  flex: 4;
  display: flex;
  justify-content: end;
  align-items: center;
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin: 10px;
  font-weight: 600;
  &:hover {
    padding: 12px 24px;
    border-radius: 5px;
    background-color: #ff5f13;
  }
  &.register {
    padding: 12px 24px;
    border-radius: 5px;
    background-color: #ff5f13;
    &:hover {
      color: darkblue;
    }
  }
`;

// const MenuItem = styled.div.attrs((/* props */) => ({ tabIndex: 0 }))`
//   color: blue;

//   &:hover {
//     color: red; // <Thing> when hovered
//   }

//   & ~ & {
//     background: tomato; // <Thing> as a sibling of <Thing>, but maybe not directly next to it
//   }

//   & + & {
//     background: lime; // <Thing> next to <Thing>
//   }

//   &.something {
//     background: orange; // <Thing> tagged with an additional CSS class ".something"
//   }

//   .something-else & {
//     border: 1px solid; // <Thing> inside another element labeled ".something-else"
//   }
// `
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <img src={logo} alt="Logo" />
        </Logo>

        <Links>
          <a href="login">abc</a>
          <MenuItem> TRANG CHỦ </MenuItem>
          <MenuItem> GIỚI THIỆU </MenuItem>
          <MenuItem> DỊCH VỤ </MenuItem>
          <MenuItem> ĐĂNG NHẬP </MenuItem>
          <MenuItem className="register"> ĐĂNG KÝ </MenuItem>
        </Links>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

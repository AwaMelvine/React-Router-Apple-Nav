import React from "react";
import styled from "styled-components";
import navData from "../../data/navData";
import Nav from "./Nav";

const StyledNav = styled.div`
  margin: 0px;
  background: #303030;
  height: 44px;

  * {
    color: white;
    text-decoration: none;
  }

  nav {
    max-width: 80%;
    height: 100%;
    margin: 0px auto;
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      flex: 1;
      text-align: center;
    }
  }
`;

export default function NavWrapper() {
  return (
    <StyledNav>
      <nav>
        {navData.map(nav => (
          <Nav key={nav.name} nav={nav} />
        ))}
      </nav>
    </StyledNav>
  );
}

import React from "react";
import styled from "styled-components";
import navData from "../../data/navData";

const StyledNav = styled.div`
  margin: 0px;
  border: 1px solid red;
`;

export default function NavWrapper() {
  return (
    <StyledNav>
      {navData.map(nav => (
        <Nav key={nav.name} nav={nav} />
      ))}
    </StyledNav>
  );
}

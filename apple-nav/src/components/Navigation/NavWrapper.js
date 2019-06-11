import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import navData from "../../data/navData";
import Nav from "./Nav";
import SubNavWrapper from "./SubNavWrapper";

const StyledNav = styled.div`
  margin: 0px;
  background: #303030;
  height: 44px;

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
      color: white;
      text-decoration: none;

      &.active {
        color: lightgray;
      }
    }
  }
`;

class NavWrapper extends React.Component {
  state = {
    navData: []
  };
  componentDidMount() {
    this.setState({ navData });
  }

  render() {
    const { navData } = this.state;
    return (
      <StyledNav>
        <nav>
          {navData.map(nav => (
            <Nav key={nav.name} nav={nav} />
          ))}
        </nav>

        <Route path="/:name" render={props => <SubNavWrapper {...props} />} />
      </StyledNav>
    );
  }
}

export default NavWrapper;

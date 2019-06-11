import React from "react";
import styled from "styled-components";
import navData from "../../data/navData";

const StyledSubNav = styled.div`
  width: 92px;
  height: 92px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    max-width: 60%;
    max-height: 60%;
    display: block;
  }
  p {
    margin: 5px;
    padding: 0px;
    font-size: 0.8rem;
  }
`;

const StyleSubNavWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${props =>
    props.name.toLowerCase() === "tv"
      ? `background: black; color: white;`
      : `background: #f6f6f6;`}
`;

class SubNavWrapper extends React.Component {
  state = {
    subLinks: []
  };
  componentDidMount() {
    const name = this.props.match.params.name;
    console.log(name);
    this.setState({
      subLinks: navData.find(nav => name === nav.name).subLinks
    });
  }
  componentWillReceiveProps(nextProps) {
    const name = nextProps.match.params.name;
    this.setState({
      subLinks: navData.find(nav => name === nav.name).subLinks
    });
  }
  render() {
    const { name } = this.props.match.params;
    return (
      <StyleSubNavWrapper name={name}>
        {this.state.subLinks.map(link => (
          <StyledSubNav>
            <img src={link.img} alt={link.name} />
            <p>{link.name}</p>
          </StyledSubNav>
        ))}
      </StyleSubNavWrapper>
    );
  }
}
export default SubNavWrapper;

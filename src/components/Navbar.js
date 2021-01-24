import React from 'react';
import '../css/Navbar.css'

import { IoLogInOutline } from "react-icons/io5"

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollTop: 0,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    console.log('abc');
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const { scrollHeight, clientHeight } = document.documentElement;
    const scrollTop = winScroll / (scrollHeight - clientHeight);
    this.setState({ scrollTop: scrollTop })
  }

  render() {
    return (
      <div className={`navbar ${this.state.scrollTop && 'navbar__black'}`}>
        <div className="navbar__content">
          <div className="navbar__button hamburger">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="navbar_title">Moovie</div>
        <div className="navbar__content">
          <div className="navbar__button">
            <IoLogInOutline size="20" />
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar;

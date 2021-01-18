import React from 'react';
import '../css/Header.css'

class Header extends React.Component {
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
        this.setState({scrollTop: scrollTop})
    }

    render() {
        return (
            <div className={`Navbar ${this.state.scrollTop && 'Navbar__black'}`}>
                <div className="Navbar__content Hamburger">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="Navbar_title">Navbar</div>
                <div className="Navbar__content">
                    Login
                </div>
            </div>
        )
    }
}

export default Header;

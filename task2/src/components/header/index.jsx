import React, { Component } from "react";
import {
    Container,
    Wrapper,
    Logo,
    Left,
    Navigation,
    User,
    Cart,
    Icons
} from "./style";

class Header extends Component{
    render() {
        return <Container>
                <Wrapper>
                <Logo />

                 <Left>
                    <Navigation>
                        <Navigation.Ul>
                            <Navigation.Ul.Li>Home</Navigation.Ul.Li>
                            <Navigation.Ul.Li>About Us</Navigation.Ul.Li>
                            <Navigation.Ul.Li>Services</Navigation.Ul.Li>
                            <Navigation.Ul.Li>Blog</Navigation.Ul.Li>
                            <Navigation.Ul.Li>Contact Us</Navigation.Ul.Li>
                        </Navigation.Ul>
                    </Navigation>
                     <Icons>
                      <User />
                      <Cart />
                   </Icons>
                 </Left>
               </Wrapper>
            </Container>
        
    }
}
export default Header;
import styled from 'styled-components';
import { ReactComponent as logo } from '../../assets/icons/Furni..svg';
import { ReactComponent as user } from '../../assets/icons/User.svg';
import { ReactComponent as cart } from '../../assets/icons/Cart.svg';
const Container = styled.header`
    width: 100%;
    background-color: var(--primary-green);
`;
const Wrapper = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    max-width: 1500px;
    width: 100%;
    margin: auto;
    padding: 30px 178px;
    border:1px solid black;
`;
const Logo = styled(logo)`
`;
const User = styled(user)`
background: coral;
`;
const Cart = styled(cart)`
`;
const Left = styled.div`
     display: flex;
     align-items:flex-end;
     gap: 95px;
`;
const Navigation = styled.nav`
    display: flex;
    align-items: flex-end;
    background: red;
`;
Navigation.Ul = styled.ul`
     display: flex;
     align-items:flex-end;
     gap: 43px;
     background: blue;

`;
Navigation.Ul.Li = styled.li`
    list-style-type: none;
`;
const Icons = styled.div`
     display: flex;
     align-items:flex-end;
     gap: 15px;
`
export {
    Container,
    Left,
    Wrapper,
    Logo,
    Navigation,
    User,
    Cart,
    Icons
}
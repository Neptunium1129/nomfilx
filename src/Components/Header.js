import React from 'react';
import {Link,withRouter} from 'react-router-dom';
import styled from "styled-components";

export default withRouter(({ location :  {pathname} }) => (
    <Header id="test">

        <List>
            <Item current={pathname === "/"}><SLink to="/">Movies</SLink></Item>
            <Item current={pathname === "/tv"}><SLink to="/tv">TV</SLink></Item>
            <Item current={pathname === "/search"}><SLink to="/search">Search</SLink></Item>
        </List>
    </Header>
));


const List = styled.ul`
display : flex;
`;
const Header = styled.header`
    color : white;
    position : fixed;
    top : 0;
    left : 0;
    width : 100%;
    height : 50px;
    display: flex;
    align-items : center;
    padding : 0px 10px;
    background-color : rgba(20,20,20,0.8);
    z-index:10;
    box-shadow: 0px 1px 5px 2px #000000;
`;
const Item = styled.li`
    width:80px;
    height:50px;
    text-align: center;
    border-bottom : 5px solid ${props => props.current ? "#ff0000" : "transparent"};
    transition:border-bottom .5s ease-in-out;

`;
const SLink = styled(Link)`
    height:50px;
    display:flex;
    align-items:center;
    justify-content:center;
`;

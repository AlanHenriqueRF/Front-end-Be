import { styled } from "styled-components";
import ImageSvg from "./imageSvg";
import logo from "../assets/logo.svg"

export default function Navbar() {
    return (
        <NavbarStyle>
            <ImageSvg image={logo}/>
        </NavbarStyle>
    );
}

const NavbarStyle = styled.div`
    height: 60px;
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    box-shadow: 0px 2px 8px #00000033 ;
    position: relative;
    
    :first-child{
        margin-left: 32px;
    }
`
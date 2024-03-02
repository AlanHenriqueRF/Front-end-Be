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
    box-shadow: 0px 2px 5px #cfcfcf /* #888888 */;

    :first-child{
        margin-left: 32px;
    }
`
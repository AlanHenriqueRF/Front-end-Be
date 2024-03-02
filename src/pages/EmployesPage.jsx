import { styled } from "styled-components";
import Navbar from "../components/navbar";
import Table from "../components/table";
import { useRef } from "react";
import ImageSvg from "../components/imageSvg";
import search from '../assets/search.svg'

export default function EmployesPage() {
    const inputRef = useRef(null);
    return (
        <>
            <Navbar />
            <Container>
                <HeaderEmployee>
                    <h1>Funcionários</h1>
                    <SearchBox>
                        <input type="text" placeholder="Pesquisar" ref={inputRef} />
                        <ImageSvg inputRef={inputRef} image={search} />
                    </SearchBox>
                </HeaderEmployee>

                <Table />
            </Container>
        </>
    );
}

const Container =styled.div`
    background-color: #F0F0F0;
    height: 100vh;
`

const HeaderEmployee = styled.div`
    height: 112px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 35px 0 32px;
`

const SearchBox = styled.div`
    width: 287px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border: 1px solid #DFDFDF;
    border-radius: 8px;

    input{
        width: 240px;
        border: none;
        padding: 12px 0 12px 16px;
        outline: none;
        color:#9E9E9E;
        font-size: 16px;
        font-weight: 400;
    }
    :nth-child(2){
        padding-right: 16px;
    }

`
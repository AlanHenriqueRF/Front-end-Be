import { styled } from "styled-components";
import Navbar from "../components/navbar";
import Table from "../components/table";
import { useRef, useState } from "react";
import ImageSvg from "../components/imageSvg";
import search from '../assets/search.svg'

export default function EmployesPage() {
    const inputRef = useRef(null);
    const [searchFilter, setSearchFilter] = useState('');

    return (
        <>
            <Navbar />
            <Container>
                <HeaderEmployee>
                    <h1>Funcionários</h1>
                    <SearchBox>
                        <input type="text" placeholder="Pesquisar" value={searchFilter}
                            onChange={(e) => { setSearchFilter(e.target.value) }} ref={inputRef} />
                        <ImageSvg inputRef={inputRef} image={search} />
                    </SearchBox>
                </HeaderEmployee>

                <Table searchFilter={searchFilter} />
            </Container>
        </>
    );
}

const Container = styled.div`
    background-color: #F0F0F0;
    height: 100vh;
`

const HeaderEmployee = styled.div`
    height: 112px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 35px 0 32px;
    @media (max-width: 560px){
        height: 144px;
        margin: 0 0px 0 20px;
        flex-direction: column;
        align-items: start;
        justify-content: space-around;
    }

`

const SearchBox = styled.div`
    background-color: #FFFFFF;
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
        color: #9E9E9E;
        font-size: 16px;
        font-weight: 400;
        
    }
    input::placeholder{
            color: #9E9E9E;
    }
    
    :nth-child(2){
        padding-right: 16px;
        color: #DFDFDF;
    }

    @media (max-width: 560px){
        width: 335px;
        justify-content: space-around;
        input{
            padding-left: 0px;
        }
        :nth-child(2){
            padding-right: 0px;
        }
    }

    @media (max-width: 375px){
        width: calc(100% - 18px);
    }

`
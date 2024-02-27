import { styled } from "styled-components";
import Navbar from "../components/navbar";
import { useRef } from "react";

export default function EmployesPage() {
    const inputRef = useRef(null);

    return (
        <>
            <Navbar></Navbar>
            <HeaderEmployee>
                <h1>Funcionários</h1>
                <SearchBox>
                    <input type="text" placeholder="Pesquisar" ref={inputRef} />
                    <svg onClick={()=>inputRef.current.focus()} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1376_147)">
                            <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" fill="#DFDFDF" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1376_147">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </SearchBox>
            </HeaderEmployee>
        </>
    );
}

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
    svg{
        padding-right: 16px;
    }

`
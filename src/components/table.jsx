import { styled } from "styled-components"
import RowTable from "./rowTable"
import { useEffect, useState } from "react"
import ApiEmployees from "../service/employees";
import { filterSearch } from "../utils/formatPhone";
import PropTypes from 'prop-types';
import ellipse from '../assets/ellipse.svg'


export default function Table({ searchFilter }) {
    const [employee, setEmployee] = useState();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        ApiEmployees.getEmployees()
            .then((data) => {
                if (searchFilter || searchFilter !== '') {
                    setEmployee(filterSearch(data.data, searchFilter))
                }
                else {
                    setEmployee(data.data)
                }
            })
            .catch((err) => {
                alert('Reinicie a página, caso persista o erro, o servidor está com problemas');
                console.log(err.response.data);
            })
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, [searchFilter])

    return (

        <Container>
            <BoxTable>
                <Title>
                    <tr>
                        <th scope="col">FOTO</th>
                        <th scope="col">NOME</th>
                        {windowWidth > 560 ? <>
                            <th scope="col">CARGO</th>
                            <th scope="col">DATA DE ADMISSÃO</th>
                            <th scope="col">TELEFONE</th>
                        </> : <th><img src={ellipse} alt="" /></th>}
                    </tr>
                </Title>
                <Tbody>
                    {employee ? employee.map((data) => {
                        return (<RowTable employee={data} key={data.id} windowWidth={windowWidth} />)
                    }) : <></>}
                </Tbody>
            </BoxTable>
        </Container>

    )
}

const Container = styled.div`
    margin: 0 35px 0 32px;
    @media (max-width: 560px){
        margin: 0 18px 0 20px;
    }
`

const BoxTable = styled.table`
    width: 100%;
    border-collapse: separate;
    
`

const Title = styled.thead`
    height: 47px;
    background: linear-gradient(to bottom, #5A84C0, #594ED2);
    th{
        color: #FFFFFF;
        text-align: left;
        vertical-align: middle;
        padding-left: 32px;
        @media (max-width: 560px){
            padding: 0;
            text-align: center;
        }
    }
    th:first-child{
        border-top-left-radius: 8px;
    }
    th:nth-child(2){
        @media (max-width: 560px){
            padding: 0 30px 0 30px;
        }
    }
    th:last-child{
        border-top-right-radius: 8px;
    }
`

const Tbody = styled.tbody`
    background: #FFFFFF;
`


Table.propTypes = {
    searchFilter: PropTypes.string.isRequired
};
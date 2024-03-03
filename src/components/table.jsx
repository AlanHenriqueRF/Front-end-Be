import { styled } from "styled-components"
import RowTable from "./rowTable"
import { useEffect, useState } from "react"
import ApiEmployees from "../service/employees";
import { filterSearch } from "../utils/formatPhone";
import PropTypes from 'prop-types';


export default function Table({ searchFilter }) {
    const [employee, setEmployee] = useState();


    useEffect(() => {
        ApiEmployees.getEmployees()
            .then((data) => {
                if (searchFilter || searchFilter !== '') {
                    setEmployee(filterSearch(data.data, searchFilter))
                }
                else {
                    setEmployee(data.data)
                }
            })
            .catch((err) => { alert('Reinicie a página, caso persista o erro, o servidor está com problemas'); console.log(err.response.data) })


    }, [searchFilter])
    return (

        <Container>
            <BoxTable>
                <Title>
                    <tr>
                        <th scope="col">FOTO</th>
                        <th scope="col">NOME</th>
                        <th scope="col">CARGO</th>
                        <th scope="col">DATA DE ADMISSÃO</th>
                        <th scope="col">TELEFONE</th>
                    </tr>
                </Title>
                <Tbody>
                    {employee ? employee.map((data) => {
                        return (<RowTable employee={data} key={data.id} />)
                    }) : <></>}
                </Tbody>
            </BoxTable>
        </Container>

    )
}

const Container = styled.div`
    margin: 0 35px 0 32px;
`

const BoxTable = styled.table`
    width: 100%;
    border-collapse: separate;
    tr{
        box-shadow: 0 1px 2px #00000033;
    }
`

const Title = styled.thead`
    height: 47px;
    background: linear-gradient(to bottom, #5A84C0, #594ED2);
    th{
        color: #FFFFFF;
        text-align: left;
        vertical-align: middle;
        padding-left: 32px;
    }
    :first-child{
        border-top-left-radius: 8px;
    }
    :last-child{
        border-top-right-radius: 8px;
    }
`

const Tbody = styled.tbody`
    background: #FFFFFF;
    tr{
        height: 49px;
    
        td{
            text-align: left;
            vertical-align: middle;
            padding-left: 32px;
            img{
                width: 34px;
                height: 34px;
                border-radius: 34px;
            }
        }
    }
`


Table.propTypes = {
    searchFilter: PropTypes.string.isRequired
};
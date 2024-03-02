import { styled } from "styled-components"
import RowTable from "./rowTable"
import { useEffect, useState } from "react"
import ApiEmployees from "../service/employees";


export default function Table() {
    const [employee, setEmployee] = useState();

    useEffect(() => {
        ApiEmployees.getEmployees()
            .then((data) => { setEmployee(data.data) })
            .catch((err) => { alert('Reinicie a página, caso persista o erro, o servidor está com problemas'); console.log(err.response.data) })
    }, [])
    return (
        <>
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
                            return (<RowTable employee={data} key={data.admission_date} />)
                        }) : <></>}
                    </Tbody>
                </BoxTable>
            </Container>
        </>
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

const Tbody = styled.tbody`
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
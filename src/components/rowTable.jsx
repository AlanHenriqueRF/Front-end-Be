import PropTypes from 'prop-types';
import { formatPhone } from '../utils/formatPhone';
import charmDown from '../assets/charmDown.svg'
import charmUp from '../assets/charmUp.svg'
import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

export default function RowTable({ employee, windowWidth }) {
    const { image, name, job, admission_date, phone } = employee;
    const date = new Date(admission_date).toLocaleDateString();
    const cellNumber = formatPhone(phone);
    const [active, setActive] = useState(false);

    useEffect(() => {
        if (windowWidth > 560) setActive(false)
    }, [windowWidth])

    return (
        <>
            <Rowemployee boxshadow={active ? 'none' : '0 1px 2px #00000033'}>
                <td><img src={image} alt="" /></td>
                <td>{name}</td>
                {windowWidth > 560 ? <>
                    <td>{job}</td>
                    <td>{date}</td>
                    <td>{cellNumber}</td>
                </> :
                    <td onClick={() => setActive(!active)} ><img src={active ? charmUp : charmDown} alt="" /></td>}
            </ Rowemployee>
            {active && windowWidth <= 560 && (
                <>
                    <Plusinfo>
                        <td colSpan="3">
                            <Cargo>
                                <h2>Cargo</h2>
                                <h3>{job}</h3>
                            </Cargo>
                        </td>
                    </Plusinfo>
                    <Plusinfo>
                        <td colSpan="3">
                            <div>
                                <h2>Data de admissão</h2>
                                <h3>{date}</h3>
                            </div>
                        </td>
                    </Plusinfo>
                    <Plusinfo>
                        <td colSpan="3">
                            <TelefoneContainer>
                                <h2>Telefone</h2>
                                <h3>{cellNumber}</h3>
                            </TelefoneContainer>
                        </td>
                    </Plusinfo>
                </>
            )}
        </>
    )
}

const Rowemployee = styled.tr`
    height: 49px;
    box-shadow: ${props => props.boxshadow} ;

    td:nth-child(2){
        @media (max-width: 560px){
            padding: 0 30px 0 30px;
        }
    }

    td{
        text-align: left;
        vertical-align: middle;
        padding-left: 32px;
        img{
            width: 34px;
            height: 34px;
            border-radius: 34px;
        }
        @media (max-width: 560px){
            text-align:center;
            padding: 0;
        }
    }
    
`

const Plusinfo = styled.tr`
    td{
        div{
            display: flex;
            justify-content: space-between;
            width: calc(100% - 32px);
            margin-left: 16px;
            border-bottom: 1px dotted #DFDFDF;
            margin-top: 16px;
        }
    }
`

const Cargo = styled.div`
    margin-top: 31px;
`

const TelefoneContainer = styled.div`
    margin-bottom: 32px;
`

RowTable.propTypes = {
    employee: PropTypes.shape({
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        job: PropTypes.string.isRequired,
        admission_date: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired
    }).isRequired,
    windowWidth: PropTypes.number.isRequired
};
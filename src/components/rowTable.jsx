import PropTypes from 'prop-types';

function formatPhone(phone) {
    phone = phone.trim();
    return (`+${phone.slice(0, 2)} (${phone.slice(2, 4)}) ${phone.slice(4, 9)}-${phone.slice(9)}`);
}

export default function RowTable({ employee }) {
    const { image, name, job, admission_date, phone } = employee;
    const date = new Date(admission_date).toLocaleDateString();
    const cellNumber = formatPhone(phone);
    return (
        <>
            <tr>
                <td><img src={image} alt="" /></td>
                <td>{name}</td>
                <td>{job}</td>
                <td>{date}</td>
                <td>{cellNumber}</td>
            </tr>
        </>
    )
}

RowTable.propTypes = {
    employee: PropTypes.shape({
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        job: PropTypes.string.isRequired,
        admission_date: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired
    }).isRequired
};
export default function formatPhone(phone) {
    phone = phone.trim();
    return (`+${phone.slice(0, 2)} (${phone.slice(2, 4)}) ${phone.slice(4, 9)}-${phone.slice(9)}`);
}
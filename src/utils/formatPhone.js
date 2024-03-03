export function formatPhone(phone) {
    phone = phone.trim();
    return (`+${phone.slice(0, 2)} (${phone.slice(2, 4)}) ${phone.slice(4, 9)}-${phone.slice(9)}`);
}


export function filterSearch(data, searchFilter) {
    searchFilter = searchFilter.trim().toLowerCase()
    return (
        data.filter(({ job, name, phone }) => {
            const filterJob = job.trim().toLowerCase().includes(searchFilter)
            const filterName = name.trim().toLowerCase().includes(searchFilter)
            const filterPhone = phone.trim().includes(searchFilter)
            const phoneFormatedFilter = formatPhone(phone).includes(searchFilter)

            return filterJob || filterName || filterPhone || phoneFormatedFilter
        }))
}
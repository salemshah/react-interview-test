
// pagination
export function paginate(data, itemParPage) {
    let numberOfPages = Math.ceil(data.length / itemParPage);
    return Array.from({length: numberOfPages}, (_, index) => {
        const start = index * itemParPage;
        return data.slice(start, start + itemParPage)
    });
}
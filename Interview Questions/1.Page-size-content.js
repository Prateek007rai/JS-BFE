// arr = [1,2,3,4,5,6,7, 8,9,10], page size 3, kindlh tell me the content of third page in javascript

function getPage(arr, page, pageSize) {
    const start = (page - 1) * pageSize;   // starting index
    const end = start + pageSize;          // ending index

    return arr.slice(start, end);          // extract page
}

const arr = [1,2,3,4,5,6,7,8,9,10];

console.log(getPage(arr, 3, 3));
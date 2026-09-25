export default async function GetAllCategories(){
    return fetch('https://dummyjson.com/products/categories')
    .then(res => res.json())
    .then((data) => {
        return data;
    });
}
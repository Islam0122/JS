//------------------1
const arr_list = [22, 6, 77, 8];
const result = Math.max(...arr_list);
console.log(result); // 77
//-----------------------2
const user = {
    "id": 1,
    "userName": "islam",
    "phone_number": +996552325295,
};
const car = {
    "id": 1,
    "model": "mersedes",
};
function mergeObjects(obj1, obj2) {
    return {
        "id": 1,
        "car": obj2,
        "owner": obj1
    };
}
const result_2 = mergeObjects(user, car);
console.log(result_2);
//-----------------------3
const products = [
    { name: 'ноутбук', cost: 1500 },
    { name: 'китеп', cost: 800 },
    { name: 'дептер', cost: 1200 },
    { name: 'ручка', cost: 200 },
    { name: 'карандаш', cost: 200 }
];
function filterByCost(arr, cost) {
    arr_filer = arr.filter(item => item.cost > cost);
    for (let key in arr_filer) {
        console.log(`------------> 1000 чон<------------`)
        console.log(key, arr_filer[key]);
    }
}
const result_3 = filterByCost(products, 1000);
console.log(result_3);

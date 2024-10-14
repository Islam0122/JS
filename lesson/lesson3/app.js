//
// const tarif = 500;
//
// if(tarif === 500)
// {
//     alert("Сиздин тариф Элдик +")
// }
// else if(tarif === 100)
// {
//     alert("Сиздин тариф окуучу")
// }
// else if(tarif === 300)
// {
//     alert("Сиздин тариф мугалим")
// }
// else if(tarif === 1000)
// {
//     alert("Сиздин тариф смарт")
// }
// else {
//     alert("404")
// }

const mBank={
    pinCode:'1343',
    balanc:322332,
    owner:'fsddddd',
    inn:'1233333312',
}
const pin=prompt('enter your pincode')


if(pin===mBank.pinCode){
    alert("hello"+mBank.owner)
    const  ask =confirm("показать  вам баланс")
    if(ask===true){
        alert("ваш баланс"+mBank.balanc+"com")
    }
}else{
    alert("error")
}
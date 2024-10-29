const users=[
    {
        name: "John",
        imageUrl:"https://etnomedia.tv/_next/image?url=https%3A%2F%2Fetnomedia-cache.cdnvideo.ru%2Fetnomedia%2Fimages%2Fpersons%2F577.jpg&w=256&q=75\n",
        gender:"male",
    },
    {
        name: "zsfdgh fdghjkl",
        imageUrl:"",
        gender:"female",
    },
    {
        name: "dfghjk fdghjkl",
        imageUrl:"",
        gender:"female",
    },

    {
        name: "Jodsddshn",
        imageUrl: "https://etnomedia.tv/_next/image?url=https%3A%2F%2Fetnomedia-cache.cdnvideo.ru%2Fetnomedia%2Fimages%2Fpersons-new%2F2024%2F591%2F306605192.jpg%3Fw%3D800&w=256&q=75\n",
        gender:"male",
    },
    {
        name: "drtyuhjkl;'i dfyuil",
        imageUrl:"",
        gender:"female",
    },
]
const colors = ["red", "green", "blue", "yellow"];

const actors = document.querySelector('.actors')
actors.innerHTML = users.map(person=>{
    // const element =  setElement(person)
    return `
        <div class="card">
                ${setElement(person)}
                <div>
                   <h4>${person.name}</h4>
                   ${setGender(person.gender)}
                </div>
        </div>
`
}).join('')
function setElement(user) {
    if (user.imageUrl && user.imageUrl.length > 0) {
        return `<img src="${user.imageUrl}" alt="User Image">`;
    } else {
        const [firstName = "", lastName = ""] = user.name.split(" ");  // Разделяем строку
        const name = (firstName[0] || "") + (lastName[0] || "");  // Начальные буквы или пустая строка
        color = getRandomColor(colors)
        return `
        <div class="name" style="background: ${color}">
            <h3>${name.toUpperCase()}</h3>
        </div>`;
    }
}
function setGender(gender){
    if( gender === "male" ){
        return  `<p>актер</p>`
    }
    else {
        return  `<p>актриса</p>`

    }
}
function getRandomColor(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);  // Генерируем случайный индекс
    return arr[randomIndex];  // Возвращаем случайный цвет
}
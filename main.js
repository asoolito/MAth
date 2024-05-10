// console.log(Math.round(Math.random() * 100));
const userRandomNumber = alert("Sizda hozir random sonlar chiqishni boshlaydi")
const randomNumber = Math.round(Math.random() * 100)
alert(`Random son ${randomNumber} edi`)
let userNumber = prompt("bo'luvchini kiriting")
const   userBolinuvchi = confirm(`Siz ${randomNumber}ni ${userNumber}ga bo'moqchimiz`)

alert(`
Random orqali chiqqan son ${randomNumber} edi
Biz  ${randomNumber}ni ${userNumber }ga boldik`)
alert(`
biz buni bo'ldik javob ${randomNumber/userNumber} bo'ldi`)
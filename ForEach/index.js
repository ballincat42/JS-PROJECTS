const numbers = [1,2,3,4,5]
const ps = ['t-1','t-2','t-3','t-4','t-5']

ps.forEach((id,index) => {
    document.querySelector(`#${id}`).textContent = numbers[index];
})
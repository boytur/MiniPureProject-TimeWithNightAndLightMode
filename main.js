const timeElement = document.querySelector(".time-text")
function updateTime(){
    const time = new Date()
    const hour = time.getHours()
    const minute = time.getMinutes()
    const second = time.getSeconds()
    timeElement.innerHTML = `${hour}:${minute < 10 ? `0${minute}` : minute}:${
        second < 10 ? `0${second}` : second
      }`;
}
setInterval(updateTime, 1000);

const btnChangeMode = document.querySelector(".icons")
const moon = document.querySelector(".icon")
btnChangeMode.addEventListener("click",(e)=>{
    const html = document.querySelector('html')

    if (html.classList.contains("DarkMode")) {
        html.classList.remove("DarkMode");
        moon.classList.remove("fa-solid", "fa-sun", "fa-bounce","fa-2xl");
        moon.classList.add("fa-solid", "fa-moon", "fa-bounce", "fa-2xl");
      } else {
        html.classList.add("DarkMode");
        moon.classList.remove("fa-solid", "fa-moon", "fa-bounce", "fa-2xl");
        moon.classList.add("fa-solid", "fa-sun", "fa-bounce","fa-2xl");
      }
})
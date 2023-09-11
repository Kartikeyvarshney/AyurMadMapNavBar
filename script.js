const menu = document.querySelector('.btn')
const sidebar = document.querySelector('aside')
menu.onclick = () => {
    sidebar.classList.toggle('active')
}
// let count = 1;
setInterval(() => {
    if (screen.width >780) {

        if (sidebar.classList.contains('active')) {
           
            menu.click()
            count = count+1;

        }
    }

}, 500)

const menu = document.querySelector('.btn')
const sidebar = document.querySelector('aside')
const nav = document.querySelector('.desktop-nav')
menu.onclick = () => {
    sidebar.classList.toggle('active')
}
window.onresize = ()=>{
    if (window.innerWidth >780) {
        if (sidebar.classList.contains('active')) {
            menu.click()

        }
    }
}

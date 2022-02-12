const accardion = document.querySelectorAll('.contentBox')
accardion.forEach(item=> {
    item.onclick = () =>{
        item.classList.toggle('active')
    }
})
const menu = document.querySelector('.mobile-menu')
const burger = document.querySelector('.burger')
burger.onclick = ()=>{
    menu.classList.toggle('active')
    burger.classList.toggle('active')
}
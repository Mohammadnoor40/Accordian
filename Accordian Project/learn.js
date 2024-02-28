const accordian=document.querySelectorAll('.content-container')
console.log(accordian)
for (const element of accordian) {
    element.addEventListener('click', () => {
        element.classList.toggle("active");
        
    });
}
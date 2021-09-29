window.addEventListener('DOMContentLoaded', function(){
    const loader = document.querySelector(".loader"),
          btn = document.querySelector('.activ'), 
          form = document.querySelector('.modalka');
          console.log(form);
    setTimeout(() => {
        loader.style.opasity = "0";
        setTimeout(() => {
            loader.style.display = "none"
            loader.style.transition = "all 5s linear"
        }, 1500);
    }, 2000);

btn.addEventListener('click', openModal)
function closeModeal() {
    form.style.display = 'none';
    form.classList.remove('show');
    console.log("iwlayti");
    document.body.style.overflow = "";
}
function openModal() {
    form.style.display = 'block';
    console.log("iwlayti");
    document.body.style.overflow = "hidden";
}
form.addEventListener('click', (e) => {
    if(e.target === form){
        closeModeal()
    }
})

})

// Работа модального окна кнопки "Идите в жопу!!!"
document.addEventListener("click", function (e){
    e.preventDefault();
    const nameClass = e.target.classList.value;
    console.log(nameClass);
    if(nameClass == "btn-goToTheAss"){
        document.querySelector(".formNotBy").classList.toggle("hidden");
    }else if(nameClass == "form__overlay"){
        document.querySelector(".formNotBy").classList.toggle("hidden");
    }else if(nameClass == "btn-in-form"){
        document.querySelector(".formNotBy").classList.toggle("hidden");
        document.querySelector(".formNotBy-notification").classList.toggle("hidden");
        setTimeout(() => {  
            document.querySelector(".formNotBy-notification").classList.toggle("hidden") 
        }, 1500);
    }
});
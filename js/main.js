function cerrarPanel(){
    let panel = document.getElementById('panel-lateral');
    panel.classList.toggle('active');
}


// FUNCION MODAL BROSS
const openModal = document.querySelector(".modal-bross");
const modal = document.querySelector(".m-bross");
const closeModal = document.querySelector(".close-bross");

openModal.addEventListener('click', (e)=>{
    modal.classList.add('modal--show');
});

closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
});

// 

// FUNCION MODAL GUARDIANES
const openModal1 = document.querySelector(".modal-guardianes");
const modal1 = document.querySelector(".m-guardianes3");
const closeModal1 = document.querySelector(".close-guar");

openModal1.addEventListener('click', (e)=>{
    e.preventDefault();
    modal1.classList.add('modal--show');
});

closeModal1.addEventListener('click', (e)=>{
    e.preventDefault();
    modal1.classList.remove('modal--show');
});

//

// FUNCION MODAL FLASH
const openModal2 = document.querySelector(".Openmodal-flahs");
const modal2 = document.querySelector(".m-flash");
const closeModal2 = document.querySelector(".close-flash");

openModal2.addEventListener('click', (e)=>{
    e.preventDefault();
    modal2.classList.add('modal--show');
});

closeModal2.addEventListener('click', (e)=>{
    e.preventDefault();
    modal2.classList.remove('modal--show');
});

//

// FUNCION MODAL BARBIE
const openModal3 = document.querySelector(".Openmodal-barbie");
const modal3 = document.querySelector(".m-barbie");
const closeModal3 = document.querySelector(".close-barbie");

openModal3.addEventListener('click', (e)=>{
    e.preventDefault();
    modal3.classList.add('modal--show');
});

closeModal3.addEventListener('click', (e)=>{
    e.preventDefault();
    modal3.classList.remove('modal--show');
});

//

// FUNCION MODAL FLAHS1
const openModal5 = document.querySelector(".Openmodal-flahs1");
const modal5 = document.querySelector(".m-flahs1");
const closeModal5 = document.querySelector(".close-flahs1");

openModal5.addEventListener('click', (e)=>{
    e.preventDefault();
    modal5.classList.add('modal--show');
});

closeModal5.addEventListener('click', (e)=>{
    e.preventDefault();
    modal5.classList.remove('modal--show');
});

//

// FUNCION MODAL MEGALODON
const openModal4 = document.querySelector(".Openmodal-megalodon");
const modal4 = document.querySelector(".m-megalodon");
const closeModal4 = document.querySelector(".close-megalodon");

openModal4.addEventListener('click', (e)=>{
    e.preventDefault();
    modal4.classList.add('modal--show');
});

closeModal4.addEventListener('click', (e)=>{
    e.preventDefault();
    modal4.classList.remove('modal--show');
});

//

// FUNCION MODAL BARBIE
const openModal6 = document.querySelector(".Openmodal-barbie1");
const modal6 = document.querySelector(".m-barbie1");
const closeModal6 = document.querySelector(".close-barbie1");

openModal6.addEventListener('click', (e)=>{
    e.preventDefault();
    modal3.classList.add('modal--show');
});

closeModal6.addEventListener('click', (e)=>{
    e.preventDefault();
    modal6.classList.remove('modal--show');
});

//

// FUNCION MODAL BARBIE
const openModal7 = document.querySelector(".Openmodal-barbie2");
const modal7 = document.querySelector(".m-barbie2");
const closeModal7 = document.querySelector(".close-barbie2");

openModal7.addEventListener('click', (e)=>{
    e.preventDefault();
    modal3.classList.add('modal--show');
});

closeModal7.addEventListener('click', (e)=>{
    e.preventDefault();
    modal7.classList.remove('modal--show');
});

//
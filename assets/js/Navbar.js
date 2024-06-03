const hamburguerIcon = document.querySelector('.nav__hamburguer');
const navOverlay = document.querySelector('.nav__overlay');
let currentDropdown = navOverlay;

hamburguerIcon.addEventListener('click', ()=>{
    hamburguerIcon.classList.toggle('nav__hamburguer--open');

    navOverlay.classList.toggle('nav__overlay--show');
});

navOverlay.addEventListener('click', (e)=>{
    e.preventDefault();
    const currentElement = e.target;
    // console.log(e.target.classList.value);

    if( isActive(currentElement, 'nav__parent') ){

        const subMenu = currentElement.parentElement.children[1];
        console.log(subMenu);

        if(window.innerWidth < 768){

            let height = (subMenu.clientHeight == 0) 
                        ? subMenu.scrollHeight : 0;
            // console.log(subMenu.clientHeight);

            subMenu.style.height = `${height}px`;
        }else{

            if( !isActive(subMenu, 'nav__inner--show') ){
                closeDropdown(currentDropdown);
            }
            subMenu.classList.toggle('nav__inner--show');

            currentDropdown = subMenu;

        }

    }
    
});

function isActive(element, string){
    return element.classList.value.includes(string);
}

function closeDropdown(currentDropdown){
    if( isActive(currentDropdown, 'nav__inner--show')){
        currentDropdown.classList.remove('nav__inner--show');
    }
}

window.addEventListener('resize', ()=>{
    closeDropdown(currentDropdown);

    if(window.innerWidth > 768){
        const navInners = document.querySelectorAll('.nav__inner');

        navInners.forEach(navInner =>{
            navInner.style.height = '';
        });
    }
});


/**Emnail js */
const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'service_ce6ro5j';
   const templateID = 'template_4rho4xb';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Email Send!",
        showConfirmButton: true,
        timer: 1500
      });
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});
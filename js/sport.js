// const menu = document.querySelector('.menu');
const menuButton = document.querySelector('.menu-btn');
 
// menuButton.addEventListener('click', () => {
//     menu.classList.toggle('menu-open');
// });

const stats = document.querySelector('.stats');
const counters = document.querySelectorAll('.counter');
let bol = false;

/*Gets stats sections
from the top of the page plus
the stats element height*/

const sectionOffset = stats.offsetTop + stats.offsetHeight;

/*Start the counter when the page
is scrolled to the start section*/

window.addEventListener('load', () => {
    const pageOffset = window.innerHeight + pageYOffset;

    if(pageOffset > sectionOffset && bol === false){
        counters.forEach((counter) => {
            function updateCount(){
                /*Set variables and overwrite them everytime with
                the + shorthand*/
                const target = +counter.getAttribute('data-target');
                const speed = +counter.getAttribute('data-speed');
                const count = +counter.innerText;

                if(count < target){
                    counter.innerText = count + 1;

                    setTimeout(updateCount, speed);
                }
                else{
                    counter.innerText = target;
                }
            }
            updateCount();
            /* Run the function once by breaking one of the
            conditions in the if statement*/
            
            /*This stops the updateCount function from
            running everytime you scroll past this section*/
            bol = true;
        });
    }
});
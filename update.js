document.addEventListener("DOMContentLoaded", function () 
{
const list = document.querySelectorAll('li');
        list.forEach(item => {
            item.addEventListener('click', ()=>{
                item.classList.toggle('completed')
            }
                
            )
        });
    });
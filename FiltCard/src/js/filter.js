
const filter = document.querySelector('header input');

const cards = document.querySelectorAll('.cards li');

filter.addEventListener("input", filterSearc);

function filterSearc () {
 
  if (filter.value != '') {

    for(let card of cards){
        let title = card.querySelector('h2')

        title = title.textContent.toLowerCase()

        let filterText = filter.value.toLowerCase()
    
   
    if(!title.includes(filterText)){
        card.style.display = "none"
    }else{
        card.style.display = "block"
    }
}
  } else {
   for(let card of cards){
    card.style.display = 'block'
   }
  }
};

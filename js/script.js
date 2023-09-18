const content = document.querySelector('.content');

reset();

for(let i = 1; i <= 100; i++ ){

  const square = createSquare (i);
  
  content.append(square);
};



function createSquare (index){
  const newSquare = document.createElement('div');
  newSquare.className = 'square';
  newSquare.innerHTML = `<span>${index}</span>`;
  return newSquare;
};


function reset(){
  content.innerHTML = '';
}

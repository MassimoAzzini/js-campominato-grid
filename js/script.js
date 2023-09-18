const content = document.querySelector('.content');
const btn = document.querySelector('.btn');

reset();



btn.addEventListener('click', function(){
  for(let i = 1; i <= 100; i++ ){
  
    const square = createSquare (i);
  
    square.addEventListener('click', function(){
  
      this.classList.toggle('active');
      console.log(this._squareID);
  
    });
    
    content.append(square);
  };

});



function createSquare (index){
  const newSquare = document.createElement('div');
  newSquare.className = 'square';
  newSquare._squareID = index;
  newSquare.innerHTML = `<span>${index}</span>`;
  return newSquare;
};


function reset(){
  content.innerHTML = '';
}

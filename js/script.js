const content = document.querySelector('.content');
const btn = document.querySelector('.btn');
const formSelect = document.getElementById('inputGroupSelect04').value;

let numberSquare = numberSquareForLine();

reset();

btn.addEventListener('click', function(){

  reset();
  
  for(let i = 1; i <= numberSquare; i++ ){
    
    let square = createSquare (i);
    
    square.addEventListener('click', function(){
      
      this.classList.toggle('active');
      
      console.log(this._squareID);
      
    });
    
    content.append(square);
  };
  
});


function createSquare (index){
  const newSquare = document.createElement('div');
  newSquare._squareID = index;
  newSquare.innerHTML = `<span>${index}</span>`;

  if(formSelect == 2){ 

    newSquare.classList.add('square', 'medium'); 

  }else if(formSelect == 3){

    newSquare.classList.add('square', 'hard');

  }else if(formSelect == 1){

    newSquare.classList.add('square', 'easy');

  }

  return newSquare;
};


function reset(){
  content.innerHTML = '';
};

function numberSquareForLine(){
  if(formSelect == 2) return 81;
  else if(formSelect == 3) return 100;
  else if(formSelect == 1) return 49;

};

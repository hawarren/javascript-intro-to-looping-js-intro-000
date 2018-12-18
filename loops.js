
var array ;
function forLoop(array){
    var i;
    var newstring;
  for (i = 0; i < 25; i++){
    if (i == 1)
    {
    //  newstring = '"I am 1 strange loop"'
    //  array.push(newstring);
    array.push(`"I am 1 strange loop."`);
    }
    
    else {
    //  newstring = `"I am ${i} strange loop${i === 0 ? '' : 's'}."`
      
      //array.push(newstring);
      array.push(`"I am ${i} strange loops."`);
    }
  }
  return array;
}

function whileLoop(number){
  while (number > 0)
  {
    console.log(number);
    number--;
  }
  return "done";
}

function doWhileLoop(anArray){
  
}
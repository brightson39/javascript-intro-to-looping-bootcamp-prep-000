function forLoop(array) {
   for ( let i = 0; i < 25; i++) {
     if (i === 1) {
       array.push(`I am 1 strange loop.`)
     } else {
       array.push(`I am ${i} strange loops.`)
     }
  }
  return array;
}

 function whileLoop(n) {
  let countdown = n;

     while (countdown > 0) {
      console.log(--countdown)
    }
    return "done";
  }

 function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >= 0.5
  }

   do {
    array.pop();
  } while (array.length > -1 && maybeTrue());
    return array;
}



unction forLoop(foo){
    for(var i = 0; i < 25; i++){
      if(i === 1){
        foo.push("I am 1 strange loop.")
      }
      else{
        foo.push(`I am ${i} strange loops.`)
      }
    }
    return foo
}

 function whileLoop(num){
  while(num > 0){
    num--;
    console.log(num)
  }
  return "done"
}

 var x = 0;
function incrementVariable() {
  x = x + 1;
  return x;
}

 function doWhileLoop(n){
  do{
    console.log('I run once regardless')
  } while(incrementVariable() <= n);
}


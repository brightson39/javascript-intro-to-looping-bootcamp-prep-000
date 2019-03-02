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

 
 function doWhileLoop(num) {
  let num = 1;
  do{
    console.log (`i run once regardless ${num} time`);
  }
   
  }

   do {
    array.pop();
  } while (array.length > -1 && maybeTrue());
    return array;
}
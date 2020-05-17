var number1_element = document.getElementById('num1');
var number2_element = document.getElementById('num2');
var roundOff_Element = document.getElementById('round');

function divideThem(){

  var number1 = number1_element.value;
  var number2 = number2_element.value;
  var roundOff=roundOff_Element.checked;
 
 
  //We basically need to check whether number1 and number2 are empty

  if( number1 == ""){

    //to avoid duplication..the more intelligent way is to add a span tag for errors...

    document.getElementById('num1Error').innerHTML = "Number one is empty";

    document.getElementById('num1Error').style.display = 'block';

    //we can shift the focus to number one
    number1_element.focus();

    //make the error display if not filled :)

    //plus notice the icon is not appearing :) -- fix that too...

  }else if( number2 == ""){


    document.getElementById('num2Error').innerHTML = "Number two is empty";

    document.getElementById('num2Error').style.display = 'block';

    //we can shift the focus to number one
    number2_element.focus();


  }else{
    //all is well..do division
    //1. Division by zero

    if( number2 != '0' ){
        if(roundOff == true){
          result = Math.ceil(number1 / number2);
          //ceil function in JS math library round up the number
        }else{
      result = number1 / number2;
        }
    }else{
      document.getElementById('num2Error').innerHTML = "Error! Division by zero not allowed";

      document.getElementById('num2Error').style.display = 'block';

      //we can shift the focus to number one
      number2_element.focus();

      //we can also delete the zero
      number2_element.value = "";

      //we can give number 2 focus
      number2_element.focus();

    }

    //we need to take care of;
    // 1. division by zero (DONE)
    // 2. empty inputs (validation - ensuring that a user enters the right input data)
    // 3. Output formatting : Let us sort this out now...

    // we would like to format the results better

    var result_span = document.getElementById('results');
    result_span.innerHTML = result;



  }


}

//2. Using javascript addEventListener methods

var divide_them = document.getElementById('divide-them');
/*
target.addEventListener(type, listener [, options]);

target is divide_them -- our button
type is click
listener is a function to be executed..
so..


divide_them.addEventListener('click',function(){
  alert('I am not implemented also!');
});
*/
//we can use the first approach for now..


//let us get rid of the error once someone fills in a value...

//let us check out the different events..

//clear error message if there is input
number1_element.addEventListener('focusout',(event)=>{
  //perfect..
  if(number1_element.value != ""){
    document.getElementById('num1Error').innerHTML = '';
    document.getElementById('num1Error').style.display = 'none';
  }
});

//clear error message if there is input
number2_element.addEventListener('focusout',(event)=>{
  //perfect..
  if(number2_element.value != ""){
    document.getElementById('num2Error').innerHTML = '';
    document.getElementById('num2Error').style.display = 'none';
  }
});


var textview = document.forms['myform']['textview'];
var number1, number2, operator;

function input(input) {
  if (!isNaN(input) || input === '.') {
    if (input === '.' && (textview.value + input).split('.').length <= 2) {
      textview.value += input;
    } else if (input !== '.') {
      textview.value += input;
    }
  } else {
    if (input !== '=') {
      number1 = parseFloat(textview.value);
      operator = input;
      textview.value = '';
      if (input === 'sqrt') {
        textview.value = squareRoot(number1);
      }
    } else {
      number2 = parseFloat(textview.value);
      switch (operator) {
        case '+': {
          textview.value = sum(number1, number2);
          break;
        }
        case '-': {
          textview.value = subtract(number1, number2);
          break;
        }
        case '*': {
          textview.value = multiply(number1, number2);
          break;
        }
        case '/': {
          textview.value = divide(number1, number2);
          break;
        }
        case '%': {
          textview.value = modulusDivision(number1, number2);
          break;
        }
        default:
          break;
      }
    }
  }
}

function sum(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function squareRoot(a) {
  if (Number.isInteger(Math.sqrt(a))) {
    return Math.sqrt(a);
  } else {
    return parseFloat(Math.sqrt(a).toFixed(3));
  }
}

function absolute(x) {
  return Math.abs(x);
}

function modulusDivision(a, b) {
  return a % b;
}

function clearScreen() {
  textview.value = '';
  number1 = number2 = operator = null;
}

function back() {
  textview.value = textview.value.substring(0, textview.value.length - 1);
}


function formValidation( fname, number, email) 
{
   var contactno = /^\d{10}$/;
   var pos = email.indexOf('@');
  var dotpos = email.lastIndexOf('.');

if( pos < 1 || dotpos < pos + 2 ||  dotpos + 2 >= email.length || email ==  ' ' ||  email ==  'undefined')
{  
  //console.log("Please enter a valid e-mail address \n pos:"+pos+"\n dotpos:"+dotpos);  
  return false;  
  }  
if (fname == '' || fname == 'undefined' || !isNaN(fname))
{
   //console.log('Enter valid Name');
     return false;
}
if(!number.match(contactno) || number  == '' || number == 'undefined') 
{
   //console.log('Enter valid Mobile');
    return false;
}
    return true;
}



function isPalindrome() {
    let str = document.getElementById('palindrome').value;
    if (str.length < 2) alert("String length should be >= 2")
    let result =  str === str.split('').reverse().join('');
    if(result) alert('The string is a palindrome')
    else alert('The string is not a palindrome')
}

function isAnagram() {
    let s = document.getElementById('anagramstring').value;
    let t = document.getElementById('anagramword').value;
    let singleMap = {};
    for (let i = 0; i < s.length; i++) {
        if(!/a-zA-Z0-9/.test(s[i])) continue;
        singleMap[t[i]] = (singleMap[t[i]] || 0) + 1;
        singleMap[s[i]] = (singleMap[s[i]] || 0) - 1;
    }
    let result =  Object.values(singleMap).reduce((acc, cur) => {
        return cur > 0 ? acc + cur : acc
    }, 0) === 0
    if(result) alert('The string is a anagram')
    else alert('The string is not a anagram')
}


'use strict';

const keys =document.querySelector('.calc--keys');
const result=document.getElementById('result')
const previous=document.getElementById('previous');
let number1;
let number2;
let operator;
let res;
let prefix;
keys.addEventListener('click',function(e){
 const key=e.target;
 if(!key.closest('button'))return
if(key.dataset.type==='number'){
 if(result.textContent==='0')result.textContent=key.textContent
     
   else result.textContent+=key.textContent;
  
  }

   if(key.dataset.type==='operator'){
    number1=Number(result.textContent);
    result.textContent=0
    previous.textContent=number1+' '+key.textContent;
    if(key.dataset.key==='plus'){
        operator='+';
    }else if(key.dataset.key==='minus'){
        operator='-';
    }
    else if(key.dataset.key==='divide'){
        operator='/';
    }
    else if(key.dataset.key==='times'){
        operator='*';
    }
   
   }
    if(key.dataset.type==='switch'){
    
    if(prefix==='-'){
         result.textContent=result.textContent.replace('-','').trim();
         prefix='+'
    }
     else { 
         prefix='-'; 
        result.textContent=prefix+result.textContent
   }
    }
   if(key.dataset.type==='equal'){
    number2=Number(result.textContent);
   if(operator) {
    previous.textContent+=' '+number2;
   }
   else previous.textContent=previous.textContent;
  if(operator==='+'){
  result.textContent=number1+number2;
  res=result.textContent;
  }
  if(operator==='-'){
  result.textContent=number1-number2;
  res=result.textContent;
  }
  if(operator==='/'){
  result.textContent=number1/number2;
  res=result.textContent;
  }
  if(operator==='*'){
  result.textContent=number1*number2;
  res=result.textContent;
  }
  operator=undefined;
   }
   if(key.dataset.type==='squared'){
  number1=result.textContent;
  previous.textContent=number1+' '+'^ 2'
  result.textContent=number1**2
  res=result.textContent;
}
if(key.dataset.type==='root'){
    number1=result.textContent;
    previous.textContent='√'+''+number1;
    result.textContent=Math.sqrt(number1)
}
if(key.dataset.type==='clear'){
    number1=undefined;
    number2=undefined;
    res=undefined;
    operator=undefined;
    result.textContent=0;
    previous.textContent=0;
    prefix=undefined;
}
}
)

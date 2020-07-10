var a=document.getElementsByClassName('content');
var b=new Array(a.length);
for(var i=0;i<a.length;i++){
  b[i]=a[i];

}

var prev='';// stroring prev value
var currVal='';// storing curr value
function finding_value(elem,index){
  elem.addEventListener('click',function(){
    //taking the current input
    currVal=elem.innerText;
    var result=document.getElementById('result-text');
   //result
    if(prev.length>13){// if content overflow
    
      var resultBox=document.getElementById('result');
      
      resultBox.style.overflowX='scroll';
      resultBox.style.overflowY='hidden';
    }
   var check=currVal;
    //checking that there are not two consective operator if there replace the latest one
   if(isOperator(check)&&isOperator(prev.charAt(prev.length-1))){
      prev=prev.substring(0,prev.length-1);
   }
   if(currVal!='AC'&&currVal!='='&&currVal!='+/-'&&currVal!='X'){
    result.innerText=prev+currVal;// display the text if it not ac = or +/-
     
    }
    
   if(currVal == "="){
    let ch;
    if(prev.length>1){
       ch=prev.charAt(prev.length-1);
    }
      if(ch=='+'||ch=='-'){
        prev=prev+'0';
        prev=eval(prev);
    }else if(ch=='/'||ch=='*'||ch=='%'){
        prev=prev+'1';
        prev=eval(prev);
    }


    // if like 2+ then we do 2+0 so that if user clicked on = it show result
   /* if(currVal=='+'||currVal=='-'){
      prev=eval(prev+currVal+0);
    }else if(currVal=='/'||currVal=='*'||currVal=='%'){
      prev=eval(prev+currVal+1);
    }*/
     prev=eval(prev);
     result.innerText=prev;
     prev=prev.toString();
   }else if(currVal=='AC'){
      prev='';
      result.innerText='';
   }else if(currVal=='+/-'){
     prev='-'+prev;
     check=eval(prev);
     result.innerText=check;
   }else if(currVal=='X'){
      prev=prev.substring(0,prev.length-1);
      result.innerText=prev;
    }
    else{
     prev=prev+currVal;
      //ans=eval(prev);
     //prev=ans;
      
   }
});
}
b.forEach(finding_value);

function isOperator(x){// if they are operator
  return x=='+'||x=='-'||x=='*'||x=='/'||x=='%'||x=='+/-';

}

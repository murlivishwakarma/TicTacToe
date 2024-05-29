
function fire(){

    confetti({
        paricleColor:'red',
      particleCount:200,
      spread:100,
      origin: {y:10}
    })

}

function myfun(){

    var b1=document.getElementById("b1").value;
    var b2=document.getElementById("b2").value;
    var b3=document.getElementById("b3").value;
    var b4=document.getElementById("b4").value;
    var b5=document.getElementById("b5").value;
    var b6=document.getElementById("b6").value;
    var b7=document.getElementById("b7").value;
    var b8=document.getElementById("b8").value;
    var b9=document.getElementById("b9").value;



    var btn1=document.getElementById("b1");
    var btn2=document.getElementById("b2");
    var btn3=document.getElementById("b3");
    var btn4=document.getElementById("b4");
    var btn5=document.getElementById("b5");
    var btn6=document.getElementById("b6");
    var btn7=document.getElementById("b7");
    var btn8=document.getElementById("b8");
    var btn9=document.getElementById("b9");
    
    if((b1 == 'x' || b1=='X') && (b2=='x'||b2=='X') && (b3=='x' || b3=='X')){
      
        document.getElementById("print").innerHTML="Player X wins";
        btn4.disabled=true;
        btn5.disabled=true;
        btn6.disabled=true;
        btn7.disabled=true;
        btn8.disabled=true;
        btn9.disabled=true;

        btn1.style.color='#020f1f60';
        btn2.style.color='#020f1f60';
        btn3.style.color='#020f1f60';
        // fire();


    }

    else if((b4 == 'x' || b4=='X') && (b5=='x'||b5=='X') && (b6=='x' || b6=='X')){
      
        document.getElementById("print").innerHTML="Player X wins";
        btn1.disabled=true;
        btn2.disabled=true;
        btn3.disabled=true;
        btn7.disabled=true;
        btn8.disabled=true;
        btn9.disabled=true;

        btn4.style.color='#020f1f60';
        btn5.style.color='#020f1f60';
        btn6.style.color='#020f1f60';


    }

    else if((b7 == 'x' || b7=='X') && (b8=='x'||b8=='X') && (b9=='x' || b9=='X')){
      
        document.getElementById("print").innerHTML="Player X wins";
        btn4.disabled=true;
        btn5.disabled=true;
        btn6.disabled=true;
        btn1.disabled=true;
        btn2.disabled=true;
        btn3.disabled=true;

        btn7.style.color='#020f1f60';
        btn8.style.color='#020f1f60';
        btn9.style.color='#020f1f60';


    }

    else if((b1 == 'x' || b1=='X') && (b4=='x'||b4=='X') && (b7=='x' || b7=='X')){
      
        document.getElementById("print").innerHTML="Player X wins";
        btn9.disabled=true;
        btn5.disabled=true;
        btn6.disabled=true;
        btn8.disabled=true;
        btn2.disabled=true;
        btn3.disabled=true;

        btn1.style.color='#020f1f60';
        btn4.style.color='#020f1f60';
        btn7.style.color='#020f1f60';


    }
    else if((b2 == 'x' || b2=='X') && (b5=='x'||b5=='X') && (b8=='x' || b8=='X')){
      
        document.getElementById("print").innerHTML="Player X wins";
        btn9.disabled=true;
        btn1.disabled=true;
        btn6.disabled=true;
        btn7.disabled=true;
        btn4.disabled=true;
        btn3.disabled=true;

        btn2.style.color='#020f1f60';
        btn5.style.color='#020f1f60';
        btn8.style.color='#020f1f60';


    }
    else if((b3 == 'x' || b3=='X') && (b6=='x'||b6=='X') && (b9=='x' || b9=='X')){
      
        document.getElementById("print").innerHTML="Player X wins";
        btn8.disabled=true;
        btn1.disabled=true;
        btn2.disabled=true;
        btn7.disabled=true;
        btn4.disabled=true;
        btn5.disabled=true;

        btn3.style.color='#020f1f60';
        btn6.style.color='#020f1f60';
        btn9.style.color='#020f1f60';


    }
    else if((b1 == 'x' || b1=='X') && (b5=='x'||b5=='X') && (b9=='x' || b9=='X')){
      
        document.getElementById("print").innerHTML="Player X wins";
        btn8.disabled=true;
        btn3.disabled=true;
        btn2.disabled=true;
        btn7.disabled=true;
        btn4.disabled=true;
        btn6.disabled=true;

        btn1.style.color='#020f1f60';
        btn5.style.color='#020f1f60';
        btn9.style.color='#020f1f60';


    }
    else if((b3 == 'x' || b3=='X') && (b5=='x'||b5=='X') && (b7=='x' || b7=='X')){
      
        document.getElementById("print").innerHTML="Player X wins";
        btn8.disabled=true;
        btn9.disabled=true;
        btn2.disabled=true;
        btn1.disabled=true;
        btn4.disabled=true;
        btn6.disabled=true;

        btn3.style.color='#020f1f60';
        btn5.style.color='#020f1f60';
        btn7.style.color='#020f1f60';


    }
     
    else if((b1 == 'o' || b1=='O') && (b2=='o'||b2=='O') && (b3=='o' || b3=='O')){
      
        document.getElementById("print").innerHTML="Player O wins";
        btn4.disabled=true;
        btn5.disabled=true;
        btn6.disabled=true;
        btn7.disabled=true;
        btn8.disabled=true;
        btn9.disabled=true;

        btn1.style.color='#020f1f60';
        btn2.style.color='#020f1f60';
        btn3.style.color='#020f1f60';


    }
    else if((b4 == 'o' || b4=='O') && (b5=='o'||b5=='O') && (b6=='o' || b6=='O')){
      
        document.getElementById("print").innerHTML="Player O wins";
        btn1.disabled=true;
        btn2.disabled=true;
        btn3.disabled=true;
        btn7.disabled=true;
        btn8.disabled=true;
        btn9.disabled=true;

        btn4.style.color='#020f1f60';
        btn5.style.color='#020f1f60';
        btn6.style.color='#020f1f60';


    }

    else if((b7 == 'o' || b7=='O') && (b8=='o'||b8=='O') && (b9=='o' || b9=='O')){
      
        document.getElementById("print").innerHTML="Player O wins";
        btn4.disabled=true;
        btn5.disabled=true;
        btn6.disabled=true;
        btn1.disabled=true;
        btn2.disabled=true;
        btn3.disabled=true;

        btn7.style.color='#020f1f60';
        btn8.style.color='#020f1f60';
        btn9.style.color='#020f1f60';


    }

    else if((b1 == 'o' || b1=='O') && (b4=='o'||b4=='O') && (b7=='o' || b7=='O')){
      
        document.getElementById("print").innerHTML="Player O wins";
        btn9.disabled=true;
        btn5.disabled=true;
        btn6.disabled=true;
        btn8.disabled=true;
        btn2.disabled=true;
        btn3.disabled=true;

        btn1.style.color='#020f1f60';
        btn4.style.color='#020f1f60';
        btn7.style.color='#020f1f60';


    }

    else if((b2 == 'o' || b2=='O') && (b5=='o'||b5=='O') && (b8=='o' || b8=='O')){
      
        document.getElementById("print").innerHTML="Player O wins";
        btn9.disabled=true;
        btn1.disabled=true;
        btn6.disabled=true;
        btn7.disabled=true;
        btn4.disabled=true;
        btn3.disabled=true;

        btn2.style.color='#020f1f60';
        btn5.style.color='#020f1f60';
        btn8.style.color='#020f1f60';


    }
    else if((b3 == 'o' || b3=='O') && (b6=='o'||b6=='O') && (b9=='o' || b9=='O')){
      
        document.getElementById("print").innerHTML="Player O wins";
        btn8.disabled=true;
        btn1.disabled=true;
        btn2.disabled=true;
        btn7.disabled=true;
        btn4.disabled=true;
        btn5.disabled=true;

        btn3.style.color='#020f1f60';
        btn6.style.color='#020f1f60';
        btn9.style.color='#020f1f60';


    }
    else if((b1 == 'o' || b1=='O') && (b5=='o'||b5=='O') && (b9=='o' || b9=='O')){
      
        document.getElementById("print").innerHTML="Player O wins";
        btn8.disabled=true;
        btn3.disabled=true;
        btn2.disabled=true;
        btn7.disabled=true;
        btn4.disabled=true;
        btn6.disabled=true;

        btn1.style.color='#020f1f60';
        btn5.style.color='#020f1f60';
        btn9.style.color='#020f1f60';


    }
    else if((b3 == 'o' || b3=='O') && (b5=='o'||b5=='O') && (b7=='o' || b7=='O')){
      
        document.getElementById("print").innerHTML="Player O wins";
        btn8.disabled=true;
        btn9.disabled=true;
        btn2.disabled=true;
        btn1.disabled=true;
        btn4.disabled=true;
        btn6.disabled=true;

        btn3.style.color='#020f1f60';
        btn5.style.color='#020f1f60';
        btn7.style.color='#020f1f60';


    }

    else if((b1=='X' || b1=='o') && (b2=='X' || b2=='o')&& (b3=='X' || b3=='o') && (b4=='X' || b4=='o')
              
              && (b5=='X' || b5=='o') && (b6=='X' || b6=='o') && (b7=='X' || b7=='o') && (b8=='X' || b8=='o') &&
              (b9=='X' || b9=='o') 
              ){
                document.getElementById("print").innerHTML="Match tied";
              }
    else{

        if(flag==1){
            document.getElementById("print").innerHTML="Player X turn";
        }

        else{
            document.getElementById("print").innerHTML="Player O turn";
        }
    }


}


function myfun2(){
    location.reload();
    b1=b2=b3=b4=b5=b6=b7=b8=b9=' ';
}

let flag=1;

function myfun3(){
    if(flag==1){
         document.getElementById("b1").value="X";
         document.getElementById("b1").disabled=true;
         flag=0;
    }
    else{
        document.getElementById("b1").value="o";
        document.getElementById("b1").disabled=true;
        flag=1;
    }
}
function myfun4(){
    if(flag==1){
         document.getElementById("b2").value="X";
         document.getElementById("b2").disabled=true;
         flag=0;
    }
    else{
        document.getElementById("b2").value="o";
        document.getElementById("b2").disabled=true;
        flag=1;
    }
}
function myfun5(){
    if(flag==1){
         document.getElementById("b3").value="X";
         document.getElementById("b3").disabled=true;
         flag=0;
    }
    else{
        document.getElementById("b3").value="o";
        document.getElementById("b3").disabled=true;
        flag=1;
    }
}
function myfun6(){
    if(flag==1){
         document.getElementById("b4").value="X";
         document.getElementById("b4").disabled=true;
         flag=0;
    }
    else{
        document.getElementById("b4").value="o";
        document.getElementById("b4").disabled=true;
        flag=1;
    }
}
function myfun7(){
    if(flag==1){
         document.getElementById("b5").value="X";
         document.getElementById("b5").disabled=true;
         flag=0;
    }
    else{
        document.getElementById("b5").value="o";
        document.getElementById("b5").disabled=true;
        flag=1;
    }
}
function myfun8(){
    if(flag==1){
         document.getElementById("b6").value="X";
         document.getElementById("b6").disabled=true;
         flag=0;
    }
    else{
        document.getElementById("b6").value="o";
        document.getElementById("b6").disabled=true;
        flag=1;
    }
}

   
function myfun9(){
    if(flag==1){
         document.getElementById("b7").value="X";
         document.getElementById("b7").disabled=true;
         flag=0;
    }
    else{
        document.getElementById("b7").value="o";
        document.getElementById("b7").disabled=true;
        flag=1;
    }
}
   
function myfun10(){
    if(flag==1){
         document.getElementById("b8").value="X";
         document.getElementById("b8").disabled=true;
         flag=0;
    }
    else{
        document.getElementById("b8").value="o";
        document.getElementById("b8").disabled=true;
        flag=1;
    }
}
function myfun11(){
    if(flag==1){
         document.getElementById("b9").value="X";
         document.getElementById("b9").disabled=true;
         flag=0;
    }
    else{
        document.getElementById("b9").value="o";
        document.getElementById("b9").disabled=true;
        flag=1;
    }
}

   
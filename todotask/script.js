const inputdiv=document.querySelector('.inputdiv');
const input=document.querySelector('#input');
const button=document.querySelector('#button');
const listdiv=document.querySelector('.listdiv');
const h6=document.querySelector('h6');
const endiv=document.querySelector('.endiv');
const deleteAll=document.querySelector('.all');


let calculate=0;
let paragraf=document.createElement('p');


input.addEventListener('keyup',function(enter){
    if(enter.keyCode==13){
        added();
    }
})

 const added=()=>{
    if(!input.value){
     h6.innerHTML  = 'please,fill input';
    h6.setAttribute('class','alert alert-warning');
   
}else{
    h6.innerHTML  = '';
    h6.setAttribute('class','');
    let text=document.createElement('p');
    text.innerText=input.value ;
    listdiv.appendChild(text);
    input.value="";
    calculate++;
    paragraf.innerText='You have '+calculate+' pending tasks';
    endiv.appendChild(paragraf);
    let finishButton=document.createElement('div');
    finishButton.classList.add('finishButton');
    text.appendChild(finishButton);
    finishButton.innerHTML='<i class="fa-solid fa-check"></i>';
    
    let deleteButton=document.createElement('div');
    deleteButton.innerHTML='<i class="fa-solid fa-trash-can"></i>'
    deleteButton.classList.add('deleteButton');
   
    text.appendChild(deleteButton);
    finishButton.addEventListener('click',function(){
     text.classList.toggle('through');
    });
   
    deleteButton.addEventListener('click',function(){
        listdiv.removeChild(text);
        // calculate--;
        paragraf.innerText='You have '+ [calculate-=1] +' pending tasks';
    });
   
    deleteAll.addEventListener('click',function(){
       listdiv.removeChild(text);
       paragraf.innerText='You have '+ [calculate-=1] +' pending tasks';
       paragraf.innerText='You have '+'0'+' pending tasks';
    })
   
}
}
button.addEventListener('click',added);


// const localData = ()=>{
//     localStorage.setItem("Data",listdiv.innerHTML);
//     showData();
// }

// const showData = ()=>{
//     listdiv.innerHTML = localStorage.getItem("Data")
// }
// showData();


// localStorage.setItem('added','fill');

//     input.addEventListener('keyup',function(enter){
//     if(enter.keyCode==13){
//         added();
//     }
// })
//     const added=()=>{
//         if(!input.value){
//          h6.innerHTML  = 'please,fill input';
//         h6.setAttribute('class','alert alert-warning');
//         localStorage.getItem('added','not');
//     }else{
//         h6.innerHTML  = '';
//         h6.setAttribute('class','');
//         let text=document.createElement('p');
//         text.innerText=input.value ;
//         listdiv.appendChild(text);
//         input.value="";
//         calculate++;
//         paragraf.innerText='You have '+calculate+' pending tasks';
//         endiv.appendChild(paragraf);
//         let finishButton=document.createElement('div');
//         finishButton.classList.add('finishButton');
//         text.appendChild(finishButton);
//         finishButton.innerHTML='<i class="fa-solid fa-check"></i>';
        
//         let deleteButton=document.createElement('div');
//         deleteButton.innerHTML='<i class="fa-solid fa-trash-can"></i>'
//         deleteButton.classList.add('deleteButton');
       
//         text.appendChild(deleteButton);
//         finishButton.addEventListener('click',function(){
//          text.classList.toggle('through');
//         });
       
//         deleteButton.addEventListener('click',function(){
//             listdiv.removeChild(text);
//             calculate--;
//         });
       
//         deleteAll.addEventListener('click',function(){
//            listdiv.removeChild(text);
//         })
//         localStorage.getItem('added','fill');
       
//     }
//     }
//     button.addEventListener('click',added);





// if(localStorage.getItem('added')==='fill'){
//     h6.innerHTML  = '';
//     h6.setAttribute('class','');
//     let text=document.createElement('p');
//     text.innerText=input.value ;
//     listdiv.appendChild(text);
//     input.value="";
//     calculate++;
//     paragraf.innerText='You have '+calculate+' pending tasks';
//     endiv.appendChild(paragraf);
//     let finishButton=document.createElement('div');
//     finishButton.classList.add('finishButton');
//     text.appendChild(finishButton);
//     finishButton.innerHTML='<i class="fa-solid fa-check"></i>';
    
//     let deleteButton=document.createElement('div');
//     deleteButton.innerHTML='<i class="fa-solid fa-trash-can"></i>'
//     deleteButton.classList.add('deleteButton');
   
//     text.appendChild(deleteButton);
//     finishButton.addEventListener('click',function(){
//      text.classList.toggle('through');
//     });
   
//     deleteButton.addEventListener('click',function(){
//         listdiv.removeChild(text);
//         calculate--;
//     });
   
//     deleteAll.addEventListener('click',function(){
//        listdiv.removeChild(text);
//     })
// }else{
//     h6.innerHTML  = 'please,fill input';
//     h6.setAttribute('class','alert alert-warning');
   
// }
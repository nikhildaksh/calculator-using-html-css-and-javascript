
let resultboxslt = document.getElementById('result-box')


let acbtnslt = document.getElementById('ac-btn')
let backbtnslt = document.getElementById('back-btn')
let percbtnslt = document.getElementById('perc-btn')
let dividebtnslt = document.getElementById('divide-btn')


let sevenbtnslt = document.getElementById('seven-btn')
let eightbtnslt = document.getElementById('eight-btn')
let ninebtnslt = document.getElementById('nine-btn')
let multiplybtnslt = document.getElementById('multiply-btn')


let fourbtnslt = document.getElementById('four-btn')
let fivebtnslt = document.getElementById('five-btn')
let sixbtnslt = document.getElementById('six-btn')
let subtractbtnslt = document.getElementById('subtract-btn')


let onebtnslt = document.getElementById('one-btn')
let twobtnslt = document.getElementById('two-btn')
let threebtnslt = document.getElementById('three-btn')
let dblzerobtnslt = document.getElementById('dbl-zero-btn')


let dotbtnslt = document.getElementById('dot-btn')
let zerobtnslt = document.getElementById('zero-btn')
let equalbtnslt = document.getElementById('equal-btn')
let plusbtnslt = document.getElementById('plus-btn')




// ********************* For Numbers *************************
function InsertNumberInResultBox(numberValue){
    if(resultboxslt.value.length==1 && resultboxslt.value==0){
        resultboxslt.value = numberValue
    }else{
        resultboxslt.value += numberValue
    }
}


onebtnslt.addEventListener("click",()=>{
    InsertNumberInResultBox(1)
})

twobtnslt.addEventListener("click",()=>{
    InsertNumberInResultBox(2)
})

threebtnslt.addEventListener("click",()=>{
   InsertNumberInResultBox(3)
})

fourbtnslt.addEventListener("click",()=>{
   InsertNumberInResultBox(4)
})

fivebtnslt.addEventListener("click",()=>{
   InsertNumberInResultBox(5)
})

sixbtnslt.addEventListener("click",()=>{
   InsertNumberInResultBox(6)
})

sevenbtnslt.addEventListener("click",()=>{
   InsertNumberInResultBox(7)
})

eightbtnslt.addEventListener("click",()=>{
   InsertNumberInResultBox(8)
})

ninebtnslt.addEventListener("click",()=>{
   InsertNumberInResultBox(9)
})


// ************************* Functional ***************************
acbtnslt.addEventListener('click',()=>{
    resultboxslt.value=0
})

backbtnslt.addEventListener('click',()=>{
    if(resultboxslt.value.length==1){
        resultboxslt.value = 0
    }else{
        let finalresult = resultboxslt.value.slice(0, resultboxslt.value.length-1)
        resultboxslt.value = finalresult
    }
})


function InsertOperatorInResultBox(operatorValue){
    let lastIndex = resultboxslt.value.length-1    
    let lastChar  = resultboxslt.value[lastIndex]

    if(lastChar!=operatorValue){
        resultboxslt.value+= operatorValue
    }
}

plusbtnslt.addEventListener('click', ()=>{
    InsertOperatorInResultBox('+')
})

subtractbtnslt.addEventListener('click', ()=>{
    InsertOperatorInResultBox('-')
})

multiplybtnslt.addEventListener('click', ()=>{
    InsertOperatorInResultBox('*')
})

dividebtnslt.addEventListener('click', ()=>{
    InsertOperatorInResultBox('/')
})

percbtnslt.addEventListener('click', ()=>{
    InsertOperatorInResultBox('%')
})


dotbtnslt.addEventListener('click', ()=>{
    InsertOperatorInResultBox('.')
})



// eval
// calculate result value and display in resultboxslt
equalbtnslt.addEventListener("click",()=>{
    let expressionValue = resultboxslt.value
    let result = eval(expressionValue)
    // console.log(result)
    resultboxslt.value = result
})


zerobtnslt.addEventListener('click',()=>{
    if( ! (resultboxslt.value.length==1 && resultboxslt.value=='0') ){
        resultboxslt.value+='0'
    }
})

dblzerobtnslt.addEventListener('click',()=>{
    if( ! (resultboxslt.value.length==1 && resultboxslt.value=='0') ){
        resultboxslt.value+='00'
    }
})


function tabuada(){
    let num= document.getElementById('txtn')
    let tab= document.getElementById('seltab')
     
    if (num.value.length ==0){
        alert("Por favor , digite um numero!")
    } else{
        let n= Number(num.value)
        let c =1
        taber.innerHTML= ''
        while(c <= 10){
            let item = document.creatElement('option')
            item.text =`${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    
    }

}
let change= document.getElementById('change')
let inp=document.getElementById('inp')

inp.addEventListener('change',()=>{
    change.style.backgroundColor=inp.value
})
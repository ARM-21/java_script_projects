
const card = document.querySelectorAll('.card');
const observer = new IntersectionObserver((entries)=>{
    console.log(entries)
entries.forEach((entry)=>{
if(entry.isIntersecting){
    entry.target.classList.add('show')
}
else{
    entry.target.classList.remove('show')
}
})
},{
    threshold:0.5,
});


card.forEach((cart)=>{
    observer.observe(cart)
})
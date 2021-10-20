artimage={
    0:"https://images.unsplash.com/photo-1594950195709-a14f66c242d7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fDcyMHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    1: "https://images.unsplash.com/photo-1605557713876-148ede2bbb3c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fDcyMHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    2:"https://images.unsplash.com/photo-1552962730-61f41ae62092?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fDcyMHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60",
    3:"https://images.unsplash.com/photo-1552962646-cce5d3785e10?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njd8fDcyMHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    4:"https://images.unsplash.com/photo-1620064856565-b5efac6e14ca?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fDcyMHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    5:"https://images.unsplash.com/photo-1542362567-b07e54358753?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njl8fDcyMHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    6:"https://images.unsplash.com/photo-1615394767355-b2a71c95468c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTl8fDcyMHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    7:"https://images.unsplash.com/photo-1592424406134-434746740477?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
}
for(keys in artimage){
var section=document.querySelector('#blog')
var div=document.createElement('div');
div.innerHTML=`<div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center border-bottom-style: dotted">
<div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
  <img class="object-cover object-center rounded" alt="hero" src=${artimage[keys]}>
</div>
<div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
  <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Let the Rage Begin
    <br class="hidden lg:inline-block">The Race To Infinity 
  </h1>
  <p class="mb-8 leading-relaxed"> The speed of light isn't enough to bridge the emotions that light up in the mist of talents , the fire in the
   engines and the sound of wheels are enough to drive the audience crazy in the thunder of the destiny
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dignissimos pariatur ducimus inventore, 
  quam corporis magnam rerum quo, deleniti culpa et aliquam dolorum quod quia iure reprehenderit nisi expedita maxime?</p>
</div>
</div>`
section.appendChild(div)
}

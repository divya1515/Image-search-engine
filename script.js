document.querySelector("#btn").addEventListener('click',function(){
    item=document.getElementById('iteminput');
    val=item.value;
    pageno=1;
   if(val.trim()=='')
   {
       alert("Please search something");
   }else{
       if(pageno==1)
       {
          document.getElementById('imagecontainer').innerHTML="";
          document.querySelector("#shows").style.display='none';
          search(val,pageno);
       }
      
   }
})
const apikey="5_6cmxNgdchIbiACDfgQEj9YOpbDuHOGpLeuF2zFNdg";
const url="https://api.unsplash.com/search/photos?";
async function search(val,pageno){
   try{
       const response=await fetch(url+`&client_id=${apikey}`+`&query=${val}`+`&page=${pageno}&per_page=12`);
       const data=await response.json();
       data.results.forEach(item=>{
           const image1=document.createElement('img');
           image1.src=item.urls.small;
           document.getElementById('imagecontainer').appendChild(image1);
           image1.className='grid-item';
       })
       document.querySelector("#shows").style.display='block';
   }
   catch(error)
   {
      alert("Write a valid name");
   }
}
document.querySelector("#shows").addEventListener('click',function(){
   pageno=pageno+1;
   search(val,pageno);
})

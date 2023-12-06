let x=document.querySelector(".tourdesc");
let mark=false;
let str=`Armenia is a mountainous nation in West Asia, a former Soviet Republic, and was one of the first Christian nations, embracing Christianity in the fourth century. This rich cultural and natural environment makes it an exciting destination for a wide range of adventure, activity and walking holidays.

There are many pagan sites to visit as well as UNESCO World Heritage-listed churches, which are – almost without exception – built in stunning locations. Surrounded by forests, perched on the top of dramatic gorges or silhouetted before snow-capped mountains, they draw us to magnificent open spaces filled with a huge variety of trees and wild flowers. On Armenia tours we see wonderful mountains, lakes and waterfalls in the countryside – and relish cooling breezes – while the cafés and restaurants of the country’s capital, Yerevan, are proof of an emerging economy. Mount Ararat towers majestically over the city, and beautiful scenery is plentiful.`;


let atr=str.split(" ");
// console.log(atr);


//test case 1
let seemore=document.querySelector(".seemore");
if(str==null||atr.length==0||(atr.length==1&&atr[atr.length-1]=="")){
    let notfound=document.createElement("img");
    notfound.setAttribute("src","https://i1.sndcdn.com/avatars-Svw9ZyyzGQhWH2ao-YfBvLQ-t500x500.jpg");
    notfound.setAttribute("alt","error");
    notfound.setAttribute("class","notfoundimage");
    x.append(notfound);
  seemore.style.display="none";
}
//test case 1
else{


//test case2

    let notfound=document.querySelector(".notfoundimage");
    if(notfound){
        notfound.remove();
    }
    let smallstr="";
    let count=0;
    atr.map((el,i)=>{
       count++;
        if(count<=48){
            smallstr=smallstr+" "+el;
        }
    })
    x.innerHTML=smallstr;
let seebutton=document.querySelector(".seemore");
seebutton.addEventListener("click",()=>{
    if(mark){
        seebutton.innerText="...See More";
        x.innerHTML=null;
        x.innerHTML=smallstr;
        x.removeAttribute("id")
        mark=false;
    }
    else{
        mark=true;
        x.innerHTML=null;
        x.innerHTML=str;
        seebutton.innerText="...See Less";
        x.setAttribute("id","tourdesca")
    }
    
})
//test case2

}


// test case 1 - If we change the length of str and make 0 or null a no content found image will be found on DOM.

// test case 2 - The content length be whatever only 48 words are going to be shown and nothing mor than that and the rest will be shown only after user clicks on see more which is handled dynamically.
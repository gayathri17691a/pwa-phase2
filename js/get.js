var idb=window.indexedDB || window.mozIndexedDB || window.msIndexedDB ||window.webkitIndexedDB;
if(!idb in window)
{
  console.log("indexedDB is not supported");
}
// IndexedDB creation
var request;
var store;
var open=idb.open("storeData",1);
console.log("indexedDB is created");
open.onupgradeneeded=function (e){
  request=e.target.result;
  store=request.createObjectStore("formdata",{keyPath:"id",autoIncrement:true});
  console.log("store is created");
}
  open.onerror=function(error){
    console.log("error occured");
  }
open.onsuccess=function(e){
request=e.target.result;
var transaction=request.transaction("formdata","readwrite");
store=transaction.objectStore("formdata");
var info=store.getAll();
info.onsuccess=function(data){
console.log(data.target.result);
display(data.target.result);
}
}
var parent=document.querySelector(".parent");
function display(d){
  for(i=0;i<d.length;i++){
    var child=document.createElement("div");
    child.classList.add("child");
    var img=document.createElement("img");
    img.src="image/icon.svg";
    img.alt=d[i].name;
   var name=document.createElement("h2");
    name.textContent=d[i].name;
   var link=document.createElement("a");
    link.classList.add("link");
    link.href="resume.html?id="+d[i].id;
   link.textContent="view profile";
   child.append(img);
   child.append(name);
   child.append(link);
   parent.append(child);


     }

    }

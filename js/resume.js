var para;
var paravalue;
var query=window.location.search.substring(1).split("?");
for(var i in query){
  para=query[i].split("=");
  paravalue=parseInt(para[1]);
}
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
var info=store.get(paravalue);
info.onsuccess=function(data)
{
  console.log(data);
  personalinfo(data.target.result);
}
}
var left=document.querySelector(".left");
var right=document.querySelector(".right");
function personalinfo(pi){
  var image=document.createElement("img");
  image.src="image/icon.svg";
  image.alt=pi.name;
   left.append(image);
  var hh=document.createElement("h2");
  hh.textContent=pi.name;
  left.append(hh);
  var g=document.createElement("h2");
  g.textContent=pi.mobile;
  left.append(g);
  var gk=document.createElement("h2");
  gk.textContent=pi.email;
  left.append(gk);
  var yg=document.createElement("h2");
  yg.textContent=pi.address;
  left.append(yg);
  var head13=document.createElement("h1");
  head13.textContent="Career Objective:";
  right.append(head13);
  var hr=document.createElement("hr");
  right.append(hr);
var t=document.createElement("h2");
  t.textContent=pi.career;
  right.append(t);

  var head11=document.createElement("h2");
  head11.textContent="educational Details:";
  right.append(head11);
  var hr=document.createElement("hr");
  right.append(hr);
  var table=document.createElement("table");
  table.border="1";
  var tr1="<tr><th>institute</th><th>branch</th><th>per</th><th>yop</th></tr>";
  var tr2="";
  for(var i in pi.education)
  {
    tr2+="<tr>"+"<td>"+pi.education[i].institute+
    "</td>"+"<td>"+pi.education[i].branch+
    "</td>"+"<td>"+pi.education[i].per+
    "</td>"+"<td>"+pi.education[i].yop+"</td>"+"</tr>";
    table.innerHTML=tr1+tr2;
    right.append(table);
  }
  var head12=document.createElement("h2");
  head12.textContent="Skills:";
  right.append(head12);
  var hr=document.createElement("hr");
  right.append(hr);
  var tu=document.createElement("h2");
  tu.textContent=pi.skills;
  right.append(tu);
  }

function submitData()
{
  var career=document.querySelector("#career").value;
  var name=document.querySelector("#name").value;
var mobile=document.querySelector("#mobile").value;
var email=document.querySelector("#email").value;
var address=document.querySelector("#address").value;
var ginstitute=document.querySelector("#ginstitute").value;
var gbranch=document.querySelector("#gbranch").value;
var gyop=document.querySelector("#gyop").value;
var gper=document.querySelector("#gper").value;
var iinstitute=document.querySelector("#iinstitute").value;
var ibranch=document.querySelector("#ibranch").value;
var iyop =document.querySelector("#iyop").value;
var iper=document.querySelector("#iper").value;
var school=document.querySelector("#school").value;
var course=document.querySelector("#course").value;
var syop=document.querySelector("#syop").value;
var sper=document.querySelector("#sper").value;
var skills=document.querySelector("#skills").value;
// IndexedDB Implementation
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
store.put({
  career:career,
  name:name,
  mobile:mobile,
  email:email,
  address:address,
  education:[
    {
  institute:ginstitute,
  branch:gbranch,
  yop:gyop,
  per:gper
},
{
  institute:iinstitute,
  branch:ibranch,
yop:iyop,
per:iper
},
{
institute:school,
branch:course,
yop:syop,
per:sper
}],
skills:skills


});
}
window.open("index.html");
}

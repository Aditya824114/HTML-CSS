/*function hello()
{
    console.log("hello");
}
function mello()
{
    console.log("mello");
}
setTimeout(hello,2*1000);// is sa yha 2 sec bad print hoga
setTimeout(mello,3*1000);*/
// setTimeout(function(){
//     console.log("hello");
// },2*1000);
// setTimeout(function(){
//     console.log("mello");
// },1*1000);
// setTimeout(function(){
//     console.log("yello");
// },3*1000);
for(let i=1;i<=10;i++)
{
    setTimeout(function()
{
    console.log(i);
},i*1000);
}
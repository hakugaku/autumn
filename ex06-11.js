function hyoji(){

varstr ="一文字ずつ表示します。";

var cnt = document.timer.moji.value.length;

if(cnt<11){
  document.timer.moji.value =str.substr(0,cnt+1);}

else{
document.timer.moji.value ="";}}
function startfnc(){
  setlnterval("hyoji()",1000);}

setlnterval("hyoji()",1000);

const str ='Mozilla';
  console.log(str.substr(1,2));
  //expected output:"oz"

console.log(str.substr(2));
  //expected output:"zilla"

var global_string1="小英"; // "global variable using var outside a block quote"; // ; 表指令結束
let global_string2="大雄";  //"global variable using let outside all block quotes";

/* {...} 形成一個local scope */
{
  global_string3="宜靜"; // "global variable using variable assignment without declaration";
  
  let local_string1="胖虎"; // "local variable using let inside a block quote";
  
  console.log("我看得到："+global_string1+global_string2+global_string3+local_string1);
  
}
console.log("我只看得到："+global_string1+global_string2+global_string3);

console.log("我吹牛看得到：local_string1, 結果產生錯誤。");
console.log(local_string1);

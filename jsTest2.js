//全地球
{ // 神奇王國
  let local_string2="神奇王國的Jack"; //"local variable using let assignment inside a block";
  { // 神奇王國裡的巨人村
    let local_string3="巨人村裡的Elias"; //"local variable3 and "+local_string2;
    var global_string4="全地球的主宰Dior(在巨人村長大)"; 
    console.log(
      local_string3+"聽過"+local_string2+global_string4);
  }
  global_string5="沒有宣稱出身，實為全地球主宰的小公主illy";
  console.log("神奇王國非巨人村的人都聽說過"+local_string2+global_string4);
  console.log("但跟神奇王國非巨人村的人提到local_string3, 便會產生錯誤");
  console.log(local_string3);
}

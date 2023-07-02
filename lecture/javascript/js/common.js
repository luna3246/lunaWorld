// 매개변수 : data (배열), tmp(중복 되는지 알고 싶은 number)
// 반환값 : 중복이 되면  true, 중복되지 않으면 false
function isDuplicate(data, tmp) {
  console.log(data);
  let result = false;
  for (let i = 0; i < data.length; i++) {
    if (data[i] == tmp) {
      result = true;
      console.log(tmp, "중복!");
      break;
    }
  }
  return result;
}

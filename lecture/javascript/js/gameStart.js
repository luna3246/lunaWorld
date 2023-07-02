function gameStart(user, comp) {
  // window 객체 생략 가능 이유는 나중에 함수 배울 때 consol.log systemout.println 많이 써봐야 됨
  // alert("자 게임을 시작합니다.");
  // 재료를 준다 - 매개변수 , 인자 , 파라메터
  //주고받기
  // alert(자 비교를 시작합니다.);
  console.log(user, comp);
  let result = "";

  if (user === comp) {
    // 비긴 경우
    result = "비겼다";
  } else if ((user === 1 && comp === 3) || (user === 2 && comp === 1) || (user === 3 && comp === 2)) {
    // 이긴 경우
    result = "이겼다";
  } else {
    // 진 경우
    result = "졌다";
  }
  console.log(user, comp, result);
  //user, comp 변수의 값을 비교

  //게임 결과를 반환(현재 함수를 호출한 곳으로 되돌림)
  return result;
}

function response(room, msg, sender) {
if(msg == "/////베라") {
var i = 1;

while(i <= 31){
    Kakaotalk.replyLast(i);
    i++;
}
}
if(msg == "/가위바위보")
{
	Kakaotalk.replyLast("운명의 가위바위보를 시작합니다!"+"\n"+"/가위 혹은 /바위 혹은 /보자기를 내주세요!");
}
if(msg == "/가위"){
	var result = Math.floor(Math.random() * 300) + 1
	if(result <= 100)
	{
			Kakaotalk.replyLast("결과는 !");
		Kakaotalk.replyLast("봇은 보자기를 냈습니다!");
		Kakaotalk.replyLast("으으 안타깝게 져버렸네요."+"\n"+" 다음번엔 꼭 이길겁니다!"+"\n"+"긴장하세요!"+sender+"님!");
	}
	else if(result <= 200){
			Kakaotalk.replyLast("결과는 !");
		Kakaotalk.replyLast("봇은 바위를 냈습니다!");
		Kakaotalk.replyLast(sender + "님 따위는 가볍게 이긴다구요! 훗..");
	}
	else if(result <= 300){
			Kakaotalk.replyLast("결과는 !");
		Kakaotalk.replyLast("봇은 가위를 냈습니다!");
		Kakaotalk.replyLast("이런 동점이네요!"+"\n"+sender+"님 다시 해욧!.!");
	}
}
if(msg== "/보자기")
{
	var result = Math.floor(Math.random() * 300) + 1
	if(result <= 200)
	{
		Kakaotalk.replyLast("결과는 !");
		Kakaotalk.replyLast("봇은 바위를 냈습니다!");
		Kakaotalk.replyLast("으으 안타깝게 져버렸네요."+"\n"+" 다음번엔 꼭 이길겁니다!"+"\n"+"긴장하세요!"+sender+"님!");
	}
	else if(result <= 300){
			Kakaotalk.replyLast("결과는 !");
		Kakaotalk.replyLast("봇은 가위를 냈습니다!");
		Kakaotalk.replyLast(sender + "님 따위는 가볍게 이긴다구요! 훗..");
	}
	else if(result <= 100){
			Kakaotalk.replyLast("결과는 !");
		Kakaotalk.replyLast("봇은 보자기를 냈습니다!");
		Kakaotalk.replyLast("이런 동점이네요!"+"\n"+sender+"님 다시 해욧!.!");
		}
}
if(msg == "/바위"){
	var result = Math.floor(Math.random() * 300) + 1
	if(result <= 100)
	{
		Kakaotalk.replyLast("결과는 !");
		Kakaotalk.replyLast("봇은 가위를 냈습니다!");
		Kakaotalk.replyLast("으으 안타깝게 져버렸네요."+"\n"+" 다음번엔 꼭 이길겁니다!"+"\n"+"긴장하세요!"+sender+"님!");
	}
	else if(result <=300){
			Kakaotalk.replyLast("결과는 !");
		Kakaotalk.replyLast("봇은 보자기를 냈습니다!");
		Kakaotalk.replyLast(sender + "님 따위는 가볍게 이긴다구요! 훗..");
	}
	else if(result <= 200){
			Kakaotalk.replyLast("결과는 !");
		Kakaotalk.replyLast("봇은 바위를 냈습니다!");
		Kakaotalk.replyLast("이런 동점이네요!"+"\n"+sender+"님 다시 해욧!.!");
		}
	}
 if(msg =="//안녕"){
  Kakaotalk.replyLast(sender + "님, 안녕하세요?");
}
  if(msg == "/방이름"){
  Kakaotalk.replyLast("이 방 이름은" + room +"입니다.");
}
  if(msg == "@희수찡"){
  Kakaotalk.replyLast("부재중 입니다.");
}
  if(msg == "/굿모닝"){
  Kakaotalk.replyLast(sender + "님, 좋은아침이에요!" + "\n" + " 밥은 드셨나요? :)" );
}
    if(msg.indexOf("/봇 말하기")>-1&&msg!="/봇 말하기"){
  	var talk = msg.replace ("/봇 말하기","");
  	Kakaotalk.replyLast(talk+"\n"+"따라 말했습니다!");
  }

  if(msg == "@밍밍봇"){
  Kakaotalk.replyLast("@밍밍봇"+"\n"+"//안녕"+"\n"+"/봇 말하기 내용"+"\n"+"/굿모닝"+"\n"+"/주사위"+"/방이름"+"\n"+"/시간내놔"+"\n"+"/////베라"+"\n"+"/굿나잇"+"\n"+"/도박"+"\n"+"/가위바위보"+"\n"+"/마피아"+"\n"+"/끝말잇기"+
	"\n"+"\n"+"제작자 : 서희수");
  }
 if(msg == "/시간내놔"){
var dt = new Date();
var year = dt.getFullYear();
var month = (dt.getMonth() + 1);
var date = dt.getDate();
var hour = dt.getHours();
var minutes = dt.getMinutes();
var seconds = dt.getSeconds();
var day =dt.getDay();
var week = new Array('일', '월', '화', '수', '목', '금', '토');
Kakaotalk.replyLast(year+"년 "+month+"월 "+date+"일 "+week[dt.getDay()]+"요일 "+hour+"시 "+minutes+"분 "+seconds+"초");
 }
if(msg == "/끝말잇기"){
	Kakaotalk.replyLast("미지원 기능입니다!");
}
if(msg == "/마피아"){
	Kakaotalk.replyLast("미지원 기능입니다!");
}

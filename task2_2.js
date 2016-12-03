/**
 * Created by Administrator on 2016/12/3.
 */
//获得当前时间
//点击提交按钮，获得用户输入的年月日
addClickEvent("#submit",show);
function show(){
    setInterval(function(){
        var nday=new Date();
        var nYear=nday.getFullYear();
        var nMonth=nday.getMonth();
        var nDate=nday.getDate();
        var nHours=nday.getHours();
        var nSeconds=nday.getSeconds();
        var nMinutes=nday.getMinutes();
        var iYear=$("#iYear").value;
        if(iYear>=nYear){
        $("#cYear").innerHTML=iYear-nYear;
        var iMonth=$("#iMonth").value;
            if(iMonth>=nMonth){
                $("#cMonth").innerHTML=iMonth-nMonth;}
            else{
                $("#cMonth").innerHTML=iMonth-nMonth+11;
                $("#cYear").innerHTML-=1;
            }
        var iDate=$("#iDate").value;
            if(iDate>=nDate){
                $("#cDate").innerHTML=iDate-nDate;}
            else{
                $("#cDate").innerHTML=iDate-nDate+29;
                $("#cMonth").innerHTML-=1;
            }
        $("#cHours").innerHTML=24-nHours;
        $("#cMinutes").innerHTML=60-nMinutes;
        $("#cSeconds").innerHTML=60-nSeconds;}
    },1000);
}

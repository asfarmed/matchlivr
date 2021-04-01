function playtime() {
    $(".match-container .date").each(function() {
        var t = $(this),
            a = t.data("start"),
            e = t.data("gameends"),
 H = t.data("result"),
            m = moment(a, "YYYY-MM-DD HH:mm:ssZ"),
            n = moment(e, "YYYY-MM-DD HH:mm:ssZ"),
            e = moment.utc().format("YYYY-MM-DD HH:mm:ssZ"),
            m = m.diff(e, "minutes"),
            e = n.diff(e, "minutes");
        switch (!0) {
            case 45 < m:
                var d = moment.utc(a).toDate();
                t.parent().find("#match-time").text(moment(d).format("LT")), 
t.parent().find(".date").html("لم تبدا بعد").addClass("not-start"),
 t.parents(".match-container").addClass("mtime");


                break;
            case 0 < m:
                d = moment.utc(a).toDate(), t.parent().find("#match-time").text(moment(d).format("LT")), t.parent().find(".date").html("بعد قليل").addClass("soon"), t.parents(".match-container").addClass("msoon");
                break;
            case 0 < e:
                d = moment.utc(a).toDate(),
 t.parent().find(".date").html("جارية الآن").addClass("mlive"),

 t.parent().find("#match-time").text(moment(d).format("LT")),

 t.parent().find("#result").text(t.parents(".match-container a").attr("data-result")),


 t.parent().find(".date").html("جارية الآن").addClass("mlive"),




 t.parents(".match-container").addClass("mlive");
                break;
            default:
                d = moment.utc(a).toDate(), t.parent().find("#match-time").text(moment(d).format("LT")), t.parent().find(".date").html("إنتهت المباراة").addClass("end"), t.parents(".match-container").addClass("mend")
        }
    })
}




  $( "#testmode" ).click(function() {

 $('#text').val('الفريق االاول');
 $('#text1').val('الفريق الثاني');
 $('#text2').val('https://ssl.gstatic.com/onebox/media/sports/logos/U8eFcoYVU8shHPAPoOBjGA_96x96.png');
 $('#text3').val('https://ssl.gstatic.com/onebox/media/sports/logos/lk9CefHt2JiYsOAT4rfaNw_96x96.png');
 $('#text4').val('الدوري العربي');
//var s6 = $('#text5').val();
 $('#text6').val('2021-04-03 18:00');
 $('#text7').val('2021-05-03 18:00');
});
$( "#target" ).click(function() {

var datas1 = $('#text').val();
var datas2 = $('#text1').val();
var datas3 = $('#text2').val();
var datas4 = $('#text3').val();
var datas5 = $('#text4').val();
//var s6 = $('#text5').val();
var datas7 = $('#text6').val();
var datas8 = $('#text7').val();
console.log(datas4);


$('#textarea1').val('<div class="match-container"> <a data-result="0-4" href="https://ww.online-kora.tv/p/bein-sport-8-tv.html" id="match-live" title="'+datas1+' vs '+datas2+'"> <div class="right-team"> <div class="team-logo"> <img alt="'+datas1+'" height="70" src="'+datas3+'" title="'+datas1+'" width="70"> </div> <div class="team-name">'+datas1+'</div> </div> <div class="match-center"> <div class="match-timing"> <div id="match-time"></div> <div id="result" style="display: none;"></div> <li><span>'+datas5+' </span></li> <div class="date stay mlive" data-gameends="'+datas7+'+02:00" data-start="'+datas8+'+02:00"></div> </div> </div> <div class="left-team"> <div class="team-logo"> <img alt="'+datas2+' " height="70" src="'+datas4+'" title="'+datas2+' " width="70"> </div> <div class="team-name">'+datas2+' </div> </div> <div id="overlay-match"><div id="watch-match"></div></div> </a> </div>');

$('#playcode').html('<div class="match-container"> <a data-result="0-4" href="https://ww.online-kora.tv/p/bein-sport-8-tv.html" id="match-live" title="'+datas1+' vs '+datas2+'"> <div class="right-team"> <div class="team-logo"> <img alt="'+datas1+'" height="70" src="'+datas3+'" title="'+datas1+'" width="70"> </div> <div class="team-name">'+datas1+'</div> </div> <div class="match-center"> <div class="match-timing"> <div id="match-time"></div> <div id="result" style="display: none;"></div> <li><span>'+datas5+' </span></li> <div class="date stay mlive" data-gameends="'+datas7+'+02:00" data-start="'+datas8+'+02:00"></div> </div> </div> <div class="left-team"> <div class="team-logo"> <img alt="'+datas2+' " height="70" src="'+datas4+'" title="'+datas2+' " width="70"> </div> <div class="team-name">'+datas2+' </div> </div> <div id="overlay-match"><div id="watch-match"></div></div> </a> </div>');
 playtime();

});



//配列をシャッフル
var shuffle = ([...array]) => {
  for (var i = array.length - 1; i >= 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

$(function () {
    $("#tex0").val(localStorage.getItem("tex0_1"));
    $("#tex1").val(localStorage.getItem("tex1_1"));
    $("#tex2").val(localStorage.getItem("tex2_1"));
    $("#tex3").val(localStorage.getItem("tex3_1"));
    $("#tex4").val(localStorage.getItem("tex4_1"));
    $("#tex5").val(localStorage.getItem("tex5_1"));
    $("#tex6").val(localStorage.getItem("tex6_1"));
    $("#tex7").val(localStorage.getItem("tex7_1"));
    $("#tex8").val(localStorage.getItem("tex8_1"));
    $("#tex9").val(localStorage.getItem("tex9_1"));
    $("#tex10").val(localStorage.getItem("tex10_1"));
    $("#tex11").val(localStorage.getItem("tex11_1"));
    $("#tex12").val(localStorage.getItem("tex12_1"));
    $("#tex13").val(localStorage.getItem("tex13_1"));
    $("#tex14").val(localStorage.getItem("tex14_1"));
    $("#tex15").val(localStorage.getItem("tex15_1"));
    $("#tex16").val(localStorage.getItem("tex16_1"));
    $("#tex17").val(localStorage.getItem("tex17_1"));
    $("#tex18").val(localStorage.getItem("tex18_1"));
    $("#tex19").val(localStorage.getItem("tex19_1"));
    $("#tex20").val(localStorage.getItem("tex20_1"));
    $("#tex21").val(localStorage.getItem("tex21_1"));
    $("#tex22").val(localStorage.getItem("tex22_1"));
    $("#tex23").val(localStorage.getItem("tex23_1"));
    $("#tex24").val(localStorage.getItem("tex24_1"));
    $("#bi0").text(localStorage.getItem("bi0_1"));
    $("#bi1").text(localStorage.getItem("bi1_1"));
    $("#bi2").text(localStorage.getItem("bi2_1"));
    $("#bi3").text(localStorage.getItem("bi3_1"));
    $("#bi4").text(localStorage.getItem("bi4_1"));
    $("#bi5").text(localStorage.getItem("bi5_1"));
    $("#bi6").text(localStorage.getItem("bi6_1"));
    $("#bi7").text(localStorage.getItem("bi7_1"));
    $("#bi8").text(localStorage.getItem("bi8_1"));
    $("#bi9").text(localStorage.getItem("bi9_1"));
    $("#bi10").text(localStorage.getItem("bi10_1"));
    $("#bi11").text(localStorage.getItem("bi11_1"));
    $("#bi12").text(localStorage.getItem("bi12_1"));
    $("#bi13").text(localStorage.getItem("bi13_1"));
    $("#bi14").text(localStorage.getItem("bi14_1"));
    $("#bi15").text(localStorage.getItem("bi15_1"));
    $("#bi16").text(localStorage.getItem("bi16_1"));
    $("#bi17").text(localStorage.getItem("bi17_1"));
    $("#bi18").text(localStorage.getItem("bi18_1"));
    $("#bi19").text(localStorage.getItem("bi19_1"));
    $("#bi20").text(localStorage.getItem("bi20_1"));
    $("#bi21").text(localStorage.getItem("bi21_1"));
    $("#bi22").text(localStorage.getItem("bi22_1"));
    $("#bi23").text(localStorage.getItem("bi23_1"));
    $("#bi24").text(localStorage.getItem("bi24_1"));

    //クリックにて処理開始
    $("#shuffle_bingo").on('click', function () {
        //入力データの配列化
        var val = [];
        $(".tex").each(function (i, obj) {
            val.push(obj.value);
        });
        localStorage.setItem("tex0_1",val[0]);
        localStorage.setItem("tex1_1",val[1]);
        localStorage.setItem("tex2_1",val[2]);
        localStorage.setItem("tex3_1",val[3]);
        localStorage.setItem("tex4_1",val[4]);
        localStorage.setItem("tex5_1",val[5]);
        localStorage.setItem("tex6_1",val[6]);
        localStorage.setItem("tex7_1",val[7]);
        localStorage.setItem("tex8_1",val[8]);
        localStorage.setItem("tex9_1",val[9]);
        localStorage.setItem("tex10_1",val[10]);
        localStorage.setItem("tex11_1",val[11]);
        localStorage.setItem("tex12_1",val[12]);
        localStorage.setItem("tex13_1",val[13]);
        localStorage.setItem("tex14_1",val[14]);
        localStorage.setItem("tex15_1",val[15]);
        localStorage.setItem("tex16_1",val[16]);
        localStorage.setItem("tex17_1",val[17]);
        localStorage.setItem("tex18_1",val[18]);
        localStorage.setItem("tex19_1",val[19]);
        localStorage.setItem("tex20_1",val[20]);
        localStorage.setItem("tex21_1",val[21]);
        localStorage.setItem("tex22_1",val[22]);
        localStorage.setItem("tex23_1",val[23]);
        localStorage.setItem("tex24_1",val[24]);
    //シャッフル処理
    var val2 = (shuffle(val));
    for (var i = 0; i < val2.length; i++) {
        $('#bi' + i).text(val2[i]);
    };
    localStorage.setItem("bi0_1",val2[0]);
    localStorage.setItem("bi1_1",val2[1]);
    localStorage.setItem("bi2_1",val2[2]);
    localStorage.setItem("bi3_1",val2[3]);
    localStorage.setItem("bi4_1",val2[4]);
    localStorage.setItem("bi5_1",val2[5]);
    localStorage.setItem("bi6_1",val2[6]);
    localStorage.setItem("bi7_1",val2[7]);
    localStorage.setItem("bi8_1",val2[8]);
    localStorage.setItem("bi9_1",val2[9]);
    localStorage.setItem("bi10_1",val2[10]);
    localStorage.setItem("bi11_1",val2[11]);
    localStorage.setItem("bi12_1",val2[12]);
    localStorage.setItem("bi13_1",val2[13]);
    localStorage.setItem("bi14_1",val2[14]);
    localStorage.setItem("bi15_1",val2[15]);
    localStorage.setItem("bi16_1",val2[16]);
    localStorage.setItem("bi17_1",val2[17]);
    localStorage.setItem("bi18_1",val2[18]);
    localStorage.setItem("bi19_1",val2[19]);
    localStorage.setItem("bi20_1",val2[20]);
    localStorage.setItem("bi21_1",val2[21]);
    localStorage.setItem("bi22_1",val2[22]);
    localStorage.setItem("bi23_1",val2[23]);
    localStorage.setItem("bi24_1",val2[24]);
});

    // 番号をクリックすると、スタイルを変更するクラスをつけ外しできる
    $('#bingo td').click(function (){
        var iro = $('#color').val();
        if(iro == 'red'){
            $(this).removeClass();
            $(this).addClass('bgRed');
        }else if(iro == 'green'){
            $(this).removeClass();
            $(this).addClass('bgGreen');
        }else if(iro == 'blue'){
            $(this).removeClass();
            $(this).addClass('bgBlue');
        }else if(iro == 'yellow'){
            $(this).removeClass();
            $(this).addClass('bgYellow');
        }else if(iro == 'orange'){
            $(this).removeClass();
            $(this).addClass('bgOrange');
        }else if(iro == 'pink'){
            $(this).removeClass();
            $(this).addClass('bgPink');
        }else if(iro == 'purple'){
            $(this).removeClass();
            $(this).addClass('bgPurple');
        }else{
            $(this).removeClass();
        }
    });
    $('#tbclear').click(function (){
        $('#bingo td').removeClass();
            
    });
    // 画像保存
    $('#tbload').click(function (){
        html2canvas(document.querySelector("#bingo")).then(canvas => { 
            let downloadEle = document.createElement("a");
            downloadEle.href = canvas.toDataURL("image/png");
            downloadEle.download = "bingo.png";
            downloadEle.click();
        });
    });
});
       
//配列をシャッフルする
var shuffle = ([...array]) => {
  for (var i = array.length - 1; i >= 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

$(function () {
    //ローカルストレージより読み出し
    $("#day").text(localStorage.getItem("nowtime"));
    $("#tex0").val(localStorage.getItem("tex0"));
    $("#tex1").val(localStorage.getItem("tex1"));
    $("#tex2").val(localStorage.getItem("tex2"));
    $("#tex3").val(localStorage.getItem("tex3"));
    $("#tex4").val(localStorage.getItem("tex4"));
    $("#tex5").val(localStorage.getItem("tex5"));
    $("#tex6").val(localStorage.getItem("tex6"));
    $("#tex7").val(localStorage.getItem("tex7"));
    $("#tex8").val(localStorage.getItem("tex8"));
    $("#bi0").text(localStorage.getItem("bi0"));
    $("#bi1").text(localStorage.getItem("bi1"));
    $("#bi2").text(localStorage.getItem("bi2"));
    $("#bi3").text(localStorage.getItem("bi3"));
    $("#bi4").text(localStorage.getItem("bi4"));
    $("#bi5").text(localStorage.getItem("bi5"));
    $("#bi6").text(localStorage.getItem("bi6"));
    $("#bi7").text(localStorage.getItem("bi7"));
    $("#bi8").text(localStorage.getItem("bi8"));
    //クリックにて処理開始
    $("#texEnt").on('click', function () {
        //入力データの配列化
        var val = [];
        $(".tex").each(function (i, obj) {
            val.push(obj.value);
        });
        localStorage.setItem("tex0",val[0]);
        localStorage.setItem("tex1",val[1]);
        localStorage.setItem("tex2",val[2]);
        localStorage.setItem("tex3",val[3]);
        localStorage.setItem("tex4",val[4]);
        localStorage.setItem("tex5",val[5]);
        localStorage.setItem("tex6",val[6]);
        localStorage.setItem("tex7",val[7]);
        localStorage.setItem("tex8",val[8]);
        //シャッフル処理
        var val2 = (shuffle(val));
        //localStorage.setItem('val2',val2);
        for (var i = 0; i < val2.length; i++) {
            $('#bi' + i).text(val2[i]);
        };
        localStorage.setItem("bi0",val2[0]);
        localStorage.setItem("bi1",val2[1]);
        localStorage.setItem("bi2",val2[2]);
        localStorage.setItem("bi3",val2[3]);
        localStorage.setItem("bi4",val2[4]);
        localStorage.setItem("bi5",val2[5]);
        localStorage.setItem("bi6",val2[6]);
        localStorage.setItem("bi7",val2[7]);
        localStorage.setItem("bi8",val2[8]);
        //時間データ取得
        var now = new Date();
        var y = now.getFullYear();
        var m = now.getMonth() + 1;
        var d = now.getDate();
        var w = now.getDay();
        var wd = ['日', '月', '火', '水', '木', '金', '土'];
        var h = now.getHours();
        var mi = now.getMinutes();
        var s = now.getSeconds();
        var nowtime = y + '年' + m + '月' + d + '日' + h + '時' + mi + '分' + s + '秒' + '(' + wd[w] + ')';
        $("#day").text(nowtime);
        localStorage.setItem('nowtime',nowtime);

    });
    // 番号をクリックすると、スタイルを変更するクラスをつけ外しできる
    $('#bingo td').click(function (){
        $(this).toggleClass('check');
    });
});
       
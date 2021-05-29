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
    $("#day").text(LocalStorage.getItem("date"));
    //クリックにて処理開始
    $("#texEnt").on('click', function () {
        //入力データの配列化
        var val = [];
        $(".tex").each(function (i, obj) {
            val.push(obj.value);
        });
        //シャッフル処理
        var val2 = (shuffle(val));
        for (var i = 0; i < val2.length; i++) {
            $('#bi' + i).text(val2[i]);
        };
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
        $("#day").text(y + '年' + m + '月' + d + '日' + h + '時' + mi + '分' + s + '秒' + '(' + wd[w] + ')');
        LocalStorage.setItem("date",now);
    });
    // 番号をクリックすると、スタイルを変更するクラスをつけ外しできる
    $('#bingo td').click(function (){
        $(this).toggleClass('check');
    });
});
       
  // 現在時間 洞六三洞 未補修人員起床
  function ShowTime() {
    　var nowDate = new Date();
      $(".doppler-time .a").text(nowDate.getFullYear() + " 年 " + (nowDate.getMonth() + 1) + " 月 " + nowDate.getDate() + " 日 ");
      $(".doppler-time .b").text(nowDate.getHours() + " 點 " + nowDate.getMinutes() + " 分 " + nowDate.getSeconds() + " 秒 " );
    　setTimeout('ShowTime()',1000);
  }
class DigitalClock{

    init(){
        clock();
   
        function clock() {
            const now = new Date();
    
            // 年を取得
            const year = now.getFullYear();
    
            // 月を取得
            const month = ("0" + (now.getMonth() + 1)).slice(-2);
    
            // 日を取得
            const date = ("0" + now.getDate()).slice(-2);
    
            // 曜日を取得
            const youbis = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
            const youbi = youbis[now.getDay()];
    
            // 時を取得
            const hour = ("0" + now.getHours()).slice(-2);
    
            // 分を取得
            const minute = ("0" + now.getMinutes()).slice(-2);

            // 秒を取得
            const seconds = ("0" + now.getSeconds()).slice(-2);
    
            // 日付・時刻の文字列を作成
            const nengappi_youbi = `${year}.${month}.${date} ${youbi}`;
            const time = `${hour}:${minute}:${seconds}`;
    
            // 文字列を出力
            document.querySelector('.clock-date').textContent = nengappi_youbi;
            document.querySelector('.clock-time').textContent = time;
        }


      // 1秒ごとにclock関数を呼び出す
      setInterval(clock, 1000);  
   
    }
  }
   
// インスタンス化
const digclock = new DigitalClock();
// メソッド呼び出す（実行する）
digclock.init();
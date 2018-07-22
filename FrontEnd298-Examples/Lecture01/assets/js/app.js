// 計算BMI 包裝下面的計算 變成 顯示的功能 定義function

function render() {
    // 建立體重的變數
    // 取得表單的weight欄位的值
    var weight = $("#weight").val();

    // 建立身高的變數
    // 抓取表單的欄位的數值
    var height = $("#height").val();

    // 建立BMI的變數 設定成 體重 / 身高平方(單位需用公尺));
    // 換算身高為公尺
    height = height / 100;
    var bmi = weight / (height * height);

    // 顯示 身高體重跟BMI
    // 建立顯示訊息的文字模板
    var message = `身高: ${height * 100}cm, 體重: ${weight}kg, BMI: ${bmi}`;
    console.log(message);
    $("#message").text(message);
}

render();
$("#calc-btn").click(render);
$(document).ready(function () {
            $("#dropdown-btn").click(function () {
                    $([id ^= "dropdown-option-"].slideToggle("slow");
                    });
            });

        function display_alert() {
            prompt("輸入email訂閱他！", "example123@gmail.com");
            alert("SUCCEED SUBSCRIBE");
        }

        window.onload = function () {
            var display_area = document.getElementById("display_area");
            var btn = document.getElementById("btn");
            btn.onclick = function () {
                var content_val = document.getElementById("content").value;
                display_area.append(content_val);
            };
        }

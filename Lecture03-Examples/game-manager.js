var scenes = require('./scenes');
var $ = require('jquery');

function Game() {
    this.run = function () {

        var currentScene = scenes[0];
        render();

        function makeDecision(decision) {

            // 做決定的邏輯
            switch (currentScene.id) {
                case 0:
                    currentScene.id = 1;
                    break;
                case 1:
                    currentScene.id =
                        decision === 1 ? 7 : 2;
                    break;
                case 2:
                    currentScene.id =
                        decision === 1 ? 3 : 4;
                    break;
                case 3:
                    currentScene.id = 0;
                    break;
                case 4:
                    currentScene.id =
                        decision === 1 ? 5 : 6;
                    break;
                case 5:
                    currentScene.id = 0;
                    break;
                case 6:
                    currentScene.id = 0;
                    break;
                case 7:
                    currentScene.id =
                        decision === 1 ? 8 : 9;
                    break;
                case 8:
                    currentScene.id = 3;
                    break;
                case 9:
                    currentScene.id = 0;
                    break;

            }

            currentScene = scenes[currentScene.id];
            // 做完決定 修改畫面
            render();
        }


        function render() {
            $('#scene-img')
                .attr(
                    'src',
                    currentScene.getImage()
                );
            $('#scene-title').text(currentScene.title);
        }

        // 綁定按鈕1 跟 按鈕2 點擊事件
        $("#button1").click(function () {
            makeDecision(1);
        });

        $("#button2").click(function () {
            makeDecision(2);
        });
    };
}

module.exports = Game;
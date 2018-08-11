$(function () {

    var $todoInput = $("#add-todo");
    var $todoList = $("#todo-list");


    // 從資料庫 獲取 最新加入的待辦事項
    db
        .collection("todos")
        .onSnapshot(function (snapshot) {
            snapshot.docChanges().forEach(function (change) {
                if (change.type === "added") {
                    var todo = change.doc.data();

                    // 產生 LI元素物件
                    var $todo = $(`<li>${todo.content}</li><span>建立時間:${todo.createdAt}</span>`);
                    $todo.attr("id", change.doc.id);
                    // 設定物件內容並且附加到TODOLIST物件
                    $todo.prependTo($todoList);

                    // 點了之後將內容填回輸入方塊 以便修改
                    $todo.dblclick(function () {
                        var $this = $(this);
                        $todoInput.val($this.text());

                        // 輸入方塊 取消綁定 addTodo
                        $todoInput.unbind("keyup");

                        // 輸入方塊 改為 綁定 udpateTodo
                        $todoInput.keyup(updateTodo($this));
                    });
                }
                if (change.type === "modified") {
                    var modifiedTodo = change.doc.data();
                    $('#' + change.doc.id).text(modifiedTodo.content);
                    $(`#${change.doc.id}+span`).text("建立時間:" + modifiedTodo.createdAt);
                }

            });
        });


    function addTodo(e) {
        // 如何偵測按下的是enter
        // 鍵盤代碼 = 13 
        if (e.keyCode === 13) {
            // 擷取輸入方塊內容
            var todo = {
                content: $todoInput.val(),
                createdAt: moment().format("YYYY-MM-DD hh:mm:ss")
            };

            db.collection("todos").add(todo);

            $todoInput.val("");
        }
    }

    // updateTodo的閉包
    function updateTodo($todo) {
        return function (e) {

            if (e.keyCode === 13) {
                var id = $todo.attr("id");
                var todo = {
                    content: $todoInput.val(),
                    createdAt: moment().format("YYYY-MM-DD hh:mm:ss")
                };
                db
                    .collection("todos")
                    .doc(id)
                    .update(todo);


                $todoInput.unbind("keyup");
                $todoInput.keyup(addTodo);
                $todoInput.val("");
            }
        };
    }


    // 當使用者按下enter鍵，讀取輸入方塊內容，產生一則待辦事項
    $todoInput.keyup(addTodo);
});
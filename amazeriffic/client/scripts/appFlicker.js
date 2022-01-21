var main = function () {
    var messages = ["первое сообщение", "второе сообщение", "третье",
        "четвертое"];var displayMessage = function (messageIndex) {
        // создаем и скрываем элемент DOM
        var $message = $("<p>").text(messages[messageIndex]).hide();
        // очищаем текущее содержимое
        // лучше всего будет выделить текущий параграф
        // и постепенно скрыть его
        $(".message").empty();
        // добавляем сообщение с messageIndex вDOM
        $(".message ").append($message);
        // постепенное отображение сообщения
        $message.fadeIn();
        setTimeout(function () {
        // через 3 секунды вызываем displayMessage снова со следующим индексом
            messageIndex = messageIndex + 1;
            displayMessage(messageIndex);
        }, 3000);
    };
    displayMessage(0);
}
$(document).ready(main);
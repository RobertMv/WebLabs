var toDoObjects = [
    {
        "description" : "Сделать покупки",
        "tags" : [ "шопинг", "рутина" ]
    },
    {
        "description" : "Сделать несколько новых задач",
        "tags" : [ "писательство", "работа" ]
    },
    /* etc */
];
var organizeByTags = function (toDoObjects) {
    // создание пустого массива для тегов
    var tags = [];
    // перебираем все задачи toDos
    toDoObjects.forEach(function (toDo) {
    // перебираем все теги для каждой задачи
        toDo.tags.forEach(function (tag) {
        // убеждаемся, что этого тега
        // еще нет в массиве
            if (tags.indexOf(tag) === -1) {
                tags.push(tag);
            }
        });
    });
    console.log(tags);
    var tagObjects = tags.map(function (tag) {
        // здесь мы находим все задачи,
        // содержащие этот тег
        var toDosWithTag = [];
        toDoObjects.forEach(function (toDo) {
            // проверка, что результат
            // indexOf is *не* равен -1
            if (toDo.tags.indexOf(tag) !== -1) {
                toDosWithTag.push(toDo.description);
            }
        });
        // мы связываем каждый тег с объектом, который
        // содержит название тега и массив
        return { "name": tag, "toDos": toDosWithTag };
    });
    console.log(tagObjects);
};
var main = function () {
    "use strict";
    organizeByTags(toDoObjects);
};

$(document).ready(main);
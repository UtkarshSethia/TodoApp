var input = document.getElementById("input");
var task = ["Code", "Eat", "Sleep"];
//let newCard = document.createElement('div');
//newCard.textContent = snip.title;
//container.appendChild(newCard);
var validateForm = function () {
    var _a;
    task.push(input.value);
    var newCard = document.createElement('div');
    newCard.classList.add("card-body");
    newCard.classList.add("card");
    newCard.textContent = task[task.length - 1];
    (_a = document.getElementById("cont")) === null || _a === void 0 ? void 0 : _a.appendChild(newCard);
    input.value = "";
    return false;
};
console.log(task);
var renderItem = function () {
    task.map(function (item) {
        var _a;
        var newCard = document.createElement('div');
        newCard.classList.add("card-body");
        newCard.classList.add("card");
        newCard.textContent = item;
        (_a = document.getElementById("cont")) === null || _a === void 0 ? void 0 : _a.appendChild(newCard);
    });
};
renderItem();

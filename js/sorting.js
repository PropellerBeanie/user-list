var sortButton = document.querySelector(".sort-select");
var sortAz = document.querySelector(".sort-list-byname-az");


sortButton.addEventListener("input", function(event) {
  sortList();
});

function sortList() {
  if (sortButton.value == "sort-list-byname-az") {
    sortListAz();
    userList.innerHTML = '';
    createList();
    popup();
  } else if (sortButton.value == "sort-list-byname-za") {
    sortListZa();
    userList.innerHTML = '';
    createList();
    popup();
  }
};

function sortListAz() {
  for (var i = 0; i <= userData.length - 2; i++) {
    var minValue = userData[i];
    for (var j = i + 1; j <= userData.length - 1; j++) {
      if (userData[j].name.first + userData[j].name.last < minValue.name.first + minValue.name.last) {
        minValue = userData[j];
        var swap = userData[i];
        userData[i] = minValue;
        userData[j] = swap;
      }
    }
  }
}

function sortListZa() {
  for (var i = 0; i <= userData.length - 2; i++) {
    var maxValue = userData[i];

    for (var j = i + 1; j <= userData.length - 1; j++) {
      if (userData[j].name.first + userData[j].name.last > maxValue.name.first + maxValue.name.last) {
        maxValue = userData[j];
        var swap = userData[i];
        userData[i] = maxValue;
        userData[j] = swap;
      }
    }
  }
}

sortList();

function createList() {
  for (var i = 0; i < userData.length; i++) {
    var personInfo = userData[i];
    var personFullName = personInfo.name;
    var personTitle = personFullName.title;
    var personFirstName = personFullName.first;
    var personLastName = personFullName.last;
    var currentElement = document.createElement('li');

    currentElement.classList.add('user-list__item');

    personInfo.id = 'n' + ( i + 1 );
    var personId = personInfo.id;
    currentElement.id = personId;

    var personImg = document.createElement('img');
    personImg.classList.add('person-image-medium');
    personImg.src = personInfo.picture.medium;
    currentElement.appendChild(personImg);


    var nameLine = document.createElement('p')
    nameLine.classList.add('user-list__item__name-line');
    nameLine.textContent = personTitle + '. ' + personFirstName + ' ' + personLastName;

    currentElement.appendChild(nameLine);
    userList.appendChild(currentElement);
  }
};

createList();

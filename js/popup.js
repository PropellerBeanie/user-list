function popup() {
  var listItems = document.querySelectorAll('.user-list__item');
  var modalWindow = document.querySelector('.modal-window');
  var modalWindowContent = document.querySelector('.modal-content');
  var modal_overlay = document.querySelector(".modal-overlay")
  var close_button = modalWindow.querySelector(".modal-close-button");
  var modal_close_array = [modal_overlay, close_button];


  function getByValue(idValue) {
    for (var i = 0; i < userData.length; i++) {
      if (userData[i].id == idValue) {
        var selectedPerson = userData[i]
        return selectedPerson;
      }
    }
  }

  function addDataCell(parentClass, cellContent) {
    var dataCell = document.createElement('td');
    dataCell.textContent = cellContent;
    var targetRow = modalWindowContent.querySelector(parentClass);
    targetRow.appendChild(dataCell);
  }

  function addImg(source) {
    var imgLarge = document.createElement('img');
    imgLarge.classList.add('person-image-large');
    imgLarge.src = source;
    modalWindowContent.insertBefore(imgLarge, modalWindowContent.childNodes[0]);
  }

  function addFullName(title, firstName, lastName) {
    var personFullName = document.createElement('h2');
    personFullName.classList.add('person-full-name');
    personFullName.textContent = title + '. ' + firstName + ' ' + lastName;
    modalWindowContent.insertBefore(personFullName, modalWindowContent.childNodes[1]);
  }

  listItems.forEach(function(element) {
    element.addEventListener("click", function() {
      modalWindow.classList.add("modal-window-show");
      modal_overlay.classList.add("modal-overlay-show");
      modalWindowContent.innerHTML = '<table id="modal-content__table"> <tbody> <tr class="person-street"> <td>Street:</td> </tr> <tr class="person-city"> <td>City:</td> </tr> <tr class="person-state"> <td>State:</td> </tr> <tr class="person-email"> <td>Email:</td> </tr> <tr class="person-phone"> <td>Phone:</td> </tr> </tbody> </table>';
      var personInfo = getByValue(element.id);
      var personFullName = personInfo.name;
      var personTitle = personFullName.title;
      var personFirstName = personFullName.first;
      var personLastName = personFullName.last;
      addImg(personInfo.picture.large);
      addFullName(personTitle, personFirstName, personLastName);
      addDataCell('.person-street', personInfo.location.street);
      addDataCell('.person-city', personInfo.location.city);
      addDataCell('.person-state', personInfo.location.state);
      addDataCell('.person-email', personInfo.email);
      addDataCell('.person-phone', personInfo.phone);
    });
  });

  function closeModal() {
    modal_overlay.classList.remove("modal-overlay-show");
    modalWindow.classList.remove("modal-window-show");
    modalWindowContent.innerHTML = '';
  }

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (modalWindow.classList.contains("modal-window-show")) {
        closeModal();
      }
    }
  });

  modal_close_array.forEach(function(element) {
    element.addEventListener("click", function(event) {
      closeModal();
    });
  });
}

popup();

angular.module('inboxApp')
.controller('toolbar', toolbarfun);

function toolbarfun() {
  const vm = this;

  vm.test = function(mail) {
    console.log(mail);
    for (var i = 0; i < mail.length; i++) {
      mail[i].selected = true;
    }
  };

  // what is selected
  vm.selected = function(mail) {
    let counter = 0;
    for (var i = 0; i < mail.length; i++) {
      if (mail[i].selected == true) {
        counter++;
      }
    }
    return counter;
  };

  // what is unselected
  vm.unSelected = function(mail) {
    let counter = 0;
    for (var i = 0; i < mail.length; i++) {
      if (mail[i].selected == false) {
        counter++;
      }
    }
    return counter;
  };

  // select all
  vm.selectAll = function(mail) {
    for (var i = 0; i < mail.length; i++) {
      mail[i].selected = true;
    }
  };

  // deselect all
  vm.deSelectAll = function(mail) {
    for (var i = 0; i < mail.length; i++) {
      mail[i].selected = false;
    }
  };

  vm.allLabels = [
    {
      "id": 1,
      "label": "dev"
    },
    {
      "id": 2,
      "label": "personal"
    },
    {
      "id": 3,
      "label": "gschool"
    }
  ];

  vm.frodo = function(selected) {
    console.log(selected);
  }

};

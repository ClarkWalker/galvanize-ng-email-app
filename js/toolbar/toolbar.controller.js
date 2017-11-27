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

  // selected
  vm.selected = function(mail) {
    let counter = 0;
    for (var i = 0; i < mail.length; i++) {
      if (mail[i].selected == true) {
        counter++;
      }
    }
    return counter;
  };

  // unselected
  vm.unSelected = function(mail) {
    let counter = 0;
    for (var i = 0; i < mail.length; i++) {
      if (mail[i].selected == false) {
        counter++;
      }
    }
    return counter;
  };

};

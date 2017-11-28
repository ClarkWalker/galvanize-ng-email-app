angular.module('inboxApp')
.controller('toolbar', toolbarfun);

function toolbarfun() {
  // const vm = this;

  this.test = function(mail) {
    console.log(mail);
    for (var i = 0; i < mail.length; i++) {
      mail[i].selected = true;
    }
  };

  // what is selected
  this.selected = function(mail) {
    let counter = 0;
    for (var i = 0; i < mail.length; i++) {
      if (mail[i].selected == true) {
        counter++;
      }
    }
    return counter;
  };

  // what is unselected
  this.unSelected = function(mail) {
    let counter = 0;
    for (var i = 0; i < mail.length; i++) {
      if (mail[i].selected == false) {
        counter++;
      }
    }
    return counter;
  };

  // select all
  this.selectAll = function(mail) {
    for (var i = 0; i < mail.length; i++) {
      mail[i].selected = true;
    }
  };

  // deselect all
  this.deSelectAll = function(mail) {
    for (var i = 0; i < mail.length; i++) {
      mail[i].selected = false;
    }
  };

  // mark as read
  this.isRead = function(mail) {
    for (var i = 0; i < mail.length; i++) {
      if (mail[i].selected == true) {
        mail[i].read = true;
      }
    }
  };

  // mark as unread
  this.isUnRead = function(mail) {
    for (var i = 0; i < mail.length; i++) {
      if (mail[i].selected == true) {
        mail[i].read = false;
      }
    }
  };

  this.allLabels = [
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

  this.frodo = function(selected) {
    console.log(selected);
  }

};

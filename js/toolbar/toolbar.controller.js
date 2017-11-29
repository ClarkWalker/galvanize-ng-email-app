angular.module('inboxApp')
.controller('toolbar', toolbarfun);

function toolbarfun() {
  const viewModel = this;

  viewModel.test = function(mail) {
    console.log(mail);
    for (var i = 0; i < mail.length; i++) {
      mail[i].selected = true;
    }
  };

  // what is selected
  viewModel.selected = function(mail) {
    let counter = 0;
    for (var i = 0; i < mail.length; i++) {
      if (mail[i].selected == true) {
        counter++;
      }
    }
    return counter;
  };

  // what is unselected
  viewModel.unSelected = function(mail) {
    let counter = 0;
    for (var i = 0; i < mail.length; i++) {
      if (mail[i].selected == false) {
        counter++;
      }
    }
    return counter;
  };

  // select all
  viewModel.selectAll = function(mail) {
    for (var i = 0; i < mail.length; i++) {
      mail[i].selected = true;
    }
  };

  // deselect all
  viewModel.deSelectAll = function(mail) {
    for (var i = 0; i < mail.length; i++) {
      mail[i].selected = false;
    }
  };

  // mark as read
  viewModel.isRead = function(mail) {
    for (var i = 0; i < mail.length; i++) {
      if (mail[i].selected == true) {
        mail[i].read = true;
      }
    }
  };

  // mark as unread
  viewModel.isUnRead = function(mail) {
    for (var i = 0; i < mail.length; i++) {
      if (mail[i].selected == true) {
        mail[i].read = false;
      }
    }
  };

  // what is unread
  viewModel.unReadCount = function(mail) {
    let counter = 0;
    for (var i = 0; i < mail.length; i++) {
      if (mail[i].read == false) {
        counter++;
      }
    }
    return counter;
  };

  viewModel.allLabels = [
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

  viewModel.frodo = function(selected) {
    console.log(selected);
  }

};

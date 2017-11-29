angular.module('inboxApp')
.controller('messages', messages);

function messages($http) {
  const viewModel = this;
  $http.get('https://cw-g64-ng-hypermedia-inbox-api.herokuapp.com/api/messages')
  .then((api) => {
    // console.log('api = ', api.data._embedded.messages);
    viewModel.mail = api.data._embedded.messages;
  });
}

angular
  .module('exampleApp', ['spotify'])
  .config(function (SpotifyProvider) {
    SpotifyProvider.setClientId('bb96a88f1128455f9793ae7f181747f3');
    SpotifyProvider.setRedirectUri('http://localhost:8080/redirect.html');
    SpotifyProvider.setScope('user-read-currently-playing');
  })
  .controller('MainController', ['$scope', 'Spotify', function ($scope, Spotify) {
    $scope.login = function () {
      Spotify.login().then(function (data) {
        console.log(data);
        alert("You are now logged in");
        Spotify.getCurrentlyPlaying().then(function (data) {
          console.log(data)
        }, function () {
            
        })
      }, function () {
        console.log('didn\'t log in');
      })
    };

    
}]);
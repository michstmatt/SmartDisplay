angular
  .module('exampleApp', ['spotify'])
  .config(function (SpotifyProvider) {
    SpotifyProvider.setClientId('bb96a88f1128455f9793ae7f181747f3');
    SpotifyProvider.setRedirectUri('http://localhost/redirect.html');
    SpotifyProvider.setScope('playlist-read-private');
  })
  .controller('MainController', ['$scope', 'Spotify', function ($scope, Spotify) {

    $scope.searchArtist = function () {
      Spotify.search($scope.searchartist, 'artist').then(function (data) {
        $scope.artists = data.artists.items;
      });
    };

    $scope.login = function () {
      Spotify.login().then(function (data) {
        console.log(data);
        alert("You are now logged in");
      }, function () {
        console.log('didn\'t log in');
      })
    };
}]);
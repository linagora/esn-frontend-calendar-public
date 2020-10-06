'use strict';

angular.module('esn.calendar.event-consultation')
  .controller('CalEventExternalRootController', CalEventExternalRootController);

function CalEventExternalRootController($rootScope, $location, result, calEventExternalRootService) {
  const self = this;

  $rootScope.$on('UPDATE_ACTION_EXCAL', function(event, newLink) {
    const newJWT = parseJwt(newLink);

    if (newJWT) {
      $location.search('jwt', newJWT);
    }
  });

  if (result.error) {
    self.error = result.error;
  } else {
    self.eventJcal = result.eventJSON;
    self.attendeeEmail = result.attendeeEmail;
    self.links = {};
    Object.keys(result.links).forEach(action => {
      const jwt = parseJwt(result.links[action]);

      self.links[action] = calEventExternalRootService.getChangeParticipationUrl(jwt);
    });
  }

  function parseJwt(link) {
    const token = link.match(/jwt=(.*)/);

    return token ? token[1] : null;
  }
}

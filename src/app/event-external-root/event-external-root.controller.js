'use strict';

angular.module('esn.calendar.event-consultation')
  .controller('CalEventExternalRootController', CalEventExternalRootController);

function CalEventExternalRootController($rootScope, $location, result, CAL_EVENTS, calEventExternalRootService) {
  const self = this;

  $rootScope.$on(CAL_EVENTS.UPDATE_ACTION_EXCAL, function(event, newLink) {
    const newJwt = parseJwt(newLink);

    if (newJwt) {
      $location.search('jwt', newJwt);
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

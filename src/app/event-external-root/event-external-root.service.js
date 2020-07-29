'use strict';

angular.module('esn.calendar.event-consultation')
  .factory('calEventExternalRootService', calEventExternalRootServiceFactory);

function calEventExternalRootServiceFactory($http) {
  return {
    changeParticipation,
  };

  function changeParticipation(jwt) {
    return $http({ method: 'GET', url: '/calendar/api/calendars/event/participation?jwt=' + jwt })
      .then((response) => response.data)
      .catch((error) => error.data);
  }
}

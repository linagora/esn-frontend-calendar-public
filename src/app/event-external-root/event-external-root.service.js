'use strict';

angular.module('esn.calendar.event-consultation')
  .factory('calEventExternalRootService', calEventExternalRootServiceFactory);

function calEventExternalRootServiceFactory($http, httpConfigurer) {
  return {
    changeParticipation,
  };

  function changeParticipation(jwt) {
    const url = `${httpConfigurer.getUrl('/calendar/api/calendars/event/participation')}?jwt=${jwt}`;

    return $http({ method: 'GET', url })
      .then((response) => response.data)
      .catch((error) => error.data);
  }
}

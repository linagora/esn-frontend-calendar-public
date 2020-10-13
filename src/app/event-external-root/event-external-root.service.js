'use strict';

angular.module('esn.calendar.event-consultation')
  .factory('calEventExternalRootService', calEventExternalRootServiceFactory);

function calEventExternalRootServiceFactory($http, httpConfigurer) {
  return {
    changeParticipation,
    getChangeParticipationUrl
  };

  function getChangeParticipationUrl(jwt) {
    return `${httpConfigurer.getUrl('/calendar/api/calendars/event/participation')}?jwt=${jwt}`;
  }

  function changeParticipation(jwt) {

    return $http({ method: 'GET', url: getChangeParticipationUrl(jwt) })
      .then(response => response.data)
      .catch(error => error.data);
  }
}

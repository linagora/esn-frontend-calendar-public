'use strict';

/* global chai, sinon: false */

const { expect } = chai;

describe('The CalEventExternalRootController controller', function() {
  let $controller, $rootScope, result, calEventExternalRootServiceMock, locationMock, $location, CAL_EVENTS;

  beforeEach(function() {
    result = {
      error: true
    };

    calEventExternalRootServiceMock = {
      getChangeParticipationUrl: function() {
        return {};
      }
    };

    locationMock = {
      path: angular.noop,
      search: sinon.spy(),
      url: sinon.stub()
    };

    angular.mock.module('esn.calendar.event-consultation', function($provide) {
      $provide.value('result', result);
      $provide.value('calEventExternalRootService', calEventExternalRootServiceMock);
      $provide.value('$location', locationMock);
    });

    angular.mock.inject(function(_$rootScope_, _$controller_, _$location_, _CAL_EVENTS_) {
      $controller = _$controller_;
      $rootScope = _$rootScope_;
      $location = _$location_;
      CAL_EVENTS = _CAL_EVENTS_;
    });
  });

  function initController() {
    return $controller('CalEventExternalRootController');
  }

  it('should change url jwt param when the event UPDATE_ACTION_EXCAL is received', function() {
    initController();
    const link = 'http://localhost:8888/test?jwt=123456';

    $location.search = sinon.spy();
    $rootScope.$emit(CAL_EVENTS.UPDATE_ACTION_EXCAL, link);
    expect($location.search).to.have.been.calledWith('jwt', '123456');
  });
});

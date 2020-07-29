angular.module('esn.calendar.event-consultation')
  .run(splashScreen);

function splashScreen($templateCache, session) {
  $templateCache.put('/views/commons/loading.html', require('./app-loading.pug'));
  session.ready.then(() => $('html').removeClass('loading'));
}

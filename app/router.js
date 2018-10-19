import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('metodologia');

  this.route('index', { path: '/'}, function() {
    this.route('previo', { path: '/'});
    this.route('durante');
    this.route('despues');
  });
});

export default Router;

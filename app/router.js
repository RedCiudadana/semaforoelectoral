import EmberRouter from '@ember/routing/router';
import config from './config/environment';
import { inject as service } from '@ember/service';
import { scheduleOnce } from '@ember/runloop';
import { get } from '@ember/object';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
  metrics: service(),

  didTransition() {
    this._super(...arguments);
    this._trackPage();
  },

  _trackPage() {
    scheduleOnce('afterRender', this, () => {
      const page = this.get('url');
      const title = this.getWithDefault('currentRouteName', 'unknown');

      get(this, 'metrics').trackPage('GoogleAnalytics', { page, title });
    });
  }
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

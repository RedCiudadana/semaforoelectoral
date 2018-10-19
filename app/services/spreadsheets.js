import Service from '@ember/service';
import { inject as service } from '@ember/service'

export default Service.extend({

    ajax: service(),

    fetch(name) {
        return this.get('ajax')
            .request(name+'.json')
            .then((response) => {
                return response;
            });
    }

});

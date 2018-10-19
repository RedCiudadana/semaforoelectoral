import Route from '@ember/routing/route';
import { A } from '@ember/array';

export default Route.extend({

    model() {
        let durante = A(this.modelFor('index')).filterBy('etapa', 'durante');
        return [
            {
                tag: 'Permitido',
                data: durante.filterBy('estado', 'permitido')
            },
            {
                tag: 'Prohibido',
                data: durante.filterBy('estado', 'prohibido')
            }
            ];
    }
});

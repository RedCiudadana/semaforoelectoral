import Route from '@ember/routing/route';
import { A } from '@ember/array';

export default Route.extend({

    model() {
        let posterior = A(this.modelFor('index')).filterBy('etapa', 'posterior');
        let model = [];

        // Agregar a 'model' solo si no está vacío.
        if ( posterior.filterBy('estado', 'permitido').length > 0 ) {
            model.push(
            {
                tag: 'Permitido',
                data: posterior.filterBy('estado', 'permitido')
            });
        }

        // Agregar a 'model' solo si no está vacío.
        if ( posterior.filterBy('estado', 'prohibido').length > 0 ) {
            model.push(
            {
                tag: 'Prohibido',
                data: posterior.filterBy('estado', 'prohibido')
            });
        }

        return model;
    }
});

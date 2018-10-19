import Route from '@ember/routing/route';
import { A } from '@ember/array';

export default Route.extend({

    model() {
        let previo = A(this.modelFor('index')).filterBy('etapa', 'previo');
        return [
            {
                tag: 'Permitido',
                data: previo.filterBy('estado', 'permitido')
            },
            {
                tag: 'Prohibido',
                data: previo.filterBy('estado', 'prohibido')
            }
            ];
    }
});

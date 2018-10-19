import { helper } from '@ember/component/helper';

export function sum(x/*, hash*/) {
  return parseInt(x[0]) + x[1];
}

export default helper(sum);

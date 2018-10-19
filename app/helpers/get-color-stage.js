import { helper } from '@ember/component/helper';

export function getColorStage(params/*, hash*/) {
  let stageTag = params[0];
  // Permitido => text-secondary
  if (stageTag === 'Permitido') {
    return 'text-secondary';
  }
  // Prohibido => text-warning
  if (stageTag === 'Prohibido') {
    return 'text-warning';
  }
  return '';
}

export default helper(getColorStage);

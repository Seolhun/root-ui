import plugin from 'tailwindcss/plugin';

import { intents } from '../../constants';

export default plugin(function ({ addVariant }) {
  for (const intent in intents) {
    addVariant(`group-intent-${intent}`, `:where([data-group-root-intent~="${intent}"]) &`);
  }
});

import plugin from 'tailwindcss/plugin';

import { RootIntents } from '../../configs';

export default plugin(function ({ addVariant }) {
  for (const intent in RootIntents) {
    addVariant(`group-intent-${intent}`, `:where([data-group-root-intent~="${intent}"]) &`);
  }
});

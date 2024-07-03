import plugin from 'tailwindcss/plugin';

import { RootScales } from '../../configs';

export default plugin(function ({ addVariant }) {
  for (const scale in RootScales) {
    addVariant(`group-scale-${scale}`, `:where([data-group-root-scale~="${scale}"]) &`);
  }
});

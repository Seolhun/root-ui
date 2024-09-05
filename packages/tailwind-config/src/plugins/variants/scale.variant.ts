import plugin from 'tailwindcss/plugin';

import { scales } from '../../constants';

export default plugin(function ({ addVariant }) {
  for (const scale in scales) {
    addVariant(`group-scale-${scale}`, `:where([data-group-root-scale~="${scale}"]) &`);
  }
});

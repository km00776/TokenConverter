import StyleDictionary from 'style-dictionary';

// 1. Register the custom format
StyleDictionary.registerFormat({
  name: 'unistyles/themeObject',
  format: ({ dictionary }) => {
    function extractValues(obj) {
      const out = {};
      for (const [key, val] of Object.entries(obj)) {
        if (val?.value !== undefined) {
          out[key] = val.value;
        } else {
          out[key] = extractValues(val);
        }
      }
      return out;
    }

    const output = extractValues(dictionary.tokens);
    return `export const theme = ${JSON.stringify(output, null, 2)};`;
  },
});

// 2. Loop through themes
const themes = ['light', 'dark'];

for (const theme of themes) {
  const sd = new StyleDictionary({
    source: [`tokens/tokens-${theme}.json`],
    platforms: {
      js: {
        transformGroup: 'js',
        buildPath: `build/js/${theme}/`,
        files: [
          {
            destination: `theme-${theme}.js`,
            format: 'unistyles/themeObject',
          },
        ],
      },
    },
  });

  await sd.buildAllPlatforms();
}

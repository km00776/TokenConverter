const fs = require('fs');
const figmaTokens = require('./sample_figma_tokens.json');

const themes = { light: {}, dark: {} };

figmaTokens.variables.forEach((token) => {
  const nameParts = token.name.split('.');
  const lightVal = token.valuesByMode['light'];
  const darkVal = token.valuesByMode['dark'];

  // Build for both themes
  let lightRef = themes.light;
  let darkRef = themes.dark;

  nameParts.forEach((part, i) => {
    if (i === nameParts.length - 1) {
      if (lightVal) lightRef[part] = { value: lightVal };
      if (darkVal) darkRef[part] = { value: darkVal };
    } else {
      lightRef[part] = lightRef[part] || {};
      darkRef[part] = darkRef[part] || {};
      lightRef = lightRef[part];
      darkRef = darkRef[part];
    }
  });
});

fs.writeFileSync(
  'tokens/tokens-light.json',
  JSON.stringify(themes.light, null, 2)
);
fs.writeFileSync(
  'tokens/tokens-dark.json',
  JSON.stringify(themes.dark, null, 2)
);

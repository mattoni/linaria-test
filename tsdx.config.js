const linaria = require('linaria/rollup');
const css = require('rollup-plugin-css-only');

module.exports = {
  // This function will run for each entry/format/env combination
  rollup(config, options) {
    // config.plugins.push(
    //   css({
    //     output: 'styles.css',
    //   })
    // );

    const tsIdx = config.plugins.findIndex(p => p.name === 'rpt2');
    config.plugins.splice(
      tsIdx + 1,
      0,
      css({
        output: 'styles.css',
      })
    );

    config.plugins.splice(
      tsIdx + 1,
      0,
      linaria({
        sourceMap: true, // options.env !== 'production',
      })
    );
    console.log(config.plugins);

    return config; // always return a config.
  },
};

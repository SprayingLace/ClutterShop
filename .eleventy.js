module.exports = function(elentyConfig) {
    elentyConfig.addPassthroughCopy('./src/styles.css');
    elentyConfig.addPassthroughCopy('./src/assets');

    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
}
module.exports = function override(config, env) {
  console.log("React app rewired works!")
  config.resolve.fallback = {
        "crypto": require.resolve("crypto-browserify"),
        "stream": false,
        "assert" :false,
        "buffer" :false,
  };
  return config;
};
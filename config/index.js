// custom plugins https://vitejs.dev/guide/api-plugin.html

export const fillEnvHtml = () => {
  let config = null;
  return {
    name: 'html-transform',
    configResolved(resolvedConfig) {
      config = resolvedConfig;
    },
    transformIndexHtml: (html) => {
      const replacer = (str) => config.env[str.slice(1, str.length - 1)];

      return html.replace(/%(\w+)%/g, replacer);
    },
  };
};

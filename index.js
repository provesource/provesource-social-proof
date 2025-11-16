const DEFAULT_VERSION = '1.0.0';
const DEFAULT_CDN_URL = 'https://cdn.provesrc.com/provesrc.js';

/**
 * Generates the ProveSource script snippet
 * @param {string} apiKey - Your ProveSource API key
 * @returns {string} The script snippet as a string
 */
function generateScript(apiKey) {
  // Escape the API key and CDN URL for safe embedding
  const escapedApiKey = apiKey.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
  const escapedCdnUrl = DEFAULT_CDN_URL.replace(/\\/g, '\\\\').replace(/"/g, '\\"');

  // Generate the minified script
  return `!function(o,i){var e=o.createElement("script");e.type="text/javascript",e.async=!0,e.charset="UTF-8",e.src="${escapedCdnUrl}";var t=o.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t);window.provesrc=window.provesrc||{dq:[],display:function(){this.dq.push(arguments)}},window._provesrcAsyncInit=function(){provesrc.init({apiKey:"${escapedApiKey}",v:"${DEFAULT_VERSION}"})}}(document,window);`;
}

/**
 * Initialize ProveSource social proof notifications on your website
 * @param {string} apiKey - Your ProveSource API key
 * @returns {HTMLElement|null} The script element, or null if already initialized
 */
function init(apiKey) {
  if(typeof window === 'undefined' || typeof document === 'undefined') {
    throw new Error('init can only be used in a browser environment');
  }

  if(!apiKey || typeof apiKey !== 'string') {
    throw new Error('apiKey is required');
  }

  if(window.provesrc) {
    console.error('ProveSource is included twice in this page.');
    return null;
  }

  const scriptContent = generateScript(apiKey);
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.async = true;
  script.charset = 'UTF-8';
  script.textContent = scriptContent;

  const firstScript = document.head.getElementsByTagName('script')[0];
  if(firstScript) {
    firstScript.parentNode.insertBefore(script, firstScript);
  } else {
    document.head.appendChild(script);
  }

  return script;
}

const provesource = {
  init,
};

// Export for CommonJS
if(typeof module !== 'undefined' && module.exports) {
  module.exports = provesource;
  module.exports.default = provesource;
}

// Browser globals
if(typeof window !== 'undefined') {
  window.provesource = provesource;
}

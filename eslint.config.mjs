import { withNuxt } from '@nuxt/eslint-config';

export default withNuxt({
  rules: {
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'never', // Don't self-close void HTML elements like <br>, <hr>, <img>, etc.
          normal: 'always',
          component: 'always'
        }
      }
    ]
  }
});

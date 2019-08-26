import { css } from 'docz-plugin-css'
export default {
  title: 'wb-ui',
  description: 'wb-ui, 轻量级 React UI 框架',
  codeSandbox: false,
  typescript: true,
  indexHtml: 'docz/index.html',
  htmlContext: {
    favicon: '//image.onfuns.com/favicon.ico'
  },
  plugins: [
    css({
      preprocessor: 'less'
    })
  ]
}

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

function requestJSON(url, callback) {
  var xhr = new XMLHttpRequest()
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      callback(JSON.parse(xhr.responseText))
    }
  }
  xhr.open('GET', url, true)
  xhr.send()
}

requestJSON('/lang.json', res => {
  i18n
    .use(initReactI18next)
    // 初始化 i18next
    // 配置参数的文档: https://www.i18next.com/overview/configuration-options
    .init({
      debug: true,
      fallbackLng: 'en',
      interpolation: {
        escapeValue: false,
      },
      resources: res,
    })
})

export default i18n

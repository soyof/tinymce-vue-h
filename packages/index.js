import TinymceVueH from './tinymce-vue-h'
const components = [
  TinymceVueH
]

const install = (Vue) => {
  if (install.installed) return
  install.installed = true
  components.map(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default TinymceVueH

import { plugins, toolbar, tinymceFontSize, tinymceFont, tinymcePatterns } from './setting'

export const defaultInit = (_this) => {
  return {
    width: '1200px',
    height: '320px',
    menubar: false,
    branding: false,
    statusbar: true,
    // resize: false,
    autosave_ask_before_unload: true,
    autosave_interval: '3s',
    autosave_prefix: `editor_vue_h`,
    autosave_retention: '300m',
    draggable_modal: true,
    placeholder: '开始编写吧',
    theme: 'silver',
    language_url: '/tinymce/langs/zh_CN.js',
    language: 'zh_CN',
    skin_url: '/tinymce/skins/ui/oxide',
    content_css: `/tinymce/skins/content/default`,
    content_style: 'body, p{font-size: 12px}',
    fontsize_formats: tinymceFontSize,
    font_formats: tinymceFont,
    plugins: plugins,
    toolbar: toolbar,
    visual: false,
    textpattern_patterns: tinymcePatterns,
    init_instance_callback: editor => {
      if (_this.value) {
        editor.setContent(_this.value)
      }
      _this.hasInit = true
      editor.on('Input undo redo Change execCommand SetContent', (e) => {
        _this.hasChange = true
        // editor.getContent({ format: ''text }) // 获取纯文本
        _this.$emit('change', editor.getContent())
      })
    },
    setup: (editor) => {
      editor.on('keydown', (e) => {
        if (e.keyCode === 9) {
          if (e.shiftKey) {
            editor.execCommand('Outdent')
          } else {
            editor.execCommand('Indent')
          }
          e.preventDefault()
          e.stopPropagation()
        }
      })
    }
  }
}

# [tinymce-vue-h](https://github.com/MrH-OS/tinymce-vue-h)

> 基于tinymce封装的vue2.x富文本编辑器
> tinymce版本为5+
>
> 详见[个人博客](https://soyof.github.io/soyof/pages/865b99/)

## 示例
[请点击](https://soyof.github.io/soyof/pages/865b99/#%E7%A4%BA%E4%BE%8B)

## 基本用法


```shell
npm install tinymce-vue-h -S
```

- 全局引入

```javascript
import TinymceVueH from 'tinymce-vue-h'

Vue.component('TinymceVueH', TinymceVueH)
```

- 按需引入

```javascript
import TinymceVueH from 'tinymce-vue-h'
```

```html
<TinymceVueH :init="{tinymceInit}" v-model="value"></TinymceVueH>
```

> - 将node_modules/tinymce/skins文件夹和node_modules/tinymce/themes文件夹拷贝放至public/tinymce文件夹下，如需中文包，下载后放至public/tinymce/langs目录下，然后按如下配置即可
> - 如需设置中文，在`public`目录下新建文件夹tinymce\langs\zh_CN.js, 引入中文翻译
> - [中文及主题包相关存放目录参考](https://github.com/MrH-OS/tinymce-vue-h/tree/master/public)
> - [中文包](https://github.com/MrH-OS/tinymce-vue-h/blob/master/public/tinymce/langs/zh_CN.js)

- tinymce配置参数

```javascript
tinymceInit = {
  theme: 'silver', // 必须参数, 否则富文本编辑器无法显示
  skin_url: '/tinymce/skins/ui/oxide', // 必须参数, 否则富文本编辑器无法显示
  language_url: '/tinymce/langs/zh_CN.js', // 如需中文,则引入
  language: 'zh_CN', // 如需中文,则引入
  content_css: `/tinymce/skins/content/default` // 必须参数
}
```

## 配置参数

> 详细配置请参考tinymce官方文档

|           属性名           |                      说明                      |      类型      | 是否必填 |                          默认值                          |
| :------------------------: | :--------------------------------------------: | :------------: | :------: | :------------------------------------------------------: |
|           theme            |                      主题                      |     string     |    否    |                          silver                          |
|          skin_url          |                    主题路径                    |     string     |    否    |                            -                             |
|          language          |                      语言                      |     string     |    否    |                          zh_CN                           |
|        language_url        |                   语言包路径                   |     string     |    否    |                            -                             |
|           width            |                      宽度                      |     string     |    否    |                           100%                           |
|           height           |                      高度                      |     string     |    否    |                           100%                           |
|          menubar           |                富文本编辑器菜单                |    boolean     |    否    |                          false                           |
|          branding          |                  底部官网提示                  |    boolean     |    否    |                          false                           |
|         statusbar          |                   底部状态栏                   |    boolean     |    否    |                           true                           |
| autosave_ask_before_unload |           阻止有内容时浏览器阻塞行为           |    boolean     |    否    |                           true                           |
|     autosave_interval      |          自动保存为草稿时间（单位s）           |     string     |    否    |                            3s                            |
|      autosave_prefix       | 自动保存为草稿时前缀（本地localStorage中存储） |     string     |    否    |                       editor_vue_h                       |
|     autosave_retention     |              动草稿的有效期 单位m              |     string     |    否    |                           300m                           |
|      draggable_modal       |               模态框是否支持拖动               |    boolean     |    否    |                           true                           |
|        placeholder         |                   默认占位符                   |     string     |    否    |                        开始编写吧                        |
|        content_css         |                  内容区域样式                  |     string     |    否    |                            -                             |
|      fontsize_formats      |               工具栏字体大小选项               | string， array |    否    | '12px 14px 16px 18px 20px 22px 24px 26px 36px 48px 56px' |
|        font_formats        |              工具栏自定义字体选项              | string， array |    否    |                           见下                           |
|          toolbar           |                  自定义工具栏                  | string， array |    否    |                           见下                           |
|           visual           |                    颜色辅助                    |    boolean     |    否    |                          false                           |
|    textpattern_patterns    |            快速排版  类似于markdown            |     array      |    否    |                           见下                           |
|   init_instance_callback   |                初始化结束后执行                |    function    |    否    |                    如传入，会进行合并                    |
|           setup            |                  初始化前执行                  |    function    |    否    |                     自定义相关功能等                     |

- font_formats

  > "微软雅黑='微软雅黑'; 宋体='宋体'; 黑体='黑体'; 仿宋='仿宋'; 楷体='楷体'; 隶书='隶书'; 幼圆='幼圆'; 方正舒体='方正舒体'; 方正姚体='方正姚体'; 等线='等线'; 华文彩云='华文彩云'; 华文仿宋='华文仿宋'; 华文行楷='华文行楷'; 华文楷体='华文楷体'; 华文隶书='华文隶书'; Andale Mono=andale mono,times; Arial=arial; Arial Black=arial black;avant garde; Book Antiqua=book antiqua;palatino; Comic Sans MS=comic sans ms; Courier New=courier new;courier; Georgia=georgia; Helvetica=helvetica; Impact=impact;chicago; Symbol=symbol; Tahoma=tahoma;arial; sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms; Verdana=verdana;geneva; Webdings=webdings; Wingdings=wingdings"

- toolbar

  > fontselect styleselect fontsizeselect restoredraft undo redo | bold italic underline strikethrough subscript superscript removeformat forecolor backcolor lineheight align outdent indent help

- textpattern_patterns

  > ```javascript
  > [ 
  > { start: '*', end: '*', format: 'italic' },
  > { start: '**', end: '**', format: 'bold' },
  > { start: '#', format: 'h1' },
  > { start: '##', format: 'h2' },
  > { start: '###', format: 'h3' },
  > { start: '####', format: 'h4' },
  > { start: '#####', format: 'h5' },
  > { start: '######', format: 'h6' },
  > { start: '1. ', cmd: 'InsertOrderedList' },
  > { start: '* ', cmd: 'InsertUnorderedList' },
  > { start: '- ', cmd: 'InsertUnorderedList' }
  > ]
  > ```


## 补充说明

|     toolbar配置      |       功能        |                           所需插件                           |
| :------------------: | :---------------: | :----------------------------------------------------------: |
|     restoredraft     |  恢复上次的草稿   |                         无需引入插件                         |
|         undo         |       撤销        |                         无需引入插件                         |
|         redo         |       恢复        |                         无需引入插件                         |
|      fontselect      |     字体选择      |                         无需引入插件                         |
|     styleselect      |     格式选择      |                         无需引入插件                         |
|    fontsizeselect    |     字号选择      |                         无需引入插件                         |
|         cut          |       剪切        |                         无需引入插件                         |
|         copy         |       复制        |                         无需引入插件                         |
|      selectall       |       全选        |                         无需引入插件                         |
|         bold         |       粗体        |                         无需引入插件                         |
|        italic        |       斜体        |                         无需引入插件                         |
|      underline       |      下划线       |                         无需引入插件                         |
|    strikethrough     |      删除线       |                         无需引入插件                         |
|      subscript       |       下标        |                         无需引入插件                         |
|     superscript      |       上标        |                         无需引入插件                         |
|     removeformat     |     清除格式      |                         无需引入插件                         |
|      forecolor       |     文字颜色      |                         无需引入插件                         |
|      backcolor       |     背景颜色      |                         无需引入插件                         |
|        align         |     对齐方式      |                         无需引入插件                         |
|       outdent        |     增加缩进      |                         无需引入插件                         |
|        indent        |     减少缩进      |                         无需引入插件                         |
|        paste         |       粘贴        |                            paste                             |
|         ltr          | 文字方向从左向右  |                        directionality                        |
|         rtl          | 文字方向从右向左  |                        directionality                        |
|        anchor        |       锚点        |                            anchor                            |
|      lineheight      |       锚点        | [请参考](http://tinymce.ax-z.cn/more-plugins/lineheight.php) |
|       bullist        |     符号列表      |              advlist,lists(advlist依赖于lists)               |
|       numlist        |     数字列表      |              advlist,lists(advlist依赖于lists)               |
|    insertdatetime    |   插入时间/日期   |                        insertdatetime                        |
|        table         |       表格        |                            table                             |
|     tabledelete      |     删除表格      |                            table                             |
|      tableprops      |     表格属性      |                            table                             |
|    tablerowprops     |      行属性       |                            table                             |
|    tablecellprops    |    单元格属性     |                            table                             |
| tableinsertrowbefore |    在上方插入     |                            table                             |
| tableinsertrowafter  |    在下方插入     |                            table                             |
|    tabledeleterow    |      删除行       |                            table                             |
| tableinsertcolbefore |    在左侧插入     |                            table                             |
| tableinsertcolafter  |    在右侧插入     |                            table                             |
|    tabledeletecol    |      删除列       |                            table                             |
|          hr          |    水平分割线     |                              hr                              |
|     nonbreaking      |  插入不间断空格   |                         nonbreaking                          |
|      pagebreak       |      分页符       |                          pagebreak                           |
|       template       |     内容模板      |                           template                           |
|       charmap        |     特殊字符      |                           charmap                            |
|      emoticons       |     表情插件      |                          emoticons                           |
|        image         |   插入编辑图片    |                            image                             |
|      quickimage      |   快捷插入图片    |                            image                             |
|        media         | 插入/编辑媒体资源 |                            media                             |
|         link         |      超链接       |                             link                             |
|         toc          |    目录生成器     |                             toc                              |
|         code         |     编辑源码      |                             code                             |
|      quickbars       |    快速工具栏     |                          quickbars                           |
|      codesample      |     代码示例      |                          codesample                          |
|       fullpage       |     文档属性      |                           fullpage                           |
|        print         |       打印        |                            print                             |
|    searchreplace     |     查找替换      |                        searchreplace                         |
|       preview        |       预览        |                           preview                            |
|      fullscreen      |       全屏        |                          fullscreen                          |
|      wordcount       |     字数统计      |                          wordcount                           |
|     visualblocks     |   显示区块边框    |                         visualblocks                         |
|     visualchars      |  显示不可见字符   |                         visualchars                          |
|         help         |       帮助        |                         无需引入插件                         |

## 插件

> 来源于[Tinymce中文文档](http://tinymce.ax-z.cn/)

|                            plugin                            |       功能       |                             备注                             |
| :----------------------------------------------------------: | :--------------: | :----------------------------------------------------------: |
|    [advlist](http://tinymce.ax-z.cn/plugins/advlist.php)     |   高级列表插件   |   [官方地址](https://www.tiny.cloud/docs/plugins/advlist/)   |
|     [anchor](http://tinymce.ax-z.cn/plugins/anchor.php)      |     锚点插件     |   [官方地址](https://www.tiny.cloud/docs/plugins/anchor/)    |
|   [autolink](http://tinymce.ax-z.cn/plugins/autolink.php)    |   自动链接插件   |  [官方地址](https://www.tiny.cloud/docs/plugins/autolink/)   |
| [autoresize](http://tinymce.ax-z.cn/plugins/autoresize.php)  | 编辑器大小自适应 | [官方地址](https://www.tiny.cloud/docs/plugins/autoresize/)  |
|   [autosave](http://tinymce.ax-z.cn/plugins/autosave.php)    |     自动存稿     | 无需引入,已集成[官方地址](https://www.tiny.cloud/docs/plugins/autosave/) |
|     [bbcode](http://tinymce.ax-z.cn/plugins/bbcode.php)      |        --        |   [官方地址](https://www.tiny.cloud/docs/plugins/bbcode/)    |
|    [charmap](http://tinymce.ax-z.cn/plugins/charmap.php)     |   特殊字符插件   |   [官方地址](https://www.tiny.cloud/docs/plugins/charmap/)   |
|       [code](http://tinymce.ax-z.cn/plugins/code.php)        |     编辑源码     |    [官方地址](https://www.tiny.cloud/docs/plugins/code/)     |
| [codesample](http://tinymce.ax-z.cn/plugins/codesample.php)  |   代码示例插件   | [官方地址](https://www.tiny.cloud/docs/plugins/codesample/)  |
| [directionality](http://tinymce.ax-z.cn/plugins/directionality.php) |     文字方向     | [官方地址](https://www.tiny.cloud/docs/plugins/directionality/) |
|  [emoticons](http://tinymce.ax-z.cn/plugins/emoticons.php)   |     表情插件     |  [官方地址](https://www.tiny.cloud/docs/plugins/emoticons/)  |
|   [fullpage](http://tinymce.ax-z.cn/plugins/fullpage.php)    |     文档属性     |  [官方地址](https://www.tiny.cloud/docs/plugins/fullpage/)   |
| [fullscreen](http://tinymce.ax-z.cn/plugins/fullscreen.php)  |       全屏       | [官方地址](https://www.tiny.cloud/docs/plugins/fullscreen/)  |
|       [help](http://tinymce.ax-z.cn/plugins/help.php)        |       帮助       | 无需引入,已集成[官方地址](https://www.tiny.cloud/docs/plugins/help/) |
|         [hr](http://tinymce.ax-z.cn/plugins/hr.php)          |    水平分割线    |     [官方地址](https://www.tiny.cloud/docs/plugins/hr/)      |
|      [image](http://tinymce.ax-z.cn/plugins/image.php)       |   插入编辑图片   |    [官方地址](https://www.tiny.cloud/docs/plugins/image/)    |
|  [importcss](http://tinymce.ax-z.cn/plugins/importcss.php)   |     引入css      |  [官方地址](https://www.tiny.cloud/docs/plugins/importcss/)  |
|      [media](http://tinymce.ax-z.cn/plugins/media.php)       |   插入编辑媒体   |    [官方地址](https://www.tiny.cloud/docs/plugins/media/)    |
| [insertdatetime](http://tinymce.ax-z.cn/plugins/insertdatetime.php) | 插入当前日期时间 | [官方地址](https://www.tiny.cloud/docs/plugins/insertdatetime/) |
| [legacyoutput](http://tinymce.ax-z.cn/plugins/legacyoutput.php) |    输出HTML4     | [官方地址](https://www.tiny.cloud/docs/plugins/legacyoutput/) |
|       [link](http://tinymce.ax-z.cn/plugins/link.php)        |      超链接      |    [官方地址](https://www.tiny.cloud/docs/plugins/link/)     |
|      [lists](http://tinymce.ax-z.cn/plugins/lists.php)       |     列表插件     |    [官方地址](https://www.tiny.cloud/docs/plugins/lists/)    |
| [nonbreaking](http://tinymce.ax-z.cn/plugins/nonbreaking.php) |  插入不间断空格  | [官方地址](https://www.tiny.cloud/docs/plugins/nonbreaking/) |
| [noneditable](http://tinymce.ax-z.cn/plugins/noneditable.php) |   不可编辑元素   | [官方地址](https://www.tiny.cloud/docs/plugins/noneditable/) |
|  [pagebreak](http://tinymce.ax-z.cn/plugins/pagebreak.php)   |    插入分页符    |  [官方地址](https://www.tiny.cloud/docs/plugins/pagebreak/)  |
|      [paste](http://tinymce.ax-z.cn/plugins/paste.php)       |     粘贴插件     |    [官方地址](https://www.tiny.cloud/docs/plugins/paste/)    |
|    [preview](http://tinymce.ax-z.cn/plugins/preview.php)     |       预览       |   [官方地址](https://www.tiny.cloud/docs/plugins/preview/)   |
|      [print](http://tinymce.ax-z.cn/plugins/print.php)       |       打印       |    [官方地址](https://www.tiny.cloud/docs/plugins/print/)    |
|  [quickbars](http://tinymce.ax-z.cn/plugins/quickbars.php)   |    快速工具栏    |  [官方地址](https://www.tiny.cloud/docs/plugins/quickbars/)  |
|       [save](http://tinymce.ax-z.cn/plugins/save.php)        |       保存       |    [官方地址](https://www.tiny.cloud/docs/plugins/save/)     |
| [searchreplace](http://tinymce.ax-z.cn/plugins/searchreplace.php) |     查找替换     | [官方地址](https://www.tiny.cloud/docs/plugins/searchreplace/) |
| [spellchecker](http://tinymce.ax-z.cn/plugins/spellchecker.php) |     拼写检查     | [官方地址](https://www.tiny.cloud/docs/plugins/spellchecker/) |
|   [tabfocus](http://tinymce.ax-z.cn/plugins/tabfocus.php)    |   tab切入切出    |  [官方地址](https://www.tiny.cloud/docs/plugins/tabfocus/)   |
|      [table](http://tinymce.ax-z.cn/plugins/table.php)       |     表格插件     |    [官方地址](https://www.tiny.cloud/docs/plugins/table/)    |
|   [template](http://tinymce.ax-z.cn/plugins/template.php)    |     内容模板     |  [官方地址](https://www.tiny.cloud/docs/plugins/template/)   |
|  [textcolor](http://tinymce.ax-z.cn/plugins/textcolor.php)   |     文字颜色     | 无需引入,已集成[官方地址](https://www.tiny.cloud/docs/plugins/textcolor/) |
| [textpattern](http://tinymce.ax-z.cn/plugins/textpattern.php) |     快速排版     | 无需引入,已集成[官方地址](https://www.tiny.cloud/docs/plugins/textpattern/) |
|        [toc](http://tinymce.ax-z.cn/plugins/toc.php)         |    目录生成器    |     [官方地址](https://www.tiny.cloud/docs/plugins/toc/)     |
| [visualblocks](http://tinymce.ax-z.cn/plugins/visualblocks.php) |  显示块元素范围  | [官方地址](https://www.tiny.cloud/docs/plugins/visualblocks/) |
| [visualchars](http://tinymce.ax-z.cn/plugins/visualchars.php) |  显示不可见字符  | [官方地址](https://www.tiny.cloud/docs/plugins/visualchars/) |
|  [wordcount](http://tinymce.ax-z.cn/plugins/wordcount.php)   |     字数统计     |  [官方地址](https://www.tiny.cloud/docs/plugins/wordcount/)  |

## 参考

[Tinymce中文文档](http://tinymce.ax-z.cn/)
[Tinymce官方文档](https://www.tiny.cloud/docs/)
[Tinymce github地址](https://github.com/tinymce/tinymce)


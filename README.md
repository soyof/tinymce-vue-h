# tinymce-vue-h

[github地址](https://github.com/MrH-OS/tinymce-vue-h)
[demo github地址](https://github.com/MrH-OS/plugins_vue)



## tinymce-vue-h使用

```shell
npm install tinymce-vue-h -S
```

```javascript
import TinymceVueH from 'tinymce-vue-h'
```

```html
<tinymce-vue-h :init="{可选参数, 不配置时使用默认配置,具体配置如下图}" v-model="value"></tinymce-vue-h>
```

## 默认配置如下图

![tinymce-init](\examples\assets\tinymce-init.png)

### 参考于
[Tinymce中文文档](http://tinymce.ax-z.cn/)
[Tinymce官方文档](https://www.tiny.cloud/docs/)
[Tinymce github地址](https://github.com/tinymce/tinymce)
tinymce版本为5.30+

## tinymce-vue-h相关配置说明请参数[demo github地址](https://github.com/MrH-OS/plugins_vue)

## toolbar相关补充

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
|      lineheight      |       锚点        | [lineheight](http://tinymce.ax-z.cn/more-plugins/lineheight.php) |
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

## tinymce插件相关补充及说明

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

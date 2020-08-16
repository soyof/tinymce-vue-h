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

![基础配置图](data:image/png;base64,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hsIEAAAgDYUJAABAGgoTAACANBQmAAAAaShMAAAA0lCYAAAApKEwAQAASENhAgAAkIbCBAAAIA2FCQAAQBoKEwAAgDQUJgAAAGkoTAAAANJQmAAAAKShMAEAAEhDYQIAAJCGwgQAACANhQkAAEAaChMAAIA0FCYAAABpKEwAAADSUJgAAACkoTABAABIQ2ECAACQhsIEAAAgDYUJAABAGgoTAACANBQmAAAAaShMAAAA0lCYAAAAlNViQgAABS9JREFUpKEwAQAASENhAgAAkIbCBAAAIA2FCQAAQBoKEwAAgDQUJgAAAGkoTAAAANJQmAAAAKShMAEAAEhDYQIAAJCGwgQAACANhQkAAEAaChMAAIA0FCYAAABpKEwAAADSUJgAAACkoTABAABIQ2ECAACQhsIEAAAgDYUJAABAGgoTAACANBQmAAAAaShMAAAA0lCYAAAApKEwAQAASENhAgAAkIbCBAAAIA2FCQAAQBoKEwAAgDQUJgAAAGkoTAAAANJQmAAAAKShMAEAAEhDYQIAAJCGwgQAACANhQkAAEAaChMAAIA0FCYAAABpKEwAAADSUJgAAACkoTABAABIQ2ECAACQhsIEAAAgDYUJAABAGgoTAACANBQmAAAAaShMAAAA0lCYAAAApKEwAQAASENhAgAAkIbCBAAAIA2FCQAAQBoKEwAAgDQUJgAAAGkoTAAAANJQmAAAAKShMAEAAEhDYQIAAJCGwgQAACANhQkAAEAaChMAAIA0FCYAAABpKEwAAADSUJgAAACkoTABAABIQ2ECAACQhsIEAAAgDYUJAABAGgoTAACANBQmAAAAaShMAAAA0lCYAAAApKEwAQAASENhAgAAkIbCBAAAIA2FCQAAQBoKEwAAgDQUJgAAAGkoTAAAANJQmAAAAKShMAEAAEhDYQIAAJCGwgQAACANhQkAAEAaChMAAIA0FCYAAABpKEwAAADSUJgAAACkoTABAABIQ2ECAACQhsIEAAAgDYUJAABAGgoTAACANBQmAAAAaShMAAAA0lCYAAAApKEwAQAASENhAgAAkIbCBAAAIA2FCQAAQBoKEwAAgDQUJgAAAGkoTAAAANJQmAAAAKShMAEAAEhDYQIAAJCGwgQAACANhQkAAEAaChMAAIA0FCYAAABpKEwAAADSUJgAAACkoTABAABIQ2ECAACQhsIEAAAgDYUJAABAGgoTAACANBQmAAAAaShMAAAA0lCYAAAApKEwAQAASENhAgAAkIbCBAAAIA2FCQAAQBoKEwAAgDQUJgAAAGkoTAAAANJQmAAAAKShMAEAAEhDYQIAAJCGwgQAACANhQkAAEAaChMAAIA0FCYAAABpKEwAAADSUJgAAACkoTABAABIQ2ECAACQhsIEAAAgDYUJAABAGgoTAACANBQmAAAAaShMAAAA0lCYAAAApKEwAQAASENhAgAAkIbCBAAAIA2FCQAAQBoKEwAAgDQUJgAAAGl8Jf/C7t27T9V2AAAAcKb7QmGOGDHiVG0HAAAAp0TCsUazZAEAAEhDYQIAAJCGwgQAACANhQkAAEAaX/nym0R8HPGDqrpoXB8R10bMfnJCXDyylzcMAACAM0ynCjPywnLXX2LtYysnLRkYcXmvbhkAAABnli7Pkr324jg4/Bvxlw96Y2sAAAA4c1mHCQAAQBpdLswt78V1sT4uLumNrQEAAODM1dl1mG9H3PvY+oj1N0eMWXJfRGGvbhYAAABnnC4f6adXtwYAAIAzl3WYAAAApKEwAQAASKNTs2Qviphdbn4sAAAAJ2MMEwAAgDQUJgAAAGl8YZbs7t27T9V2AAAAcKY779NPPz3V2wAAAMDZwCxZAAAA0lCYAAAApKEwAQAASENhAgAAkIbCBAAAIA2FCQAAQBoKEwAAgDQUJgAAAGkoTAAAANJQmAAAAKShMAEAAEhDYQIAAJCGwgQAACANhQkAAEAaChMAAIA0FCYAAABpKEwAAADSUJgAAACkoTABAABIQ2ECAACQhsIEAAAgjf8PT8OOa+17IlEAAAAASUVORK5CYII=)

### 参考于
[Tinymce中文文档](http://tinymce.ax-z.cn/)

[Tinymce官方文档](https://www.tiny.cloud/docs/)

[Tinymce github地址](https://github.com/tinymce/tinymce)

> tinymce版本为5.30+

## tinymce-vue-h相关配置说明请参考[github地址](https://github.com/MrH-OS/plugins_vue)



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

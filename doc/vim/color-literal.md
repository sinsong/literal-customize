# `literal` color scheme

## 一般操作

```vim
set background=dark  " 暗色模式
hi clear  " 清除已有的样式
if exists("syntax_on)
    syntax reset
endif
let g:colors_name = "literal" " 设置颜色主题名字
```

## 颜色主题

```vim
hi LineNr     term=none cterm=none ctermfg=gray ctermbg=235  " 行号
hi CursorLine term=none cterm=none ctermfg=none ctermbg=235  " 光标所在行
```

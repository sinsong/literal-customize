# `.zshrc`

## `oh-my-zsh`

### 主题

```zsh
ZSH_THEME="blinks"
```

### 插件

```zsh
plugins=(
    git  # git 支持
    colored-man-pages  # man page 带彩色
    colorize
    themes  # 添加切换主题的命令
)
```

## `zsh` autosuggestions

```zsh
ZSH_AUTOSUGGEST_STRATEGY=(completion)            # 自动建议功能
ZSH_AUTOSUGGEST_HIGHLIGHT_STYLE="fg=#555555"     # 补全出的字的样式
ZSH_AUTOSUGGEST_COMPLETION_IGNORE="(man|pkg) *"  # 自动补全排除 man 和 pkg

source /usr/local/share/zsh-autosuggestions/zsh-autosuggestions.zsh
```

## `zsh` syntax highlighting

```zsh
# 高亮器
ZSH_HIGHLIGHT_HIGHLIGHTERS=(main pattern brackets)

typeset -A ZSH_HIGHLIGHT_STYLES
ZSH_HIGHLIGHT_STYLES[command]='fg=green' # 命令
ZSH_HIGHLIGHT_STYLES[unknown-token]='fg=red,bold' # 未知词法单元
ZSH_HIGHLIGHT_STYLES[reserved-word]='fg=cyan,bold' # 保留字
ZSH_HIGHLIGHT_STYLES[suffix-alias]='fg=green,underline'
ZSH_HIGHLIGHT_STYLES[precommand]='fg=green,underline'
ZSH_HIGHLIGHT_STYLES[commandseparator]='fg=blue,bold' # 命令分隔符
ZSH_HIGHLIGHT_STYLES[global-alias]='fg=magenta' # 全局别名
ZSH_HIGHLIGHT_STYLES[path]='underline' # 路径
ZSH_HIGHLIGHT_STYLES[globbing]='fg=blue,bold' # glob 展开
ZSH_HIGHLIGHT_STYLES[single-hyphen-option]='fg=magenta' # -选项
ZSH_HIGHLIGHT_STYLES[double-hyphen-option]='fg=magenta' # --选项
ZSH_HIGHLIGHT_STYLES[back-quoted-argument]=none
ZSH_HIGHLIGHT_STYLES[back-quoted-argument-delimiter]='fg=blue,bold'
ZSH_HIGHLIGHT_STYLES[single-quoted-argument]='fg=yellow'
ZSH_HIGHLIGHT_STYLES[double-quoted-argument]='fg=yellow'
ZSH_HIGHLIGHT_STYLES[dollar-quoted-argument]='fg=yellow'
ZSH_HIGHLIGHT_STYLES[arg0]='fg=green' # argv[0]
ZSH_HIGHLIGHT_STYLES[bracket-error]='fg=red,bold' # 错误的括号

source /usr/local/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
```
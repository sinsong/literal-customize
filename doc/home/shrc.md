# 脚本配置的公共部分

```bash
alias ll='ls -lhF'  # l (长输出), h (人类可读大小), F (末尾附加指示字符)
alias la='ls -ahF'  # a (所有文件), h (人类可读大小), F (末尾附加指示字符)
alias grep='grep --color=auto'  # 打开彩色高亮
alias session='pstree -as $$'  # 打印当前 shell 进程树
```

## 替换命令

```bash
alias df='pydf'
alias du='ncdu'
```

# `.vimrc`

## opts

```vim
set nocompatible  " 不兼容, vim 模式
set number  " 行号
set cursorline  " 光标所在行
set nowrap  " 不进行折行
set hlsearch  " 高亮搜索
set incsearch  " 增量搜索 (输入搜索内容时也进行搜索)
set colorcolumn=81  " 高亮列
set tabstop=4 softtabstop=4 shiftwidth=4  " 缩进
autocmd Filetype html,css,js,vue set tabstop=2 softtabstop=2 shiftwidth=2  " 缩进
set expandtab  " 展开 TAB
set autoindent  " 自动缩进
set noswapfile  " 关闭交换文件

syntax on
filetype plugin indent on

colorscheme literal " 设置颜色主题

" gvim 字体
set guifont=Noto\ Sans\ Mono\ Regular\ 11
```

## 尾缀空白字符

```vim
" whitespaces
autocmd ColorScheme * highlight ExtraWhitespace ctermbg=red guibg=Red
highlight ExtraWhitespace term=reverse ctermbg=red guibg=Red
autocmd InsertLeave * redraw!
match ExtraWhitespace /\s\+$\| \+\ze\t/
autocmd BufWritePre * :%s/\s\+$//e
```

## llvm 相关

```vim
augroup filetype
  au! BufRead,BufNewFile *.ll set filetype=llvm
  au! BufRead,BufNewFile *.td set filetype=tablegen
augroup END
```

## `vim-plug`

```vim
" vim-plug

call plug#begin('~/.vim/plugged')

Plug 'posva/vim-vue'
"Plug 'natebosch/vim-lsc'

" vim-lsp
Plug 'Yggdroot/indentLine'
Plug 'preservim/nerdtree'
Plug 'prabirshrestha/asyncomplete.vim'
Plug 'prabirshrestha/async.vim'
Plug 'prabirshrestha/vim-lsp'
Plug 'prabirshrestha/asyncomplete-lsp.vim'

call plug#end()
```

## `vim-lsp`

### asyncomplete

```vim
" asyncomplete
inoremap <expr> <Tab> pumvisible() ? "\<C-n>" : "\<Tab>"
inoremap <expr> <cr> pumvisible() ? asyncomplete#close_popup() : "\<cr>"
```

### vim-lsp

```vim
" vim-lsp

function! s:on_lsp_buffer_enabled() abort
    setlocal omnifunc=lsp#complete
    setlocal signcolumn=yes
    if exists('+tagfunc') | setlocal tagfunc=lsp#tagfunc | endif

    highlight lspReference ctermfg=white ctermbg=green guifg=white guibg=green

    nmap <buffer> K <plug>(lsp-hover)
    nmap <buffer> <F2> <plug>(lsp-rename)

    let g:lsp_format_sync_timeout = 1000
    autocmd! BufWritePre *.rs,*.go call execute('LspDocumentFormatSync')
endfunction

augroup lsp_install
    au!
    autocmd User lsp_buffer_enabled call s:on_lsp_buffer_enabled()
augroup END
```

### language server

C / C++ -> clangd

```vim
if executable('clangd')
    au User lsp_setup call lsp#register_server({
        \ 'name': 'clangd',
        \ 'cmd': { server_info->['clangd', '-background-index'] },
        \ 'allowlist': ['c', 'cpp']
        \ })
endif
```

python -> python-language-server

```vim
if executable('pyls')
    au User lsp_setup call lsp#register_server({
        \ 'name': 'pyls',
        \ 'cmd': { server_info->['pyls'] },
        \ 'allowlist': ['python'],
        \ })
endif
```

## indentLine

```vim
let g:indentLine_char = '|'
let g:indentLine_color_term = 240
```

module.exports = {
  lang: 'zh-CN',
  title: 'literal-customize',
  description: 'literal 自定义',

  themeConfig: {
    navbar: [
      {
        text: 'index',
        link: '/'
      },
      {
        text: 'home',
        children: [
          {
            text: 'Environment',
            children: ['/home/profile.md']
          },
          {
            text: 'Shell RunCommand',
            children: [
              '/home/shrc.md',
              '/home/bashrc.md',
              '/home/zshrc.md'
            ]
          },
          {
            text: 'Desktop Environment',
            children: ['/home/Xdefaults.md']
          }
        ]
      },
      {
        text: 'vim',
        children: [
          {
            text: 'vimrc',
            children: ['/vim/vimrc.md']
          },
          {
            text: 'color scheme',
            children: [
              '/vim/color-literal.md'
            ]
          }
        ]
      },
      {
        text: 'i3wm',
        link: '/i3wm/'
      }
    ]
  }
}

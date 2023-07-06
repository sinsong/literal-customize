# `i3wm`

配置文件在 `.config/i3/config`

## 字体

```
font pango: Noto Sans Mono Regular 8
```

## 变量

```
set $mod Mod4 # Meta 键
```

## 快捷键

### 常用

```
# terminal
bindsym $mod+Return exec i3-sensible-terminal
# kill focused window
bindsym $mod+Shift+q kill
# program launcher
bindsym $mod+d exec --no-startup-id i3-dmenu-desktop
# split method
bindsym $mod+h split h
bindsym $mod+v split v
# fullscreen
bindsym $mod+f fullscreen toggle
```

### 浮动

```
# drag
floating_modifier $mod
# floating focus toggle
bindsym $mod+space focus mode_toggle
# floating toggle
bindsym $mod+Shift+space floating toggle
```

### 焦点

```
bindsym $mod+a focus parent
#bindsym $mod+d focus child
```

### 鼠标相关

```
bindsym --whole-window $mod+button2 kill
bindsym $mod+button3 floating toggle
```

### 容器布局

```
bindsym $mod+s layout stacking
bindsym $mod+w layout tabbed
bindsym $mod+e layout toggle split
```

### 改变焦点

```
bindsym $mod+j focus left
bindsym $mod+k focus down
bindsym $mod+l focus up
bindsym $mod+semicolon focus right
# arraw
bindsym $mod+Left focus left
bindsym $mod+Down focus down
bindsym $mod+Up focus up
bindsym $mod+Right focus right
```

### 移动

```
bindsym $mod+Shift+j move left
bindsym $mod+Shift+k move down
bindsym $mod+Shift+l move up
bindsym $mod+Shift+semicolon move right
# arraw
bindsym $mod+Shift+Left move left
bindsym $mod+Shift+Down move down
bindsym $mod+Shift+Up move up
bindsym $mod+Shift+Right move right
```

## 工作区

### 定义

```
set $ws1 "1"
set $ws2 "2"
set $ws3 "3"
set $ws4 "4"
set $ws5 "5"
set $ws6 "6"
set $ws7 "7"
set $ws8 "8"
set $ws9 "9"
set $ws10 "10"
```

### 切换到工作区

```
bindsym $mod+1 workspace $ws1
bindsym $mod+2 workspace $ws2
bindsym $mod+3 workspace $ws3
bindsym $mod+4 workspace $ws4
bindsym $mod+5 workspace $ws5
bindsym $mod+6 workspace $ws6
bindsym $mod+7 workspace $ws7
bindsym $mod+8 workspace $ws8
bindsym $mod+9 workspace $ws9
bindsym $mod+0 workspace $ws10
```

### 移动到工作区

```
bindsym $mod+Shift+1 move container to workspace $ws1
bindsym $mod+Shift+2 move container to workspace $ws2
bindsym $mod+Shift+3 move container to workspace $ws3
bindsym $mod+Shift+4 move container to workspace $ws4
bindsym $mod+Shift+5 move container to workspace $ws5
bindsym $mod+Shift+6 move container to workspace $ws6
bindsym $mod+Shift+7 move container to workspace $ws7
bindsym $mod+Shift+8 move container to workspace $ws8
bindsym $mod+Shift+9 move container to workspace $ws9
bindsym $mod+Shift+0 move container to workspace $ws10
```

## i3 本身

```
bindsym $mod+Shift+c reload   # 重新加载配置
bindsym $mod+Shift+r restart  # 重新启动
bindsym $mod+Shift+e exec "i3-nagbar -t warning -m 'You pressed the exit shortcut. Do you really want to exit i3? This will end your X session.' -B 'Yes, exit i3' 'i3-msg exit'"
```

## 修改大小模式

```
bindsym $mod+r mode "resize"
mode "resize" {
    # j k l ;
    bindsym $left       resize shrink width 10 px or 10 ppt
    bindsym $down       resize grow height 10 px or 10 ppt
    bindsym $up         resize shrink height 10 px or 10 ppt
    bindsym $right      resize grow width 10 px or 10 ppt
    # arraw
    bindsym Left        resize shrink width 10 px or 10 ppt
    bindsym Down        resize grow height 10 px or 10 ppt
    bindsym Up          resize shrink height 10 px or 10 ppt
    bindsym Right       resize grow width 10 px or 10 ppt
    # back to normal mode: Enter | Escape | $mod+r
    bindsym Return mode "default"
    bindsym Escape mode "default"
    bindsym $mod+r mode "default"
}
```

## i3bar

```
bar {
    position top
    i3bar_command i3bar
    status_command i3status
    font pango:Noto Sans Mono 10

    colors {
        background #000000
        statusline #ffffff
        separator  #6495ed

        focused_workspace #6495ed #6495ed #ffffff
    }
}
```

## 颜色

```
# class        border background text indicator child_border
client.focused #6495ed #6495ed #ffffff #6495ed #6495ed
```

## i3-gaps

```
gaps inner 8
gaps outer 10
#gaps top 60 # for polybar
smart_gaps on
```

## 应用程序特殊配置

```
for_window [class="URxvt"]   border pixel 1
for_window [class="URxvt"]   hide_edge_borders both
for_window [class="Firefox"] hide_edge_borders both
```

## 启动进程

```
#exec_always --no-startup-id $HOME/.config/polybar/launch.sh
exec --no-startup-id ~/resolution.sh
exec --no-startup-id compton -b
exec --no-startup-id clipit
```

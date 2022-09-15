---
sidebar_position: 1
---

# 访客端部署
> 默认你已经注册账号，并创建组织。

首先你需要在 工作台 > 我的组织 > 选择一个组织 > 点击操作中部署按钮 > 得到你的部署脚本。示例如下：

```js
<script>
    (function () {
      let div = document.createElement('div');
      div.id = 'CloudCourierContainer';
      div.style.setProperty('position', 'fixed', 'important');
      div.style.setProperty('right', '20px', 'important');
      div.style.setProperty('bottom', '0', 'important');
      let body = document.querySelector('body');
      body.appendChild(div);
      window.__clour_courier_token__ = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=';
      var s1 = document.createElement('script'),
        s0 = document.getElementsByTagName('script')[0];
      s1.async = true;
      s1.src =
        'https://cloudcourier.cn//scripts/deployscript.js';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      s0.parentNode.insertBefore(s1, s0);
    })();
  </script>
```

然后你只需要把该脚本放到你的html里面即可，

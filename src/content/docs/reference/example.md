---
title: 如何提交插件
description: A reference page in my new Starlight docs site.
---

访问仓库plugin分支。

```bash
git clone https://gitee.com/syraem-rget-p45/maiplugin.git
```

## 添加插件文件
📌 **请将插件about.md文件 PR 提交至 `plugin` 分支！**

请在 about.md 文件中编写一下内容内容：

> | 插件名称 | 仓库地址 | 插件作者 |
> |----------|----------|----------|
> | 内容     | [内容](url) | [内容](url) |
```markdown
 | 插件名称 | 仓库地址 | 插件作者 |
 |----------|----------|----------|
 | 内容     | [内容](url) | [内容](url) |
```

>>请不要修改markdown格式！

提交你的about.md到本地仓库。

```bash
git add .
git commit -m "添加插件xxxxxx"
git push origin main
```

向原始仓库发起合并请求。

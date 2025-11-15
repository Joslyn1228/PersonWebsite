# 安装说明

由于系统 PowerShell 执行策略限制，请手动执行以下命令：

## 1. 安装依赖

在项目根目录打开终端（PowerShell 或 CMD），运行：

```bash
npm install
```

如果遇到 PowerShell 执行策略问题，可以：

**方法一：** 使用 CMD（命令提示符）而不是 PowerShell

**方法二：** 临时允许脚本执行（在 PowerShell 中运行）：
```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
npm install
```

## 2. 初始化 Tailwind CSS

Tailwind CSS 已经配置完成，无需额外初始化步骤。

## 3. 启动开发服务器

```bash
npm run dev
```

然后在浏览器中打开：http://localhost:3000

## 4. 添加项目图片（可选）

在 `public/images/` 目录下添加项目图片：
- project-1.jpg
- project-2.jpg  
- project-3.jpg

如果暂时没有图片，项目会显示占位符。

## 5. 自定义内容

编辑 `content/data.json` 文件来自定义你的个人信息。


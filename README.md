# 个人主页项目

一个使用 Next.js (App Router) 和 Tailwind CSS 构建的现代化个人主页项目。

## 功能特性

- ✨ 响应式设计，移动优先
- 🎨 现代化的 UI 设计
- 🚀 基于 Next.js 14 App Router
- 💨 Tailwind CSS 样式
- ♿ 可访问性支持（ARIA、语义标签）
- 🔍 SEO 优化（OpenGraph、Meta 标签）
- 📱 平滑滚动和动画效果

## 项目结构

```
PersonalWeb/
├── app/
│   ├── layout.tsx      # 根布局
│   ├── page.tsx        # 首页
│   └── globals.css     # 全局样式
├── components/
│   ├── Navbar.tsx      # 导航栏
│   ├── Footer.tsx      # 页脚
│   ├── Hero.tsx        # 英雄区
│   ├── About.tsx       # 关于我
│   ├── Projects.tsx    # 项目展示
│   └── Contact.tsx     # 联系方式
├── content/
│   └── data.json       # 数据文件
└── public/
    └── favicon.ico     # 网站图标
```

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看效果。

### 构建生产版本

```bash
npm run build
```

### 启动生产服务器

```bash
npm start
```

### 代码检查

```bash
npm run lint
```

## 自定义内容

编辑 `content/data.json` 文件来自定义你的个人信息：

- **hero**: 首页英雄区内容
- **about**: 关于我部分的内容和技能
- **projects**: 项目列表
- **contact**: 联系方式

## 图片资源

项目图片应放置在 `public/images/` 目录下：

- `public/images/project-1.jpg`
- `public/images/project-2.jpg`
- `public/images/project-3.jpg`

你可以在 `content/data.json` 中更新图片路径。

## 部署

### GitHub Pages

1. 在 `next.config.js` 中添加 `output: 'export'` 配置（静态导出）
2. 构建项目：`npm run build`
3. 将 `out` 目录推送到 GitHub Pages

### Vercel（推荐）

1. 将代码推送到 GitHub
2. 在 [Vercel](https://vercel.com) 导入项目
3. 自动部署完成

### Netlify

1. 将代码推送到 GitHub
2. 在 [Netlify](https://netlify.com) 导入项目
3. 构建命令：`npm run build`
4. 发布目录：`.next`

## 技术栈

- **Next.js 14** - React 框架
- **TypeScript** - 类型安全
- **Tailwind CSS** - 实用优先的 CSS 框架
- **React** - UI 库

## 浏览器支持

- Chrome (最新)
- Firefox (最新)
- Safari (最新)
- Edge (最新)

## 许可证

MIT License

## 贡献

欢迎提交 Issue 和 Pull Request！


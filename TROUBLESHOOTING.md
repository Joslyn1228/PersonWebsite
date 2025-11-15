# Vercel 部署问题排查指南

## 当前已修复的问题

1. ✅ 移除了 layout.tsx 中的 `<head>` 标签
2. ✅ 添加了浏览器 API 的 SSR 安全检查
3. ✅ 创建了数据加载层 (`lib/data.ts`) 以优化 JSON 导入
4. ✅ 更新了所有组件使用新的数据导入方式

## 如果仍然无法访问，请按以下步骤排查：

### 步骤 1: 检查 Vercel 构建日志

1. 访问 [Vercel Dashboard](https://vercel.com/dashboard)
2. 选择你的项目
3. 点击最新的部署记录
4. 查看 "Build Logs" 标签页

**查找以下错误：**
- ❌ Build failed
- ❌ TypeScript errors
- ❌ Module not found
- ❌ Import errors

### 步骤 2: 检查浏览器控制台

1. 打开你的网站
2. 按 `F12` 打开开发者工具
3. 查看 **Console** 标签页的错误信息
4. 查看 **Network** 标签页，检查哪些资源加载失败

### 步骤 3: 常见错误及解决方案

#### 错误 1: "Module not found: Can't resolve '@/content/data.json'"

**解决方案：** 已修复 - 现在使用 `@/lib/data` 导入

#### 错误 2: "ReferenceError: window is not defined"

**解决方案：** 已修复 - 所有浏览器 API 调用都添加了 `typeof window !== 'undefined'` 检查

#### 错误 3: 构建超时

**可能原因：**
- 依赖安装失败
- 构建配置问题

**解决方案：**
```bash
# 本地测试构建
npm run build
```

#### 错误 4: 页面空白

**检查：**
- 浏览器控制台的 JavaScript 错误
- Network 标签页的资源加载状态
- 是否有 CORS 错误

### 步骤 4: 手动重新部署

1. 在 Vercel Dashboard 中
2. 进入项目设置
3. 点击 "Redeploy" 按钮
4. 选择最新的 commit
5. 点击 "Redeploy"

### 步骤 5: 检查环境变量

如果使用了环境变量：
1. 在 Vercel 项目设置中
2. 进入 "Environment Variables"
3. 确保所有必要的变量都已设置

### 步骤 6: 查看实时日志

1. 在 Vercel Dashboard 中
2. 进入 "Functions" 标签页
3. 查看运行时错误日志

## 需要帮助？

如果问题仍然存在，请提供：

1. **Vercel 构建日志**（截图或复制错误信息）
2. **浏览器控制台错误**（F12 → Console）
3. **Network 标签页**（检查失败的请求）
4. **具体的错误信息**（404、500、超时、空白页面等）
5. **部署 URL**

## 临时解决方案

如果急需上线，可以尝试：

1. **使用静态导出：**
   ```javascript
   // next.config.js
   module.exports = {
     output: 'export',
   }
   ```
   然后部署到 GitHub Pages 或其他静态托管服务

2. **使用其他部署平台：**
   - Netlify
   - Cloudflare Pages
   - Railway


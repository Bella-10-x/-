<<<<<<< HEAD
# 联盾科技 - 专业的网络安全解决方案提供商

## 项目简介

联盾科技官网是一个现代化的网络安全服务展示平台，致力于为企业客户提供全方位、多层次的网络安全防护体系。网站采用React 18+、TypeScript和Tailwind CSS开发，具有响应式设计，支持深色模式，提供流畅的用户体验。

## 功能特点

- 现代化UI设计，采用渐变色、阴影和动效增强视觉体验
- 完全响应式布局，适配桌面、平板和移动设备
- 支持深色/浅色模式切换
- 动画过渡效果，提升用户体验
- 模块化组件设计，易于维护和扩展
- 完整的企业展示内容：关于我们、服务、解决方案、客户评价、新闻和联系方式

## 技术栈

- **前端框架**：React 18+
- **编程语言**：TypeScript
- **UI库**：Tailwind CSS v3
- **路由**：React Router v7
- **动画**：Framer Motion
- **图标**：Font Awesome
- **构建工具**：Vite
- **表单验证**：Sonner Toast
- **工具函数**：clsx、tailwind-merge

## 快速开始

### 前提条件

确保您的环境中已安装以下软件：

- Node.js (v16或更高版本)
- npm、yarn或pnpm (推荐使用pnpm)

### 安装依赖

```bash
# 使用pnpm
pnpm install

# 或使用npm
npm install

# 或使用yarn
yarn install
```

### 开发模式运行

```bash
# 使用pnpm
pnpm dev

# 或使用npm
npm run dev

# 或使用yarn
yarn dev
```

项目将在 http://localhost:3000 启动开发服务器。

### 构建生产版本

```bash
# 使用pnpm
pnpm build

# 或使用npm
npm run build

# 或使用yarn
yarn build
```

构建后的文件将生成在 `dist` 目录中。

## 项目结构

```
├── src/
│   ├── components/       # React组件
│   ├── contexts/         # React上下文
│   ├── hooks/            # 自定义Hooks
│   ├── lib/              # 工具函数
│   ├── pages/            # 页面组件
│   ├── App.tsx           # 应用入口组件
│   ├── main.tsx          # 应用启动文件
│   ├── index.css         # 全局样式
│   └── vite-env.d.ts     # Vite环境声明
├── .gitignore            # Git忽略文件配置
├── index.html            # HTML入口文件
├── package.json          # 项目配置和依赖
├── pnpm-lock.yaml        # pnpm锁文件
├── postcss.config.js     # PostCSS配置
├── tailwind.config.js    # Tailwind CSS配置
├── tsconfig.json         # TypeScript配置
└── vite.config.ts        # Vite配置
```

## 部署指南

### Vercel 部署

1. 登录 [Vercel](https://vercel.com/) 账号
2. 点击 "New Project"
3. 选择您的Git仓库
4. 配置项目设置（默认设置通常即可）
5. 点击 "Deploy"

### Netlify 部署

1. 登录 [Netlify](https://www.netlify.com/) 账号
2. 点击 "New site from Git"
3. 选择您的Git仓库
4. 配置构建命令 (`pnpm build` 或 `npm run build` 或 `yarn build`)
5. 配置发布目录 (`dist`)
6. 点击 "Deploy site"

### GitHub Pages 部署

1. 安装 `gh-pages` 依赖：
   ```bash
   pnpm add -D gh-pages
   ```

2. 在 `package.json` 中添加部署脚本：
   ```json
   "scripts": {
     "deploy": "gh-pages -d dist"
   }
   ```

3. 构建并部署：
   ```bash
   pnpm build
   pnpm deploy
   ```

### 自定义服务器部署

1. 构建项目：
   ```bash
   pnpm build
   ```

2. 将 `dist` 目录中的文件部署到您的Web服务器的根目录或子目录。

## 贡献说明

1. Fork 此仓库
2. 创建您的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交您的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启一个 Pull Request

## 许可证

本项目采用 MIT 许可证 - 详情请查看 [LICENSE](LICENSE) 文件

## 联系方式

如有任何问题或建议，请联系我们：

- 邮箱：liandunqingniao@aliyun.com
- 电话：400-166-0586
- 地址：江苏省南通市崇川区跃龙路国际大厦8楼
=======
# 官网

#### 介绍
{**以下是 Gitee 平台说明，您可以替换此简介**
Gitee 是 OSCHINA 推出的基于 Git 的代码托管平台（同时支持 SVN）。专为开发者提供稳定、高效、安全的云端软件开发协作平台
无论是个人、团队、或是企业，都能够用 Gitee 实现代码托管、项目管理、协作开发。企业项目请看 [https://gitee.com/enterprises](https://gitee.com/enterprises)}

#### 软件架构
软件架构说明


#### 安装教程

1.  xxxx
2.  xxxx
3.  xxxx

#### 使用说明

1.  xxxx
2.  xxxx
3.  xxxx

#### 参与贡献

1.  Fork 本仓库
2.  新建 Feat_xxx 分支
3.  提交代码
4.  新建 Pull Request


#### 特技

1.  使用 Readme\_XXX.md 来支持不同的语言，例如 Readme\_en.md, Readme\_zh.md
2.  Gitee 官方博客 [blog.gitee.com](https://blog.gitee.com)
3.  你可以 [https://gitee.com/explore](https://gitee.com/explore) 这个地址来了解 Gitee 上的优秀开源项目
4.  [GVP](https://gitee.com/gvp) 全称是 Gitee 最有价值开源项目，是综合评定出的优秀开源项目
5.  Gitee 官方提供的使用手册 [https://gitee.com/help](https://gitee.com/help)
6.  Gitee 封面人物是一档用来展示 Gitee 会员风采的栏目 [https://gitee.com/gitee-stars/](https://gitee.com/gitee-stars/)
>>>>>>> c271a860f6b452f96816f177372848b307f07aa5

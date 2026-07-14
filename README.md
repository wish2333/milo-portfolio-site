# Milo · AI 产品经理作品集

Milo 的个人作品集网站，重点展示 AI 产品的真实问题、产品判断、交互原型与验证过程。

线上版本：<https://milo-ai-product-portfolio.skylarmitchell973.chatgpt.site>

## 环境要求

- Node.js `>= 22.13.0`
- npm（随 Node.js 安装）

可用以下命令确认版本：

```bash
node --version
npm --version
```

## 本地开发

进入本项目目录后执行：

```bash
npm install
npm run dev
```

终端显示 `Local: http://localhost:3000/` 后，在浏览器打开该地址。修改 `app/` 下的文件会自动刷新页面。

如果 `3000` 端口已被占用，可指定其他端口：

```bash
npm run dev -- --port 3001
```

## 本地生产部署

先生成生产版本：

```bash
npm run build
```

构建成功后启动生产服务器：

```bash
npm run start
```

默认地址为 <http://localhost:3000>。生产服务器默认监听 `0.0.0.0`，同一局域网中的其他设备可通过以下地址访问：

```text
http://你的电脑局域网IP:3000
```

也可以显式指定主机和端口：

```bash
npm run start -- --hostname 0.0.0.0 --port 3000
```

停止服务器时，在运行服务器的终端按 `Ctrl+C`。

## 验证

```bash
npm test
```

该命令会重新构建网站，并检查首页能否正确渲染作品集内容、项目链接是否齐全，以及初始化模板是否已完全移除。

## 主要文件

- `app/page.tsx`：项目资料、仓库与 Demo/Release 链接、页面结构和原型内容
- `app/globals.css`：桌面与移动端布局、字体、颜色和响应式样式
- `app/layout.tsx`：页面标题、描述和分享元信息
- `.openai/hosting.json`：OpenAI Sites 项目标识与托管配置

## 修改项目链接

项目资料集中在 `app/page.tsx` 的 `projects` 数组中：

- `repo`：GitHub 仓库地址
- `preview`：在线 Demo 或 GitHub Latest Release 地址
- `previewLabel`：按钮显示文字

目前 Milo-isLearning 指向在线 Demo，其他项目暂时指向各自的 GitHub Latest Release 页面。

## 部署到 OpenAI Sites

此项目已经关联 OpenAI Sites。通过 Codex 的 Sites 工作流发布时，会读取 `.openai/hosting.json`，构建并保存新版本，然后部署到现有站点。

请勿手动修改 `.openai/hosting.json` 中的 `project_id`，否则可能创建或更新错误的站点。

## 常用命令

| 命令 | 用途 |
| --- | --- |
| `npm run dev` | 启动本地开发服务器 |
| `npm run build` | 生成生产构建并检查编译错误 |
| `npm run start` | 运行已经构建好的生产版本 |
| `npm test` | 构建并运行首页渲染测试 |
| `npm run lint` | 检查代码规范 |

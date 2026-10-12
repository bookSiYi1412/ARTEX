# ARTEX 独立在线演示

在线演示地址：https://bookSiYi1412.github.io/ARTEX/

该演示由 bookSiYi1412 从独立备份构建，源码来自 [mhtsec/ARTEX](https://github.com/mhtsec/ARTEX)，保留原作者和贡献者信息及 AGPL-3.0 许可证。页面使用浏览器内的模拟数据展示控制台，数据操作刷新后重置，不需要后端、数据库或 API Key。

## 分支与部署

- `demo`：演示源码与 GitHub Pages 路径适配。
- `main`：独立备份主分支及部署入口。
- `upstream-snapshot/2026-10-12`：未经修改的上游快照。

仓库 Settings → Pages → Build and deployment → Source 选择 **GitHub Actions**。随后推送 `demo` 的前端修改，或在 Actions 中运行 **Deploy ARTEX demo to GitHub Pages**，即可自动构建并部署。工作流固定从 `demo` 分支构建。

## 本地构建

```bash
git clone --branch demo https://github.com/bookSiYi1412/ARTEX.git
cd ARTEX/web
npm ci --ignore-scripts
npm run build:demo
```

输出目录为 `web/out`，使用 `/ARTEX/` 作为站点根路径。构建命令会启用模拟数据和静态导出，页面导航、脚本、字体和图片均适配 GitHub Pages 项目路径。

本地开发预览可使用 `NEXT_PUBLIC_MOCK=1 npm run dev`；此时不设置路径前缀。

# MonoNight 发布页

MonoNight 的独立静态 iOS 发布介绍页。页面使用 React、TypeScript 和 Vite 构建，全部产品截图来自本地 iOS Simulator。

## 本地运行

```bash
pnpm install
pnpm run dev
```

默认预览地址：`http://127.0.0.1:5173/`。

## 验证与构建

```bash
pnpm run check
pnpm run lint
pnpm run test
pnpm run build
```

静态部署文件输出至 `dist/`。

## 发布链接

在 [`src/data/release.ts`](src/data/release.ts) 中配置：

- `appStoreUrl`
- `privacyUrl`
- `supportUrl`

链接必须使用 `https:`。未配置 App Store URL 时，页面显示 “Coming to the App Store”，不会生成无效的下载按钮。

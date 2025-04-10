# 04 Tech Context

本文件描述專案使用的技術棧、開發環境、技術限制與相依套件。

## 使用技術
- 前端：HTML5、CSS3、JavaScript ES6+
- 後端：無，純前端專案
- 資料庫：無
- 其他技術：three.js（3D 繪圖）、Canvas API

## 開發環境
- 作業系統：跨平台（Windows、macOS、Linux）
- 編輯器/IDE：VSCode
- AI 協作工具：Cline
- 語言模型：OpenRouter，使用 `openrouter/quasar-alpha`
- 版本控制：Git
- CI/CD 工具：可選，初期以本地開發為主

## 技術限制
- 僅使用前端技術，無伺服器支援
- 需兼容主流桌面瀏覽器
- 3D 效果需在 Canvas 中實現，效能需優化

## 主要相依套件
- three.js：3D 遊戲畫面渲染
- （可擴充其他工具庫）

## 整合與部署
純靜態網頁，可部署於 GitHub Pages、Vercel、Netlify 等靜態網站服務。

## 版本紀錄
- v0.1 初始化文件
- v0.2 補充技術選型與限制

# 03 System Patterns

本文件描述系統架構、設計模式、元件關係與關鍵技術決策。

## 系統架構概述
- 使用 three.js 建立 3D 場景
- 以 CatmullRom 曲線隨機生成平滑軌道
- 第一人稱視角沿軌道移動
- 畫面下方以 Canvas 2D 繪製側視圖
- 軌道兩側隨機產生物體，貼圖依左右側分開

## 關鍵設計模式
- **資料驅動**：根據隨機數據生成軌道與物體
- **組件分離**：3D 場景與 2D 側視圖分離渲染
- **資源管理**：左右貼圖分別載入，避免混用

## 元件與模組關係
- `main.js`：
  - 初始化 three.js 場景
  - 載入左右貼圖
  - 生成軌道
  - 隨機產生左右兩側物體，並套用對應貼圖
  - 控制第一人稱視角動畫
  - 繪製側視圖

## 技術決策
- 採用 CatmullRom 曲線平滑軌道，避免突兀轉折
- 左右貼圖分離，增強視覺辨識度
- 物體偏移距離加倍，避免與軌道重疊
- 使用 Vite 提升開發效率

## 安全性與擴充性考量
- 純前端架構，無資安風險
- 可擴充貼圖數量與類型
- 可替換物體為看板、事件標示
- 模組化設計，方便未來拆分功能

## 版本紀錄
- v0.1 初始化文件
- v0.2 補充系統架構與設計模式

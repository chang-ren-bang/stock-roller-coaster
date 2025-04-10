# 股市過山車模擬遊戲

以2025年川普宣布對等關稅引發全球股市震盪為背景，打造一款第一人稱過山車模擬遊戲，讓玩家沉浸式體驗股市大起大落。

---

## 專案簡介

- 使用 three.js 在 Canvas 中繪製 3D 過山車動畫
- 隨機產生平滑的過山車軌道，長度約20秒
- 第一人稱視角沿軌道移動，模擬乘坐體驗
- 畫面下方側視圖同步顯示軌道與進度
- 軌道兩側隨機分布物件，未來可替換成看板或事件標示

---

## 技術棧

- **前端框架**：純 JavaScript
- **3D 引擎**：three.js
- **開發伺服器**：Vite
- **繪圖技術**：HTML5 Canvas + WebGL

---

## 開發工具與 AI 助理

- **編輯器**：Visual Studio Code
- **AI 協作工具**：Cline
- **語言模型**：OpenRouter，使用 `openrouter/quasar-alpha`

---

### Memory Bank 自文件機制

本專案結合 **Cline** 的 **Memory Bank** 自文件機制，  
自動記錄專案背景、技術細節、架構設計與開發進度，  
形成結構化知識庫，方便團隊協作與 AI 理解上下文。

Memory Bank 會持續更新，確保專案資訊完整、可追溯，  
並輔助 AI 生成更貼合專案需求的程式碼與文件。

---

## 開發啟動

1. 安裝依賴
   ```
   npm install
   ```

2. 啟動開發伺服器
   ```
   npm run dev
   ```

3. 在瀏覽器中開啟 [http://localhost:5173](http://localhost:5173)

---

## 線上 Demo 預覽

此專案將部署於 GitHub Pages，網址為：

[https://chang-ren-bang.github.io/stock-roller-coaster/dist/](https://chang-ren-bang.github.io/stock-roller-coaster/dist/)

GitHub Pages 會使用 **`dist/` 目錄中的靜態檔案** 作為網站內容。  
每次更新程式後，請執行：

```
npm run build
```

以重新產生 `dist/` 目錄，並將其內容 push 至 GitHub，  
確保線上 demo 為最新版本。

---

## 專案結構

```
index.html            # 主頁面
style.css             # 樣式
src/main.js           # three.js 主程式
memory-bank/          # 專案知識庫
.gitignore
.clineignore
README.md
package.json
```

---

## 迷因圖素材管理

- 所有迷因圖請放置於 `public/img/` 資料夾
- Vite 打包時會自動將 `public/` 內所有檔案複製到 `dist/`
- 遊戲中會隨機載入 `img/image1.jpg` ~ `image4.jpg` 作為貼圖
- 若要新增或替換迷因圖：
  1. 將新圖檔放入 `public/img/`
  2. 確保檔名符合 `imageX.jpg` 格式
  3. 修改 `src/main.js` 中 `memeTextures` 陣列，加入或調整圖片路徑
  4. 重新執行 `npm run build`，更新 `dist/`

---

## 未來規劃

- 將兩側物件替換成具意義的看板或事件
- 增加互動功能（暫停、重播、速度調整）
- 美術優化（材質、光影、特效）
- 優化效能與相容性
- 撰寫模組化程式碼，方便擴充
- 整合更多市場事件，豐富遊戲內容

---

## 授權

MIT License

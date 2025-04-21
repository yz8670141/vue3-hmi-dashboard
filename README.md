# vue3-hmi-dashboard

🎨 使用 Vue 3 + fabric.js 製作的 HMI 畫布模擬工具  
支援矩形、圓形繪製，將擴充狀態儲存、模擬、匯出功能。

## 🔧 技術架構

- [x] Vue 3 Composition API
- [x] fabric.js 畫布引擎
- [x] Bootstrap 5 UI
- [x] Pinia 狀態管理（Day 3 會實作）
- [x] Vue Router 路由管理
- [x] Vite 開發環境

## 📦 功能進度

| 階段  | 功能                                           | 狀態      |
| ----- | ---------------------------------------------- | --------- |
| Day 1 | 畫布初始化（背景 / 尺寸）                      | ✅ 已完成 |
| Day 2 | Toolbar + 矩形 / 圓形繪製                      | ✅ 已完成 |
| Day 3 | 圖形資料存入 Pinia + 編輯器同步 + 拖曳縮放綁定 | ✅ 已完成 |
| Day 4 | 狀態模擬頁面 + 切頁資料不丟失                  | ⏳ 計畫中 |
| Day 5 | 匯出 JSON / 載入功能                           | ⏳ 計畫中 |

## 🖼️ 畫面預覽

> 可附上畫面截圖（例如 canvas 畫好圖後的畫面）

## 🚀 安裝與啟動

```bash
git clone https://github.com/你的帳號/vue3-hmi-dashboard.git
cd vue3-hmi-dashboard
npm install
npm run dev
```

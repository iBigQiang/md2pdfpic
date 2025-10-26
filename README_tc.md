# md2pdfpic

[English](./README_en.md) | [简体中文](./README.md) | 繁體中文

![Deploy gh-pages](https://github.com/iBigQiang/md2pdfpic/actions/workflows/deploy.yaml/badge.svg)

增強版 Markdown 轉 PDF 轉換器，支援長圖匯出功能。

**線上演示：** https://iBigQiang.github.io/md2pdfpic/

## 功能特性

- ✅ **Markdown 轉 PDF**：將 Markdown 文件轉換為 PDF 格式
- ✅ **長圖匯出**：全新功能！將 Markdown 匯出為長圖（PNG 格式）
- ✅ **即時預覽**：Markdown 內容的即時預覽
- ✅ **語法高亮**：程式碼區塊語法高亮顯示
- ✅ **檔案匯入**：匯入現有的 Markdown 檔案
- ✅ **響應式設計**：支援桌面端和行動端裝置

## 版本新特性

這是原始 md2pdf 專案的增強版本，包含以下改進：

1. **長圖匯出**：使用 html2canvas 新增了將 Markdown 內容匯出為長圖的功能
2. **介面優化**：重新設計的標頭，包含三個獨立的操作按鈕：
   - 📁 **匯入**：匯入 Markdown 檔案
   - 📄 **匯出為 PDF**：轉換為 PDF 格式
   - 🖼️ **匯出為長圖**：轉換為圖片格式
3. **更好的使用者體驗**：簡化的介面，無下拉選單

## 使用方法

1. **編寫或匯入**：在左側面板中輸入 Markdown 內容或匯入現有檔案
2. **預覽**：在右側面板中檢視即時預覽
3. **匯出**：選擇您喜歡的匯出格式：
   - 點選「匯出為PDF」儲存為 PDF 格式
   - 點選「匯出為長圖」儲存為長圖格式

## 技術棧

- React 16.14.0
- styled-components
- react-remarkable (Markdown 解析)
- highlight.js (語法高亮)
- html2canvas (圖片匯出)
- CodeMirror (編輯器)
- github-markdown-css (樣式)

## 開發

```bash
# 安裝依賴
npm install

# 啟動開發伺服器
npm start

# 建置生產版本
npm run build
```

## 許可證

MIT License

## 致謝

基於 realdennis 的原始 [md2pdf](https://github.com/realdennis/md2pdf) 專案。
由 iBigQiang 增強，新增了長圖匯出功能。

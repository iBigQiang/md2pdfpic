# md2pdfpic

[English](./README_en.md) | 简体中文 | [繁體中文](./README_tc.md)

![Deploy gh-pages](https://github.com/iBigQiang/md2pdfpic/actions/workflows/deploy.yaml/badge.svg)

增强版 Markdown 转 PDF 转换器，支持长图导出功能。

**在线演示：** https://iBigQiang.github.io/md2pdfpic/

## 功能特性

- ✅ **Markdown 转 PDF**：将 Markdown 文档转换为 PDF 格式
- ✅ **长图导出**：全新功能！将 Markdown 导出为长图（PNG 格式）
- ✅ **实时预览**：Markdown 内容的实时预览
- ✅ **语法高亮**：代码块语法高亮显示
- ✅ **文件导入**：导入现有的 Markdown 文件
- ✅ **响应式设计**：支持桌面端和移动端设备

## 版本新特性

这是原始 md2pdf 项目的增强版本，包含以下改进：

1. **长图导出**：使用 html2canvas 添加了将 Markdown 内容导出为长图的功能
2. **界面优化**：重新设计的头部，包含三个独立的操作按钮：
   - 📁 **导入**：导入 Markdown 文件
   - 📄 **导出为 PDF**：转换为 PDF 格式
   - 🖼️ **导出为长图**：转换为图片格式
3. **更好的用户体验**：简化的界面，无下拉菜单

## 使用方法

1. **编写或导入**：在左侧面板中输入 Markdown 内容或导入现有文件
2. **预览**：在右侧面板中查看实时预览
3. **导出**：选择您喜欢的导出格式：
   - 点击"导出为PDF"保存为 PDF 格式
   - 点击"导出为长图"保存为长图格式

## 技术栈

- React 16.14.0
- styled-components
- react-remarkable (Markdown 解析)
- highlight.js (语法高亮)
- html2canvas (图片导出)
- CodeMirror (编辑器)
- github-markdown-css (样式)

## 开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm start

# 构建生产版本
npm run build
```

## 许可证

MIT License

## 致谢

基于 realdennis 的原始 [md2pdf](https://github.com/realdennis/md2pdf) 项目。
由 iBigQiang 增强，添加了长图导出功能。

import html2canvas from 'html2canvas';

/**
 * 将预览区域导出为长图
 * @param {string} filename - 导出的文件名
 */
export const exportAsLongImage = async (filename = 'markdown-export') => {
  try {
    // 获取预览区域的DOM元素
    const previewElement = document.querySelector('.preview');
    if (!previewElement) {
      throw new Error('预览区域未找到');
    }

    // 设定最大宽度，用于自适应字体大小
    const maxWidth = 1080; // 限制最大宽度为1080px，确保字体大小合适
    
    // 创建一个临时的包装容器，添加适当的边距
    const tempWrapper = document.createElement('div');
    tempWrapper.style.cssText = `
      position: absolute;
      top: -9999px;
      left: -9999px;
      background: #ffffff;
      padding: 30px;
      box-sizing: border-box;
      width: ${maxWidth}px;
      max-width: ${maxWidth}px;
      height: auto;
      overflow: visible;
      font-size: 15px;
      line-height: 1.6;
    `;

    // 克隆预览内容
    const clonedContent = previewElement.cloneNode(true);
    
    // 移除克隆内容的滚动和尺寸限制，并优化字体显示
    clonedContent.style.cssText = `
      width: 100% !important;
      max-width: ${maxWidth - 60}px !important;
      height: auto !important;
      max-height: none !important;
      overflow: visible !important;
      padding: 20px !important;
      margin: 0 !important;
      box-sizing: border-box !important;
      font-size: 15px !important;
      line-height: 1.6 !important;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important;
      word-wrap: break-word !important;
      word-break: break-word !important;
    `;

    // 优化克隆内容中的所有文本元素字体大小
    const textElements = clonedContent.querySelectorAll('*');
    textElements.forEach(element => {
      const tagName = element.tagName.toLowerCase();
      
      // 根据元素类型设置合适的字体大小
      if (tagName === 'h1') {
        element.style.fontSize = '28px !important';
        element.style.lineHeight = '1.6 !important';
        element.style.marginBottom = '20px !important';
      } else if (tagName === 'h2') {
        element.style.fontSize = '24px !important';
        element.style.lineHeight = '1.6 !important';
        element.style.marginBottom = '18px !important';
      } else if (tagName === 'h3') {
        element.style.fontSize = '20px !important';
        element.style.lineHeight = '1.6 !important';
        element.style.marginBottom = '16px !important';
      } else if (tagName === 'h4') {
        element.style.fontSize = '18px !important';
        element.style.lineHeight = '1.6 !important';
        element.style.marginBottom = '14px !important';
      } else if (tagName === 'h5' || tagName === 'h6') {
        element.style.fontSize = '16px !important';
        element.style.lineHeight = '1.6 !important';
        element.style.marginBottom = '12px !important';
      } else if (tagName === 'p' || tagName === 'div' || tagName === 'span' || tagName === 'li') {
        element.style.fontSize = '15px !important';
        element.style.lineHeight = '1.6 !important';
        element.style.marginBottom = '12px !important';
      } else if (tagName === 'code') {
        element.style.fontSize = '14px !important';
        element.style.lineHeight = '1.6 !important';
        element.style.padding = '2px 4px !important';
        element.style.backgroundColor = '#f5f5f5 !important';
        element.style.borderRadius = '3px !important';
      } else if (tagName === 'pre') {
        element.style.fontSize = '14px !important';
        element.style.lineHeight = '1.6 !important';
        element.style.padding = '16px !important';
        element.style.backgroundColor = '#f8f8f8 !important';
        element.style.borderRadius = '6px !important';
        element.style.overflow = 'auto !important';
      } else if (tagName === 'table' || tagName === 'td' || tagName === 'th') {
        element.style.fontSize = '15px !important';
        element.style.lineHeight = '1.6 !important';
        if (tagName === 'td' || tagName === 'th') {
          element.style.padding = '8px 12px !important';
        }
      } else {
        // 其他元素的默认设置
        const computedStyle = window.getComputedStyle(element);
        const currentFontSize = parseFloat(computedStyle.fontSize);
        
        if (currentFontSize < 15) {
          element.style.fontSize = '15px !important';
        }
        element.style.lineHeight = '1.6 !important';
      }
      
      // 确保所有元素都有合适的字体族
      element.style.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif !important';
    });

    // 将克隆的内容添加到临时包装器中
    tempWrapper.appendChild(clonedContent);
    document.body.appendChild(tempWrapper);

    // 等待更长时间确保样式完全应用
    await new Promise(resolve => setTimeout(resolve, 300));

    // 使用html2canvas生成图片，使用较低的scale但确保清晰度
    const canvas = await html2canvas(tempWrapper, {
      useCORS: true,
      allowTaint: true,
      scale: 2, // 使用适中的scale值，平衡文件大小和清晰度
      backgroundColor: '#ffffff',
      scrollX: 0,
      scrollY: 0,
      logging: false,
      removeContainer: false,
      width: maxWidth,
      height: tempWrapper.scrollHeight
    });

    // 清理临时元素
    document.body.removeChild(tempWrapper);

    // 创建下载链接
    const link = document.createElement('a');
    link.download = `${filename}.png`;
    link.href = canvas.toDataURL('image/png', 0.9); // 适当压缩
    
    // 触发下载
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    return true;
  } catch (error) {
    console.error('导出长图失败:', error);
    alert('导出长图失败，请重试');
    return false;
  }
};

export default exportAsLongImage;
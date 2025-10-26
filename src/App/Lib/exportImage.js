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

    // 临时修改样式以确保完整渲染
    const originalStyles = {
      height: previewElement.style.height,
      overflow: previewElement.style.overflow,
      maxHeight: previewElement.style.maxHeight
    };

    // 设置为自动高度以显示完整内容
    previewElement.style.height = 'auto';
    previewElement.style.overflow = 'visible';
    previewElement.style.maxHeight = 'none';

    // 使用html2canvas生成图片
    const canvas = await html2canvas(previewElement, {
      useCORS: true,
      allowTaint: true,
      scale: 2, // 提高图片质量
      backgroundColor: '#ffffff',
      width: previewElement.scrollWidth,
      height: previewElement.scrollHeight,
      scrollX: 0,
      scrollY: 0
    });

    // 恢复原始样式
    previewElement.style.height = originalStyles.height;
    previewElement.style.overflow = originalStyles.overflow;
    previewElement.style.maxHeight = originalStyles.maxHeight;

    // 创建下载链接
    const link = document.createElement('a');
    link.download = `${filename}.png`;
    link.href = canvas.toDataURL('image/png');
    
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
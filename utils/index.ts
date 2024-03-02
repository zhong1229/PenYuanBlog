function formatDaysAgo(dateString: string): string {
  // 将日期字符串转换为日期对象
  const dateObject: Date = new Date(dateString);

  // 获取当前日期
  const currentDate: Date = new Date();

  // 计算日期差异的毫秒数
  const timeDifference: number = currentDate.getTime() - dateObject.getTime();

  // 计算天数
  const daysAgo: number = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  // 如果日期差异小于等于七天，则返回相对日期格式
  if (daysAgo <= 7) {
    if (daysAgo === 0) {
      return "今天";
    } else if (daysAgo === 1) {
      return "昨天";
    } else {
      return `发布于 ${daysAgo} 天前`;
    }
  } else {
    // 如果日期差异大于七天，则返回原始日期
    // 可根据实际需求自定义日期格式
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    };
    return dateObject.toLocaleDateString(undefined, options);
  }
}

export { formatDaysAgo };

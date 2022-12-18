window.onload = () => {
    const canvas = document.getElementById('chart-landscape');
    const chartHeight = pixelsPerBeat * 16;
    canvas.height = chartHeight;
    const ctx = canvas.getContext("2d");
    const chartImage = new Image();
    chartImage.src = "data:image/png;base64," + pngString;
    chartImage.onload = () => {
        const width = chartImage.width;
        const height = chartImage.height; // 縦長の画像の高さ
        const m = Math.floor(height / chartHeight);
        let totalLeft = 0;
        canvas.width = width * (m + 1);
        for (let i = 0; i < m; i++) {
            const top = height - (i + 1) * chartHeight;
            const left = totalLeft;
            totalLeft += width;
            ctx.drawImage(chartImage, 0, top, width, chartHeight, left, 0, width, chartHeight);
        }
        ctx.drawImage(chartImage, 0, 0, width, height % (chartHeight), totalLeft, chartHeight - height % chartHeight, width, height % chartHeight);
    }
}
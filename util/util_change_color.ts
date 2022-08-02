export function changeColor(colors: string[]) {
    const color = colors[Math.floor(Math.random() * colors.length)];

    const fontColor = {
        color: `${color}`,
    };

    return fontColor;
}
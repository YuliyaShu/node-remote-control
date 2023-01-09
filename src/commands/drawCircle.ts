import { mouse, Button, Point } from "@nut-tree/nut-js";

export const drawCircle = async (radius: number) => {
    mouse.config.mouseSpeed = 100;
    await mouse.pressButton(Button.LEFT);
    const position = await mouse.getPosition();
    for (let i = 1; i <= 360; i += 1) {
        const radians = i * Math.PI / 180;
        const point = new Point(radius * Math.cos(radians) + position.x - radius, radius * Math.sin(radians) + position.y);
        await mouse.move([point]);
    }
    await mouse.releaseButton(Button.LEFT);
}

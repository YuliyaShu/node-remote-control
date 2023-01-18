import { mouse, Button, down, right, up, left } from "@nut-tree/nut-js";

export const drawRectangle = async (width: number, length: number) => {
    mouse.config.mouseSpeed = 100;
    await mouse.pressButton(Button.LEFT);
    await mouse.move(down(+length));
    await mouse.move(right(+width));
    await mouse.move(up(+length));
    await mouse.move(left(+width));
    await mouse.releaseButton(Button.LEFT);
}

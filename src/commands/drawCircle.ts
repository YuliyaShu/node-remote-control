import { mouse, Button } from "@nut-tree/nut-js";

export const drawCircle = async (radius: number) => {
    await mouse.pressButton(Button.LEFT);
    // draw circle
    await mouse.releaseButton(Button.LEFT);
}

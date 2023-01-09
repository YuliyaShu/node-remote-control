import { mouse, Button, Point, EasingFunction } from "@nut-tree/nut-js";
import { calculateMovementTimesteps } from "@nut-tree/nut-js/dist/lib/mouse-movement.function.js";

export const drawCircle = async (radius: number) => {
    await mouse.pressButton(Button.LEFT);
    const position = await mouse.getPosition();
    const point = new Point(position.x + radius, position.y);
    console.log('🚀 ~ drawCircle ~ point', point);
    const easeInCirc: EasingFunction = (x: number): number => {
        return 1 - Math.sqrt(1 - Math.pow(x, 2));
        }
    // calculateMovementTimesteps(360, 100, easeInCirc);
    mouse.move([point], easeInCirc);
    
    console.log('🚀 ~ drawCircle ~ easeInCirc', easeInCirc);
    await mouse.releaseButton(Button.LEFT);
}

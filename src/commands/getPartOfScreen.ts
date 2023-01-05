import { FileType, mouse, Region, screen } from "@nut-tree/nut-js"
import fs from 'fs/promises';

const PART_SIZE = 200;

const countPosition = (dim: number, position: number) => {
    if (position - PART_SIZE / 2 < 0) {
        return 0;
    } else if (position + PART_SIZE > dim) {
        return dim - PART_SIZE;
    } else {
        return position - PART_SIZE / 2;
    } 
}
export const getPartOfScreen = async () => {
    const position = await mouse.getPosition();
    const [screenWidth, screenHeight] = [await screen.width(), await screen.height()];
    let left = countPosition(screenWidth, position.x);
    let top = countPosition(screenHeight, position.y);
    const region = new Region(left, top, PART_SIZE, PART_SIZE);
    await screen.captureRegion('img', region, FileType.PNG, './src/commands');
    return await fs.readFile('./src/commands/img.png', {encoding: 'base64'});
}

import { FileType, mouse, Region, screen } from "@nut-tree/nut-js"
import fs from 'fs/promises';
import Jimp from 'jimp';

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
    try {
        const position = await mouse.getPosition();
        const [screenWidth, screenHeight] = [await screen.width(), await screen.height()];
        let left = countPosition(screenWidth, position.x);
        let top = countPosition(screenHeight, position.y);
        const region = new Region(left, top, PART_SIZE, PART_SIZE);
        const image = await screen.grabRegion(region);
        const imgRGB = await image.toRGB()
        return await Jimp.read(new Jimp(imgRGB))
            .then(async img => {
                const imageBase64 = await img.getBase64Async(img.getMIME());
                return  imageBase64.split('data:image/png;base64,').join('');
            })
            .catch(err => {
                return new Error(`error ${err.message}`);
            })
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
            throw new Error(error.message);
        }
    }
}

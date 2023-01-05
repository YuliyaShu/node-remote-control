import { FileType, screen } from "@nut-tree/nut-js"
import fs from 'fs/promises';
export const getPartOfScreen = async () => {
    await screen.capture('img', FileType.PNG, './src/commands');
    return await fs.readFile('./src/commands/img.png', {encoding: 'base64'});
}

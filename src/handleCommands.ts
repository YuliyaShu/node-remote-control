import { Button, centerOf, down, left, mouse, Region, right, straightTo, up, screen } from "@nut-tree/nut-js";
import { drawRectangle } from "./commands/drawRectangle.js";
import { drawSquare } from "./commands/drawSquare.js";

export const handleCommands = async (data: string) => {
    console.log('🚀 ~ handleCommands ~ data', data);
    if (data) {
        
        console.log('🚀 ~ handleCommands ~ data', data);
        const [command, width, length] = data.split(' ');
        
        console.log('🚀 ~ handleCommands ~ length', Number(length));
        console.log('🚀 ~ handleCommands ~ width', Number(width));
        console.log('🚀 ~ handleCommands ~ command', command);
        
        switch (command) {
            case 'mouse_up':
                await mouse.move(up(+width));
                return data;
            case 'mouse_down':
                await mouse.move(down(+width));
                return data;
            case 'mouse_right':
                await mouse.move(right(+width));
                return data;
            case 'mouse_left':
                await mouse.move(left(+width));
                return data;
            case 'draw_square':
                drawSquare(+width);
                return data;
            case 'draw_rectangle':
                drawRectangle(+width, +length);
                return data;
            case 'draw_circle':
                await mouse.pressButton(Button.LEFT);
                // draw circle
                await mouse.releaseButton(Button.LEFT);
                return data;
            case 'mouse_position':
                const position = await mouse.getPosition();
                return data + ' ' + position.x + ',' + position.y;
            case 'prnt_scrn':
                // get screen
                return data + ' ' + screen;
        }
        
        return data;
    } else {
        throw new Error('Data is incorrect')
    }
    
}

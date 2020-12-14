import styled, { css } from 'styled-components';
import tinygradient from 'tinygradient';
import tinycolor from 'tinycolor2';
import { Cell, PropsWithTheme } from '../../@types';

const cellWidth: number = 30;

interface GameBoardProps extends PropsWithTheme {
    width: number;
    height: number;
}

const GameBoard = styled.div(({width, height, theme}: GameBoardProps) => css`
    display: grid;
    grid-template-columns: repeat(${width}, 1fr);
    grid-template-rows: repeat(${height}, 1fr);
    width: ${width * cellWidth}px;
    height: ${height * cellWidth}px;
    margin: 0 auto;  

    &:hover {
        cursor: pointer;
    }
`);

interface CellSquareProps extends PropsWithTheme {
    cell: Cell;
}

const CellSquare = styled.div(({ cell, theme }: CellSquareProps) => {
    let background = theme.grey;
    if(cell.isVisible) background = theme.lightGrey
    if(cell.isVisible && cell.hasMine) background = theme.warn;

    const gradient = tinygradient(tinycolor(theme.primary), tinycolor(theme.warn));
    const colors: tinycolor.Instance[] = gradient.rgb(7);
    let color: string = theme.dark;
    if(cell.neighborMines > 0) {
        color = colors[cell.neighborMines - 1].toHexString()
    }

    return css`
    color: ${color};
    display: flex;
    background: ${background};
    justify-content: center;
    align-items: center;
    ${cell.isVisible && `
    border-top: ${cell.x === 0 ? `1px solid ${theme.darkGrey}` : 0};
    border-left: ${cell.y === 0 ? `1px solid ${theme.darkGrey}` : 0};
    border-right: 1px solid ${theme.darkGrey};
    border-bottom: 1px solid ${theme.darkGrey};`
    }   
    box-shadow: ${!cell.isVisible ? `inset 1px 1px 1px ${theme.light}, inset -1px -1px 0px ${theme.dark}` : 0};

    &:hover {
        cursor: pointer;
    }

    img {
        width: ${cellWidth/2}px;
    }
`});

const Button = styled.button(({ theme }: PropsWithTheme) => css`
    margin: 0 auto;
    border: 1px solid ${theme.darkGrey};
    border-radius: 0;
    padding: 5px 10px;
    background: ${theme.grey};
    box-shadow: inset 1px 1px 1px ${theme.light}, inset -1px -1px 0px ${theme.dark};
    color: ${theme.primary};
    user-select: none;

    &:hover {
        cursor: pointer;
    }

    &:focus {
        outline: none;
    }

    &:active {
        box-shadow: none;
        background: ${theme.lightGrey};
    }
`);

const Container = styled.div(({ theme }: PropsWithTheme) => css`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${theme.grey};
    padding: 20px;
    box-shadow: inset 1px 1px 1px ${theme.light}, inset -1px -1px 0px ${theme.dark};
    border: 2px solid ${theme.primary};
    user-select: none;

    h1 {
        color: ${theme.warn};
    }
`);

const ControlsBar = styled.div(({ theme }: PropsWithTheme) => css`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-bottom: 20px;
`);

const MinesDisplay = styled.div(({ theme }: PropsWithTheme) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 83px;
    border: 1px solid ${theme.darkGrey};
    border-radius: 0;
    padding: 5px 10px;
    background: ${theme.darkGrey};
    box-shadow: inset 1px 1px 1px ${theme.dark}, inset -1px -1px 0px ${theme.light};
    color: ${theme.primary};
    font-size: 14px;
`)

const Timer = styled.div(({ theme }: PropsWithTheme) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    width: 83px;
    border: 1px solid ${theme.darkGrey};
    border-radius: 0;
    padding: 5px 10px;
    background: ${theme.darkGrey};
    box-shadow: inset 1px 1px 1px ${theme.dark}, inset -1px -1px 0px ${theme.light};
    color: ${theme.primary};
    font-size: 14px;
`)

export const Styled = { 
    GameBoard,
    CellSquare, 
    Button,
    Container,
    ControlsBar,
    MinesDisplay,
    Timer,
}
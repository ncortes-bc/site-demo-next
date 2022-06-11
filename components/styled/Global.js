import { createGlobalStyle } from 'styled-components';

export const contentfulWidth = '1150px';
export const mediumWidth = '800px';
export const mobileWidth = '550px';
export const contentfulSide = `(100vw - ${contentfulWidth}) / 2`;
export const mediumSide = `(100vw - ${mediumWidth}) / 2`;
export const mobileSide = `(100vw - ${mobileWidth}) / 2`;
export const orange = '#ffb400';
export const black = '#292D33';

const Global = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html, body {
        overflow-x: hidden;
        margin: 0;
        padding: 0;
    }
`;

export default Global;

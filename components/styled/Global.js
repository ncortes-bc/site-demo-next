import { createGlobalStyle } from 'styled-components';

export const contentfulWidth = '1150px';
export const sidebarWidth = `(100vw - ${contentfulWidth}) / 2`;
export const orange = '#ffb400';

const Global = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html, body {
        overflow-x: hidden;
        margin: 0;
        padding: 0;
    }
`
export default Global
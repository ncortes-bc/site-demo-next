import { createGlobalStyle } from 'styled-components';

export const contentfulWidth = '1150px';
export const orange = '#ffb400';

const Global = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html, body {
        margin: 0;
        padding: 0;
    }
`
export default Global
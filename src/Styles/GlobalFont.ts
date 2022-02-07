import { createGlobalStyle } from 'styled-components';
// 각 폰트 파일 import
import Font_L from '../Assets/Fonts/Font-Light.woff';
import Font_R from '../Assets/Fonts/Font-Regular.woff';
import Font_B from '../Assets/Fonts/Font-Bold.woff';

export default createGlobalStyle`
    @font-face {
        font-family: "Font_test";
        src: local("Font_test"), url(${Font_L}) format('woff'); 
        font-weight: lighter;
    }
    @font-face {
        font-family: "Font_test";
        src: local("Font_test"), url(${Font_R}) format('woff');
        font-weight: normal;
    }
    @font-face {
        font-family: "Font_test";
        src: local("Font_test"), url(${Font_B}) format('woff');
        font-weight: bold;
    }
`;

// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
    export interface DefaultTheme {
        grid: {
            container: string
            gutter: string
        },
        border: {
            radius: string
        },
        colors: {
            text: string
            background: string
        }
    }
}
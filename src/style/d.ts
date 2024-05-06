import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
            font: {
                fontFamily: string,
                weight: {
                    thin: number,
                    light: number,
                    regular: number,
                    medium: number,
                    bold: number,
                    black: number,
                },
                fontStyle: string,
                size: {
                    px12: string,
                    px14: string,
                    px16: string,
                    px20: string,
                    px28: string,
                    px32: string,
                    px36: string,
                    px44: string,
                    px56: string
                }          
            },
            light: {
                primary: string,
                secondary: string,
                tertiary: string,
                tertiaryHover: string,
                tertiaryFocus: string,
                teriaryPressed: string,
                tertiaryDragged: string,
                onPrimary: string,
                onSecondary: string,
                onTertiary: string,
            }
    }
}
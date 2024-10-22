/* eslint-disable @typescript-eslint/no-empty-object-type */
import { defaultTheme } from "../components/styles/themes/default";
import 'styled-components'


type ThemeType = typeof defaultTheme

declare module 'styled-components'{
    export interface DefaultTheme extends ThemeType{}
}

// definindo a tipagem de cores, para que possa ser exportada automaticamente por styled-components
import 'styled-components';
import { TypeMixin, TypeVariable } from '../../Styles/Theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    variable: TypeVariable;
    mixin: TypeMixin;
  }
}

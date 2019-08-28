import React, { HTMLAttributes, FC } from 'react';
import {
  ThemeConsumer,
  ThemeProp,
  mergeThemeProps,
  ThemeContext,
  ColorName,
  FontSize,
} from '../theme/context';
import { styled } from 'linaria/react';

type BadgeProps = {
  theme?: ThemeProp;
  color?: ColorName;
  fontSize?: FontSize;
} & HTMLAttributes<HTMLDivElement>;

const StyledBadge = styled.div<{
  theme$: ThemeContext;
  color$?: ColorName;
  fontSize$?: FontSize;
}>`
  color: ${({ theme$ }) => theme$.colors.secondaryContrast};
  background-color: ${({ theme$, color$ }) =>
    theme$.colors[color$ ? color$ : 'secondaryAccent']};
  border-radius: 3px;
  padding: 0.5rem;
  font-size: ${({ theme$, fontSize$ }) =>
    theme$.font[fontSize$ ? fontSize$ : 'small']};
  line-height: 1rem;
  white-space: nowrap;
  max-height: 2rem;
  display: inline-flex;
`;

export const Badge: FC<BadgeProps> = ({ theme: propsTheme, ...props }) => (
  <ThemeConsumer>
    {ctx => (
      <StyledBadge
        {...props}
        theme$={mergeThemeProps(ctx, propsTheme)}
        color$={props.color}
        fontSize$={props.fontSize}
      />
    )}
  </ThemeConsumer>
);

"use client"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Carousel from 'react-material-ui-carousel';

import {
  StyledButtonWrapper,
  StyledIconButton,
} from 'react-material-ui-carousel/dist/components/Styled';
import { sanitizeProps } from 'react-material-ui-carousel/dist/components/util';

export default function Arrow({ action }: { action: () => void }) {
  const {
    NavButton,
    PrevIcon,
    NextIcon,
    navButtonsWrapperProps,
    navButtonsProps,
  } = sanitizeProps({});
  return (
    <StyledButtonWrapper
      $next={action.name === 'next'}
      $prev={action.name === 'previous'}
      $fullHeightHover={true}
      {...navButtonsWrapperProps}
    >
      {NavButton !== undefined ? (
        NavButton({
          onClick: action,
          next: action.name === 'next',
          prev: action.name === 'previous',
          ...navButtonsProps,
        })
      ) : (
        <StyledIconButton
          $alwaysVisible={false}
          $fullHeightHover={true}
          onClick={action}
          aria-label={action.name}
        >
          {action.name === 'next' ? NextIcon : PrevIcon}
        </StyledIconButton>
      )}
    </StyledButtonWrapper>
  );
}

"use client"

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

export function PrevArrow({action}: { action: () => void }) {
  const {
    NavButton,
    PrevIcon,
    navButtonsWrapperProps,
    navButtonsProps,
  } = sanitizeProps({});
  return (
    <StyledButtonWrapper
      $next={false}
      $prev
      $fullHeightHover={true}
      {...navButtonsWrapperProps}
    >
      {NavButton !== undefined ? (
        NavButton({
          onClick: action,
          next: false,
          prev: true,
          ...navButtonsProps,
        })
      ) : (
        <StyledIconButton
          $alwaysVisible={false}
          $fullHeightHover={true}
          onClick={action}
          aria-label={action.name}
        >
          {PrevIcon}
        </StyledIconButton>
      )}
    </StyledButtonWrapper>
  );
}

export function NextArrow({action}: { action: () => void }) {
  const {
    NavButton,
    NextIcon,
    navButtonsWrapperProps,
    navButtonsProps,
  } = sanitizeProps({});
  return (
    <StyledButtonWrapper
      $next
      $prev={false}
      $fullHeightHover={true}
      {...navButtonsWrapperProps}
    >
      {NavButton !== undefined ? (
        NavButton({
          onClick: action,
          next: true,
          prev: false,
          ...navButtonsProps,
        })
      ) : (
        <StyledIconButton
          $alwaysVisible={false}
          $fullHeightHover={true}
          onClick={action}
          aria-label={action.name}
        >
          {NextIcon}
        </StyledIconButton>
      )}
    </StyledButtonWrapper>
  );
}
import React from 'react';
import styled from 'styled-components';
import { MessageType } from '../../app';
import { breakpoints, defaultTextColour, FontSize, spacings, systemStates } from '../../styles';
import { InputTheme } from './input_theme';
import { Text } from '../text';

const messageColours = {
  [MessageType.TEXT]: defaultTextColour,
  [MessageType.WARNING]: systemStates.warning,
  [MessageType.ERROR]: systemStates.error,
};

const Root = styled.div`
  padding: ${spacings.xs} 0;
`;

interface MessageProps {
  theme: InputTheme;
  type: MessageType;
}

const Message = styled(Text)<MessageProps>`
  color: ${({ type }) => messageColours[type]};
`;

interface InputMessageProps {
  className?: string;
  theme: InputTheme;
  size?: FontSize;
  type?: MessageType;
  message?: string;
}

export const InputMessage: React.FunctionComponent<InputMessageProps> = ({
  className,
  theme,
  size = 'xs',
  type = MessageType.TEXT,
  message,
  children,
}) => (
  <Root className={className}>
    <Message theme={theme} type={type} size={size} weight={type === MessageType.TEXT ? 'normal' : 'semibold'}>
      {message || children}
    </Message>
  </Root>
);

export const FixedInputMessage = styled(InputMessage)`
  @media (min-width: ${parseInt(breakpoints.s) + 1}px) {
    position: absolute;
    bottom: ${spacings.m};
    transform: translateY(100%);
  }
`;

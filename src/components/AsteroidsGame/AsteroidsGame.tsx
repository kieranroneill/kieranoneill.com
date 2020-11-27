import React, { createRef, useEffect, useState } from 'react';
import styled from 'styled-components';

// Constants.
import { GameConstants } from './constants';

// Main.
import Game from './Game';

// Themes.
import palette from '../../theme/palette';

interface IProps {
  onClose?: () => void;
}

const height: number = 570;
const width: number = 760;

const StyledButton = styled.button`
  margin: 2rem 0 0;
`;
const Container = styled.div`
  background-color: ${palette.greyScale.darkGrey};
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  position: relative;
  width: 100%;
`;
const Wrapper = styled.div`
  bottom: 0;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 999;
`;

export const AsteroidsGame: React.FC<IProps> = ({ onClose }: IProps) => {
  const canvasRef: React.RefObject<HTMLCanvasElement> = createRef<
    HTMLCanvasElement
  >();
  const [game, setGame] = useState<Game | null>(null);
  let intervalId: number;

  useEffect(() => {
    if (canvasRef.current && !game) {
      setGame(new Game(canvasRef.current, height, width));
    }
  }, [canvasRef]);

  useEffect(() => {
    if (game) {
      document.addEventListener('keydown', game.onKeyDown.bind(game));
      document.addEventListener('keyup', game.onKeyUp.bind(game));

      intervalId = window.setInterval(
        game.update.bind(game),
        1000 / GameConstants.FPS
      );
    }

    return function cleanup() {
      if (game) {
        document.removeEventListener('keydown', game.onKeyDown);
        document.removeEventListener('keyup', game.onKeyUp);
      }

      if (intervalId) {
        window.clearInterval(intervalId);
      }
    };
  }, [game]);

  return (
    <Wrapper>
      <Container>
        <canvas height={height} ref={canvasRef} width={width} />
        <StyledButton onClick={() => onClose && onClose()}>I Quit</StyledButton>
      </Container>
    </Wrapper>
  );
};

export default AsteroidsGame;

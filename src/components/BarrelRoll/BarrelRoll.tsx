import React, { useEffect, useState } from 'react';

// Components.
import RollAnimation from '../RollAnimation';

interface IProps {
  onComplete?: () => void;
  roll: boolean;
}

export const BarrelRoll: React.FC<IProps> = ({ onComplete, roll }: IProps) => {
  const [isRolling, setIsRolling] = useState<boolean>(false);
  const handleAnimationEnd = (e: DocumentEventMap['animationend']) => {
    document.body.classList.remove('roll');
    setIsRolling(false);

    if (e.animationName === RollAnimation.getName() && onComplete) {
      onComplete();
    }
  };

  useEffect(() => {
    document.body.addEventListener('animationend', handleAnimationEnd);

    return function cleanup() {
      document.body.removeEventListener('animationend', handleAnimationEnd);
    };
  });

  useEffect(() => {
    if (roll && !isRolling) {
      document.body.classList.add('roll');
      setIsRolling(true);
    }
  }, [roll]);

  return null;
};

export default BarrelRoll;

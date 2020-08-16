import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { CSSTransitionProps } from 'react-transition-group/CSSTransition';

type Animation = 'zoom-in-top' | 'zoom-in-right' | 'zoom-in-bottom' | 'zoom-in-left';

// 有些内部存在transition会产生冲突，因此，需要在外面包一层wrap（比如button)
interface TransitionProps extends CSSTransitionProps {
  animation?: Animation;
  wrap?: boolean;
}

const Transition: React.FC<TransitionProps> = (props) => {
  const { animation, children, classNames, timeout, wrap, ...restProps } = props;
  return (
    <CSSTransition timeout={timeout} classNames={classNames || animation} {...restProps}>
      {/* {wrap ? <div>{children}</div> : { children }} */}
      {wrap ? <div>{children}</div> : children}
    </CSSTransition>
  );
};

Transition.defaultProps = {
  unmountOnExit: true,
  appear: true,
  timeout: 300,
  wrap: false
};

export default Transition;

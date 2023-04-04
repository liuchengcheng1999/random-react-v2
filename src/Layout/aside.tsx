import React from 'react';
import {scopedClassMaker} from '../helpers/classmaker';

interface Props extends React.HTMLAttributes<HTMLElement> {
}

const sc = scopedClassMaker('random-react-layout');
const Aside: React.FunctionComponent<Props> = (props) => {
  const {className, ...rest} = props;
  return (
    <div className={sc('aside', {extra: className})} {...rest}>
      {props.children}
    </div>
  );
};

export default Aside;
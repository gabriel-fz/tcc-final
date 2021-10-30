import React from 'react';

import Img1 from '../../../assets/derivada1.png';
import Img2 from '../../../assets/exemplo-derivada1.png';

import DefaultDerivatives from '../_Default';

const Derivative1: React.FC = () => {
  return (
    <DefaultDerivatives
      formulaImage={Img1}
      exampleImage={Img2}
      formulaCurve="x^2"
      formulaDerivative="2 * x"
      domain={[-1, 9]}
    />
  );
};

export default Derivative1;

import React from 'react';

import Img1 from '../../../assets/derivada4.png';
import Img2 from '../../../assets/exemplo-derivada4.png';

import DefaultDerivatives from '../_Default';

const Derivative4: React.FC = () => {
  return (
    <DefaultDerivatives
      formulaImage={Img1}
      exampleImage={Img2}
      formulaCurve="exp(2 * x)"
      formulaDerivative="2 * exp(2 * x)"
      domain={[-2, 8]}
    />
  );
};

export default Derivative4;

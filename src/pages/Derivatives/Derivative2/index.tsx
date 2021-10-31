import React from 'react';

import Img1 from '../../../assets/derivada2.png';
import Img2 from '../../../assets/exemplo-derivada2.png';

import DefaultDerivatives from '../_Default';

const Derivative2: React.FC = () => {
  return (
    <DefaultDerivatives
      formulaImage={Img1}
      exampleImage={Img2}
      formulaCurve="(x^2) * sin(x)"
      formulaDerivative="(2 * x * sin(x)) + ((x^2) * cos(x))"
      domain={[-5, 5]}
    />
  );
};

export default Derivative2;

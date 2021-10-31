import React from 'react';

import Img1 from '../../../assets/derivada3.png';
import Img2 from '../../../assets/exemplo-derivada3.png';

import DefaultDerivatives from '../_Default';

const Derivative3: React.FC = () => {
  return (
    <DefaultDerivatives
      formulaImage={Img1}
      exampleImage={Img2}
      formulaCurve="sin(2 * x)"
      formulaDerivative="2 * cos(2 * x)"
      domain={[-5, 5]}
    />
  );
};

export default Derivative3;

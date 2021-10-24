import React from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
} from 'react-router-dom';

import Default from '../pages/_layouts/default';

interface RouteProps extends ReactDOMRouteProps {
  component: React.ComponentType;
  layoutType: 'default' | 'none';
}

const Route: React.FC<RouteProps> = ({
  component: Component,
  layoutType,
  ...rest
}) => {
  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return (
          <>
            {layoutType === 'default' ? (
              <Default>
                <Component />
              </Default>
            ) : (
              <Component />
            )}
          </>
        );
      }}
    />
  );
};

export default Route;

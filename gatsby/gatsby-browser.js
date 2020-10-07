import React from 'react';
import Layout from './src/components/Layout';
import { OrderProvider } from './src/components/OrderContext';

// This allows for wrapping every page in a layout component
export function wrapPageElement({ element, props }) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Layout {...props}>{element}</Layout>;
}

// This allows the Root to be wrapped in a component in this case context provider
export function wrapRootElement({ element }) {
  return <OrderProvider>{element}</OrderProvider>;
}

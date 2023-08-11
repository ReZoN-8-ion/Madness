import React from 'react';
import { useOrgData } from '@shopify/app-bridge-react';

// A component that uses the org data from the app bridge context
export function WithOrgData(props: { children: React.ReactNode }) {
  const orgData = useOrgData();

  // If the org data is not available, show a loading message
  if (orgData == null) {
    return <div>Loading...</div>;
  }

  // Otherwise, pass the org data as a prop to the children
  return React.cloneElement(React.Children.only(props.children), {
    orgData,
  });
}
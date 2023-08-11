import React from 'react';
import { useAppBridge } from '@shopify/app-bridge-react';
import { PlusExperience } from '@shopify/app-bridge/actions';

// A context that provides access to the plus experience action
export const PlusExperienceContext = React.createContext<PlusExperience | null>(
  null,
);

// A provider that creates and provides the plus experience action
export function PlusExperienceProvider(props: { children: React.ReactNode }) {
  const app = useAppBridge();
  const plusExperience = PlusExperience.create(app);

  return (
    <PlusExperienceContext.Provider value={plusExperience}>
      {props.children}
    </PlusExperienceContext.Provider>
  );
}

// A hook that consumes the plus experience context
export function usePlusExperience() {
  const plusExperience = React.useContext(PlusExperienceContext);
  if (plusExperience == null) {
    throw new Error(
      'usePlusExperience must be used within a PlusExperienceProvider',
    );
  }
  return plusExperience;
}

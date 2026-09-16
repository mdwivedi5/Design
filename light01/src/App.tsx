import React from 'react';
import { Dashboard } from './pages/Dashboard';

interface AppProps {
  riskState?: 'clear' | 'active';
}

export function App({ riskState = 'active' }: AppProps) {
  return <Dashboard riskState={riskState} />;
}
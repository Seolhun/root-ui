import { Component, ErrorInfo } from 'react';

import { SuspenseErrorBoundaryProps } from './SuspenseImage.types';

export class SuspenseImageErrorBoundary extends Component<SuspenseErrorBoundaryProps> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown, errorInfo: ErrorInfo) {
    console.debug(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.error;
    }
    return this.props.children;
  }
}

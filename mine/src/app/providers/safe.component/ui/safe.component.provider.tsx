import React from "react";

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

export default class SafeComponent extends React.Component {
  state: State = {
    hasError: false
  };

  constructor(props: Props) {
    super(props);
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: error };
  }

  render() {
    if (this.state.hasError) {
      console.error("MF FAILED WITH ERROR:", this.state.hasError);
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

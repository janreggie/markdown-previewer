import React from 'react';
import './App.scss';
import Header from './Header';
import Markdown from './Markdown';

class App extends React.Component<{}, { markdown: string }> {
  render(): JSX.Element {
    return (
      <div className="App" id="app">
        <Header />
        <Markdown />
      </div>
    );
  }
}

export default App;

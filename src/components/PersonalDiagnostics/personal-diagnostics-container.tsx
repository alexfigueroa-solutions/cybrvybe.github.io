import React from 'react';
import AnimatedTyper from '../AnimatedTyper/animated_typer';
import './personal-diagnostics-container.scss';
export default class PersonalDiagnosticsContainer extends React.Component {
  render() {
    const { diagnostics_entry_list = [] } = this.props;
    return (
      <div className="diagnosticsContainer">
        <div className="diagnosticsDisplay">
          {diagnostics_entry_list.map((diagnostic) => (
            <div>
              <AnimatedTyper
                prompt={diagnostic.prompt + ': ' + diagnostic.answer}
                font="Digitatron"
                font_size="0.8"
              ></AnimatedTyper>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

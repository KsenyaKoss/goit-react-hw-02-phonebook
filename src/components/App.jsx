import { Component } from 'react';
import { Section } from './Section/Sectiion';
import { Form } from './Form/Form';
export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <>
        <Section title="Phonebook">
          <Form value={this.state.name}></Form>
        </Section>
      </>
    );
  }
}

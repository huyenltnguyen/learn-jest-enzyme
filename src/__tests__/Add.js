import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Add from '../Add';

configure({ adapter: new Adapter() });

describe('Add', () => {
  let add;
  let onAdd;

  beforeEach(() => {
    onAdd = jest.fn();
    add = mount(<Add onAdd={ onAdd } />);
  });

  it('Add requires onAdd prop', () => {
    expect(add.props().onAdd).toBeDefined();
  });

  it('Add renders button', () => {
    const button = add.find('button').first();
    expect(button).toBeDefined();
  });

  it('Button click calls onAdd', () => {
    const button = add.find('button').first();
    const input = add.find('input').first();
    input.simulate('change', { target: { value: 'Name 4' } });
    button.simulate('click');
    expect(onAdd).toBeCalledWith('Name 4');
  });
});
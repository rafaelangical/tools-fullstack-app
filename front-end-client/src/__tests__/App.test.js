import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import renderer from 'react-test-renderer';
import {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

Enzyme.configure({ adapter: new Adapter() })

describe('Test if App is rendered correctly', () => {
  test('renders correctly App', () => {
    const tree = renderer.create(
      <App />
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('test a state of App', () => {
  test('have data state', () => {
    const wrapper = shallow(<App />);
    const dataState = wrapper.state('data');
    expect(dataState).toBeDefined();
  });
  
  test('have search state', () => {
    const wrapper = shallow(<App />);
    const searchState = wrapper.state('search');
    expect(searchState).toBeDefined();
  });

  test('have id state', () => {
    const wrapper = shallow(<App />);
    const idState = wrapper.state('id');
    expect(idState).toBeDefined();
  });

  test('have withTag state', () => {
    const wrapper = shallow(<App />);
    const withTagState = wrapper.state('withTag');
    expect(withTagState).toBeDefined();
  });

  test('have isOpen state', () => {
    const wrapper = shallow(<App />);
    const isOpenState = wrapper.state('isOpen');
    expect(isOpenState).toBeDefined();
  });

  test('have isOpenAdd state', () => {
    const wrapper = shallow(<App />);
    const isOpenAddState = wrapper.state('isOpenAdd');
    expect(isOpenAddState).toBeDefined();
  });

});

describe('test setState', () => {
  test('test setState of data', () => {
    const wrapper = mount(<App />);
    wrapper.setState({ data: [] });
  });

  test('test setState of search', () => {
    const wrapper = mount(<App />);
    wrapper.setState({ search: 'search test of setstate' });
  });
  
  test('test setState of id', () => {
    const wrapper = mount(<App />);
    wrapper.setState({ id: 1 });
  });
  
  test('test setState of withTag', () => {
    const wrapper = mount(<App />);
    wrapper.setState({ withTag: 'tagtest' });
  });
  
  test('test setState of  isOpen', () => {
    const wrapper = mount(<App />);
    wrapper.setState({ isOpen: true });
  });

  test('test setState of isOpenAdd', () => {
    const wrapper = mount(<App />);
    wrapper.setState({ isOpenAdd: true });
  });
});

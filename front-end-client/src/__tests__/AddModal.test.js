import React from 'react';
import AddModal from '../components/AddModal';
import renderer from 'react-test-renderer';
import {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

Enzyme.configure({ adapter: new Adapter() })

describe('Test if AddModal is rendered correctly', () => {
  test('renders correctly AddModal', () => {
    const tree = renderer.create(
      <AddModal />
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('test a state of AddModal', () => {
  test('have title state', () => {
    const wrapper = shallow(<AddModal />);
    const titleState = wrapper.state('title');
    expect(titleState).toBeDefined();
  });
  
  test('have description state', () => {
    const wrapper = shallow(<AddModal />);
    const descriptionState = wrapper.state('description');
    expect(descriptionState).toBeDefined();
  });

  test('have link state', () => {
    const wrapper = shallow(<AddModal />);
    const linkState = wrapper.state('link');
    expect(linkState).toBeDefined();
  });

  test('have tags state', () => {
    const wrapper = shallow(<AddModal />);
    const tagsState = wrapper.state('tags');
    expect(tagsState).toBeDefined();
  });

});

describe('test setState', () => {
  test('test setState of title', () => {
    const wrapper = mount(<AddModal />);
    wrapper.setState({ title: 'title test' });
  });

  test('test setState of description', () => {
    const wrapper = mount(<AddModal />);
    wrapper.setState({ description: 'description test of setstate' });
  });
  
  test('test setState of link', () => {
    const wrapper = mount(<AddModal />);
    wrapper.setState({ link: 'globo.com' });
  });
  
  test('test setState of tags', () => {
    const wrapper = mount(<AddModal />);
    wrapper.setState({ tags: 'jsjsj' });
  });    
});

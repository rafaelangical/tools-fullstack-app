import React from 'react';
import RemoveModal from '../components/RemoveModal';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

Enzyme.configure({ adapter: new Adapter() })

describe('Test if RemoveModal is rendered correctly', () => {
  test('renders correctly removeModal', () => {
    const tree = renderer.create(
      <RemoveModal />
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

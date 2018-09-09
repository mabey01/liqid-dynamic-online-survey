import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';

global.expect = expect;
Enzyme.configure({ adapter: new Adapter() });
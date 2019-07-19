import React from 'react';
import { shallow } from 'enzyme'
import { RowHeader } from './RowHeader'

describe('RowHeader', (): void => {
    it('renders correctly', (): void => {
        const rowHeader = shallow(<RowHeader />);
        expect(rowHeader).toMatchSnapshot();
    })
});

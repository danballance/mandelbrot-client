import React from 'react';
import { shallow } from 'enzyme'
import { ColumnInfo } from './ColumnInfo'

describe('ColumnInfo', (): void => {
    it('renders correctly', (): void => {
        const columnInfo = shallow(<ColumnInfo />);
        expect(columnInfo).toMatchSnapshot();
    })
});

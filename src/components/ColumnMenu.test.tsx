import React from 'react';
import { shallow } from 'enzyme'
import { ColumnMenu } from './ColumnMenu'

const onResetClicked = jest.fn();
const onZoomInClicked = jest.fn();
const onZoomOutClicked = jest.fn();

const columnMenu = shallow(<ColumnMenu
    onResetClicked={onResetClicked}
    onZoomInClicked={onZoomInClicked}
    onZoomOutClicked={onZoomOutClicked} 
/>);

describe('ColumnMenu', (): void => {
    it('trigggers onZoomInClicked when zoom in button clicked', (): void => {
        columnMenu
            .find('Container.controls ButtonGroup Button#zoom-in')
            .simulate('click');
        expect(onZoomInClicked).toHaveBeenCalled();
    })

    it('trigggers onZoomOutClicked when zoom out button clicked', (): void => {
        columnMenu
            .find('Container.controls ButtonGroup Button#zoom-out')
            .simulate('click');
        expect(onZoomOutClicked).toHaveBeenCalled();
    })

    it('trigggers onResetClicked when zoom reset button clicked', (): void => {
        columnMenu
            .find('Container.controls Button#zoom-reset')
            .simulate('click');
        expect(onResetClicked).toHaveBeenCalled();
    })

    it('renders correctly', (): void => {
        expect(columnMenu).toMatchSnapshot();
    })
});

import React from 'react';
import { shallow } from 'enzyme'
import { ColumnDebugTable } from './ColumnDebugTable'
import { Mandlebrot } from '../Mandlebrot'

const mandlebrotStruct = Mandlebrot().init(400, -0.5, 0.0, 2.5, 100, 200);
const columnDebugTable = shallow(<ColumnDebugTable
    mandlebrotStruct={mandlebrotStruct}
    url='https://localhost/api'
    imageLoaded={false}
    mouseX={320}
    mouseY={120}
    newR={0.00}
    newJ={-0.75}
    size={400}
/>);

describe('ColumnDebugTable', (): void => {
    it('sets the mouseX cell correctly', (): void => {
        expect(
            columnDebugTable.find('TableCell#mouseX').render().text()
        ).toBe('320px');
    })

    it('sets the mouseY cell correctly', (): void => {
        expect(
            columnDebugTable.find('TableCell#mouseY').render().text()
        ).toBe('120px');
    })

    it('sets the newR cell correctly', (): void => {
        expect(
            columnDebugTable.find('TableCell#newR').render().text()
        ).toBe('0');
    })

    it('sets the newJ cell correctly', (): void => {
        expect(
            columnDebugTable.find('TableCell#newJ').render().text()
        ).toBe('-0.75');
    })

    it('sets the magnification cell correctly', (): void => {
        expect(
            columnDebugTable.find('TableCell#magnification').render().text()
        ).toBe('2.5');
    })

    it('sets the size cell correctly', (): void => {
        expect(
            columnDebugTable.find('TableCell#size').render().text()
        ).toBe('400px');
    })

    it('sets the r cell correctly', (): void => {
        expect(
            columnDebugTable.find('TableCell#r').render().text()
        ).toBe(mandlebrotStruct.r.toString());
    })

    it('sets the rmin cell correctly', (): void => {
        expect(
            columnDebugTable.find('TableCell#rmin').render().text()
        ).toBe(mandlebrotStruct.rmin.toString());
    })

    it('sets the rmax cell correctly', (): void => {
        expect(
            columnDebugTable.find('TableCell#rmax').render().text()
        ).toBe(mandlebrotStruct.rmax.toString());
    })

    it('sets the j cell correctly', (): void => {
        expect(
            columnDebugTable.find('TableCell#j').render().text()
        ).toBe(mandlebrotStruct.j.toString());
    })

    it('sets the jmin cell correctly', (): void => {
        expect(
            columnDebugTable.find('TableCell#jmin').render().text()
        ).toBe(mandlebrotStruct.jmin.toString());
    })

    it('sets the jmax cell correctly', (): void => {
        expect(
            columnDebugTable.find('TableCell#jmax').render().text()
        ).toBe(mandlebrotStruct.jmax.toString());
    })

    it('sets the iterations cell correctly', (): void => {
        expect(
            columnDebugTable.find('TableCell#iterations').render().text()
        ).toBe('100');
    })

    it('sets the dpi cell correctly', (): void => {
        expect(
            columnDebugTable.find('TableCell#dpi').render().text()
        ).toBe('200');
    })

    it('renders correctly', (): void => {
        expect(columnDebugTable).toMatchSnapshot();
    })
});

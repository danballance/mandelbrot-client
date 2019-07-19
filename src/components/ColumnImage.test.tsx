import React from 'react';
import { shallow, mount } from 'enzyme'
import { ColumnImage } from './ColumnImage'

const onImageLoad = jest.fn();
const onMouseMove = jest.fn();
const onImageClicked = jest.fn();

const columnImage = mount(<ColumnImage 
    size={400}
    url="https://localhost/api"
    imageLoaded={false}
    onImageLoad={onImageLoad}
    onMouseMove={onMouseMove}
    onImageClicked={onImageClicked}
/>);

describe('ColumnImage', (): void => {
    it('sets the passed URL as the image src', (): void => {
        const image = columnImage.find('GridColumn div.imageWrapper img');
        expect(image.prop('src')).toBe('https://localhost/api');
    })

    it('sets display=none when props.imageLoaded is false', (): void => {
        const image = columnImage.find('GridColumn div.imageWrapper img');
        expect(image.get(0).props.style).toHaveProperty('display', 'none');
    })

    it('sets display=block when props.imageLoaded is true', (): void => {
        columnImage.setProps({imageLoaded: true});
        const image = columnImage.find('GridColumn div.imageWrapper img');
        expect(image.get(0).props.style).toHaveProperty('display', 'block');
    })

    it('triggers onImageClicked when image is clicked', (): void => {
        columnImage
            .find('GridColumn div.imageWrapper img')
            .simulate('click');
        expect(onImageClicked).toHaveBeenCalled();
    })

    it('triggers onImageLoad when the image loads', (): void => {
        columnImage
            .find('GridColumn div.imageWrapper img')
            .simulate('load');
        expect(onImageLoad).toHaveBeenCalled();
    })

    it('renders correctly', (): void => {
        const columnImage = shallow(<ColumnImage 
            size={400}
            url="https://localhost/api"
            imageLoaded={false}
            onImageLoad={onImageLoad}
            onMouseMove={onMouseMove}
            onImageClicked={onImageClicked}
        />);
        expect(columnImage).toMatchSnapshot();
    })
});

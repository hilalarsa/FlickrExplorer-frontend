/**
 * @jest-environment jsdom
 */

import React from 'react'
import ReactDOM from 'react-dom'

import { render } from '@testing-library/react'
import Image from 'next/image'
import CardImage from './index'
// import { getImages } from '../../helper/api'

// const callAPI = async () => {
//     const res = await getImages()
//     const data = await res

//     return data
// }

const mockObject = {
    title: 'titletitletitletitletitletitle titletitletitletitle',
    media: {
        m: 'https://live.staticflickr.com/65535/51295145822_4ff6574ab3_m.jpg',
    },
    author: 'nobody@flickr.com ("nhadatvideo")',
    tags: 'tag1 tag2 tag3',
}

jest.mock('next/image', ({ src, alt }) => (
    <Image width={50} height={50} src={src} alt={alt} />
))

describe('Card image component', () => {
    it('should render card without crashing', () => {
        const { container } = render(<CardImage key={0} data={mockObject} />)
        expect(container.firstChild).toHaveClass('card')
    })
    it('should render image without crashing', () => {
        const { container } = render(<CardImage key={0} data={mockObject} />)
        expect(container.firstChild.firstChild).toHaveClass('image')
    })
    it('should render Tags without crashing', () => {
        const { getByText } = render(<CardImage key={0} data={mockObject} />)
        expect(getByText(/Tags:/i))
    })
})
// describe('API mock test to component', () => {
//     it('should render without crashing', () => {
//         let data = callAPI()

//         const { getByText } = render(
//             data.map((item, index) => {
//                 return (
//                     <div key={index}>
//                         <CardImage key={'image' + index} data={item} />
//                     </div>
//                 )
//             })
//         )
//         expect(getByText(/Tags:/i))
//     })
// })

# simple-component-library
A library of React components created using `create-react-app`.

## Installation
Run the following command:
`npm install my-modal-p14`

## Importation
import Modal from 'my-modal-p14/dist/Modal'

## Props
**Content props**
{header} **example (header={<h2>Title</h2>})**
{content} **example (content={<p>Some information</p>})**
{footer} **example (footer={<button>Close</button>})**
This modal component is composed of 3 blocks, each block takes JSX elements
**Style props**
{modalStyle} **example (modalStyle={{ backgroundColor: 'transparent', display: 'flex', justifyContent: 'center'}})**
{headerStyle}
{contentStyle}
{footerStyle}
You can modify modal's style and each bloc style. 

## Manipulation
modal classname : "modal"
modal-header classname : "modal-header"
modal-content classname : "modal-content"
modal-footer classname : "modal-footer"
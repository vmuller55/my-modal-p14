# simple-component-library
A library of React components created using `create-react-app`.

## Node version
You need have node version 18.17.1 at least

## React
You need to be in a React environment

## Installation
Run the following command:
`npm install my-modal-p14`

## Importation
import Modal from 'my-modal-p14/dist/Modal'

## Content props
{header} `example (header={<h2>Title</h2>})` <br/>
{content} `example (content={<p>Some information</p>})`<br/>
{footer} `example (footer={<button>Close</button>})`<br/>
This modal component is composed of 3 blocks, each block takes JSX elements

## Style props
{modalStyle} `example (modalStyle={{ backgroundColor: 'transparent', display: 'flex', justifyContent: 'center'}})`<br/>
{headerStyle}<br/>
{contentStyle}<br/>
{footerStyle}<br/>
You can modify modal's style and each bloc style. 

## Manipulation
modal classname : "modal"<br/>
modal-header classname : "modal-header"<br/>
modal-content classname : "modal-content"<br/>
modal-footer classname : "modal-footer"
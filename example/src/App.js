import React, { useState } from 'react'

import { ImageTuneReact } from 'imagetune-react'

import './index.css';

const Select = ({value, options, setProperty}) => {
  console.log(options)
  return (
    <select value={value} onChange={(e) => {setProperty(e.target.value)}}>
      {options.map((option) => {
        return (<option key={option}>{option}</option>);
      })}
    </select>
  )
}

const App = () => {
  const [width, setWidth] = useState(1240);
  const [height, setHeight] = useState(1240);
  const [quality, setQuality] = useState(80);
  const [type, setType] = useState('jpg');
  const [mode, setMode] = useState('scale');
  const [file, setFile] = useState(null)
  

  return (
    <>
      {!file ? (
        <div>
          <h3>ImageTune Settings</h3>
          
          <label>
            Width
            <input type="number" value={width} onChange={(e) => {setWidth(e.target.value)}} />
          </label>
          <label>
            Height
            <input type="number" value={height} onChange={(e) => {setHeight(e.target.value)}} />
          </label>
          <label>
            Quality
            <input type="number" value={quality} onChange={(e) => {setQuality(e.target.value)}} />
          </label>
          <label>
            Type
            <Select value={type} options={['jpg', 'gif', 'png']} setProperty={setType} />
          </label>
          <label>
            Mode
            <Select value={mode} options={['scale', 'crop']} setProperty={setMode} />
          </label>
        </div>
      ) : null}
      <label>
        <h3>ImageTune Component</h3>
        <ImageTuneReact width={width} height={height} quality={quality} type={type} mode={mode} onChange={(e) => {setFile(e.target.files[0])}} />
        {file ? <button onClick={(e) => { setFile(null) }}>Reset</button> : null}
      </label>
      {file ? (
        <div>
          <h3>Currently Selected File</h3>
          <div><img src={URL.createObjectURL(file)} /></div>
        </div>
      ) : null}
    </>
  );
}

export default App

# imagetune-react

A React Component implementation of [ImageTune](https://github.com/connerfritz/imagetune), an automatic browser-based image resizer and compressor.

[![NPM](https://img.shields.io/npm/v/imagetune-react.svg)](https://www.npmjs.com/package/imagetune-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


## Usage
Install ImageTune React
```bash
npm i imagetune-react
```

Then import and use it like a regular React component.
```js
import React, { useState } from 'react';
import ImageTune from 'imagetune-react';

const Form = () => {
  const [email, setEmail] = useState('');
  const [image, setImage] = useState(null);

  const handleEmail = (evt) => { setEmail(evt.target.value) }
  const handleImage = (evt) => { setImage(evt.target.files[0]) }
  const handleSubmit = (evt) => {
    // handle file uploads like you usually would
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input type="text" name="email" value={email} />
      <ImageTune 
        onChange={handleFile} 
        width=512 
        height=512
        quality=90
      />
    </form>
  );
}
```

The ImageTune React component is just a native file picker component. When the user selects a file, ImageTune runs automatically and swaps out the selected file for a resized and compressed one generated by ImageTune.

To the end user, there is no difference between this component and the native file picker, but when the upload process begins bandwidth and upload times can be reduced by over 90%.

## Component Props and Options
| Name    | Description                                    | Default |
|---------|------------------------------------------------|---------|
| width   | Desired width of result image in pixels        | 200     |
| height  | Desired height of result image in pixels       | 200     |
| quality | Image quality value, changes file size (1-100) | 100     |
| type    | Image format type (png, jpg, gif)              | jpg     |
| mode    | Scale mode (crop or scale)                     | scale   |

## Note

> Because we use the native File constructor, this component does not support Internet Explorer. Check [Can I Use](https://caniuse.com/fileapi) for more information.


## License

MIT © [connerfritz](https://github.com/connerfritz)

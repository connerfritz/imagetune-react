import React from 'react';
import ImageTune from  'imagetune';

const dataURItoFile = async (dataURI, name) => {
  const blob = await (await fetch(dataURI)).blob();
  return new File([blob], name, {type: blob.type});
}

const ImageTuneComponent =  ({
  width = 1024, 
  height = 1024, 
  quality = 80, 
  type = 'jpg',
  mode = 'scale',
  onChange = (e) => void 0, 
  ...props
}) => {

  const processFile = async (event) => {
    event.persist();

    const options = { width, height, quality, type, mode }
    const container = new DataTransfer();

    await Promise.all(Array.from(event.target.files).map(async (original_file) => {
      const image = await ImageTune.tune(original_file, options);
      const file = await dataURItoFile(image, original_file.name)
      container.items.add(file);
    }));
    
    event.target.files = container.files;
    onChange(event);
  }

  return (
    <input type="file" accept="image/*" onChange={processFile} {...props} />
  )
}

export default ImageTuneComponent;

import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

// CSS
import StyledForm from './StyledForm';

function HeadingForm() {
  const [formData, setFormData] = useState({
    title: '',
    selectedFile: {},
    description: '',
  });

  const { description, title } = formData;
  return (
    <StyledForm>
      <form onSubmit='' encType='multipart/form-data' className='box-shadow'>
      <p className='heading'>Add a Pose</p>
        <label htmlFor='title'>Yoga Pose Title</label>
        <input
          type='text'
          value={title}
          id='title'
          placeholder='Yoga Pose Title'
          onChange={(e) =>
            setFormData({ ...formData, selectedFile: e.target.files[0] })
          }
        />
        <label htmlFor='description'>Description</label>
        <CKEditor
          id='description'
          editor={ClassicEditor}
          data={description}
          onChange={(event, editor) => {
            const data = editor.getData();
            setFormData({ ...formData, description: data });
          }}
        />
        <label htmlFor='picture'>Upload a Picture</label>
        <input
          id='picture'
          name='file'
          type='file'
          className='file-upload'
          onChange={(e) =>
            setFormData({ ...formData, selectedFile: e.target.files[0] })
          }
        />
        <button type='submit'>Next</button>
      </form>
    </StyledForm>
  );
}

export default HeadingForm;

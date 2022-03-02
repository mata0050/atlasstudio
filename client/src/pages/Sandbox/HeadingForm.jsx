import React, { useState } from 'react';
import styled from 'styled-components';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function HeadingForm() {
  const [formData, setFormData] = useState({
    title: '',
    selectedFile: {},
    description: '',
  });

  const { description, title } = formData;
  return (
    <StyledHeadingForm>
      <h1>Add a Pose</h1>
      <form onSubmit='' encType='multipart/form-data' className='box-shadow'>
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
    </StyledHeadingForm>
  );
}

const StyledHeadingForm = styled.div`
  margin-top: -40px;
  h1 {
    margin-bottom: 15px;
    font-size: 1.5rem;
    font-weight: 500;
  }

  form {
    padding: 30px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;

    label {
      margin: 15px 0;
    }

    .ck-editor__editable {
      min-height: 200px !important;
    }

    input {
      height: 35px;
      border-radius: 5px;
      border: 1px solid #ccc;
      padding-left: 10px;
    }

    .file-upload {
      border: none;
    }

    button {
      margin-top: 20px;
      padding: 10px 25px;
      background: #9d4d69;
      border: none;
      color: var(--color-white);
      font-size: 1.2rem;
      border-radius: 30px;
    }
  }
`;

export default HeadingForm;

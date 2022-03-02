import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

// CSS
import StyledForm from './StyledForm';

function DescriptionForm() {
  const [formData, setFormData] = useState({
    description: '',
  });

  const { description } = formData;
  return (
    <StyledForm>
      <form onSubmit='' className='box-shadow'>
        <p>Description</p>
        <label htmlFor='description' style={{ display: 'none' }}>
          Description
        </label>
        <CKEditor
          id='description'
          editor={ClassicEditor}
          data={description}
          onChange={(event, editor) => {
            const data = editor.getData();
            setFormData({ ...formData, description: data });
          }}
        />

        <button style={{ marginTop: '30px' }} type='submit'>
          Next
        </button>
      </form>
    </StyledForm>
  );
}

export default DescriptionForm;

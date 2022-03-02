import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

// CSS
import StyledForm from './StyledForm';

function EtymologyForm() {
  const [formData, setFormData] = useState({
    selectedFile: {},
    etymology: '',
  });

  const { etymology } = formData;
  return (
    <StyledForm>
      <form onSubmit='' className='box-shadow'>
        <h1>Etymology and origin</h1>
        <label htmlFor='description'>Description</label>
        <CKEditor
          id='description'
          editor={ClassicEditor}
          data={etymology}
          onChange={(event, editor) => {
            const data = editor.getData();
            setFormData({ ...formData, etymology: data });
          }}
        />

        <button style={{ marginTop: '30px' }} type='submit'>
          Next
        </button>
      </form>
    </StyledForm>
  );
}

export default EtymologyForm;

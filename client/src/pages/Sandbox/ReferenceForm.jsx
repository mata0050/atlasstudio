import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

// CSS
import StyledForm from './StyledForm';

function ReferenceForm() {
  const [formData, setFormData] = useState({
    references: '',
  });

  const { references } = formData;
  return (
    <StyledForm>
      <form onSubmit='' className='box-shadow'>
        <p className='heading'>References</p>
        <label htmlFor='description' style={{ display: 'none' }}>
          References
        </label>
        <CKEditor
          id='description'
          editor={ClassicEditor}
          data={references}
          onChange={(event, editor) => {
            const data = editor.getData();
            setFormData({ ...formData, references: data });
          }}
        />

        <button style={{ marginTop: '30px' }} type='submit'>
          Next
        </button>
      </form>
    </StyledForm>
  );
}

export default ReferenceForm;

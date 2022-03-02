import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

// CSS
import StyledForm from './StyledForm';

function SourcesForm() {
  const [formData, setFormData] = useState({
    sources: '',
  });

  const { sources } = formData;
  return (
    <StyledForm>
      <form onSubmit='' className='box-shadow'>
        <p>Sources</p>
        <label htmlFor='description' style={{ display: 'none' }}>
          Sources
        </label>
        <CKEditor
          id='description'
          editor={ClassicEditor}
          data={sources}
          onChange={(event, editor) => {
            const data = editor.getData();
            setFormData({ ...formData, sources: data });
          }}
        />

        <button style={{ marginTop: '30px' }} type='submit'>
          Next
        </button>
      </form>
    </StyledForm>
  );
}

export default SourcesForm;

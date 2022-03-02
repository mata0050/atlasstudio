import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

// CSS
import StyledForm from './StyledForm';

function SeeAlsoForm() {
  const [formData, setFormData] = useState({
    seeAlso: '',
  });

  const { seeAlso } = formData;
  return (
    <StyledForm>
      <form onSubmit='' className='box-shadow'>
        <p>See Also</p>
        <label htmlFor='description' style={{ display: 'none' }}>
          See Also
        </label>
        <CKEditor
          id='description'
          editor={ClassicEditor}
          data={seeAlso}
          onChange={(event, editor) => {
            const data = editor.getData();
            setFormData({ ...formData, seeAlso: data });
          }}
        />

        <button style={{ marginTop: '30px' }} type='submit'>
          Next
        </button>
      </form>
    </StyledForm>
  );
}

export default SeeAlsoForm;

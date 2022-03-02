import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

// CSS
import StyledForm from './StyledForm';

function FurtherReadingForm() {
  const [formData, setFormData] = useState({
    furtherReading: '',
  });

  const { furtherReading } = formData;
  return (
    <StyledForm>
      <form onSubmit='' className='box-shadow'>
        <p>Further Reading</p>
        <label htmlFor='further-reading' style={{ display: 'none' }}>
          Further Reading
        </label>
        <CKEditor
          id='further-reading'
          editor={ClassicEditor}
          data={furtherReading}
          onChange={(event, editor) => {
            const data = editor.getData();
            setFormData({ ...formData, furtherReading: data });
          }}
        />

        <button style={{ marginTop: '30px' }} type='submit'>
          Next
        </button>
      </form>
    </StyledForm>
  );
}

export default FurtherReadingForm;

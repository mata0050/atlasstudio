import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

// CSS
import StyledForm from './StyledForm';

function VariationsForm() {
  const [formData, setFormData] = useState({
    selectedFile: {},
    variations: '',
  });

  const { variations } = formData;
  return (
    <StyledForm>
      <p className='heading'>Variations</p>
      <label htmlFor='description' style={{ display: 'none' }}>
        Variations
      </label>
      <CKEditor
        id='description'
        editor={ClassicEditor}
        data={variations}
        onChange={(event, editor) => {
          const data = editor.getData();
          setFormData({ ...formData, variations: data });
        }}
      />
      <label htmlFor='picture'>Upload a Pictures</label>
      <input
        id='picture'
        name='file'
        type='file'
        className='file-upload'
        onChange={(e) =>
          setFormData({ ...formData, selectedFile: e.target.files[0] })
        }
      />
    </StyledForm>
  );
}

export default VariationsForm;

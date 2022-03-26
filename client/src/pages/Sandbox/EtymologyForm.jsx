import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

// CSS
import StyledForm from './StyledForm';

function EtymologyForm() {
  const [formData, setFormData] = useState({
    etymology: '',
  });

  const { etymology } = formData;
  return (
    <StyledForm>

        <p className='heading'>Etymology and origin</p>
        <label htmlFor='description' style={{ display: 'none' }}>
          Etymology and origin
        </label>
        <CKEditor
          id='description'
          editor={ClassicEditor}
          data={etymology}
          onChange={(event, editor) => {
            const data = editor.getData();
            setFormData({ ...formData, etymology: data });
          }}
        />

    </StyledForm>
  );
}

export default EtymologyForm;

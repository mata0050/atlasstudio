import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { onChangeAddPose } from '../../features/pose/poseSlice';


// CSS
import StyledForm from './StyledForm';

function ReferenceForm() {
  const dispatch = useDispatch();
  const { reference } = useSelector(
    (state) => state.pose.addPose
  );

  return (
    <StyledForm>

        <p className='heading'>References</p>
        <label htmlFor='description' style={{ display: 'none' }}>
          References
        </label>
        <CKEditor
          id='description'
          editor={ClassicEditor}
          data={reference}
          onChange={(event, editor) => {
            const data = editor.getData();
            dispatch(onChangeAddPose({ reference: data }));
          }}
        />

 
    </StyledForm>
  );
}

export default ReferenceForm;

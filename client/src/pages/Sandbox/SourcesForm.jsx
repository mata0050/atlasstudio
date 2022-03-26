import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { onChangeAddPose } from '../../features/pose/poseSlice';

// CSS
import StyledForm from './StyledForm';

function SourcesForm() {
  const dispatch = useDispatch();
  const { sources } = useSelector(
    (state) => state.pose.addPose
  );


  return (
    <StyledForm>

        <p className='heading'>Sources</p>
        <label htmlFor='description' style={{ display: 'none' }}>
          Sources
        </label>
        <CKEditor
          id='description'
          editor={ClassicEditor}
          data={sources}
          onChange={(event, editor) => {
            const data = editor.getData();
            dispatch(onChangeAddPose({ sources: data }));
          }}
        />


    </StyledForm>
  );
}

export default SourcesForm;

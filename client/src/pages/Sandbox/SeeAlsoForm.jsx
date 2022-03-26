import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


// Redux
import { useSelector, useDispatch } from 'react-redux';
import { onChangeAddPose } from '../../features/pose/poseSlice';


// CSS
import StyledForm from './StyledForm';

function SeeAlsoForm() {
  const dispatch = useDispatch();
  const { see_also } = useSelector(
    (state) => state.pose.addPose
  );

  return (
    <StyledForm>

        <p className='heading'>See Also</p>
        <label htmlFor='description' style={{ display: 'none' }}>
          See Also
        </label>
        <CKEditor
          id='description'
          editor={ClassicEditor}
          data={see_also}
          onChange={(event, editor) => {
            const data = editor.getData();
            dispatch(onChangeAddPose({ see_also: data }));
          }}
        />

  
    </StyledForm>
  );
}

export default SeeAlsoForm;

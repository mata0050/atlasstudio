import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { onChangeAddPose } from '../../features/pose/poseSlice';

// CSS
import StyledForm from './StyledForm';

function FurtherReadingForm() {
  const dispatch = useDispatch();
  const { further_reading } = useSelector(
    (state) => state.pose.addPose
  );

  return (
    <StyledForm>

        <p className='heading'>Further Reading</p>
        <label htmlFor='further-reading' style={{ display: 'none' }}>
          Further Reading
        </label>
        <CKEditor
          id='further-reading'
          editor={ClassicEditor}
          data={further_reading}
          onChange={(event, editor) => {
            const data = editor.getData();
            dispatch(onChangeAddPose({ further_reading: data }));
          }}
        />

    </StyledForm>
  );
}

export default FurtherReadingForm;

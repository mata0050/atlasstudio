import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { onChangeAddPose } from '../../features/pose/poseSlice';

// CSS
import StyledForm from './StyledForm';

function DescriptionForm() {
  const dispatch = useDispatch();
  const { description } = useSelector((state) => state.pose.addPose);

  return (
    <StyledForm>
      <p className='heading'>Description</p>
      <label htmlFor='description' style={{ display: 'none' }}>
        Description
      </label>
      <CKEditor
        id='description'
        editor={ClassicEditor}
        data={description}
        onChange={(event, editor) => {
          const data = editor.getData();
          dispatch(onChangeAddPose({ description: data }));
        }}
      />
    </StyledForm>
  );
}

export default DescriptionForm;

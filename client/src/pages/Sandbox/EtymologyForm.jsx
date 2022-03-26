import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { onChangeAddPose } from '../../features/pose/poseSlice';

// CSS
import StyledForm from './StyledForm';

function EtymologyForm() {
  const dispatch = useDispatch();
  const { etymology_origin } = useSelector((state) => state.pose.addPose);

  return (
    <StyledForm>
      <p className='heading'>Etymology and origin</p>
      <label htmlFor='description' style={{ display: 'none' }}>
        Etymology and origin
      </label>
      <CKEditor
        id='description'
        editor={ClassicEditor}
        data={etymology_origin}
        onChange={(event, editor) => {
          const data = editor.getData();
          dispatch(onChangeAddPose({ etymology_origin: data }));
        }}
      />
    </StyledForm>
  );
}

export default EtymologyForm;

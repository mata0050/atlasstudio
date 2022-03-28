import React from 'react';
import { RichTextEditor } from '@mantine/rte';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { onChangeAddPose } from '../../features/pose/poseSlice';

// CSS
import StyledForm from './StyledForm';

// Utils
import handleImageUpload from '../../utils/handleImageUpload';

function SourcesForm() {
  const dispatch = useDispatch();
  const { sources } = useSelector((state) => state.pose.addPose);

  return (
    <StyledForm>
      <p className='heading'>Sources</p>
      <label htmlFor='description' style={{ display: 'none' }}>
        Sources
      </label>
      <RichTextEditor
        value={sources}
        onChange={(data) => dispatch(onChangeAddPose({ sources: data }))}
        onImageUpload={(file) => handleImageUpload(file, 'pose', null)}
        style={{ miHeight: '150px', marginTop: '15px' }}
      />
    </StyledForm>
  );
}

export default SourcesForm;

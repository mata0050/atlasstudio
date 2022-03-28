import React from 'react';
import { RichTextEditor } from '@mantine/rte';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { onChangeAddPose } from '../../features/pose/poseSlice';

// CSS
import StyledForm from './StyledForm';

// Utils
import handleImageUpload from '../../utils/handleImageUpload';

function DescriptionForm() {
  const dispatch = useDispatch();
  const { description } = useSelector((state) => state.pose.addPose);

  return (
    <StyledForm>
      <p className='heading'>Description</p>
      <label htmlFor='description' style={{ display: 'none' }}>
        Description
      </label>

      <RichTextEditor
        value={description}
        onChange={(data) => dispatch(onChangeAddPose({ description: data }))}
        onImageUpload={(file) => handleImageUpload(file, 'pose', null)}
        style={{ miHeight: '150px', marginTop: '15px' }}
      />
    </StyledForm>
  );
}

export default DescriptionForm;

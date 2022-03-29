import React from 'react';
import { RichTextEditor } from '@mantine/rte';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { onChangeAddPose } from '../../features/pose/poseSlice';

// CSS
import StyledForm from './StyledForm';

// Utils
import handleImageUpload from '../../utils/handleImageUpload';

function ReferenceForm() {
  const dispatch = useDispatch();
  const { reference } = useSelector((state) => state.pose.addPose);


  return (
    <StyledForm>
      <p className='heading'>References</p>
      <label htmlFor='description' style={{ display: 'none' }}>
        References
      </label>

      <RichTextEditor
        value={reference}
        onChange={(data) => dispatch(onChangeAddPose({ reference: data }))}
        onImageUpload={(file) => handleImageUpload(file, 'pose', null)}
        style={{ miHeight: '150px', marginTop: '15px' }}
      />
    </StyledForm>
  );
}

export default ReferenceForm;

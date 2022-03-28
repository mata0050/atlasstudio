import React from 'react';
import { RichTextEditor } from '@mantine/rte';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { onChangeAddPose } from '../../features/pose/poseSlice';

// CSS
import StyledForm from './StyledForm';

// Utils
import handleImageUpload from '../../utils/handleImageUpload';

function SeeAlsoForm() {
  const dispatch = useDispatch();
  const { see_also } = useSelector((state) => state.pose.addPose);

  return (
    <StyledForm>
      <p className='heading'>See Also</p>
      <label htmlFor='description' style={{ display: 'none' }}>
        See Also
      </label>

      <RichTextEditor
        value={see_also}
        onChange={(data) => dispatch(onChangeAddPose({ see_also: data }))}
        onImageUpload={(file) => handleImageUpload(file, 'pose', null)}
        style={{ miHeight: '150px', marginTop: '15px' }}
      />
    </StyledForm>
  );
}

export default SeeAlsoForm;

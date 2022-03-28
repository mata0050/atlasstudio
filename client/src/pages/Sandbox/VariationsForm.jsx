import React from 'react';
import { RichTextEditor } from '@mantine/rte';

import { useSelector, useDispatch } from 'react-redux';
import { onChangeAddPose } from '../../features/pose/poseSlice';

// CSS
import StyledForm from './StyledForm';

// Utils
import handleImageUpload from '../../utils/handleImageUpload';

function VariationsForm() {
  const dispatch = useDispatch();
  const { variations } = useSelector(
    (state) => state.pose.addPose
  );

  

  

  return (
    <StyledForm>
      <p className='heading'>Variations</p>
      <label htmlFor='description' style={{ display: 'none' }}>
        Variations
      </label>

      <RichTextEditor
        value={variations}
        onChange={(data) =>
          dispatch(onChangeAddPose({ variations: data }))
        }
        onImageUpload={(file) => handleImageUpload(file, 'pose', null)}
        style={{ miHeight: '150px', marginTop: '15px' }}
      />
    </StyledForm>
  );
}

export default VariationsForm;

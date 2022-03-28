import React from 'react';
import { RichTextEditor } from '@mantine/rte';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { onChangeAddPose } from '../../features/pose/poseSlice';

// CSS
import StyledForm from './StyledForm';

// Utils
import handleImageUpload from '../../utils/handleImageUpload';

function FurtherReadingForm() {
  const dispatch = useDispatch();
  const { further_reading } = useSelector((state) => state.pose.addPose);

  return (
    <StyledForm>
      <p className='heading'>Further Reading</p>
      <label htmlFor='further-reading' style={{ display: 'none' }}>
        Further Reading
      </label>

      <RichTextEditor
        value={further_reading}
        onChange={(data) =>
          dispatch(onChangeAddPose({ further_reading: data }))
        }
        onImageUpload={(file) => handleImageUpload(file, 'pose', null)}
        style={{ miHeight: '150px', marginTop: '15px' }}
      />
    </StyledForm>
  );
}

export default FurtherReadingForm;

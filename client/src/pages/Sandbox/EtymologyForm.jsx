import React from 'react';
import { RichTextEditor } from '@mantine/rte';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { onChangeAddPose } from '../../features/pose/poseSlice';

// CSS
import StyledForm from './StyledForm';

// Utils
import handleImageUpload from '../../utils/handleImageUpload';

function EtymologyForm() {
  const dispatch = useDispatch();
  const { etymology_origin } = useSelector((state) => state.pose.addPose);

  return (
    <StyledForm>
      <p className='heading'>Etymology and origin</p>
      <label htmlFor='description' style={{ display: 'none' }}>
        Etymology and origin
      </label>

      <RichTextEditor
        value={etymology_origin}
        onChange={(data) =>
          dispatch(onChangeAddPose({ etymology_origin: data }))
        }
        onImageUpload={(file) => handleImageUpload(file, 'pose', null)}
        style={{ miHeight: '150px', marginTop: '15px' }}
      />
    </StyledForm>
  );
}

export default EtymologyForm;

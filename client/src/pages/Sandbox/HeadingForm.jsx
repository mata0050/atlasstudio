import React, { useState, useEffect } from 'react';
import { RichTextEditor } from '@mantine/rte';
import { toast } from 'react-toastify';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { onChangeAddPose } from '../../features/pose/poseSlice';

// Firebase
import uploadFiles from '../../firebase/uploadFiles';
import deleteFiles from '../../firebase/deleteFiles';

// CSS
import StyledForm from './StyledForm';

// Utils
import handleImageUpload from '../../utils/handleImageUpload';

function HeadingForm() {
  const dispatch = useDispatch();
  const { title, pose_description } = useSelector(
    (state) => state.pose.addPose
  );
  const [diagram, setDiagram] = useState('');
  const [progress, setProgress] = useState(0);
  const [diagramPath, setDiagramPath] = useState('');
  const [replaceDiagram, setReplaceDiagram] = useState(false);

  const formHandler = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    console.log(file);
    dispatch(
      onChangeAddPose({
        file_pose_image: {
          name: file.name,
          size: file.size,
          type: file.type,
          // lastModifiedDate: file.lastModifiedDate,
          lastModifiedTime: file.lastModified,
          webkitRelativePath: file.webkitRelativePath,
        },
      })
    );
    if (
      file.type !== 'image/jpeg' &&
      file.type !== 'image/png' &&
      file.type !== 'image/jpg'
    ) {
      return toast.error(
        'Please choose a Image file only e.g jpeg, png or jpg'
      );
    }

    if (diagram) {
      deleteFiles(diagramPath, `pose`);
    }

    uploadFiles(
      file,
      setProgress,
      setDiagram,
      diagramPath,
      setDiagramPath,
      `pose`
    );
    setReplaceDiagram(!replaceDiagram);
  };

  useEffect(() => {
    dispatch(
      onChangeAddPose({ pose_image: diagram, pose_image_url: diagramPath })
    );
  }, [diagram, diagramPath, dispatch, replaceDiagram]);

  return (
    <StyledForm>
      <p className='heading'>Add a Pose</p>
      <label htmlFor='title'>Yoga Pose Title</label>
      <input
        type='text'
        value={title}
        id='title'
        placeholder='Yoga Pose Title'
        onChange={(e) => {
          dispatch(onChangeAddPose({ title: e.target.value }));
        }}
      />
      <RichTextEditor
        value={pose_description}
        onChange={(data) =>
          dispatch(onChangeAddPose({ pose_description: data }))
        }
        onImageUpload={(file) => handleImageUpload(file, 'pose', null)}
        style={{ miHeight: '150px', marginTop: '15px', marginBottom: '25px' }}
      />

      {replaceDiagram && progress === 100 ? (
        <div className='diagram'>
          <img src={diagram} alt='uploaded diagram' />
          <button onClick={() => setReplaceDiagram(!replaceDiagram)}>
            Replace Image
          </button>
        </div>
      ) : (
        <form onSubmit={formHandler}>
          <label htmlFor='question'>Upload diagram</label>
          <input type='file' className='input' />

          <button type='submit'>Upload</button>

          {diagram && (
            <span
              className='btn-replace'
              onClick={() => setReplaceDiagram(!replaceDiagram)}
            >
              don't Replace Image
            </span>
          )}
        </form>
      )}
    </StyledForm>
  );
}

export default HeadingForm;

import React, { useState, useEffect } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { toast } from 'react-toastify';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { onChangeAddPose } from '../../features/pose/poseSlice';

// Firebase
import uploadFiles from '../../firebase/uploadFiles';
import deleteFiles from '../../firebase/deleteFiles';

// CSS
import StyledForm from './StyledForm';

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
    dispatch(onChangeAddPose({ pose_image: diagram }));
  }, [diagram, dispatch, replaceDiagram]);

  return (
    <StyledForm>
      <p className='heading'>Add a Pose</p>
      <label htmlFor='title'>Yoga Pose Title</label>
      <input
        type='text'
        value={title}
        id='title'
        placeholder='Yoga Pose Title'
        onChange={(e) => dispatch(onChangeAddPose({ title: e.target.value }))}
      />
      <label htmlFor='description'>Description</label>
      <CKEditor
        id='description'
        editor={ClassicEditor}
        data={pose_description}
        onChange={(event, editor) => {
          const data = editor.getData();
          dispatch(onChangeAddPose({ pose_description: data }));
        }}
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

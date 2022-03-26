import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { toast } from 'react-toastify';

import { useSelector, useDispatch } from 'react-redux';
import { onChangeAddPose } from '../../features/pose/poseSlice';

// Firebase
import uploadFiles from '../../firebase/uploadFiles';
import deleteFiles from '../../firebase/deleteFiles';

// CSS
import StyledForm from './StyledForm';

function VariationsForm() {
  const dispatch = useDispatch();
  const { variations } = useSelector(
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


  // useEffect(() => {
  //   dispatch(onChangeAddPose({ pose_image: diagram }));
  // }, [diagram, dispatch, replaceDiagram]);


  return (
    <StyledForm>
      <p className='heading'>Variations</p>
      <label htmlFor='description' style={{ display: 'none' }}>
        Variations
      </label>
      <CKEditor
        id='description'
        editor={ClassicEditor}
        data={variations}
        onChange={(event, editor) => {
          const data = editor.getData();
          dispatch(onChangeAddPose({ variations: data }));
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
          <h1 style={{ color: 'red'}}>multiple files</h1>
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

export default VariationsForm;

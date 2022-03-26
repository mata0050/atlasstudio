import {
  ref,
  getDownloadURL,
  uploadBytesResumable,
  deleteObject,
} from 'firebase/storage';
import { storage } from './firebase';
import { v4 as uuidv4 } from 'uuid';

// Function to upload a file to Firebase
// * returns downloadURL

const uploadFiles = (
  file,
  setProgress,
  setUrl,
  imagePath,
  setImagePath,
  storageLocation
) => {
  if (!file) return;

  const imagePathName = uuidv4() + file.name;
  setImagePath(imagePathName);

  console.log(storageLocation)

  const storageRef = ref(storage, `${storageLocation}/${imagePathName}`);
  const uploadTask = uploadBytesResumable(storageRef, file);


  uploadTask.on(
    'state_changed',
    (snapshot) => {
      const progress = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );
      setProgress(progress);
    },
    (error) => console.log(error),
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        setUrl(downloadURL);
      });
    }
  );
};

export default uploadFiles;

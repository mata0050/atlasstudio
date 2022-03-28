import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../firebase/firebase';
import { v4 as uuidv4 } from 'uuid';
import deleteFiles from '../firebase/deleteFiles';

const handleImageUpload = (file, storageLocation, imagePath) =>
  new Promise((resolve, reject) => {
    if (imagePath) {
      deleteFiles(imagePath, storageLocation);
    }

    const imagePathName = uuidv4() + file.name;

    const storageRef = ref(storage, `${storageLocation}/${imagePathName}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        // setProgress(progress);
      },
      (error) => console.log(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          resolve(downloadURL);
        });
      }
    );
  });

export default handleImageUpload;

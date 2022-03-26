import { ref, deleteObject } from 'firebase/storage';
import { storage } from './firebase';

const deleteFiles = (imagePath, storageLocation) => {
  if (imagePath !== null) {
    const desertRef = ref(storage, `${storageLocation}/${imagePath}`);
    deleteObject(desertRef)
      .then(() => {
        return 'Deleted Image';
      })
      .catch((error) => {
        // Uh-oh, an error occurred!
      });
    return;
  }
};

export default deleteFiles;

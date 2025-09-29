// 'use client';


// import { usePhoto } from '../hooks/usePhotos.hook';


// export const PhotoList: React.FC = () => {

//   const { data: photos, loading, error } = usePhoto();
  
  

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div>
//       <h2>Photos</h2>
//       <ul>
//         {photos.map((photo, index) => (
//           <li key={index}>{photo}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };


// components/PhotoList.tsx
'use client';

import { useDeletePhoto } from "../hooks/useDeletePhoto.hook";
import { usePhotos } from "../hooks/usePhotos.hook";




export const PhotoList: React.FC = () => {
  const { data: photos, isLoading, error } = usePhotos();
  const deletePhotoMutation = useDeletePhoto();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Photos</h2>
      <div className="grid grid-cols-3 gap-4">
        {photos?.map((photo) => (
          <div key={photo.id} className="border rounded-lg p-4">
            <img src={photo.previewURL} alt={photo.previewURL} className="w-full h-48 object-cover" />
            <h3>{photo.user}</h3>
            <button
              onClick={() => deletePhotoMutation.mutate(photo.id)}
              disabled={deletePhotoMutation.isPending}
            >
              {deletePhotoMutation.isPending ? 'Deleting...' : 'Delete'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
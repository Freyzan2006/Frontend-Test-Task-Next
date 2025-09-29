'use client';


import { usePhoto } from '../hooks/usePhoto.hook';


export const PhotoList: React.FC = () => {

  const { data: photos, loading, error } = usePhoto();
  
  

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Photos</h2>
      <ul>
        {photos.map((photo, index) => (
          <li key={index}>{photo}</li>
        ))}
      </ul>
    </div>
  );
};
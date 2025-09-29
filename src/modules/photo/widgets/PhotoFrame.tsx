import { CreatePhotoForm } from "../features/CreatePhotoForm"
import { PhotoList } from "../features/PhotoList"



export const PhotoFrame: React.FC = () => {
    return (
        <section>
            <CreatePhotoForm />
            <PhotoList />
        </section>
    )
}
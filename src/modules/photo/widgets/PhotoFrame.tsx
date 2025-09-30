import { CreatePhotoForm } from "../features/CreatePhotoForm"
import { PhotoList } from "../features/PhotoList"



export const PhotoFrame: React.FC = () => {
    return (
        <section className="w-full flex flex-col justify-center items-center gap-4">
            <CreatePhotoForm />
            <PhotoList />
        </section>
    )
}
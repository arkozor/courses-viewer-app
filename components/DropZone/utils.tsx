import AttachFileIcon from '@material-ui/icons/AttachFile'
import ImageIcon from '@material-ui/icons/Image'
import MovieIcon from '@material-ui/icons/Movie'
import PdfIcon from '@material-ui/icons/PictureAsPdf'

export const getIcon = (fileName: string): JSX.Element => {
    const regex = /[^.]+$/i
    if (fileName) {
        if (['jpg', 'jpeg', 'png'].includes(fileName.match(regex).toString())) {
            return <ImageIcon color="secondary" />
        }
        if (fileName.match(regex).includes('pdf')) {
            return <PdfIcon color="secondary" />
        }
        if (fileName.match(regex).includes('mp4')) {
            return <MovieIcon color="secondary" />
        } else {
            return <AttachFileIcon color="secondary" />
        }
    }
    return null
}

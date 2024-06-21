import uploadIcon from "./uploader_upload_icon.svg";
import deleteIcon from "./uploader_delete_icon.svg";

export const UploadIcon = () => {
    return (
        <span className="upload-icon">
            <img src={uploadIcon} />
            <p><a>Click to upload</a><em> or drag and drop.</em></p>
        </span>
    );
}

export const DeleteIcon = () => {
    return (
        <span className="delete-icon">
            <img src={deleteIcon} />
        </span>
    );
}

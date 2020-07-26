import React, {useEffect, useState} from 'react';

interface Props extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>{
    file: File;
    loadingElement: React.ReactElement;
    onFileError?: () => void;
}

const FileImagePreview: React.FC<Props> = ({file, loadingElement, onFileError, ...rest}) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [thumb, setThumb] = useState<string | null | ArrayBuffer>(null);

    useEffect(() => {
        if (!file) {
            return;
        }
        setLoading(true);
        let reader = new FileReader();
        reader.onloadend = () => {
            setLoading(false);
            setThumb(reader.result);
        };
        reader.onerror = (e) => {
            if (onFileError) {
                onFileError();
            }
        }
        reader.readAsDataURL(file);

        return () => reader.abort();
    }, [file, onFileError]);

    if (!file) {
        return null;
    }

    if (thumb) {
        return <img {...rest} src={thumb as string}/>;
    }

    if (loading) {
        return loadingElement;
    }

    return null;
};

export default FileImagePreview;

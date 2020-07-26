import React, {useState} from 'react';

import FileImagePreview from "../src/Components/FileImagePreview";

export default {
    title: 'File image preview',
    component: FileImagePreview,
};

const Example: React.FC<{alt?: string, className?: string}> = props => {
    const [file, setFile] = useState<File|null>(null);

    return (
        <>
            {file && <FileImagePreview alt={props.alt} className={props.className} loadingElement={<h1>Loading...</h1>} file={file}/>}
            <br />
            <input type={'file'} accept={'image/*'} onChange={(event) => {
                if (event.currentTarget.files && event.currentTarget.files.length) {
                    const file = event.currentTarget.files[0];
                    setFile(file);
                } else {
                    setFile(null);
                }
            }} />
        </>
    );
};

export const example = () => (
    <Example />
);

export const withImageProps = () => (
    <Example alt={'foo'} className={'foo'} />
);

import React, { useState } from 'react'
import ProgressBar from './ProgressBar'
import useInputState from '../../hooks/useInputState'

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null)
    const { title, setTitle } = useInputState("")

    const types = ['image/png', 'image/jpeg'];

    const handleChange = (e) => {
        let selected = e.target.files[0]

        if (selected && types.includes(selected.type)) {
            setFile(selected)
            setError('')
        } else {
            setFile(null)
            setError('Please select an image file (png or jpeg)')
        }

    }

    return (
        <form>
            <input type="file" onChange={handleChange} required={true} />
            <input type="text" />

            <div className="output">
                {error && <div className="error">{error}</div>}
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile} />}
            </div>
        </form>
    )
}

export default UploadForm
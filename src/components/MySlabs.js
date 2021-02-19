import React from 'react'
import Title from './MySlabsComps/Title'
import UploadForm from './MySlabsComps/UploadForm'
import ImageGrid from './MySlabsComps/SlabGrid'
import '../styles/App.css'

export default function MySlabs() {
    return (
        <div className="App">
            <Title />
            <UploadForm />
            <ImageGrid />
        </div>
    )
}

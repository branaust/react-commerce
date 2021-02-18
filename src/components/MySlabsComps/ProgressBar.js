import React, { useEffect } from 'react'
import useStorage from '../../hooks/useStorage'
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from '../../styles/ProgressBarStyles'



const ProgressBar = ({ file, setFile }) => {

    const { url, progress } = useStorage(file)

    useEffect(() => {
        if (url) {
            setFile(null)
        }
    }, [url, setFile])

    return (
        <div className={styles.progressBar}
            style={{
                backgroundColor: 'red',
                height: '5px',
                marginTop: '20px',
                width: progress + '%'
            }}>

        </div>
    )
}

export default withStyles(styles)(ProgressBar)
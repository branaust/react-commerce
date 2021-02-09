import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useCoverCardMediaStyles } from '@mui-treasury/styles/cardMedia/cover';
import { useLightTopShadowStyles } from '@mui-treasury/styles/shadow/lightTop';
import ichiro from './img/ichiro.jpg'

const useStyles = makeStyles(() => ({
    root: {
        maxWidth: 304,
        height: 500,
        margin: 'auto',
        borderRadius: 0,
        position: 'relative',
    },
    card: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        zIndex: 0,
    },
    content: {
        padding: 24,
    },
    cta: {
        display: 'block',
        textAlign: 'center',
        color: '#fff',
        letterSpacing: '3px',
        fontWeight: 200,
        fontSize: 12,
    },
    title: {
        color: '#fff',
        letterSpacing: '2px',
    },
}));

export const NewsCard = React.memo(function NewsCard2() {
    const styles = useStyles();
    const shadowStyles = useLightTopShadowStyles();

    return (
        <Card className={cx(styles.root, shadowStyles.root)}>
            <CardMedia
                className={styles.card}
                image={ichiro}
            />
            <CardActionArea>
                <CardContent className={styles.content}>
                    <Box
                        display={'flex'}
                        flexDirection={'column'}
                        alignItems={'center'}
                        justifyContent={'center'}
                        minHeight={500}
                        color={'common.white'}
                        textAlign={'center'}
                    >
                        <h1 className={styles.title}>Space</h1>
                        <p>The space between the stars and galaxies is largely empty.</p>
                    </Box>
                    <Typography className={styles.cta} variant={'overline'}>
                        Explore
          </Typography>
                </CardContent>
            </CardActionArea>
        </Card >
    );
});

export default NewsCard
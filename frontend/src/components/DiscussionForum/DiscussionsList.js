// components/DiscussionForum/DiscussionsList.js
import React from 'react';
import {
    Box,
    Grid,
    Card,
    CardContent,
    CardActions,
    Typography,
    Button,
    Avatar,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import DiscussionDetail from './DiscussionDetail';
import ForumIcon from '@mui/icons-material/Forum';
import EventIcon from '@mui/icons-material/Event';
import ArtTrackIcon from '@mui/icons-material/ArtTrack';

const useStyles = makeStyles((theme) => ({
    listContainer: {
        padding: theme.spacing(4),
        backgroundColor: '#f5f5f5',
        minHeight: '100vh',
        marginLeft: 240,
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
        },
    },
    discussionCard: {
        transition: 'transform 0.5s ease-in-out, box-shadow 0.5s ease-in-out',
        '&:hover': {
            transform: 'translateY(-10px)',
            boxShadow: theme.shadows[6],
        },
        borderRadius: '16px',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
    },
    cardContent: {
        flexGrow: 1,
    },
    iconAvatar: {
        backgroundColor: '#FBBF24',
        marginBottom: theme.spacing(2),
    },
}));

const DiscussionsList = ({ selectedDiscussion, setSelectedDiscussion }) => {
    const classes = useStyles();

    const discussions = [
        {
            id: 1,
            title: 'Preservación de Lenguas Indígenas',
            preview:
                'Discutamos estrategias efectivas para la preservación y enseñanza de lenguas ancestrales...',
            content:
                'Contenido completo sobre la importancia de preservar las lenguas indígenas, métodos educativos, recursos disponibles, y cómo la comunidad puede participar activamente en este esfuerzo.',
            icon: <ForumIcon />,
        },
        {
            id: 2,
            title: 'Integración de Tradición y Modernidad',
            preview:
                '¿Cómo podemos integrar prácticas culturales tradicionales en el contexto moderno? Compartamos ideas...',
            content:
                'Exploración profunda de cómo las tradiciones ancestrales pueden adaptarse y coexistir con las tecnologías y estilos de vida modernos, manteniendo la esencia cultural mientras se evoluciona.',
            icon: <EventIcon />,
        },
        {
            id: 3,
            title: 'Arte Indígena Contemporáneo',
            preview:
                'Analizamos el impacto y la evolución del arte indígena en la sociedad actual...',
            content:
                'Discusión sobre artistas contemporáneos que incorporan elementos indígenas en su obra, la recepción del público y la importancia de este arte en la preservación cultural.',
            icon: <ArtTrackIcon />,
        },
        {
            id: 4,
            title: 'Medicina Tradicional y Salud',
            preview:
                'Exploramos las prácticas de medicina tradicional y su relevancia hoy en día...',
            content:
                'Conversación sobre remedios ancestrales, plantas medicinales y cómo estas prácticas pueden complementarse con la medicina moderna.',
            icon: <ForumIcon />,
        },
        // Más discusiones con diferentes íconos y contenido
        {
            id: 5,
            title: 'Gastronomía Ancestral',
            preview:
                'Compartamos recetas y técnicas culinarias de nuestras raíces indígenas...',
            content:
                'Intercambio de recetas tradicionales, ingredientes autóctonos y la importancia de la gastronomía en la cultura indígena.',
            icon: <EventIcon />,
        },
        {
            id: 6,
            title: 'Música y Danza Tradicional',
            preview:
                'La expresión artística a través de la música y la danza en las culturas indígenas...',
            content:
                'Análisis de instrumentos tradicionales, ritmos y bailes que han pasado de generación en generación.',
            icon: <ArtTrackIcon />,
        },
    ];

    return (
        <Grid item xs={12} md={10}>
            <Box className={classes.listContainer}>
                <Grid container spacing={4}>
                    {discussions.map((discussion) => (
                        <Grid item xs={12} md={6} key={discussion.id}>
                            <Card className={classes.discussionCard}>
                                <CardContent className={classes.cardContent}>
                                    <Avatar className={classes.iconAvatar}>
                                        {discussion.icon}
                                    </Avatar>
                                    <Typography variant="h6" gutterBottom>
                                        {discussion.title}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        {discussion.preview}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button
                                        size="small"
                                        color="primary"
                                        onClick={() => setSelectedDiscussion(discussion)}
                                    >
                                        Leer más
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                {selectedDiscussion && (
                    <DiscussionDetail
                        discussion={selectedDiscussion}
                        onClose={() => setSelectedDiscussion(null)}
                    />
                )}
            </Box>
        </Grid>
    );
};

export default DiscussionsList;

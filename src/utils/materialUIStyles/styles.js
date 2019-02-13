const drawerWidth = 240;

const styles = (theme) => ({
    section: {
        paddingBottom: '1rem'
    },
    appBar: {
        whiteSpace: 'nowrap',
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20
    },
    hide: {
        display: "none"
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    drawerPaper: {
        width: drawerWidth
    },
    drawerHeader: {
        display: "flex",
        alignItems: "center",
        padding: "0 8px",
        ...theme.mixins.toolbar,
        justifyContent: "flex-end"
    },
    content: {
        width: '80vw',
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        marginTop: '10vh',
        marginLeft: 0
    },
    contentShift: {
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
        marginLeft: drawerWidth
    },
    paper: {
        height: '10vh',
        width: '85vw',
        marginBottom: '2rem',
    },
    posts: {
        height: '70vh',
        overflow: 'auto',
    },
    postCard: {
        height: '10vh',
        width: '15vw',
    },
    postThumb: {
        width: '100%',
        height: '100%',
    },
    postText: {
        marginRight: '2rem'
    },
    imageContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
    },
    gridList: {
        padding: '.5px',
        width: '85vw',
        height: '90vh',
    },
    modalImg: {
        maxWidth: '100%',
        maxHeight: '75vh'
    },
    dialog: {
        width: '100vw',
        margin: '0',
    },
});

export default styles;
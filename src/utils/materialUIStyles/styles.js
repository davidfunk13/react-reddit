const drawerWidth = 240;

const styles = (theme) => ({
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
        width: '85vw',
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
        width: '80vw',
        marginBottom: '2rem',
    },
    posts: {
        height: '75vh',
       width: '100%',
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
    gridList: {
        padding: '.5px',
        width: '85vw',
        height: '90vh',
    },
    dialog: {
        width: '90vw',
        padding: '1rem',
        margin:'0'
    },
});

export default styles;
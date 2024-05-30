import React, { useState } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Grid,
  Paper,
  Card,
  CardContent,
  Modal,
  Box,
  Button,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import DashboardIcon from '@material-ui/icons/Dashboard'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import PeopleIcon from '@material-ui/icons/People'
import BarChartIcon from '@material-ui/icons/BarChart'
import PieChartIcon from '@material-ui/icons/PieChart'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
} from 'recharts'
import InviteModal from './InviteModal'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  statsCard: {
    minWidth: 275,
    marginBottom: theme.spacing(2),
  },
  progress: {
    margin: theme.spacing(2),
  },
  tableContainer: {
    maxHeight: 440,
  },
}))

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 600 },
  { name: 'Mar', value: 800 },
  { name: 'Apr', value: 500 },
  { name: 'May', value: 700 },
  { name: 'Jun', value: 900 },
]

const pieData = [
  { name: 'Clothing', value: 400 },
  { name: 'Electronics', value: 300 },
  { name: 'Furniture', value: 200 },
  { name: 'Books', value: 100 },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

const Dashboard = () => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div className={classes.root}>
      <AppBar position='fixed' className={classes.appBar}>
        <Toolbar>
          <IconButton color='inherit' aria-label='open drawer' edge='start'>
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap>
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant='permanent'
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItem button>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary='Dashboard' />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <ShoppingCartIcon />
              </ListItemIcon>
              <ListItemText primary='Orders' />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary='Customers' />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <BarChartIcon />
              </ListItemIcon>
              <ListItemText primary='Reports' />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button>
              <ListItemIcon>
                <PieChartIcon />
              </ListItemIcon>
              <ListItemText primary='Analytics' />
            </ListItem>
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <Card className={classes.statsCard}>
              <CardContent>
                <Typography variant='h5' component='h2'>
                  Revenue
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  Total revenue generated
                </Typography>
                <Typography variant='h4' component='h2'>
                  $12,500
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Card className={classes.statsCard}>
              <CardContent>
                <Typography variant='h5' component='h2'>
                  Orders
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  Total orders received
                </Typography>
                <Typography variant='h4' component='h2'>
                  2,500
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Card className={classes.statsCard}>
              <CardContent>
                <Typography variant='h5' component='h2'>
                  Customers
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  Total registered customers
                </Typography>
                <Typography variant='h4' component='h2'>
                  15,000
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Card className={classes.statsCard}>
              <CardContent>
                <Typography variant='h5' component='h2'>
                  Growth
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  Year-over-year growth
                </Typography>
                <Typography variant='h4' component='h2'>
                  25%
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={8}>
            <Paper>
              <LineChart
                width={730}
                height={250}
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <XAxis dataKey='name' />
                <YAxis />
                <CartesianGrid strokeDasharray='3 3' />
                <Tooltip />
                <Legend />
                <Line
                  type='monotone'
                  dataKey='value'
                  stroke='#8884d8'
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant='h6' component='h2'>
                  Product Categories
                </Typography>
                <PieChart width={300} height={300}>
                  <Pie
                    data={pieData}
                    cx={150}
                    cy={150}
                    labelLine={false}
                    outerRadius={100}
                    fill='#8884d8'
                    dataKey='value'
                  >
                    {pieData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Button variant='contained' color='primary' onClick={handleOpen}>
          Invite
        </Button>
        <Modal open={open} onClose={handleClose}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 400,
              bgcolor: 'background.paper',
              border: '2px solid #000',
              boxShadow: 24,
              p: 4,
            }}
          >
            <InviteModal onClose={handleClose} />
          </Box>
        </Modal>
      </main>
    </div>
  )
}

export default Dashboard

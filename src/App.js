import React from 'react';
import './App.css';
import { AppBar, Toolbar, Typography, Button, Container, Grid, Card, CardContent, CardActions, Divider, Box } from '@mui/material';

// Example project data
const projects = [
  { title: "Project One", description: "This is a brief description of project one." },
  { title: "Project Two", description: "This is a brief description of project two." },
  { title: "Project Three", description: "This is a brief description of project three." },
];

function App() {
  return (
    <div>
      {/* Navbar */}
      <AppBar position="sticky" color="primary">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            All About Aarushi
          </Typography>
          <Button color="inherit" href="#about">About</Button>
          <Button color="inherit" href="#skills">Skills</Button>
          <Button color="inherit" href="#projects">Projects</Button>
          <Button color="inherit" href="#contact">Contact</Button>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container>
        {/* About Section */}
        <Box id="about" sx={{ padding: '60px 0' }}>
          <Typography variant="h3" gutterBottom align="center">About Me</Typography>
          <Typography variant="body1" align="center" paragraph>
          Hi! My name is Aarushi and I majored in Electrical Engineering and Computer Science (EECS) at UC Berkeley. I'm a passionate software developer with experience in fullstack development, 
          and I love building applications that solve real-world problems. I am interested in various different technologies including generative AI, web development, data analytics, and more! 
          I enjoy problem solving and am always eager to learn new things!
          </Typography>
        </Box>

        {/* Skills Section */}
        <Box id="skills" sx={{ maxWidth: 250, padding: 2, margin: 1, backgroundColor: '#f5f5f5' }}>
          <Typography variant="h3" gutterBottom align="center">Skills</Typography>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={6} sm={4} md={3}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6">JavaScript</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6} sm={4} md={3}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6">TypeScript</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6} sm={4} md={3}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6">Java</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6} sm={4} md={3}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6">Python</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6} sm={4} md={3}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6">C</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6} sm={4} md={3}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6">SQL</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6} sm={4} md={3}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6">Angular</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6} sm={4} md={3}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6">PyTorch</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6} sm={4} md={3}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6">React</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6} sm={4} md={3}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6">Node.js</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6} sm={4} md={3}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6">CSS / HTML</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* Projects Section */}
        <Box id="projects" sx={{ padding: '60px 0' }}>
          <Typography variant="h3" gutterBottom align="center">Projects</Typography>
          <Grid container spacing={3} justifyContent="center">
            {projects.map((project, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card>
                  <CardContent>
                    <Typography variant="h5">{project.title}</Typography>
                    <Typography variant="body2">{project.description}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" href={`#project${index + 1}`}>View More</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Contact Section */}
        <Box id="contact" sx={{ padding: '60px 0', backgroundColor: '#f5f5f5' }}>
          <Typography variant="h3" gutterBottom align="center">Contact</Typography>
          <Typography variant="body1" align="center" paragraph>
            Feel free to reach out to me via email or on social media.
          </Typography>
          <Grid container justifyContent="center">
            <Grid item xs={6} sm={4}>
              <Button variant="contained" color="primary" fullWidth href="mailto:example@example.com">
                Contact Me
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>

      {/* Footer */}
      <Box sx={{ backgroundColor: '#333', color: '#fff', padding: '20px 0', textAlign: 'center' }}>
        <Typography variant="body2">&copy; 2025 My Portfolio</Typography>
      </Box>
    </div>
  );
}

export default App;

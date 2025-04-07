import React from 'react';
import './App.css';
import { AppBar, Toolbar, Typography, Button, Container, Grid, Card, CardContent, CardActions, Divider, Box } from '@mui/material';

// project data
const projects = [
  { 
    title: "Handwriting to LaTeX", 
    description: `
      • Built PyTorch model to convert handwritten math formulas to LaTeX using CNN-RNN and Transformer architectures\n
      • Preprocessed 10k+ CROHME dataset samples with regex tokenization and image padding\n
      • Evaluated ResNet and Transformer deep learning models, tuning hyperparameters and using teacher forcing
    `
  },
  { 
    title: "Interactive Gantt Chart", 
    description: `
      • Developed an interactive gantt chart dashboard using React and open-source Svar Gantt library, enabling real-time task visualization and project management\n
      • Integrated FastAPI with the frontend to fetch data from Azure DevOps APIs, enabling live updates on Gantt chart
    `
  },
  { 
    title: "Gitlet", 
    description: `
      • Implemented a miniature version of the version control system Git in Java\n
      • Worked through every stage of development from design to implementation to presentation
    `
  },
  { 
    title: "File Systems", 
    description: `
      • Optimized file system performance in C via memory management, dynamic file growth and buffer cache implementation\n
      • Tested functionality through test cases and debugged using Gnu Debugger (GDB)
    `
  }
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
<Box id="skills" sx={{ padding: '60px 0', backgroundColor: '#f5f5f5' }}>
  <Typography variant="h3" gutterBottom align="center">Skills</Typography>
  <Grid container spacing={3} justifyContent="center">
    <Grid item xs={6} sm={4} md={3}>
      <Card variant="outlined" sx={{ width: '100px', padding: 2 }}>
        <CardContent sx={{ textAlign: 'center' }}>
          <Typography variant="h6" sx={{ fontSize: '14px', fontFamily: 'Arial, sans-serif' }}>JavaScript</Typography>
        </CardContent>
      </Card>
    </Grid>
    <Grid item xs={6} sm={4} md={3}>
      <Card variant="outlined" sx={{ width: '100px', padding: 2 }}>
        <CardContent sx={{ textAlign: 'center' }}>
          <Typography variant="h6" sx={{ fontSize: '14px', fontFamily: 'Arial, sans-serif' }}>TypeScript</Typography>
        </CardContent>
      </Card>
    </Grid>
    <Grid item xs={6} sm={4} md={3}>
      <Card variant="outlined" sx={{ width: '100px', padding: 2 }}>
        <CardContent sx={{ textAlign: 'center' }}>
          <Typography variant="h6" sx={{ fontSize: '14px', fontFamily: 'Arial, sans-serif' }}>Java</Typography>
        </CardContent>
      </Card>
    </Grid>
    <Grid item xs={6} sm={4} md={3}>
      <Card variant="outlined" sx={{ width: '100px', padding: 2 }}>
        <CardContent sx={{ textAlign: 'center' }}>
          <Typography variant="h6" sx={{ fontSize: '14px', fontFamily: 'Arial, sans-serif' }}>Python</Typography>
        </CardContent>
      </Card>
    </Grid>
    <Grid item xs={6} sm={4} md={3}>
      <Card variant="outlined" sx={{ width: '100px', padding: 2 }}>
        <CardContent sx={{ textAlign: 'center' }}>
          <Typography variant="h6" sx={{ fontSize: '14px', fontFamily: 'Arial, sans-serif' }}>C</Typography>
        </CardContent>
      </Card>
    </Grid>
    <Grid item xs={6} sm={4} md={3}>
      <Card variant="outlined" sx={{ width: '100px', padding: 2 }}>
        <CardContent sx={{ textAlign: 'center' }}>
          <Typography variant="h6" sx={{ fontSize: '14px', fontFamily: 'Arial, sans-serif' }}>SQL</Typography>
        </CardContent>
      </Card>
    </Grid>
    <Grid item xs={6} sm={4} md={3}>
      <Card variant="outlined" sx={{ width: '100px', padding: 2 }}>
        <CardContent sx={{ textAlign: 'center' }}>
          <Typography variant="h6" sx={{ fontSize: '14px', fontFamily: 'Arial, sans-serif' }}>Angular</Typography>
        </CardContent>
      </Card>
    </Grid>
    <Grid item xs={6} sm={4} md={3}>
      <Card variant="outlined" sx={{ width: '100px', padding: 2 }}>
        <CardContent sx={{ textAlign: 'center' }}>
          <Typography variant="h6" sx={{ fontSize: '14px', fontFamily: 'Arial, sans-serif' }}>PyTorch</Typography>
        </CardContent>
      </Card>
    </Grid>
    <Grid item xs={6} sm={4} md={3}>
      <Card variant="outlined" sx={{ width: '100px', padding: 2 }}>
        <CardContent sx={{ textAlign: 'center' }}>
          <Typography variant="h6" sx={{ fontSize: '14px', fontFamily: 'Arial, sans-serif' }}>React</Typography>
        </CardContent>
      </Card>
    </Grid>
    <Grid item xs={6} sm={4} md={3}>
      <Card variant="outlined" sx={{ width: '100px', padding: 2 }}>
        <CardContent sx={{ textAlign: 'center' }}>
          <Typography variant="h6" sx={{ fontSize: '14px', fontFamily: 'Arial, sans-serif' }}>Node.js</Typography>
        </CardContent>
      </Card>
    </Grid>
    <Grid item xs={6} sm={4} md={3}>
      <Card variant="outlined" sx={{ width: '100px', padding: 2 }}>
        <CardContent sx={{ textAlign: 'center' }}>
          <Typography variant="h6" sx={{ fontSize: '14px', fontFamily: 'Arial, sans-serif' }}>CSS / HTML</Typography>
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
        <Card sx={{ height: '300px', width: '300px', padding: 2 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>{project.title}</Typography>
            {/* Split the description by newline and render each line */}
            {project.description.split('\n').map((line, i) => (
              <Typography variant="body2" key={i} sx={{ whiteSpace: 'pre-line' }}>
                {line}
              </Typography>
            ))}
          </CardContent>
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
        <Typography variant="body2">&copy; 2025 All About Aarushi</Typography>
      </Box>
    </div>
  );
}

export default App;

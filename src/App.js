import React from 'react';
import './App.css';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  Box
} from '@mui/material';
import { Mail, LinkedIn } from '@mui/icons-material';

const projects = [
  {
    title: "Handwriting to LaTeX",
    description: `• Built PyTorch model to convert handwritten math formulas to LaTeX using CNN-RNN and Transformer architectures\n• Preprocessed 10k+ CROHME dataset samples with regex tokenization and image padding\n• Evaluated ResNet and Transformer deep learning models, tuning hyperparameters and using teacher forcing`
  },
  {
    title: "Interactive Gantt Chart",
    description: `• Developed an interactive gantt chart dashboard using React and open-source Svar Gantt library, enabling real-time task visualization and project management\n• Integrated FastAPI with the frontend to fetch data from Azure DevOps APIs, enabling live updates on Gantt chart`
  },
  {
    title: "Gitlet",
    description: `• Implemented a miniature version of the version control system Git in Java\n• Worked through every stage of development from design to implementation to presentation`
  },
  {
    title: "File Systems",
    description: `• Optimized file system performance in C via memory management, dynamic file growth and buffer cache implementation\n• Tested functionality through test cases and debugged using Gnu Debugger (GDB)`
  }
];

const skills = [
  "JavaScript",
  "TypeScript",
  "Java",
  "Python",
  "C",
  "SQL",
  "Angular",
  "PyTorch",
  "React",
  "Node.js",
  "CSS / HTML"
];

function App() {
  return (
    <div>
      {/* Navbar */}
      <AppBar position="sticky" color="primary" sx={{ backgroundColor: '#1e1e1e' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontFamily: 'Courier New', color: '#66d9ef' }}>
            All About Aarushi
          </Typography>
          <Button color="inherit" href="#about" sx={{ color: '#f8f8f2', fontFamily: 'Courier New' }}>About</Button>
          <Button color="inherit" href="#skills" sx={{ color: '#f8f8f2', fontFamily: 'Courier New' }}>Skills</Button>
          <Button color="inherit" href="#projects" sx={{ color: '#f8f8f2', fontFamily: 'Courier New' }}>Projects</Button>
          <Button color="inherit" href="#contact" sx={{ color: '#f8f8f2', fontFamily: 'Courier New' }}>Contact</Button>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container>
        {/* About Section */}
        <Box id="about" sx={{ padding: '60px 0 40px 0', color: '#f8f8f2' }}>
          <Typography variant="h3" gutterBottom align="center" sx={{ color: '#66d9ef', fontFamily: 'Courier New' }}>
            About Me
          </Typography>
          <Typography variant="body1" align="center" paragraph sx={{ fontFamily: 'Courier New' }}>
            Hi! My name is Aarushi and I majored in Electrical Engineering and Computer Science (EECS) at UC Berkeley. I'm a passionate software developer with experience in fullstack development, 
            and I love building applications that solve real-world problems. I am interested in various different technologies including generative AI, web development, data analytics, and more! 
            I enjoy problem solving and am always eager to learn new things!
          </Typography>
        </Box>

        {/* Skills Section */}
        <Box id="skills" sx={{ padding: '60px 0', backgroundColor: '#1e1e1e' }}>
          <Typography variant="h3" gutterBottom align="center" sx={{ color: '#66d9ef', fontFamily: 'Courier New' }}>
            Skills
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            {skills.map((skill, index) => (
              <Grid item xs={6} sm={4} md={3} key={index}>
                <Card variant="outlined" sx={{
                  backgroundColor: '#2d2d2d',
                  borderRadius: '12px',
                  boxShadow: '0 4px 10px rgba(102, 217, 239, 0.3)',
                  padding: 2
                }}>
                  <CardContent sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" sx={{ fontSize: '16px', fontFamily: 'Courier New', color: '#a6e22e' }}>
                      {skill}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Projects Section */}
        <Box id="projects" sx={{ padding: '60px 0', color: '#f8f8f2' }}>
          <Typography variant="h3" gutterBottom align="center" sx={{ color: '#66d9ef', fontFamily: 'Courier New' }}>
            Projects
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            {projects.map((project, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{
                  height: '220px',
                  width: '500px',
                  backgroundColor: '#2d2d2d',
                  color: '#f8f8f2',
                  padding: 2,
                  borderRadius: '12px',
                  boxShadow: '0 4px 15px rgba(197, 163, 28, 0.3)'
                }}>
                  <CardContent>
                    <Typography variant="h5" gutterBottom sx={{ color: '#fd971f', fontFamily: 'Courier New' }}>
                      {project.title}
                    </Typography>
                    {project.description.split('\n').map((line, i) => (
                      <Typography variant="body2" key={i} sx={{ whiteSpace: 'pre-line', fontFamily: 'Courier New' }}>
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
        <Box id="contact" sx={{ padding: '60px 0', backgroundColor: '#1e1e1e', color: '#f8f8f2' }}>
          <Typography variant="h3" gutterBottom align="center" sx={{ color: '#66d9ef', fontFamily: 'Courier New' }}>
            Contact
          </Typography>
          <Typography variant="body1" align="center" paragraph sx={{ fontFamily: 'Courier New' }}>
            Feel free to reach out to me via email or on social media
          </Typography>
          <Grid container justifyContent="center" spacing={3}>
            <Grid item xs={6} sm={4}>
              <Button
                variant="contained"
                fullWidth
                href="mailto:aarushiagarwal0806@gmail.com"
                startIcon={<Mail />}
                sx={{
                  fontFamily: 'Courier New',
                  backgroundColor: '#66d9ef',
                  color: '#1e1e1e',
                  '&:hover': {
                    backgroundColor: '#a1ecf9'
                  }
                }}
              >
                Contact Me
              </Button>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Button
                variant="contained"
                fullWidth
                href="https://www.linkedin.com/in/aarushi0806/"
                startIcon={<LinkedIn />}
                sx={{
                  fontFamily: 'Courier New',
                  backgroundColor: '#fd971f',
                  color: '#1e1e1e',
                  '&:hover': {
                    backgroundColor: '#ffc778'
                  }
                }}
              >
                LinkedIn
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>

      {/* Footer */}
      <Box sx={{ backgroundColor: '#1e1e1e', color: '#75715e', padding: '20px 0', textAlign: 'center', fontFamily: 'Courier New' }}>
        <Typography variant="body2">&copy; 2025 All About Aarushi</Typography>
      </Box>
    </div>
  );
}

export default App;

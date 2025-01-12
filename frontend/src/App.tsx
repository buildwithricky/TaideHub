import { useState } from 'react';
import {
  Container,
  Box,
  Button,
  TextField,
  Typography,
  CircularProgress,
  Paper,
  ThemeProvider,
  createTheme,
  Grid,
  Card,
  CardContent,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  School,
  AutoStories,
  Timer,
  CheckCircleOutline,
  Create,
  Assignment,
} from '@mui/icons-material';
import axios from 'axios';

// Create a custom theme with education-focused colors
const theme = createTheme({
  palette: {
    primary: {
      main: '#1E4D8C', // Royal blue - traditional UK education color
      dark: '#0A2F5C',
      light: '#4C7CC9',
    },
    secondary: {
      main: '#9C2919', // Deep red - traditional UK education accent
    },
    background: {
      default: '#F5F7FA',
    },
  },
  typography: {
    fontFamily: "'Open Sans', sans-serif",
    h1: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 600,
    },
  },
});

function App() {
  const [topic, setTopic] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGeneratePresentation = async () => {
    if (!topic.trim()) {
      alert('Please enter a topic');
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(
        'http://localhost:8000/api/generate-slides',
        { topic },
        { responseType: 'blob' }
      );

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'lesson_presentation.pptx');
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error('Error generating presentation:', error);
      alert('Error generating presentation. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', py: 4 }}>
        <Container maxWidth={false} sx={{ px: { xs: 2, sm: 4, md: 6, lg: 8 } }}>
          {/* Header Section */}
          <Box sx={{ mb: 8, textAlign: 'center' }}>
            <Typography variant="h2" component="h1" gutterBottom color="primary" sx={{ 
              fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
              mb: 3
            }}>
              LessonCraft AI
            </Typography>
            <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
              Create engaging lesson presentations aligned with UK curriculum standards
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
              <Chip icon={<Timer />} label="Save Hours of Planning" color="primary" sx={{ px: 2, py: 3 }} />
              <Chip icon={<School />} label="Curriculum Aligned" color="primary" sx={{ px: 2, py: 3 }} />
              <Chip icon={<AutoStories />} label="Student Engagement Focus" color="primary" sx={{ px: 2, py: 3 }} />
            </Box>
          </Box>

          {/* Main Content */}
          <Grid container spacing={6}>
            {/* Left Column - Features */}
            <Grid item xs={12} md={4}>
              <Card sx={{ height: '100%', bgcolor: 'white', boxShadow: 3 }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h5" color="primary" gutterBottom>
                    Features
                  </Typography>
                  <List>
                    <ListItem sx={{ py: 2 }}>
                      <ListItemIcon>
                        <CheckCircleOutline color="primary" sx={{ fontSize: 30 }} />
                      </ListItemIcon>
                      <ListItemText 
                        primary={<Typography variant="h6">Starter Activities</Typography>}
                        secondary="Engage students from the first minute"
                      />
                    </ListItem>
                    <ListItem sx={{ py: 2 }}>
                      <ListItemIcon>
                        <Create color="primary" sx={{ fontSize: 30 }} />
                      </ListItemIcon>
                      <ListItemText 
                        primary={<Typography variant="h6">Knowledge Checks</Typography>}
                        secondary="Built-in assessment for learning"
                      />
                    </ListItem>
                    <ListItem sx={{ py: 2 }}>
                      <ListItemIcon>
                        <Assignment color="primary" sx={{ fontSize: 30 }} />
                      </ListItemIcon>
                      <ListItemText 
                        primary={<Typography variant="h6">Plenary Activities</Typography>}
                        secondary="Effective lesson closure"
                      />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>

            {/* Right Column - Generator */}
            <Grid item xs={12} md={8}>
              <Paper sx={{ p: { xs: 3, sm: 4, md: 5 }, bgcolor: 'white', boxShadow: 3 }}>
                <Typography variant="h4" gutterBottom color="primary" sx={{ mb: 3 }}>
                  Generate Your Lesson Presentation
                </Typography>
                <Typography variant="h6" sx={{ mb: 4 }} color="text.secondary">
                  Enter your lesson topic below and we'll create a complete presentation with starter activities,
                  main content, and plenary - all designed for secondary school students.
                </Typography>

                <TextField
                  fullWidth
                  label="Lesson Topic"
                  variant="outlined"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="e.g., Photosynthesis, World War II, Pythagoras' Theorem"
                  disabled={loading}
                  sx={{ 
                    mb: 4,
                    '& .MuiOutlinedInput-root': {
                      fontSize: '1.2rem',
                      padding: '15px'
                    }
                  }}
                />

                <Button
                  variant="contained"
                  onClick={handleGeneratePresentation}
                  disabled={loading}
                  size="large"
                  fullWidth
                  sx={{
                    py: 2,
                    fontSize: '1.2rem',
                    bgcolor: 'primary.main',
                    '&:hover': {
                      bgcolor: 'primary.dark',
                    },
                  }}
                >
                  {loading ? (
                    <CircularProgress size={28} color="inherit" />
                  ) : (
                    'Generate Lesson Presentation'
                  )}
                </Button>

                {/* Tips Section */}
                <Box sx={{ mt: 5 }}>
                  <Divider sx={{ mb: 3 }}>
                    <Chip label="Tips for Best Results" sx={{ px: 2, py: 3, fontSize: '1rem' }} />
                  </Divider>
                  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 2 }}>
                    • Be specific with your topic (e.g., "Cell Division in Biology" rather than just "Biology")<br />
                    • Consider your year group level when entering the topic<br />
                    • The presentation will include differentiated activities and assessment opportunities
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;

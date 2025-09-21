import React from 'react';
import { Box, Container, Typography, styled } from '@mui/material';
import { useTypewriter } from '../hooks/useTypewriter';
import churchImage from '../assets/images/church1.png';

const HeroSection = styled(Box)(({ theme }) => ({
  minHeight: '800px',
  backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${churchImage})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  textAlign: 'center',
  [theme.breakpoints.down('lg')]: {
    minHeight: '660px',
  },
  [theme.breakpoints.down('md')]: {
    minHeight: '506px',
  },
}));

const WelcomeText = styled(Typography)(({ theme }) => ({
  fontFamily: '"Alex Brush", cursive',
  fontSize: '2.25rem',
  marginTop: theme.spacing(4),
  [theme.breakpoints.down('md')]: {
    fontSize: '2rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.75rem',
  },
}));

const CursorSpan = styled('span')<{ show: boolean }>(({ show }) => ({
  display: show ? 'inline' : 'none',
  animation: 'blink 1s infinite',
  '@keyframes blink': {
    '0%, 50%': { opacity: 1 },
    '51%, 100%': { opacity: 0 },
  },
}));

const Home: React.FC = () => {
  const { displayText, showCursor } = useTypewriter({ 
    text: 'Welcome Home', 
    speed: 100,
    startDelay: 1000 
  });

  return (
    <HeroSection>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center' }}>
          <Typography 
            variant="h1" 
            component="h1" 
            sx={{ 
              fontWeight: 700,
              mb: 4,
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            }}
          >
            His Family Global Outreach
          </Typography>
          <WelcomeText>
            {displayText}
            <CursorSpan show={showCursor}>|</CursorSpan>
          </WelcomeText>
        </Box>
      </Container>
    </HeroSection>
  );
};

export default Home;
import React from 'react';
import { Box, Container, Typography, styled, Card, CardContent, Button } from '@mui/material';
import { Church, People, Favorite, Phone } from '@mui/icons-material';
import { useTypewriter } from '../hooks/useTypewriter';
import heroImage from '../assets/images/5d58f94147c213d6dda254caaff8faa3d7f0cf0aaf79a7b8fb14dfbdfff2fbdcfcc0168c73c07f76ac32a223e4c9f4cac5faef4cbe47a2ff4b2fcb_1280.jpg';

const HeroSection = styled(Box)(({ theme }) => ({
  minHeight: '800px',
  backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${heroImage})`,
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
    <>
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

      {/* Quick Info Section */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h3" component="h2" sx={{ mb: 3, color: 'primary.main' }}>
            Join Our Family
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: 600, mx: 'auto', lineHeight: 1.6 }}>
            Experience God's love in a welcoming community where families grow together in faith
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, mb: 6 }}>
          <Card sx={{ flex: 1, textAlign: 'center', p: 3 }}>
            <CardContent>
              <Church sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
                Worship Services
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Sunday: 9:00 AM & 5:00 PM
              </Typography>
              <Typography variant="body2">
                Join us for inspiring worship and biblical teaching
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ flex: 1, textAlign: 'center', p: 3 }}>
            <CardContent>
              <People sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
                Fellowship
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Wednesday: 6:00 PM
              </Typography>
              <Typography variant="body2">
                Connect with others through small groups and Bible study
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ flex: 1, textAlign: 'center', p: 3 }}>
            <CardContent>
              <Favorite sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
                Community Outreach
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Serving our community
              </Typography>
              <Typography variant="body2">
                Making a difference through love and service
              </Typography>
            </CardContent>
          </Card>
        </Box>

        <Box sx={{ textAlign: 'center' }}>
          <Card sx={{ p: 4, backgroundColor: 'primary.light', color: 'white' }}>
            <CardContent>
              <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
                New Here?
              </Typography>
              <Typography variant="h6" sx={{ mb: 4 }}>
                We'd love to meet you! Contact us to learn more about our community
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, justifyContent: 'center', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Phone sx={{ mr: 1 }} />
                  <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                    +234 806 507 4481
                  </Typography>
                </Box>
                <Button 
                  variant="contained" 
                  sx={{ 
                    backgroundColor: 'white', 
                    color: 'primary.main',
                    '&:hover': { backgroundColor: 'grey.100' }
                  }}
                >
                  Contact Us
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </>
  );
};

export default Home;
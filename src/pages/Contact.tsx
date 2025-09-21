import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  IconButton,
  styled,
} from '@mui/material';
import {
  Facebook,
  Email,
  Instagram,
  Phone,
  Schedule,
} from '@mui/icons-material';
import churchImage from '../assets/images/church1.png';

const HeroSection = styled(Box)(() => ({
  minHeight: '400px',
  backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${churchImage})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  textAlign: 'center',
}));

const SocialIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: 'rgba(71, 138, 201, 0.8)',
  color: 'white',
  margin: theme.spacing(1),
  '&:hover': {
    backgroundColor: 'rgba(71, 138, 201, 1)',
    transform: 'scale(1.1)',
  },
  transition: 'all 0.3s ease',
}));

const Contact: React.FC = () => {
  return (
    <>
      <HeroSection>
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" sx={{ mb: 2, fontWeight: 'bold' }}>
            Contact
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.9 }}>
            We would love to connect with you
          </Typography>
        </Container>
      </HeroSection>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
          <Box sx={{ flex: 1 }}>
            <Card sx={{ height: '100%', p: 3 }}>
              <CardContent>
                <Typography variant="h4" component="h2" sx={{ mb: 3, color: 'primary.main' }}>
                  Get in Touch
                </Typography>
                
                <Box sx={{ mb: 4 }}>
                  <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                    <Phone sx={{ mr: 1, color: 'primary.main' }} />
                    Contact Information
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 1 }}>
                    📞 +234 806 507 4481
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    10am - 5pm, Monday - Friday
                  </Typography>
                </Box>

                <Box sx={{ mb: 4 }}>
                  <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                    <Schedule sx={{ mr: 1, color: 'primary.main' }} />
                    Office Hours
                  </Typography>
                  <Typography variant="body1">
                    Monday - Friday: 10:00 AM - 5:00 PM
                  </Typography>
                  <Typography variant="body1">
                    Saturday: By Appointment
                  </Typography>
                  <Typography variant="body1">
                    Sunday: Service Hours
                  </Typography>
                </Box>

                <Box>
                  <Typography variant="h6" sx={{ mb: 2 }}>
                    Follow Us
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <SocialIconButton
                      onClick={() => window.open('https://facebook.com/Gfcfamily', '_blank')}
                      aria-label="Facebook"
                    >
                      <Facebook />
                    </SocialIconButton>
                    
                    <SocialIconButton
                      onClick={() => window.open('mailto:okedave50@gmail.com')}
                      aria-label="Email"
                    >
                      <Email />
                    </SocialIconButton>
                    
                    <SocialIconButton
                      onClick={() => window.open('https://instagram.com/hisfamilysglobaloutreach', '_blank')}
                      aria-label="Instagram"
                    >
                      <Instagram />
                    </SocialIconButton>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Box>

          <Box sx={{ flex: 1 }}>
            <Card sx={{ height: '100%', p: 3 }}>
              <CardContent>
                <Typography variant="h4" component="h2" sx={{ mb: 3, color: 'primary.main' }}>
                  Visit Us
                </Typography>
                
                <Typography variant="body1" sx={{ mb: 3 }}>
                  We welcome you to join us for worship, fellowship, and community outreach programs. 
                  Our doors are always open for those seeking spiritual guidance and connection.
                </Typography>

                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    Sunday Services
                  </Typography>
                  <Typography variant="body1">
                    Morning Service: 9:00 AM - 11:30 AM
                  </Typography>
                  <Typography variant="body1">
                    Evening Service: 5:00 PM - 7:00 PM
                  </Typography>
                </Box>

                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    Mid-Week Services
                  </Typography>
                  <Typography variant="body1">
                    Wednesday Bible Study: 6:00 PM - 8:00 PM
                  </Typography>
                  <Typography variant="body1">
                    Friday Prayer Meeting: 7:00 PM - 9:00 PM
                  </Typography>
                </Box>

                <Typography variant="body2" color="text.secondary">
                  For more information about our location and directions, please contact us using 
                  the information provided.
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Contact;
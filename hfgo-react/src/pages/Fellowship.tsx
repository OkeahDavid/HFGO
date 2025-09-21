import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  styled,
  Button,
} from '@mui/material';
import { Favorite, VolunteerActivism } from '@mui/icons-material';
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

const Fellowship: React.FC = () => {
  return (
    <>
      <HeroSection>
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" sx={{ mb: 2, fontWeight: 'bold' }}>
            Fellowship
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.9 }}>
            Building Community Together
          </Typography>
        </Container>
      </HeroSection>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, mb: 4 }}>
          <Card sx={{ flex: 1, p: 3 }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <Favorite sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
              <Typography variant="h4" component="h2" sx={{ mb: 3, color: 'primary.main' }}>
                Community Events
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
                Join us for regular community events designed to bring families together 
                and strengthen the bonds of fellowship. From seasonal celebrations to 
                family fun days, there's always something happening at our church.
              </Typography>
              <Button variant="contained" color="primary">
                View Events
              </Button>
            </CardContent>
          </Card>

          <Card sx={{ flex: 1, p: 3 }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <VolunteerActivism sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
              <Typography variant="h4" component="h2" sx={{ mb: 3, color: 'primary.main' }}>
                Small Groups
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
                Connect with others through our various small group ministries. Whether 
                you're interested in Bible study, prayer groups, or special interest 
                ministries, there's a place for you to grow and serve.
              </Typography>
              <Button variant="contained" color="primary">
                Join a Group
              </Button>
            </CardContent>
          </Card>
        </Box>

        <Card sx={{ p: 4 }}>
          <CardContent>
            <Typography variant="h4" component="h2" sx={{ mb: 3, color: 'primary.main', textAlign: 'center' }}>
              Weekly Activities
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
              <Box sx={{ flex: 1 }}>
                <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
                  Sunday Services
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  Morning Worship: 9:00 AM - 11:30 AM
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  Evening Service: 5:00 PM - 7:00 PM
                </Typography>
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
                  Midweek Programs
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  Wednesday Bible Study: 6:00 PM - 8:00 PM
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  Friday Prayer Meeting: 7:00 PM - 9:00 PM
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default Fellowship;
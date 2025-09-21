import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  styled,
} from '@mui/material';
import churchImage from '../assets/images/church1.png';
import about1 from '../assets/images/image1.jpeg';
import about2 from '../assets/images/image5.jpeg';

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

const About: React.FC = () => {
  return (
    <>
      <HeroSection>
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" sx={{ mb: 2, fontWeight: 'bold' }}>
            About Us
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.9 }}>
            His Family Global Outreach
          </Typography>
        </Container>
      </HeroSection>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Card sx={{ p: 4, mb: 4 }}>
          <CardContent>
            <Typography variant="h4" component="h2" sx={{ mb: 3, color: 'primary.main' }}>
              Our Mission
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
              His Family Global Outreach is dedicated to spreading the love of Christ and building 
              stronger communities through faith, fellowship, and service. We believe in the power 
              of God's love to transform lives and create lasting positive change in our world.
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
              Our ministry extends beyond the walls of our church to reach families, communities, 
              and nations with the Gospel of Jesus Christ. We are committed to nurturing spiritual 
              growth, providing support to those in need, and creating an environment where everyone 
              can experience God's love and grace.
            </Typography>
          </CardContent>
        </Card>

        {/* About Images Section */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, mb: 4 }}>
          <Box sx={{ flex: 1 }}>
            <Box
              component="img"
              src={about1}
              alt="His Family Global Outreach community"
              sx={{
                width: '100%',
                height: 300,
                objectFit: 'cover',
                borderRadius: 2,
                boxShadow: 4,
              }}
            />
          </Box>
          <Box sx={{ flex: 1 }}>
            <Box
              component="img"
              src={about2}
              alt="Ministry and fellowship activities"
              sx={{
                width: '100%',
                height: 300,
                objectFit: 'cover',
                borderRadius: 2,
                boxShadow: 4,
              }}
            />
          </Box>
        </Box>

        <Card sx={{ p: 4 }}>
          <CardContent>
            <Typography variant="h4" component="h2" sx={{ mb: 3, color: 'primary.main' }}>
              Our Vision
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
              To be a beacon of hope and transformation in our community and beyond, raising up 
              disciples who will impact their generation with the love and truth of Jesus Christ.
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
              We envision a world where families are restored, communities are healed, and nations 
              are transformed through the power of the Gospel. Our goal is to create sustainable 
              change that will last for generations to come.
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default About;
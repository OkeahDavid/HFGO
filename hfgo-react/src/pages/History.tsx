import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  styled,
} from '@mui/material';
import historyImage from '../assets/images/92a030ccb35ba639112dfe7789711b4176a8a3e08884ecef02ca4a2ce915478afadab73af18412c6395b8794b405cdafb5b469b28c878789f99baa_1280.jpg';

const HeroSection = styled(Box)(() => ({
  minHeight: '400px',
  backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${historyImage})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  textAlign: 'center',
}));

const History: React.FC = () => {
  return (
    <>
      <HeroSection>
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" sx={{ mb: 2, fontWeight: 'bold' }}>
            Our History
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.9 }}>
            A Legacy of Faith and Service
          </Typography>
        </Container>
      </HeroSection>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Card sx={{ p: 4, mb: 4 }}>
          <CardContent>
            <Typography variant="h4" component="h2" sx={{ mb: 3, color: 'primary.main' }}>
              Our Foundation
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
              His Family Global Outreach was founded with a heart for reaching families and 
              communities with the transformative power of God's love. From humble beginnings, 
              our ministry has grown to impact lives across multiple communities and nations.
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
              Our journey began with a simple but profound vision: to create a place where 
              families could come together to worship, grow in faith, and serve others. 
              Through the years, we have remained committed to this foundational purpose 
              while expanding our reach and deepening our impact.
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ p: 4 }}>
          <CardContent>
            <Typography variant="h4" component="h2" sx={{ mb: 3, color: 'primary.main' }}>
              Growing in Faith
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
              Over the years, we have witnessed countless testimonies of transformation, 
              healing, and restoration. Our community has grown not just in numbers, but 
              in spiritual maturity and commitment to serving others.
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
              Today, we continue to build on this rich heritage, always looking forward 
              to new opportunities to share God's love and make a lasting difference in 
              the world around us.
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default History;
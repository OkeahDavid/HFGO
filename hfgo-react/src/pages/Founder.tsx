import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  styled,
  Avatar,
} from '@mui/material';
import {
  Email,
  Phone,
  School,
  Church,
  Favorite,
  Groups,
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

const LeaderCard = styled(Card)(({ theme }) => ({
  height: '100%',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[8],
  },
}));

const Founder: React.FC = () => {
  return (
    <>
      <HeroSection>
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" sx={{ mb: 2, fontWeight: 'bold' }}>
            Our Founders
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.9 }}>
            Dennis & Rita Okeah
          </Typography>
        </Container>
      </HeroSection>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h3" component="h2" sx={{ mb: 3, color: 'primary.main' }}>
            Leadership & Vision
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: 800, mx: 'auto', lineHeight: 1.6 }}>
            His Family Global Outreach was founded by Dennis and Rita Okeah, dedicated servants 
            of God with a heart for families and global outreach.
          </Typography>
        </Box>

        {/* Founders Section */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, mb: 6 }}>
          <LeaderCard sx={{ flex: 1 }}>
            <CardContent sx={{ p: 4, textAlign: 'center' }}>
              <Avatar
                sx={{ 
                  width: 120, 
                  height: 120, 
                  mx: 'auto', 
                  mb: 3,
                  bgcolor: 'primary.main',
                  fontSize: '3rem'
                }}
              >
                D
              </Avatar>
              <Typography variant="h4" component="h3" sx={{ mb: 2, fontWeight: 'bold', color: 'primary.main' }}>
                Pastor Dennis Okeah
              </Typography>
              <Typography variant="h6" sx={{ mb: 3, color: 'text.secondary' }}>
                Senior Pastor & Founder
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
                Pastor Dennis is a passionate minister of the Gospel with over two decades of 
                experience in pastoral ministry. He holds a deep burden for reaching families 
                and communities with the transformative power of God's love.
              </Typography>
              <Box sx={{ textAlign: 'left', mb: 3 }}>
                <Typography variant="h6" sx={{ mb: 2, color: 'primary.main' }}>
                  Ministry Focus:
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Church sx={{ mr: 1, color: 'primary.main' }} />
                  <Typography variant="body2">Church Planting & Leadership</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Groups sx={{ mr: 1, color: 'primary.main' }} />
                  <Typography variant="body2">Family Ministry & Counseling</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <School sx={{ mr: 1, color: 'primary.main' }} />
                  <Typography variant="body2">Biblical Teaching & Discipleship</Typography>
                </Box>
              </Box>
            </CardContent>
          </LeaderCard>

          <LeaderCard sx={{ flex: 1 }}>
            <CardContent sx={{ p: 4, textAlign: 'center' }}>
              <Avatar
                sx={{ 
                  width: 120, 
                  height: 120, 
                  mx: 'auto', 
                  mb: 3,
                  bgcolor: 'secondary.main',
                  color: 'primary.main',
                  fontSize: '3rem'
                }}
              >
                R
              </Avatar>
              <Typography variant="h4" component="h3" sx={{ mb: 2, fontWeight: 'bold', color: 'primary.main' }}>
                Pastor Rita Okeah
              </Typography>
              <Typography variant="h6" sx={{ mb: 3, color: 'text.secondary' }}>
                Co-Pastor & Women's Ministry Leader
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
                Pastor Rita is a gifted teacher and compassionate leader who has dedicated 
                her life to empowering women and strengthening families. Her heart for 
                ministry and pastoral care touches lives across all age groups.
              </Typography>
              <Box sx={{ textAlign: 'left', mb: 3 }}>
                <Typography variant="h6" sx={{ mb: 2, color: 'primary.main' }}>
                  Ministry Focus:
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Favorite sx={{ mr: 1, color: 'primary.main' }} />
                  <Typography variant="body2">Women's Ministry & Empowerment</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Groups sx={{ mr: 1, color: 'primary.main' }} />
                  <Typography variant="body2">Children & Youth Programs</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Church sx={{ mr: 1, color: 'primary.main' }} />
                  <Typography variant="body2">Pastoral Care & Counseling</Typography>
                </Box>
              </Box>
            </CardContent>
          </LeaderCard>
        </Box>

        {/* Vision & Mission Section */}
        <Card sx={{ p: 4, mb: 6 }}>
          <CardContent>
            <Typography variant="h4" component="h2" sx={{ mb: 4, color: 'primary.main', textAlign: 'center' }}>
              Their Vision for Ministry
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
              <Box sx={{ flex: 1 }}>
                <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
                  Family Restoration
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Dennis and Rita believe that strong families are the foundation of strong 
                  communities. Their ministry focuses on healing broken relationships, 
                  strengthening marriages, and providing guidance for godly parenting.
                </Typography>
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
                  Global Impact
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Their vision extends beyond local ministry to reach nations with the Gospel. 
                  Through strategic partnerships and missions work, they are committed to 
                  making disciples across cultural and geographical boundaries.
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>

        {/* Contact & Background */}
        <Card sx={{ p: 4, backgroundColor: 'primary.light', color: 'white' }}>
          <CardContent>
            <Typography variant="h4" component="h2" sx={{ mb: 4, fontWeight: 'bold', textAlign: 'center' }}>
              Leadership Background
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, mb: 4 }}>
              <Box sx={{ flex: 1 }}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                  Ministry Experience
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.7 }}>
                  • Over 20 years in pastoral ministry
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.7 }}>
                  • Church planting and leadership development
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.7 }}>
                  • International missions and outreach
                </Typography>
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                  Education & Training
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.7 }}>
                  • Theological education and biblical studies
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.7 }}>
                  • Leadership and management training
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.7 }}>
                  • Continuous professional development
                </Typography>
              </Box>
            </Box>
            <Box sx={{ textAlign: 'center', pt: 2, borderTop: '1px solid rgba(255,255,255,0.3)' }}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                Contact the Leadership
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, justifyContent: 'center' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Phone sx={{ mr: 1 }} />
                  <Typography variant="body1">+234 806 507 4481</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Email sx={{ mr: 1 }} />
                  <Typography variant="body1">okedave50@gmail.com</Typography>
                </Box>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default Founder;
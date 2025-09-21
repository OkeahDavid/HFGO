import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  styled,
} from '@mui/material';
import {
  Church,
  People,
  Favorite,
  School,
  VolunteerActivism,
  Public,
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

const MinistryCard = styled(Card)(({ theme }) => ({
  height: '100%',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[8],
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  borderRadius: '50%',
  width: 80,
  height: 80,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto 16px auto',
  color: 'white',
}));

const ministryAreas = [
  {
    icon: <Church sx={{ fontSize: 40 }} />,
    title: 'Worship & Prayer',
    description: 'Creating an atmosphere of worship where hearts are transformed and lives are touched by the presence of God through heartfelt praise and powerful prayer.',
    activities: ['Sunday Worship Services', 'Prayer Meetings', 'Intercessory Prayer', 'Worship Training']
  },
  {
    icon: <People sx={{ fontSize: 40 }} />,
    title: 'Family Ministry',
    description: 'Strengthening families through biblical principles, providing support for marriages, parenting guidance, and creating strong family foundations.',
    activities: ['Marriage Counseling', 'Parenting Classes', 'Family Events', 'Youth Programs']
  },
  {
    icon: <Favorite sx={{ fontSize: 40 }} />,
    title: 'Community Outreach',
    description: 'Extending God\'s love beyond our walls to serve the community through practical help, feeding programs, and meeting the needs of the less privileged.',
    activities: ['Food Distribution', 'Medical Outreach', 'Clothing Drive', 'Community Events']
  },
  {
    icon: <School sx={{ fontSize: 40 }} />,
    title: 'Discipleship & Teaching',
    description: 'Equipping believers with biblical knowledge and spiritual tools to grow in their faith and become effective disciples who can impact their generation.',
    activities: ['Bible Study Groups', 'Leadership Training', 'Mentorship Programs', 'Christian Education']
  },
  {
    icon: <VolunteerActivism sx={{ fontSize: 40 }} />,
    title: 'Missions & Evangelism',
    description: 'Spreading the Gospel message both locally and globally, reaching the lost and making disciples of all nations through strategic evangelistic efforts.',
    activities: ['Local Evangelism', 'Mission Trips', 'Church Planting', 'Evangelism Training']
  },
  {
    icon: <Public sx={{ fontSize: 40 }} />,
    title: 'Global Impact',
    description: 'Making a lasting difference in communities worldwide through partnerships, humanitarian aid, and sustainable development programs that transform lives.',
    activities: ['International Partnerships', 'Development Projects', 'Humanitarian Aid', 'Cultural Exchange']
  }
];

const Values: React.FC = () => {
  return (
    <>
      <HeroSection>
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" sx={{ mb: 2, fontWeight: 'bold' }}>
            What We Do
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.9 }}>
            Transforming Lives Through Faith, Love, and Service
          </Typography>
        </Container>
      </HeroSection>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h3" component="h2" sx={{ mb: 3, color: 'primary.main' }}>
            Our Ministry Areas
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: 800, mx: 'auto', lineHeight: 1.6 }}>
            His Family Global Outreach is committed to building God's kingdom through various 
            ministries that address the spiritual, physical, and emotional needs of people in 
            our community and beyond.
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, mb: 6 }}>
          {ministryAreas.map((ministry, index) => (
            <Box key={index} sx={{ flex: { xs: '1 1 100%', md: '1 1 calc(50% - 16px)', lg: '1 1 calc(33.333% - 16px)' } }}>
              <MinistryCard>
                <CardContent sx={{ p: 4, textAlign: 'center' }}>
                  <IconWrapper>
                    {ministry.icon}
                  </IconWrapper>
                  <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 'bold' }}>
                    {ministry.title}
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
                    {ministry.description}
                  </Typography>
                  <Box sx={{ textAlign: 'left' }}>
                    <Typography variant="h6" sx={{ mb: 1, color: 'primary.main' }}>
                      Key Activities:
                    </Typography>
                    <Box component="ul" sx={{ pl: 2, m: 0 }}>
                      {ministry.activities.map((activity, actIndex) => (
                        <Typography 
                          component="li" 
                          variant="body2" 
                          key={actIndex}
                          sx={{ mb: 0.5 }}
                        >
                          {activity}
                        </Typography>
                      ))}
                    </Box>
                  </Box>
                </CardContent>
              </MinistryCard>
            </Box>
          ))}
        </Box>

        <Card sx={{ p: 4, backgroundColor: 'primary.light', color: 'white' }}>
          <CardContent sx={{ textAlign: 'center' }}>
            <Typography variant="h4" component="h2" sx={{ mb: 3, fontWeight: 'bold' }}>
              Join Our Mission
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}>
              Whether you're looking to grow in your faith, serve your community, or make a 
              global impact, there's a place for you in our ministry family.
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, justifyContent: 'center' }}>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                📞 Contact us: +234 806 507 4481
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                ✉️ Email: okedave50@gmail.com
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default Values;
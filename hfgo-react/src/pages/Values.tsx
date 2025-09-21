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
// Widow support images
import wid1 from '../assets/images/wid1.jpg';
import wid2 from '../assets/images/wid2.jpg';
import wid3 from '../assets/images/wid3.jpg';
import wid4 from '../assets/images/wid4.jpg';
import wid5 from '../assets/images/wid5.jpg';
import wid6 from '../assets/images/wid6.jpg';
import wid7 from '../assets/images/wid7.jpg';
import wid8 from '../assets/images/wid8.jpg';
import wid9 from '../assets/images/wid9.jpg';
// Widow ministry images
import widow1 from '../assets/images/widow1.jpg';
import widow2 from '../assets/images/widow2.jpg';
import widow3 from '../assets/images/widow3.jpg';
import widow4 from '../assets/images/widow4.jpg';
import widow5 from '../assets/images/widow5.jpg';
import widow6 from '../assets/images/widow6.jpg';
// Business development images
import business1 from '../assets/images/business1.jpg';
import business4 from '../assets/images/business4.jpg';
import business5 from '../assets/images/business5.jpg';
import whatsappImage from '../assets/images/WhatsAppImage2021-11-08at23.44.17.jpeg';
// Skills training images
import skills1 from '../assets/images/skills1.jpg';
import skills2 from '../assets/images/skills2.jpg';
import skills3 from '../assets/images/skills3.jpg';
import skills4 from '../assets/images/skills4.jpg';
import skills5 from '../assets/images/skills5.jpg';
import skills6 from '../assets/images/skills6.jpg';
import skills7 from '../assets/images/skills7.jpg';
import skills8 from '../assets/images/skills8.jpg';
import skills9 from '../assets/images/skills9.jpg';

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

        {/* Widow Support Section */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" component="h2" sx={{ mb: 4, textAlign: 'center', color: 'primary.main' }}>
            Widow Support Ministry
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, textAlign: 'center', maxWidth: 800, mx: 'auto' }}>
            Providing care, support, and empowerment to widows in our community through practical assistance and spiritual encouragement.
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 4 }}>
            {[wid1, wid2, wid3, wid4, wid5, wid6, wid7, wid8, wid9].map((image, index) => (
              <Box key={index} sx={{ flex: '1 1 calc(33.333% - 8px)', minWidth: '200px' }}>
                <Box
                  component="img"
                  src={image}
                  alt={`Widow support activity ${index + 1}`}
                  sx={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: 2,
                    boxShadow: 2,
                  }}
                />
              </Box>
            ))}
          </Box>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 4 }}>
            {[widow1, widow2, widow3, widow4, widow5, widow6].map((image, index) => (
              <Box key={index} sx={{ flex: '1 1 calc(50% - 8px)', minWidth: '200px' }}>
                <Box
                  component="img"
                  src={image}
                  alt={`Widow ministry ${index + 1}`}
                  sx={{
                    width: '100%',
                    height: '250px',
                    objectFit: 'cover',
                    borderRadius: 2,
                    boxShadow: 2,
                  }}
                />
              </Box>
            ))}
          </Box>
        </Box>

        {/* Business Development Section */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" component="h2" sx={{ mb: 4, textAlign: 'center', color: 'primary.main' }}>
            Business Development & Empowerment
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, textAlign: 'center', maxWidth: 800, mx: 'auto' }}>
            Empowering individuals through business training, entrepreneurship programs, and economic development initiatives.
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 4 }}>
            <Box sx={{ flex: '1 1 calc(25% - 12px)', minWidth: '200px' }}>
              <Box
                component="img"
                src={whatsappImage}
                alt="Business development program"
                sx={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: 2,
                  boxShadow: 2,
                }}
              />
            </Box>
            {[business1, business4, business5].map((image, index) => (
              <Box key={index} sx={{ flex: '1 1 calc(25% - 12px)', minWidth: '200px' }}>
                <Box
                  component="img"
                  src={image}
                  alt={`Business development ${index + 1}`}
                  sx={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: 2,
                    boxShadow: 2,
                  }}
                />
              </Box>
            ))}
          </Box>
        </Box>

        {/* Skills Training Section */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" component="h2" sx={{ mb: 4, textAlign: 'center', color: 'primary.main' }}>
            Skills Training & Capacity Building
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, textAlign: 'center', maxWidth: 800, mx: 'auto' }}>
            Equipping individuals with practical skills and vocational training to become self-reliant and productive members of society.
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 4 }}>
            {[skills1, skills2, skills3, skills4, skills5, skills6, skills7, skills8, skills9].map((image, index) => (
              <Box key={index} sx={{ flex: '1 1 calc(33.333% - 8px)', minWidth: '200px' }}>
                <Box
                  component="img"
                  src={image}
                  alt={`Skills training ${index + 1}`}
                  sx={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: 2,
                    boxShadow: 2,
                  }}
                />
              </Box>
            ))}
          </Box>
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
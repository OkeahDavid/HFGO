import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  styled,
} from '@mui/material';
import {
  Favorite,
  School,
  Home,
  Public,
  VolunteerActivism,
  AccountBalance,
  CreditCard,
  Phone,
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

const GivingCard = styled(Card)(({ theme }) => ({
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

const givingOptions = [
  {
    icon: <Favorite sx={{ fontSize: 40 }} />,
    title: 'Tithes & Offerings',
    description: 'Regular giving to support the ongoing ministry and operations of the church.',
    purpose: 'Pastoral support, facility maintenance, ministry programs'
  },
  {
    icon: <VolunteerActivism sx={{ fontSize: 40 }} />,
    title: 'Mission Support',
    description: 'Support our global outreach efforts and missionary activities worldwide.',
    purpose: 'Church planting, evangelism, international missions'
  },
  {
    icon: <School sx={{ fontSize: 40 }} />,
    title: 'Education Fund',
    description: 'Help provide educational opportunities and training for ministry development.',
    purpose: 'Leadership training, biblical education, skill development'
  },
  {
    icon: <Home sx={{ fontSize: 40 }} />,
    title: 'Building Fund',
    description: 'Contribute to facility improvements and expansion projects.',
    purpose: 'Church building, renovations, equipment purchases'
  },
  {
    icon: <Public sx={{ fontSize: 40 }} />,
    title: 'Community Outreach',
    description: 'Support programs that serve the local community and those in need.',
    purpose: 'Food programs, medical outreach, community events'
  }
];

const Donations: React.FC = () => {
  return (
    <>
      <HeroSection>
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" sx={{ mb: 2, fontWeight: 'bold' }}>
            Donations & Giving
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.9 }}>
            Partner with Us in Building God's Kingdom
          </Typography>
        </Container>
      </HeroSection>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h3" component="h2" sx={{ mb: 3, color: 'primary.main' }}>
            Ways to Give
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: 800, mx: 'auto', lineHeight: 1.6 }}>
            Your generous giving enables us to fulfill our mission of reaching families and 
            communities with the love of Christ. Every gift, regardless of size, makes a 
            significant impact in advancing God's kingdom.
          </Typography>
        </Box>

        {/* Giving Options */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, mb: 6 }}>
          {givingOptions.map((option, index) => (
            <Box key={index} sx={{ flex: { xs: '1 1 100%', md: '1 1 calc(50% - 16px)', lg: '1 1 calc(33.333% - 16px)' } }}>
              <GivingCard>
                <CardContent sx={{ p: 4, textAlign: 'center' }}>
                  <IconWrapper>
                    {option.icon}
                  </IconWrapper>
                  <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 'bold' }}>
                    {option.title}
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
                    {option.description}
                  </Typography>
                  <Box sx={{ textAlign: 'left', backgroundColor: 'grey.50', p: 2, borderRadius: 1 }}>
                    <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 1, color: 'primary.main' }}>
                      Supports:
                    </Typography>
                    <Typography variant="body2">
                      {option.purpose}
                    </Typography>
                  </Box>
                </CardContent>
              </GivingCard>
            </Box>
          ))}
        </Box>

        {/* How to Give */}
        <Card sx={{ p: 4, mb: 6 }}>
          <CardContent>
            <Typography variant="h4" component="h2" sx={{ mb: 4, color: 'primary.main', textAlign: 'center' }}>
              How to Give
            </Typography>
            
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
              <Box sx={{ flex: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <AccountBalance sx={{ mr: 2, color: 'primary.main', fontSize: 30 }} />
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      Bank Transfer
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Direct bank transfer for tithes and offerings
                    </Typography>
                  </Box>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <CreditCard sx={{ mr: 2, color: 'primary.main', fontSize: 30 }} />
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      Online Giving
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Secure online platform for convenient giving
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Phone sx={{ mr: 2, color: 'primary.main', fontSize: 30 }} />
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      Mobile Money
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Mobile money transfers for easy giving
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box sx={{ flex: 1 }}>
                <Card sx={{ p: 3, backgroundColor: 'primary.light', color: 'white' }}>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                    Bank Account Details
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 1 }}>
                    <strong>Account Name:</strong> His Family Global Outreach
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 1 }}>
                    <strong>Bank:</strong> [Bank Name]
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 1 }}>
                    <strong>Account Number:</strong> [Account Number]
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    <strong>Sort Code:</strong> [Sort Code]
                  </Typography>
                  <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
                    Please contact us for the most current account information
                  </Typography>
                </Card>
              </Box>
            </Box>
          </CardContent>
        </Card>

        {/* Biblical Foundation */}
        <Card sx={{ p: 4, mb: 6, backgroundColor: 'grey.50' }}>
          <CardContent sx={{ textAlign: 'center' }}>
            <Typography variant="h4" component="h2" sx={{ mb: 4, color: 'primary.main' }}>
              Biblical Foundation for Giving
            </Typography>
            
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
              <Box sx={{ flex: 1 }}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                  "Honor the Lord with your wealth"
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, fontStyle: 'italic' }}>
                  "Honor the Lord with your wealth, with the firstfruits of all your crops; 
                  then your barns will be filled to overflowing, and your vats will brim over with new wine."
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                  - Proverbs 3:9-10
                </Typography>
              </Box>
              
              <Box sx={{ flex: 1 }}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                  "God loves a cheerful giver"
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, fontStyle: 'italic' }}>
                  "Each of you should give what you have decided in your heart to give, 
                  not reluctantly or under compulsion, for God loves a cheerful giver."
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                  - 2 Corinthians 9:7
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>

        {/* Contact for Giving */}
        <Card sx={{ p: 4, backgroundColor: 'primary.main', color: 'white' }}>
          <CardContent sx={{ textAlign: 'center' }}>
            <Typography variant="h4" component="h2" sx={{ mb: 3, fontWeight: 'bold' }}>
              Questions About Giving?
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}>
              We're here to help! Contact our finance team for any questions about giving 
              options, tax receipts, or to discuss planned giving opportunities.
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 3, justifyContent: 'center', mb: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Phone sx={{ mr: 1 }} />
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                  +234 806 507 4481
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                  ✉️ okedave50@gmail.com
                </Typography>
              </Box>
            </Box>
            <Button 
              variant="contained" 
              size="large" 
              sx={{ 
                backgroundColor: 'white', 
                color: 'primary.main',
                '&:hover': { backgroundColor: 'grey.100' }
              }}
            >
              Contact Us About Giving
            </Button>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default Donations;
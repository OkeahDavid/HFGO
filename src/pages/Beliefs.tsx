import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  styled,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import {
  ExpandMore,
  BookmarkBorder,
  Favorite,
  AutoStories,
  Public,
  People,
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

const BeliefCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  '&:hover': {
    boxShadow: theme.shadows[4],
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  borderRadius: '50%',
  width: 60,
  height: 60,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto 16px auto',
  color: 'white',
}));

const coreBeliefs = [
  {
    icon: <BookmarkBorder sx={{ fontSize: 30 }} />,
    title: 'The Holy Scripture',
    summary: 'We believe the Bible is the inspired, infallible Word of God.',
    details: 'The Bible is our ultimate authority for faith and practice. We believe it was written by human authors under the supernatural guidance of the Holy Spirit. It is true, authoritative, and sufficient for all matters of faith and conduct.'
  },
  {
    icon: <Favorite sx={{ fontSize: 30 }} />,
    title: 'The Trinity',
    summary: 'We believe in one God eternally existing in three persons.',
    details: 'God exists as Father, Son, and Holy Spirit - three distinct persons sharing one divine essence. Each person of the Trinity is fully God, yet there is only one God. This mystery is central to our Christian faith.'
  },
  {
    icon: <AutoStories sx={{ fontSize: 30 }} />,
    title: 'Jesus Christ',
    summary: 'We believe Jesus is fully God and fully man, our Savior and Lord.',
    details: 'Jesus Christ is the eternal Son of God who became human to save us from sin. He lived a sinless life, died on the cross for our sins, rose from the dead, and ascended to heaven. He is the only way to salvation.'
  },
  {
    icon: <Public sx={{ fontSize: 30 }} />,
    title: 'Salvation by Grace',
    summary: 'We believe salvation is by grace through faith, not by works.',
    details: 'Salvation is a gift from God, received by faith alone in Jesus Christ alone. We cannot earn salvation through good works, but good works are the natural result of a transformed life in Christ.'
  },
  {
    icon: <People sx={{ fontSize: 30 }} />,
    title: 'The Church',
    summary: 'We believe the Church is the body of Christ on earth.',
    details: 'The Church consists of all believers in Jesus Christ. We are called to worship together, grow in faith, serve one another, and share the Gospel with the world. The local church is God\'s plan for spiritual growth and community.'
  }
];

const practicalBeliefs = [
  {
    title: 'Water Baptism',
    content: 'We practice baptism by immersion as a public declaration of faith and obedience to Christ\'s command.'
  },
  {
    title: 'Holy Communion',
    content: 'We regularly observe communion as a remembrance of Christ\'s sacrifice and our unity as believers.'
  },
  {
    title: 'Prayer and Worship',
    content: 'We believe in the power of prayer and the importance of heartfelt worship in both public and private settings.'
  },
  {
    title: 'Spiritual Gifts',
    content: 'We believe the Holy Spirit gives spiritual gifts to believers for the building up of the church and ministry to others.'
  },
  {
    title: 'Christian Living',
    content: 'We believe Christians should live holy lives that reflect Christ\'s character and demonstrate love for God and others.'
  },
  {
    title: 'The Great Commission',
    content: 'We are called to make disciples of all nations, sharing the Gospel and teaching others to follow Christ.'
  }
];

const Beliefs: React.FC = () => {
  return (
    <>
      <HeroSection>
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" sx={{ mb: 2, fontWeight: 'bold' }}>
            Our Beliefs
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.9 }}>
            Foundational Truths That Guide Our Faith
          </Typography>
        </Container>
      </HeroSection>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h3" component="h2" sx={{ mb: 3, color: 'primary.main' }}>
            Core Doctrines
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: 800, mx: 'auto', lineHeight: 1.6 }}>
            Our beliefs are rooted in biblical truth and historic Christian doctrine. 
            These foundational principles guide our ministry and shape our community.
          </Typography>
        </Box>

        <Box sx={{ mb: 6 }}>
          {coreBeliefs.map((belief, index) => (
            <BeliefCard key={index}>
              <CardContent sx={{ p: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3 }}>
                  <IconWrapper>
                    {belief.icon}
                  </IconWrapper>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h4" component="h3" sx={{ mb: 2, fontWeight: 'bold' }}>
                      {belief.title}
                    </Typography>
                    <Typography variant="h6" sx={{ mb: 2, color: 'text.secondary' }}>
                      {belief.summary}
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                      {belief.details}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </BeliefCard>
          ))}
        </Box>

        <Card sx={{ p: 4, mb: 6 }}>
          <CardContent>
            <Typography variant="h4" component="h2" sx={{ mb: 4, color: 'primary.main', textAlign: 'center' }}>
              Our Practices & Values
            </Typography>
            
            {practicalBeliefs.map((practice, index) => (
              <Accordion key={index} sx={{ mb: 1 }}>
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  aria-controls={`panel${index}-content`}
                  id={`panel${index}-header`}
                >
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    {practice.title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                    {practice.content}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </CardContent>
        </Card>

        <Card sx={{ p: 4, backgroundColor: 'primary.light', color: 'white' }}>
          <CardContent sx={{ textAlign: 'center' }}>
            <Typography variant="h4" component="h2" sx={{ mb: 3, fontWeight: 'bold' }}>
              Statement of Faith
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, maxWidth: 800, mx: 'auto' }}>
              "We believe in the fundamental truths of Christianity as revealed in the Holy Scriptures. 
              Our faith is built on the solid foundation of God's Word, and we seek to live out these 
              beliefs in our daily lives and ministry."
            </Typography>
            <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
              - His Family Global Outreach Leadership
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default Beliefs;
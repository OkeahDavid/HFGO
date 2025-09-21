import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  styled,
  Chip,
} from '@mui/material';
import { CalendarToday, Person } from '@mui/icons-material';
import churchImage from '../assets/images/church1.png';
import type { BlogPost } from '../types';

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

const BlogCard = styled(Card)(({ theme }) => ({
  height: '100%',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[8],
  },
}));

// Sample blog posts data
const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Power of Faith in Challenging Times',
    excerpt: 'Discover how faith can sustain us through life\'s difficulties and provide hope for the future.',
    content: 'Full blog post content...',
    date: '2024-09-15',
    author: 'Pastor Dennis Okeah',
    category: 'Faith',
    image: churchImage
  },
  {
    id: '2',
    title: 'Building Strong Christian Families',
    excerpt: 'Practical guidance for creating a Christ-centered home that nurtures spiritual growth.',
    content: 'Full blog post content...',
    date: '2024-09-10',
    author: 'Pastor Rita Okeah',
    category: 'Family',
    image: churchImage
  },
  {
    id: '3',
    title: 'Our Mission Trip to Rural Communities',
    excerpt: 'Read about our recent outreach efforts and the lives touched through our mission work.',
    content: 'Full blog post content...',
    date: '2024-09-05',
    author: 'Mission Team',
    category: 'Missions',
    image: churchImage
  },
  {
    id: '4',
    title: 'Understanding God\'s Grace',
    excerpt: 'Exploring the depth of God\'s grace and how it transforms our relationship with Him.',
    content: 'Full blog post content...',
    date: '2024-08-30',
    author: 'Pastor Dennis Okeah',
    category: 'Theology',
    image: churchImage
  }
];

const Blog: React.FC = () => {
  return (
    <>
      <HeroSection>
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" sx={{ mb: 2, fontWeight: 'bold' }}>
            Blog & Updates
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.9 }}>
            Inspiration, Teaching, and Church News
          </Typography>
        </Container>
      </HeroSection>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h3" component="h2" sx={{ mb: 3, color: 'primary.main' }}>
            Latest Posts
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: 800, mx: 'auto', lineHeight: 1.6 }}>
            Stay connected with our latest teachings, ministry updates, and community events
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
          {blogPosts.map((post) => (
            <Box key={post.id} sx={{ flex: { xs: '1 1 100%', md: '1 1 calc(50% - 16px)' } }}>
              <BlogCard>
                <CardMedia
                  component="img"
                  height="200"
                  image={post.image}
                  alt={post.title}
                />
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Chip 
                      label={post.category} 
                      size="small" 
                      color="primary" 
                      variant="outlined" 
                    />
                    <Box sx={{ display: 'flex', alignItems: 'center', color: 'text.secondary', fontSize: '0.875rem' }}>
                      <CalendarToday sx={{ fontSize: 16, mr: 0.5 }} />
                      {new Date(post.date).toLocaleDateString()}
                    </Box>
                  </Box>
                  
                  <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 'bold' }}>
                    {post.title}
                  </Typography>
                  
                  <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
                    {post.excerpt}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', color: 'text.secondary' }}>
                    <Person sx={{ fontSize: 18, mr: 0.5 }} />
                    <Typography variant="body2">
                      {post.author}
                    </Typography>
                  </Box>
                </CardContent>
              </BlogCard>
            </Box>
          ))}
        </Box>

        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Card sx={{ p: 4, backgroundColor: 'grey.50' }}>
            <CardContent>
              <Typography variant="h5" sx={{ mb: 2, color: 'primary.main', fontWeight: 'bold' }}>
                Stay Updated
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                Subscribe to our newsletter to receive the latest blog posts and ministry updates directly in your inbox.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Contact us at okedave50@gmail.com to subscribe or follow us on social media.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </>
  );
};

export default Blog;
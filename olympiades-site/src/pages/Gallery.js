import React from 'react';
import styled from 'styled-components';
import { Image, Calendar, Eye } from 'lucide-react';
import { theme, mediaQueries } from '../styles/theme';
import { galleryData } from '../data/siteData';

const GalleryContainer = styled.div`
  padding: ${theme.spacing['3xl']} 0;
  background: ${theme.colors.neutral.white};
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: ${theme.spacing['3xl']};
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 ${theme.spacing.md};
`;

const Title = styled.h1`
  color: ${theme.colors.primary.green};
  margin-bottom: ${theme.spacing.lg};
  font-size: 3rem;

  ${mediaQueries.mobile} {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: ${theme.colors.neutral.gray900};
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${theme.spacing.xl};
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.md};
`;

const GalleryCard = styled.div`
  background: ${theme.colors.neutral.white};
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.md};
  overflow: hidden;
  border: 1px solid ${theme.colors.neutral.gray200};
  transition: all ${theme.transitions.normal};

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${theme.shadows.lg};
  }
`;

const ImagePlaceholder = styled.div`
  height: 200px;
  background: ${theme.colors.primary.green};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.neutral.white};
  font-size: 3rem;
`;

const CardContent = styled.div`
  padding: ${theme.spacing.xl};
`;

const CardTitle = styled.h3`
  color: ${theme.colors.primary.green};
  margin-bottom: ${theme.spacing.sm};
  font-size: 1.25rem;
`;

const CardDate = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  color: ${theme.colors.neutral.gray900};
  margin-bottom: ${theme.spacing.md};
  font-size: 0.9rem;
`;

const CardDescription = styled.p`
  color: ${theme.colors.neutral.gray700};
  line-height: 1.6;
  margin-bottom: ${theme.spacing.lg};
`;

const ViewButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  background: ${theme.colors.accent.yellow};
  color: ${theme.colors.neutral.gray900};
  border: none;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.md};
  cursor: pointer;
  transition: all ${theme.transitions.fast};

  &:hover {
    background: ${theme.colors.accent.darkYellow};
    transform: translateY(-2px);
  }
`;

const Gallery = () => {
  return (
    <GalleryContainer>
      <Header>
        <Title>Galerie</Title>
        <Subtitle>
          Revivez les moments forts des Olympiades Mathématiques et Physique
        </Subtitle>
      </Header>

      <GalleryGrid>
        {galleryData.events.map((event) => (
          <GalleryCard key={event.id}>
            <ImagePlaceholder>
              <Image size={48} />
            </ImagePlaceholder>
            <CardContent>
              <CardTitle>{event.title}</CardTitle>
              <CardDate>
                <Calendar size={16} />
                {event.date}
              </CardDate>
              <CardDescription>{event.description}</CardDescription>
              <ViewButton>
                <Eye size={16} />
                Voir les photos
              </ViewButton>
            </CardContent>
          </GalleryCard>
        ))}
      </GalleryGrid>
    </GalleryContainer>
  );
};

export default Gallery;

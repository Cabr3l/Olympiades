import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { 
  Trophy, 
  Users, 
  Calendar, 
  BookOpen, 
  ArrowRight, 
  Star,
  Target,
  Award,
  Clock,
  CheckCircle
} from 'lucide-react';
import { theme, mediaQueries, gradients } from '../styles/theme';
import { siteConfig } from '../data/siteData';

const HeroSection = styled.section`
  background: ${gradients.hero};
  color: ${theme.colors.neutral.white};
  padding: ${theme.spacing['4xl']} 0;
  text-align: center;
  position: relative;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.md};
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: ${theme.spacing.lg};
  color: ${theme.colors.neutral.white};
  line-height: 1.1;

  ${mediaQueries.mobile} {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: ${theme.spacing.xl};
  color: ${theme.colors.neutral.white};
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  opacity: 0.9;

  ${mediaQueries.mobile} {
    font-size: 1.25rem;
  }
`;

const CTAButtons = styled.div`
  display: flex;
  gap: ${theme.spacing.lg};
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: ${theme.spacing['2xl']};
`;

const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  background: ${theme.colors.primary.green};
  color: ${theme.colors.neutral.white};
  text-decoration: none;
  border-radius: ${theme.borderRadius.lg};
  font-weight: 700;
  font-size: 1.125rem;
  transition: all ${theme.transitions.normal};
  box-shadow: ${theme.shadows.md};
  border: 2px solid ${theme.colors.primary.green};

  &:hover {
    background: ${theme.colors.primary.darkGreen};
    color: ${theme.colors.neutral.white};
    transform: translateY(-3px);
    box-shadow: ${theme.shadows.lg};
  }

  &.secondary {
    background: transparent;
    border: 2px solid ${theme.colors.primary.green};
    color: ${theme.colors.primary.green};

    &:hover {
      background: ${theme.colors.primary.green};
      color: ${theme.colors.neutral.white};
    }
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const StatsSection = styled.section`
  background: ${theme.colors.neutral.white};
  padding: ${theme.spacing['3xl']} 0;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${theme.spacing.xl};
  max-width: 800px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.md};
  text-align: center;
`;

const StatItem = styled.div`
  h3 {
    font-size: 3rem;
    color: ${theme.colors.primary.green};
    margin-bottom: ${theme.spacing.sm};
    font-weight: 700;
  }

  p {
    color: ${theme.colors.neutral.gray900};
    font-weight: 500;
    font-size: 1.125rem;
  }
`;

const FeaturesSection = styled.section`
  padding: ${theme.spacing['3xl']} 0;
  background: ${theme.colors.neutral.gray50};
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${theme.spacing.xl};
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.md};
`;

const FeatureCard = styled.div`
  text-align: center;
  padding: ${theme.spacing.xl};
  border-radius: ${theme.borderRadius.lg};
  background: ${theme.colors.neutral.white};
  box-shadow: ${theme.shadows.md};
  border: 1px solid ${theme.colors.neutral.gray200};
  transition: all ${theme.transitions.normal};

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${theme.shadows.xl};
  }
`;

const FeatureIcon = styled.div`
  width: 80px;
  height: 80px;
  background: ${theme.colors.primary.green};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${theme.spacing.lg};
  color: ${theme.colors.neutral.white};
  box-shadow: ${theme.shadows.lg};
`;

const FeatureTitle = styled.h3`
  color: ${theme.colors.primary.green};
  margin-bottom: ${theme.spacing.md};
  font-size: 1.5rem;
  font-weight: 600;
`;

const FeatureDescription = styled.p`
  color: ${theme.colors.neutral.gray900};
  line-height: 1.6;
`;

const CTA = styled.section`
  background: ${theme.colors.neutral.gray50};
  color: ${theme.colors.neutral.gray900};
  padding: ${theme.spacing['3xl']} 0;
  text-align: center;
  position: relative;
`;

const CTAContent = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.md};
`;

const CTATitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: ${theme.spacing.lg};
  color: ${theme.colors.neutral.gray900};
  font-weight: 700;

  ${mediaQueries.mobile} {
    font-size: 2rem;
  }
`;

const CTAText = styled.p`
  font-size: 1.25rem;
  margin-bottom: ${theme.spacing.xl};
  color: ${theme.colors.neutral.gray700};
  line-height: 1.6;
`;

const features = [
  {
    icon: Trophy,
    title: 'Épreuves de Qualité',
    description: 'Des épreuves conçues par des experts pour tester vos connaissances en mathématiques et physique.'
  },
  {
    icon: Users,
    title: 'Communauté Étudiante',
    description: 'Rejoignez une communauté d\'étudiants passionnés et motivés par l\'excellence académique.'
  },
  {
    icon: Calendar,
    title: 'Programme Structuré',
    description: 'Un calendrier clair et bien organisé pour vous permettre de vous préparer efficacement.'
  },
  {
    icon: BookOpen,
    title: 'Ressources d\'Apprentissage',
    description: 'Accédez à des ressources pédagogiques et des sujets des années précédentes.'
  }
];

const stats = [
  { number: '150+', label: 'Participants 2024' },
  { number: '95%', label: 'Taux de Satisfaction' },
  { number: '8', label: 'Universités Partenaires' },
  { number: '50+', label: 'Professeurs Impliqués' }
];

const Home = () => {
  return (
    <>
      <HeroSection>
        <HeroContent>
          <HeroTitle>{siteConfig.title}</HeroTitle>
          <HeroSubtitle>{siteConfig.subtitle}</HeroSubtitle>
          <CTAButtons>
            <CTAButton to="/registration">
              S'inscrire maintenant
              <ArrowRight />
            </CTAButton>
            <CTAButton to="/about" className="secondary">
              En savoir plus
            </CTAButton>
          </CTAButtons>
        </HeroContent>
      </HeroSection>

      <StatsSection>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: theme.colors.primary.green, fontSize: '2.5rem', fontWeight: '700' }}>Nos Résultats</h2>
          <StatsGrid>
            {stats.map((stat, index) => (
              <StatItem key={index}>
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </StatItem>
            ))}
          </StatsGrid>
        </div>
      </StatsSection>

      <FeaturesSection>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: theme.colors.primary.green, fontSize: '2.5rem', fontWeight: '700' }}>Pourquoi participer ?</h2>
          <FeaturesGrid>
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <FeatureCard key={index}>
                  <FeatureIcon>
                    <Icon size={40} />
                  </FeatureIcon>
                  <FeatureTitle>{feature.title}</FeatureTitle>
                  <FeatureDescription>{feature.description}</FeatureDescription>
                </FeatureCard>
              );
            })}
          </FeaturesGrid>
        </div>
      </FeaturesSection>

      <CTA>
        <CTAContent>
          <CTATitle>Prêt à relever le défi ?</CTATitle>
          <CTAText>
            Rejoignez des centaines d'étudiants passionnés et testez vos connaissances 
            dans une compétition académique d'excellence.
          </CTAText>
          <CTAButton to="/registration">
            Commencer l'aventure
            <ArrowRight />
          </CTAButton>
        </CTAContent>
      </CTA>
    </>
  );
};

export default Home;

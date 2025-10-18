import React from 'react';
import styled from 'styled-components';
import { User, BookOpen, BarChart3, Clock, Trophy } from 'lucide-react';
import { theme, mediaQueries } from '../styles/theme';

const ParticipantContainer = styled.div`
  padding: ${theme.spacing['3xl']} 0;
  background: ${theme.colors.neutral.gray50};
  min-height: 100vh;
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

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${theme.spacing.xl};
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.md};
`;

const FeatureCard = styled.div`
  background: ${theme.colors.neutral.white};
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.md};
  padding: ${theme.spacing.xl};
  border: 1px solid ${theme.colors.neutral.gray200};
  transition: all ${theme.transitions.normal};
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${theme.shadows.lg};
  }
`;

const FeatureIcon = styled.div`
  width: 60px;
  height: 60px;
  background: ${theme.colors.primary.green};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${theme.spacing.lg};
  color: ${theme.colors.neutral.white};
`;

const FeatureTitle = styled.h3`
  color: ${theme.colors.primary.green};
  margin-bottom: ${theme.spacing.md};
  font-size: 1.25rem;
`;

const FeatureDescription = styled.p`
  color: ${theme.colors.neutral.gray900};
  line-height: 1.6;
  margin-bottom: ${theme.spacing.lg};
`;

const ActionButton = styled.button`
  background: ${theme.colors.primary.green};
  color: ${theme.colors.neutral.white};
  border: none;
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.md};
  cursor: pointer;
  transition: all ${theme.transitions.fast};
  font-weight: 500;

  &:hover {
    background: ${theme.colors.primary.darkGreen};
    transform: translateY(-1px);
  }
`;

const ParticipantSpace = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Simuler un test',
      description: 'Entraînez-vous avec des épreuves de simulation pour vous préparer aux vraies épreuves.'
    },
    {
      icon: Clock,
      title: 'Prendre le test',
      description: 'Participez aux épreuves officielles dans un environnement contrôlé et sécurisé.'
    },
    {
      icon: BarChart3,
      title: 'Consulter les résultats',
      description: 'Analysez vos performances et consultez vos résultats détaillés.'
    },
    {
      icon: Trophy,
      title: 'Analyser les performances',
      description: 'Suivez votre progression et identifiez vos points d\'amélioration.'
    }
  ];

  return (
    <ParticipantContainer>
      <Header>
        <Title>Espace Participant</Title>
        <Subtitle>
          Bienvenue dans votre espace personnel pour gérer vos épreuves et suivre vos performances
        </Subtitle>
      </Header>

      <FeaturesGrid>
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <FeatureCard key={index}>
              <FeatureIcon>
                <Icon size={24} />
              </FeatureIcon>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <ActionButton>
                Accéder
              </ActionButton>
            </FeatureCard>
          );
        })}
      </FeaturesGrid>
    </ParticipantContainer>
  );
};

export default ParticipantSpace;

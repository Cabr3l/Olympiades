import React, { useState } from 'react';
import styled from 'styled-components';
import { BookOpen, Calculator, Clock, Download, Play, Trophy } from 'lucide-react';
import { theme, mediaQueries } from '../styles/theme';
import { testData } from '../data/siteData';

const TestsContainer = styled.div`
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
  color: ${theme.colors.neutral.gray600};
  margin-bottom: ${theme.spacing.xl};
`;

const SubjectTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing['2xl']};
  flex-wrap: wrap;
`;

const Tab = styled.button`
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  border: 2px solid ${props => props.isActive ? theme.colors.primary.green : theme.colors.accent.yellow};
  background: ${props => props.isActive ? theme.colors.primary.green : theme.colors.accent.yellow};
  color: ${props => props.isActive ? theme.colors.neutral.white : theme.colors.neutral.gray900};
  border-radius: ${theme.borderRadius.lg};
  font-weight: 500;
  cursor: pointer;
  transition: all ${theme.transitions.fast};
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};

  &:hover {
    border-color: ${theme.colors.primary.green};
    background: ${theme.colors.primary.green};
    color: ${theme.colors.neutral.white};
  }

  ${props => props.isActive && `
    &:hover {
      background: ${theme.colors.primary.darkGreen};
      color: ${theme.colors.neutral.white};
    }
  `}
`;

const TestsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: ${theme.spacing.xl};
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.md};
`;

const TestCard = styled.div`
  background: ${theme.colors.neutral.white};
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.md};
  border: 1px solid ${theme.colors.neutral.gray200};
  overflow: hidden;
  transition: all ${theme.transitions.normal};
  min-height: 500px;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${theme.shadows.lg};
  }
`;

const TestHeader = styled.div`
  background: ${theme.colors.primary.green};
  color: ${theme.colors.neutral.white};
  padding: ${theme.spacing.xl};
  text-align: center;
  position: relative;
  overflow: hidden;
  min-height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  h3 {
    color: #ffffff !important;
  }
`;

const TestImage = styled.div`
  width: 100%;
  height: 180px;
  background: ${props => {
    const mathImages = {
      'algèbre': `linear-gradient(135deg, ${theme.colors.accent.yellow}, ${theme.colors.accent.lightYellow})`,
      'analyse': `linear-gradient(135deg, ${theme.colors.primary.green}, ${theme.colors.primary.lightGreen})`,
      'géométrie': `linear-gradient(135deg, ${theme.colors.secondary.red}, ${theme.colors.secondary.lightRed})`
    };
    const physicsImages = {
      'mécanique': `linear-gradient(135deg, ${theme.colors.accent.yellow}, ${theme.colors.accent.lightYellow})`,
      'électro': `linear-gradient(135deg, ${theme.colors.primary.green}, ${theme.colors.primary.lightGreen})`,
      'thermodynamique': `linear-gradient(135deg, ${theme.colors.secondary.red}, ${theme.colors.secondary.lightRed})`
    };
    
    const images = props.subject === 'math' ? mathImages : physicsImages;
    return images[props.topic] || (props.subject === 'math' 
      ? `linear-gradient(135deg, ${theme.colors.accent.yellow}, ${theme.colors.accent.lightYellow})`
      : `linear-gradient(135deg, ${theme.colors.secondary.red}, ${theme.colors.secondary.lightRed})`);
  }};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5rem;
  margin-bottom: ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.md};
`;

const TestTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: ${theme.spacing.sm};
  color: #ffffff !important;
  font-weight: 600;
  
  /* Force la couleur blanche pour écraser le CSS global */
  && {
    color: #ffffff !important;
  }
`;

const TestMeta = styled.div`
  display: flex;
  justify-content: center;
  gap: ${theme.spacing.lg};
  font-size: 0.9rem;
  opacity: 0.9;
`;

const TestBody = styled.div`
  padding: ${theme.spacing.xl};
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TestDescription = styled.p`
  color: ${theme.colors.neutral.gray600};
  margin-bottom: ${theme.spacing.lg};
  line-height: 1.6;
`;

const TopicsList = styled.div`
  margin-bottom: ${theme.spacing.lg};
`;

const TopicTag = styled.span`
  display: inline-block;
  background: ${theme.colors.neutral.gray100};
  color: ${theme.colors.primary.green};
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.md};
  font-size: 0.875rem;
  margin: ${theme.spacing.xs};
  font-weight: 500;
`;

const TestActions = styled.div`
  display: flex;
  gap: ${theme.spacing.sm};
  flex-wrap: wrap;
`;

const ActionButton = styled.button`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.sm};
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border: none;
  border-radius: ${theme.borderRadius.md};
  font-weight: 500;
  cursor: pointer;
  transition: all ${theme.transitions.fast};

  ${props => props.variant === 'primary' ? `
    background: ${theme.colors.primary.green};
    color: ${theme.colors.neutral.white};

    &:hover {
      background: ${theme.colors.primary.darkGreen};
    }
  ` : `
    background: ${theme.colors.accent.yellow};
    color: ${theme.colors.neutral.gray900};
    border: 2px solid ${theme.colors.accent.yellow};

    &:hover {
      background: ${theme.colors.accent.darkYellow};
      color: ${theme.colors.neutral.gray900};
    }
  `}
`;

const Tests = () => {
  const [activeSubject, setActiveSubject] = useState('math');
  const currentTests = activeSubject === 'math' ? testData.mathematics : testData.physics;
  
  console.log('Current tests:', currentTests);
  console.log('Active subject:', activeSubject);

  return (
    <TestsContainer>
      <Header>
        <Title>Épreuves</Title>
        <Subtitle>
          Découvrez les sujets des années précédentes, entraînez-vous et testez vos connaissances
        </Subtitle>
      </Header>

      <SubjectTabs>
        <Tab 
          isActive={activeSubject === 'math'} 
          onClick={() => setActiveSubject('math')}
        >
          <Calculator size={20} />
          Mathématiques
        </Tab>
        <Tab 
          isActive={activeSubject === 'physics'} 
          onClick={() => setActiveSubject('physics')}
        >
          <BookOpen size={20} />
          Physique
        </Tab>
      </SubjectTabs>

      <TestsGrid>
        {currentTests && currentTests.subjects ? currentTests.subjects.map((test) => (
          <TestCard key={test.id}>
            <TestImage subject={activeSubject} topic={test.topic}>
              {/* Espace pour image - à compléter */}
            </TestImage>
            <TestHeader>
              <TestTitle style={{ color: '#ffffff' }}>
                {test.title || 'TITRE MANQUANT'}
              </TestTitle>
              <TestMeta>
                <span>
                  <Clock size={16} />
                  {test.duration}
                </span>
                <span>
                  <Trophy size={16} />
                  {test.difficulty}
                </span>
              </TestMeta>
            </TestHeader>
            <TestBody>
              <TestDescription>
                {test.description}
              </TestDescription>
              
              <TopicsList>
                <h4 style={{ marginBottom: '0.5rem', color: theme.colors.primary.blue }}>
                  Thèmes abordés :
                </h4>
                {test.topics.map((topic, index) => (
                  <TopicTag key={index}>{topic}</TopicTag>
                ))}
              </TopicsList>

              <TestActions>
                <ActionButton variant="primary">
                  <Play size={16} />
                  Commencer
                </ActionButton>
                <ActionButton variant="secondary">
                  <Download size={16} />
                  Télécharger
                </ActionButton>
              </TestActions>
            </TestBody>
            </TestCard>
        )) : <div>Aucune épreuve disponible</div>}
      </TestsGrid>
    </TestsContainer>
  );
};

export default Tests;

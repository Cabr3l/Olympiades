import React from 'react';
import styled from 'styled-components';
import { Calendar, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { theme, mediaQueries } from '../styles/theme';
import { programData } from '../data/siteData';

const ProgramContainer = styled.div`
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
  color: ${theme.colors.primary.blue};
  margin-bottom: ${theme.spacing.lg};
  font-size: 3rem;

  ${mediaQueries.mobile} {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: ${theme.colors.neutral.gray600};
`;

const TimelineContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.md};
`;

const Timeline = styled.div`
  position: relative;
  padding: ${theme.spacing.xl} 0;

  &::before {
    content: '';
    position: absolute;
    left: 50px;
    top: 0;
    bottom: 0;
    width: 4px;
    background: linear-gradient(to bottom, ${theme.colors.primary.blue}, ${theme.colors.secondary.red});
    border-radius: 2px;

    ${mediaQueries.mobile} {
      left: 20px;
    }
  }
`;

const TimelineItem = styled.div`
  position: relative;
  margin-bottom: ${theme.spacing['2xl']};
  padding-left: 100px;

  ${mediaQueries.mobile} {
    padding-left: 60px;
  }

  &::before {
    content: '';
    position: absolute;
    left: 38px;
    top: 20px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: ${theme.colors.primary.blue};
    border: 4px solid ${theme.colors.neutral.white};
    box-shadow: 0 0 0 4px ${theme.colors.primary.blue};
    z-index: 1;

    ${mediaQueries.mobile} {
      left: 8px;
      width: 20px;
      height: 20px;
    }
  }
`;

const PhaseCard = styled.div`
  background: ${theme.colors.neutral.white};
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.md};
  border: 2px solid ${theme.colors.primary.blue};
  padding: ${theme.spacing.xl};
  transition: all ${theme.transitions.normal};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.lg};
  }
`;

const PhaseHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.lg};
`;

const PhaseIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.primary.blue};
  color: ${theme.colors.neutral.white};
`;

const PhaseTitle = styled.h3`
  color: ${theme.colors.primary.blue};
  font-size: 1.5rem;
  margin: 0;
`;

const PhaseMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.md};
  color: ${theme.colors.neutral.gray600};
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  font-size: 0.9rem;
`;

const PhaseDescription = styled.p`
  color: ${theme.colors.neutral.gray700};
  line-height: 1.6;
  margin: 0;
`;

const Program = () => {
  const currentYear = programData.currentYear;
  const schedule = programData.schedule[currentYear.toString()];

  return (
    <ProgramContainer>
      <Header>
        <Title>Programme 2025</Title>
        <Subtitle>
          Découvrez le calendrier complet des Olympiades Mathématiques et Physique
        </Subtitle>
      </Header>

      <TimelineContainer>
        <Timeline>
          {schedule.phases.map((phase, index) => {
            const Icon = Calendar;
            
            return (
              <TimelineItem key={index}>
                <PhaseCard>
                  <PhaseHeader>
                    <PhaseIcon>
                      <Icon size={24} />
                    </PhaseIcon>
                    <PhaseTitle>{phase.name}</PhaseTitle>
                  </PhaseHeader>
                  
                  <PhaseMeta>
                    <MetaItem>
                      <Calendar size={16} />
                      {phase.startDate}
                    </MetaItem>
                    <MetaItem>
                      <Clock size={16} />
                      {phase.endDate}
                    </MetaItem>
                  </PhaseMeta>
                  
                  <PhaseDescription>
                    {phase.description}
                  </PhaseDescription>
                </PhaseCard>
              </TimelineItem>
            );
          })}
        </Timeline>
      </TimelineContainer>
    </ProgramContainer>
  );
};

export default Program;

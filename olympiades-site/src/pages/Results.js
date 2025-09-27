import React from 'react';
import styled from 'styled-components';
import { Trophy, Award, Users, Calendar } from 'lucide-react';
import { theme, mediaQueries } from '../styles/theme';
import { resultsData } from '../data/siteData';

const ResultsContainer = styled.div`
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

const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${theme.spacing.xl};
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.md};
`;

const ResultCard = styled.div`
  background: ${theme.colors.neutral.white};
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.md};
  padding: ${theme.spacing.xl};
  border: 1px solid ${theme.colors.neutral.gray200};
  transition: all ${theme.transitions.normal};

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${theme.shadows.lg};
  }
`;

const WinnerCard = styled.div`
  background: ${theme.colors.primary.green};
  color: ${theme.colors.neutral.white};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.xl};
  text-align: center;
  margin-bottom: ${theme.spacing.lg};
`;

const WinnerName = styled.h3`
  font-size: 1.5rem;
  margin-bottom: ${theme.spacing.sm};
  color: ${theme.colors.neutral.white};
`;

const WinnerDetails = styled.p`
  color: ${theme.colors.neutral.white};
  margin-bottom: ${theme.spacing.sm};
  opacity: 0.9;
`;

const Rank = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  background: ${theme.colors.secondary.red};
  color: ${theme.colors.neutral.white};
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.full};
  font-weight: 600;
`;

const Results = () => {
  return (
    <ResultsContainer>
      <Header>
        <Title>Résultats</Title>
        <Subtitle>
          Découvrez les lauréats des Olympiades Mathématiques et Physique
        </Subtitle>
      </Header>

      <ResultsGrid>
        {resultsData.previousYears.map((year) => (
          <ResultCard key={year.year}>
            <h3 style={{ color: theme.colors.primary.green, marginBottom: '1rem' }}>
              Résultats {year.year}
            </h3>
            <p style={{ color: theme.colors.neutral.gray900, marginBottom: '1.5rem' }}>
              {year.participants} participants de {year.universities} universités
            </p>
            
            {year.winners.map((winner, index) => (
              <WinnerCard key={index}>
                <WinnerName>{winner.name}</WinnerName>
                <WinnerDetails>{winner.university}</WinnerDetails>
                <WinnerDetails>{winner.subject}</WinnerDetails>
                <Rank>
                  <Trophy size={16} />
                  {winner.rank === 1 ? '1er' : `${winner.rank}ème`} place
                </Rank>
              </WinnerCard>
            ))}
          </ResultCard>
        ))}
      </ResultsGrid>
    </ResultsContainer>
  );
};

export default Results;

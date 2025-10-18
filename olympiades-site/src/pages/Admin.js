import React from 'react';
import styled from 'styled-components';
import { BarChart3, Users, TrendingUp, DollarSign, Eye, Download } from 'lucide-react';
import { theme, mediaQueries } from '../styles/theme';

const AdminContainer = styled.div`
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

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${theme.spacing.xl};
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.md};
  margin-bottom: ${theme.spacing['3xl']};
`;

const StatCard = styled.div`
  background: ${theme.colors.neutral.white};
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.md};
  padding: ${theme.spacing.xl};
  border: 1px solid ${theme.colors.neutral.gray200};
  text-align: center;
  transition: all ${theme.transitions.normal};

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${theme.shadows.lg};
  }
`;

const StatIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, ${theme.colors.primary.blue}, ${theme.colors.primary.lightBlue});
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${theme.spacing.lg};
  color: ${theme.colors.neutral.white};
`;

const StatValue = styled.h3`
  font-size: 2.5rem;
  color: ${theme.colors.primary.blue};
  margin-bottom: ${theme.spacing.sm};
`;

const StatLabel = styled.p`
  color: ${theme.colors.neutral.gray600};
  font-weight: 500;
`;

const ChartsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: ${theme.spacing.xl};
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.md};
`;

const ChartCard = styled.div`
  background: ${theme.colors.neutral.white};
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.md};
  padding: ${theme.spacing.xl};
  border: 1px solid ${theme.colors.neutral.gray200};
`;

const ChartTitle = styled.h3`
  color: ${theme.colors.primary.blue};
  margin-bottom: ${theme.spacing.lg};
  font-size: 1.25rem;
`;

const ChartPlaceholder = styled.div`
  height: 300px;
  background: ${theme.colors.neutral.gray100};
  border-radius: ${theme.borderRadius.md};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.neutral.gray500};
  font-size: 1.125rem;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  justify-content: center;
  margin-top: ${theme.spacing['2xl']};
  flex-wrap: wrap;
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  border: none;
  border-radius: ${theme.borderRadius.lg};
  cursor: pointer;
  transition: all ${theme.transitions.fast};
  font-weight: 500;

  &.primary {
    background: ${theme.colors.primary.blue};
    color: ${theme.colors.neutral.white};

    &:hover {
      background: ${theme.colors.primary.darkBlue};
      transform: translateY(-2px);
    }
  }

  &.secondary {
    background: ${theme.colors.secondary.red};
    color: ${theme.colors.neutral.white};

    &:hover {
      background: ${theme.colors.secondary.darkRed};
      transform: translateY(-2px);
    }
  }
`;

const Admin = () => {
  const stats = [
    { icon: Users, value: '150', label: 'Participants actifs' },
    { icon: TrendingUp, value: '95%', label: 'Taux de satisfaction' },
    { icon: DollarSign, value: '2.5M', label: 'Revenus potentiels' },
    { icon: Eye, value: '10K', label: 'Vues mensuelles' }
  ];

  return (
    <AdminContainer>
      <Header>
        <Title>Administration</Title>
        <Subtitle>
          Tableau de bord avancé pour l'analyse et la gestion du site
        </Subtitle>
      </Header>

      <StatsGrid>
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <StatCard key={index}>
              <StatIcon>
                <Icon size={24} />
              </StatIcon>
              <StatValue>{stat.value}</StatValue>
              <StatLabel>{stat.label}</StatLabel>
            </StatCard>
          );
        })}
      </StatsGrid>

      <ChartsGrid>
        <ChartCard>
          <ChartTitle>Évolution des inscriptions</ChartTitle>
          <ChartPlaceholder>
            <BarChart3 size={48} />
            <span style={{ marginLeft: '1rem' }}>Graphique des inscriptions</span>
          </ChartPlaceholder>
        </ChartCard>

        <ChartCard>
          <ChartTitle>Répartition par université</ChartTitle>
          <ChartPlaceholder>
            <Users size={48} />
            <span style={{ marginLeft: '1rem' }}>Graphique des universités</span>
          </ChartPlaceholder>
        </ChartCard>

        <ChartCard>
          <ChartTitle>Revenus par mois</ChartTitle>
          <ChartPlaceholder>
            <DollarSign size={48} />
            <span style={{ marginLeft: '1rem' }}>Graphique des revenus</span>
          </ChartPlaceholder>
        </ChartCard>

        <ChartCard>
          <ChartTitle>Performance des épreuves</ChartTitle>
          <ChartPlaceholder>
            <TrendingUp size={48} />
            <span style={{ marginLeft: '1rem' }}>Graphique des performances</span>
          </ChartPlaceholder>
        </ChartCard>
      </ChartsGrid>

      <ActionButtons>
        <ActionButton className="primary">
          <Download size={20} />
          Exporter les données
        </ActionButton>
        <ActionButton className="secondary">
          <BarChart3 size={20} />
          Générer le rapport
        </ActionButton>
      </ActionButtons>
    </AdminContainer>
  );
};

export default Admin;

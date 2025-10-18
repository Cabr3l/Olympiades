import React from 'react';
import styled from 'styled-components';
import { 
  History, 
  Heart, 
  Users, 
  Award, 
  Mail, 
  Phone, 
  MapPin,
  Target,
  Handshake,
  Lightbulb
} from 'lucide-react';
import { theme, mediaQueries } from '../styles/theme';
import { aboutData, siteConfig } from '../data/siteData';

const AboutContainer = styled.div`
  padding: ${theme.spacing['3xl']} 0;
  background: ${theme.colors.neutral.white};
`;

const ContentContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.md};
`;

const SectionTitle = styled.h1`
  text-align: center;
  margin-bottom: ${theme.spacing['2xl']};
  color: ${theme.colors.primary.green};
  font-size: 3rem;

  ${mediaQueries.mobile} {
    font-size: 2.25rem;
  }
`;

const HistorySection = styled.div`
  background: ${theme.colors.neutral.gray50};
  padding: ${theme.spacing['2xl']};
  border-radius: ${theme.borderRadius.lg};
  margin-bottom: ${theme.spacing['2xl']};
  border-left: 4px solid ${theme.colors.primary.blue};
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${theme.spacing.xl};
  margin-bottom: ${theme.spacing['2xl']};
`;

const ValueCard = styled.div`
  text-align: center;
  padding: ${theme.spacing.xl};
  background: ${theme.colors.neutral.white};
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.md};
  border: 1px solid ${theme.colors.neutral.gray200};
  transition: all ${theme.transitions.normal};

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${theme.shadows.lg};
  }
`;

const ValueIcon = styled.div`
  width: 60px;
  height: 60px;
  background: ${theme.colors.primary.green};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${theme.spacing.lg};
  color: ${theme.colors.neutral.white};
  box-shadow: ${theme.shadows.md};
`;

const ValueTitle = styled.h3`
  color: ${theme.colors.primary.green};
  margin-bottom: ${theme.spacing.md};
  font-size: 1.25rem;
  font-weight: 600;
`;

const SponsorsSection = styled.div`
  background: ${theme.colors.primary.blue};
  color: ${theme.colors.neutral.white};
  padding: ${theme.spacing['2xl']};
  border-radius: ${theme.borderRadius.lg};
  margin-bottom: ${theme.spacing['2xl']};
`;

const SponsorsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${theme.spacing.xl};
  margin-top: ${theme.spacing.xl};
`;

const SponsorCard = styled.div`
  text-align: center;
  padding: ${theme.spacing.lg};
  background: rgba(255, 255, 255, 0.1);
  border-radius: ${theme.borderRadius.lg};
  backdrop-filter: blur(10px);
`;

const ContactSection = styled.div`
  background: ${theme.colors.neutral.gray50};
  padding: ${theme.spacing['2xl']};
  border-radius: ${theme.borderRadius.lg};
  text-align: center;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${theme.spacing.xl};
  margin-top: ${theme.spacing.xl};
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
  justify-content: center;
  color: ${theme.colors.neutral.gray900};

  svg {
    width: 20px;
    height: 20px;
    color: ${theme.colors.primary.green};
  }

  a {
    color: ${theme.colors.neutral.gray900};
    text-decoration: none;
    transition: color ${theme.transitions.fast};

    &:hover {
      color: ${theme.colors.primary.green};
    }
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <ContentContainer>
        <SectionTitle>À propos de nous</SectionTitle>
        
        <HistorySection>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <History size={32} color={theme.colors.primary.green} />
            <h3 style={{ color: theme.colors.primary.green, fontSize: '1.5rem' }}>
              {aboutData.history.title}
            </h3>
          </div>
          <p style={{ fontSize: '1.125rem', lineHeight: '1.6', color: theme.colors.neutral.gray900 }}>
            {aboutData.history.content}
          </p>
        </HistorySection>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
          <Heart size={32} color={theme.colors.primary.green} />
          <h3 style={{ color: theme.colors.primary.green, fontSize: '1.5rem' }}>
            {aboutData.values.title}
          </h3>
        </div>
        
        <ValuesGrid>
          {aboutData.values.values.map((value, index) => {
            const icons = [Target, Handshake, Award, Lightbulb];
            const Icon = icons[index] || Award;
            return (
              <ValueCard key={index}>
                <ValueIcon>
                  <Icon size={24} />
                </ValueIcon>
                <ValueTitle>{value.title}</ValueTitle>
                <p style={{ color: theme.colors.neutral.gray900 }}>
                  {value.description}
                </p>
              </ValueCard>
            );
          })}
        </ValuesGrid>

        <SponsorsSection>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', textAlign: 'center' }}>
            {aboutData.sponsors.title}
          </h3>
          <p style={{ textAlign: 'center', color: theme.colors.neutral.gray700, marginBottom: '2rem' }}>
            Nos partenaires qui rendent possible cette initiative
          </p>
          
          <SponsorsGrid>
            {aboutData.sponsors.sponsors.map((sponsor, index) => (
              <SponsorCard key={index}>
                <h4 style={{ marginBottom: '0.5rem' }}>{sponsor.name}</h4>
                <p style={{ fontSize: '0.9rem', opacity: 0.9 }}>{sponsor.description}</p>
              </SponsorCard>
            ))}
          </SponsorsGrid>
        </SponsorsSection>

        <ContactSection>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
            Contactez-nous
          </h3>
          <p style={{ marginBottom: '2rem', color: theme.colors.neutral.gray900 }}>
            Vous avez des questions ? N'hésitez pas à nous contacter !
          </p>
          
          <ContactGrid>
            <ContactItem>
              <Mail />
              <a href={`mailto:${siteConfig.contact.email}`}>
                {siteConfig.contact.email}
              </a>
            </ContactItem>
            <ContactItem>
              <Phone />
              <a href={`tel:${siteConfig.contact.phone}`}>
                {siteConfig.contact.phone}
              </a>
            </ContactItem>
            <ContactItem>
              <MapPin />
              <span>{siteConfig.contact.address}</span>
            </ContactItem>
          </ContactGrid>
        </ContactSection>
      </ContentContainer>
    </AboutContainer>
  );
};

export default About;

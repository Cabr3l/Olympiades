import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin,
  Trophy,
  Heart
} from 'lucide-react';
import { theme, mediaQueries } from '../../styles/theme';
import { siteConfig } from '../../data/siteData';

const FooterContainer = styled.footer`
  background: ${theme.colors.neutral.gray100};
  color: ${theme.colors.neutral.gray900};
  padding: ${theme.spacing['3xl']} 0 ${theme.spacing.xl};
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.md};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${theme.spacing.xl};
  margin-bottom: ${theme.spacing.xl};

  ${mediaQueries.mobile} {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.lg};
  }
`;

const FooterSection = styled.div`
  h3 {
    color: ${theme.colors.neutral.gray900};
    margin-bottom: ${theme.spacing.lg};
    font-size: 1.25rem;
    font-weight: 600;
  }

  p, a {
    color: ${theme.colors.neutral.gray700};
    margin-bottom: ${theme.spacing.sm};
    text-decoration: none;
    transition: color ${theme.transitions.fast};
    line-height: 1.6;

    &:hover {
      color: ${theme.colors.primary.green};
    }
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  margin-bottom: ${theme.spacing.sm};
  color: ${theme.colors.neutral.gray700};

  svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    color: ${theme.colors.primary.green};
  }

  a {
    color: ${theme.colors.neutral.gray700};
    text-decoration: none;
    transition: color ${theme.transitions.fast};

    &:hover {
      color: ${theme.colors.primary.green};
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  margin-top: ${theme.spacing.lg};
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: ${theme.colors.accent.yellow};
  color: ${theme.colors.neutral.gray900};
  border-radius: 50%;
  text-decoration: none;
  transition: all ${theme.transitions.fast};

  &:hover {
    background: ${theme.colors.primary.green};
    color: ${theme.colors.neutral.white};
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.lg};
  }

  svg {
    width: 20px;
    height: 20px;
    color: ${theme.colors.neutral.gray900};
  }

  &:hover svg {
    color: ${theme.colors.neutral.white};
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid ${theme.colors.neutral.gray300};
  margin-top: ${theme.spacing.xl};
  padding-top: ${theme.spacing.lg};
  text-align: center;
  color: ${theme.colors.neutral.gray600};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.sm};
  flex-wrap: wrap;

  ${mediaQueries.mobile} {
    flex-direction: column;
    gap: ${theme.spacing.sm};
  }
`;

const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  font-weight: 600;
  color: ${theme.colors.neutral.gray900};
  margin-bottom: ${theme.spacing.sm};

  svg {
    width: 24px;
    height: 24px;
    color: ${theme.colors.primary.green};
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterLogo>
            <Trophy />
            Olympiades
          </FooterLogo>
          <p>{siteConfig.description}</p>
          <p>
            Les Olympiades Mathématiques et Physique visent à promouvoir 
            l'excellence académique chez les étudiants de Licence 1 et 2.
          </p>
        </FooterSection>

        <FooterSection>
          <h3>Contact</h3>
          <ContactInfo>
            <Mail />
            <a href={`mailto:${siteConfig.contact.email}`}>
              {siteConfig.contact.email}
            </a>
          </ContactInfo>
          <ContactInfo>
            <Phone />
            <a href={`tel:${siteConfig.contact.phone}`}>
              {siteConfig.contact.phone}
            </a>
          </ContactInfo>
          <ContactInfo>
            <MapPin />
            <span>{siteConfig.contact.address}</span>
          </ContactInfo>
        </FooterSection>

        <FooterSection>
          <h3>Liens rapides</h3>
          <p><Link to="/about">À propos</Link></p>
          <p><Link to="/tests">Épreuves</Link></p>
          <p><Link to="/registration">Inscriptions</Link></p>
          <p><Link to="/program">Programme</Link></p>
          <p><Link to="/results">Résultats</Link></p>
          <p><Link to="/gallery">Galerie</Link></p>
        </FooterSection>

        <FooterSection>
          <h3>Suivez-nous</h3>
          <p>Restez connecté avec nous sur les réseaux sociaux</p>
          <SocialLinks>
            <SocialLink href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer">
              <Facebook />
            </SocialLink>
            <SocialLink href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer">
              <Twitter />
            </SocialLink>
            <SocialLink href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin />
            </SocialLink>
          </SocialLinks>
        </FooterSection>
      </FooterContent>

      <FooterBottom>
        <p>&copy; 2025 Olympiades Mathématiques et Physique. Tous droits réservés.</p>
        <p>Fait avec <Heart size={16} color={theme.colors.secondary.red} /> au Cameroun</p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;

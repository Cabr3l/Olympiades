import React, { useState } from 'react';
import styled from 'styled-components';
import { User, Mail, Phone, GraduationCap, BookOpen, CheckCircle } from 'lucide-react';
import { theme, mediaQueries } from '../styles/theme';

const RegistrationContainer = styled.div`
  padding: ${theme.spacing['3xl']} 0;
  background: ${theme.colors.neutral.gray50};
  min-height: 100vh;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: ${theme.spacing['3xl']};
  max-width: 600px;
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
`;

const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.md};
`;

const FormCard = styled.div`
  background: ${theme.colors.neutral.white};
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.lg};
  padding: ${theme.spacing['2xl']};
  border: 1px solid ${theme.colors.neutral.gray200};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.lg};
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};
`;

const Label = styled.label`
  font-weight: 500;
  color: ${theme.colors.neutral.gray700};
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
`;

const Input = styled.input`
  padding: ${theme.spacing.md};
  border: 2px solid ${theme.colors.neutral.gray300};
  border-radius: ${theme.borderRadius.md};
  font-size: 1rem;
  transition: border-color ${theme.transitions.fast};

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary.blue};
    box-shadow: 0 0 0 3px ${theme.colors.primary.blue50};
  }

  &::placeholder {
    color: ${theme.colors.neutral.gray400};
  }
`;

const Select = styled.select`
  padding: ${theme.spacing.md};
  border: 2px solid ${theme.colors.neutral.gray300};
  border-radius: ${theme.borderRadius.md};
  font-size: 1rem;
  background: ${theme.colors.neutral.white};
  cursor: pointer;
  transition: border-color ${theme.transitions.fast};

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary.blue};
    box-shadow: 0 0 0 3px ${theme.colors.primary.blue50};
  }
`;

const SubmitButton = styled.button`
  background: ${theme.colors.primary.green};
  color: ${theme.colors.neutral.white};
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  border: none;
  border-radius: ${theme.borderRadius.lg};
  font-size: 1.125rem;
  font-weight: 600;
  cursor: ${props => props.isLoading ? 'not-allowed' : 'pointer'};
  transition: all ${theme.transitions.normal};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.sm};
  opacity: ${props => props.isLoading ? 0.7 : 1};

  &:hover:not(:disabled) {
    background: ${theme.colors.primary.darkGreen};
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.xl};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

const SuccessMessage = styled.div`
  background: ${theme.colors.success};
  color: ${theme.colors.neutral.white};
  padding: ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.lg};
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  margin-bottom: ${theme.spacing.lg};
`;

const Registration = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    university: '',
    level: '',
    field: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simuler l'envoi des données
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Données d\'inscription:', formData);
    setIsSubmitted(true);
    setIsLoading(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <RegistrationContainer>
        <FormContainer>
          <SuccessMessage>
            <CheckCircle size={24} />
            <div>
              <h3>Inscription réussie !</h3>
              <p>Vous allez être redirigé vers votre espace participant dans quelques secondes...</p>
            </div>
          </SuccessMessage>
        </FormContainer>
      </RegistrationContainer>
    );
  }

  return (
    <RegistrationContainer>
      <Header>
        <Title>Inscription aux Olympiades</Title>
        <Subtitle>
          Rejoignez la communauté des étudiants passionnés de mathématiques et physique
        </Subtitle>
      </Header>

      <FormContainer>
        <FormCard>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label>
                <User size={18} />
                Prénom *
              </Label>
              <Input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Votre prénom"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>
                <User size={18} />
                Nom *
              </Label>
              <Input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Votre nom"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>
                <Mail size={18} />
                Email *
              </Label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="votre.email@universite.cm"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>
                <Phone size={18} />
                Téléphone
              </Label>
              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+237 XXX XX XX XX"
              />
            </FormGroup>

            <FormGroup>
              <Label>
                <GraduationCap size={18} />
                Université *
              </Label>
              <Input
                name="university"
                value={formData.university}
                onChange={handleChange}
                placeholder="Nom de votre université"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>
                <BookOpen size={18} />
                Niveau d'études *
              </Label>
              <Select
                name="level"
                value={formData.level}
                onChange={handleChange}
                required
              >
                <option value="">Sélectionnez votre niveau</option>
                <option value="L1">Licence 1</option>
                <option value="L2">Licence 2</option>
              </Select>
            </FormGroup>

            <FormGroup>
              <Label>
                <BookOpen size={18} />
                Domaine de participation *
              </Label>
              <Select
                name="field"
                value={formData.field}
                onChange={handleChange}
                required
              >
                <option value="">Sélectionnez votre domaine</option>
                <option value="Mathématiques">Mathématiques uniquement</option>
                <option value="Physique">Physique uniquement</option>
                <option value="Les deux">Mathématiques et Physique</option>
              </Select>
            </FormGroup>

            <SubmitButton type="submit" isLoading={isLoading}>
              {isLoading ? 'Inscription en cours...' : 'S\'inscrire maintenant'}
            </SubmitButton>
          </Form>
        </FormCard>
      </FormContainer>
    </RegistrationContainer>
  );
};

export default Registration;

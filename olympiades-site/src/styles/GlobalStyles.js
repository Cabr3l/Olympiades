import { createGlobalStyle } from 'styled-components';
import { theme, mediaQueries } from './theme';

export const GlobalStyles = createGlobalStyle`
  /* Reset et base */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
    line-height: 1.6;
  }

  body {
    font-family: ${theme.fonts.primary};
    line-height: 1.6;
    color: ${theme.colors.neutral.gray800};
    background-color: ${theme.colors.neutral.white};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  /* Typographie */
  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: ${theme.spacing.md};
    color: ${theme.colors.primary.green};
  }

  h1 {
    font-size: 3rem;
    font-weight: 700;
    line-height: 1.1;
    
    ${mediaQueries.mobile} {
      font-size: 2.25rem;
    }
  }

  h2 {
    font-size: 2.25rem;
    font-weight: 600;
    
    ${mediaQueries.mobile} {
      font-size: 1.875rem;
    }
  }

  h3 {
    font-size: 1.875rem;
    font-weight: 600;
    
    ${mediaQueries.mobile} {
      font-size: 1.5rem;
    }
  }

  h4 {
    font-size: 1.5rem;
    font-weight: 600;
  }

  h5 {
    font-size: 1.25rem;
    font-weight: 600;
  }

  h6 {
    font-size: 1.125rem;
    font-weight: 600;
  }

  p {
    margin-bottom: ${theme.spacing.md};
    color: ${theme.colors.neutral.gray700};
    line-height: 1.7;
  }

  a {
    color: ${theme.colors.primary.green};
    text-decoration: none;
    transition: color ${theme.transitions.fast};

    &:hover {
      color: ${theme.colors.primary.darkBlue};
    }

    &:focus {
      outline: 2px solid ${theme.colors.primary.blue};
      outline-offset: 2px;
    }
  }

  /* Boutons */
  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    outline: none;
    transition: all ${theme.transitions.fast};
    font-weight: 500;
  }

  input, textarea, select {
    font-family: inherit;
    outline: none;
    transition: border-color ${theme.transitions.fast};
  }

  /* Images */
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* Utilitaires */
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 ${theme.spacing.md};
    
    ${mediaQueries.mobile} {
      padding: 0 ${theme.spacing.sm};
    }
  }

  .section {
    padding: ${theme.spacing['3xl']} 0;
    
    ${mediaQueries.mobile} {
      padding: ${theme.spacing.xl} 0;
    }
  }

  /* Classes utilitaires */
  .text-center { text-align: center; }
  .text-left { text-align: left; }
  .text-right { text-align: right; }
  
  .mb-0 { margin-bottom: 0; }
  .mb-1 { margin-bottom: ${theme.spacing.xs}; }
  .mb-2 { margin-bottom: ${theme.spacing.sm}; }
  .mb-3 { margin-bottom: ${theme.spacing.md}; }
  .mb-4 { margin-bottom: ${theme.spacing.lg}; }
  .mb-5 { margin-bottom: ${theme.spacing.xl}; }
  .mb-6 { margin-bottom: ${theme.spacing['2xl']}; }

  .mt-0 { margin-top: 0; }
  .mt-1 { margin-top: ${theme.spacing.xs}; }
  .mt-2 { margin-top: ${theme.spacing.sm}; }
  .mt-3 { margin-top: ${theme.spacing.md}; }
  .mt-4 { margin-top: ${theme.spacing.lg}; }
  .mt-5 { margin-top: ${theme.spacing.xl}; }
  .mt-6 { margin-top: ${theme.spacing['2xl']}; }

  /* Boutons de base */
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacing.sm};
    padding: ${theme.spacing.sm} ${theme.spacing.lg};
    border-radius: ${theme.borderRadius.md};
    font-weight: 500;
    text-decoration: none;
    transition: all ${theme.transitions.fast};
    cursor: pointer;
    border: none;
    font-size: 1rem;
    min-height: 44px; /* Accessibilité */

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &.btn-primary {
      background: ${theme.colors.primary.blue};
      color: ${theme.colors.neutral.white};

      &:hover:not(:disabled) {
        background: ${theme.colors.primary.darkBlue};
        transform: translateY(-1px);
        box-shadow: ${theme.shadows.lg};
      }
    }

    &.btn-secondary {
      background: ${theme.colors.secondary.red};
      color: ${theme.colors.neutral.white};

      &:hover:not(:disabled) {
        background: ${theme.colors.secondary.darkRed};
        transform: translateY(-1px);
        box-shadow: ${theme.shadows.lg};
      }
    }

    &.btn-outline {
      background: transparent;
      color: ${theme.colors.primary.green};
      border: 2px solid ${theme.colors.primary.green};

      &:hover:not(:disabled) {
        background: ${theme.colors.primary.green};
        color: ${theme.colors.neutral.white};
      }
    }

    &.btn-large {
      padding: ${theme.spacing.md} ${theme.spacing.xl};
      font-size: 1.125rem;
      min-height: 52px;
    }

    &.btn-small {
      padding: ${theme.spacing.xs} ${theme.spacing.md};
      font-size: 0.875rem;
      min-height: 36px;
    }
  }

  /* Cards */
  .card {
    background: ${theme.colors.neutral.white};
    border-radius: ${theme.borderRadius.lg};
    box-shadow: ${theme.shadows.md};
    padding: ${theme.spacing.xl};
    border: 1px solid ${theme.colors.neutral.gray200};
    transition: all ${theme.transitions.normal};

    &:hover {
      box-shadow: ${theme.shadows.lg};
      transform: translateY(-2px);
    }
  }

  /* Formulaires */
  .form-group {
    margin-bottom: ${theme.spacing.lg};
  }

  .form-label {
    display: block;
    font-weight: 500;
    color: ${theme.colors.neutral.gray700};
    margin-bottom: ${theme.spacing.sm};
  }

  .form-input {
    width: 100%;
    padding: ${theme.spacing.md};
    border: 2px solid ${theme.colors.neutral.gray300};
    border-radius: ${theme.borderRadius.md};
    font-size: 1rem;
    transition: border-color ${theme.transitions.fast};

    &:focus {
      border-color: ${theme.colors.primary.blue};
      box-shadow: 0 0 0 3px ${theme.colors.primary.blue50};
    }

    &::placeholder {
      color: ${theme.colors.neutral.gray400};
    }
  }

  .form-select {
    width: 100%;
    padding: ${theme.spacing.md};
    border: 2px solid ${theme.colors.neutral.gray300};
    border-radius: ${theme.borderRadius.md};
    font-size: 1rem;
    background: ${theme.colors.neutral.white};
    cursor: pointer;
    transition: border-color ${theme.transitions.fast};

    &:focus {
      border-color: ${theme.colors.primary.blue};
      box-shadow: 0 0 0 3px ${theme.colors.primary.blue50};
    }
  }

  /* Animations */
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes slideIn {
    from { transform: translateX(-100%); }
    to { transform: translateX(0); }
  }

  .animate-fade-in {
    animation: fadeIn 0.6s ease-out;
  }

  .animate-slide-in {
    animation: slideIn 0.4s ease-out;
  }

  /* Scrollbar personnalisée */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${theme.colors.neutral.gray100};
  }

  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.primary.blue};
    border-radius: ${theme.borderRadius.full};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${theme.colors.primary.darkBlue};
  }
`;

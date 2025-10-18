// Thème et couleurs du site - Couleurs dominantes : vert, rouge, jaune
export const theme = {
  colors: {
    primary: {
      green: '#007A33',       // Vert drapeau camerounais
      lightGreen: '#00A041',  // Vert plus vif
      darkGreen: '#005A26',   // Vert foncé
      green50: '#f0fdf4',
      green100: '#dcfce7',
      green500: '#22c55e',
      green600: '#16a34a',
      green700: '#15803d',
      green800: '#166534',
      green900: '#14532d'
    },
    secondary: {
      red: '#CE1126',         // Rouge drapeau camerounais
      lightRed: '#FF1A3A',    // Rouge plus vif
      darkRed: '#A00E1F',     // Rouge foncé
      red50: '#fef2f2',
      red100: '#fee2e2',
      red500: '#ef4444',
      red600: '#dc2626',
      red700: '#b91c1c',
      red800: '#991b1b',
      red900: '#7f1d1d'
    },
    accent: {
      yellow: '#FCD116',      // Jaune drapeau camerounais
      lightYellow: '#FFE135', // Jaune plus vif
      darkYellow: '#D4B000',  // Jaune foncé
      yellow50: '#fefce8',
      yellow100: '#fef3c7',
      yellow500: '#eab308',
      yellow600: '#ca8a04',
      yellow700: '#a16207',
      yellow800: '#854d0e',
      yellow900: '#713f12'
    },
    neutral: {
      white: '#ffffff',
      gray50: '#f9fafb',
      gray100: '#f3f4f6',
      gray200: '#e5e7eb',
      gray300: '#d1d5db',
      gray400: '#9ca3af',
      gray500: '#6b7280',
      gray600: '#4b5563',
      gray700: '#374151',
      gray800: '#1f2937',
      gray900: '#111827'
    },
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6'
  },
  fonts: {
    primary: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    secondary: '"Georgia", "Times New Roman", serif',
    mono: '"Fira Code", "Monaco", "Consolas", "Liberation Mono", "Courier New", monospace'
  },
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
    desktop: '1280px',
    wide: '1536px'
  },
  spacing: {
    xs: '0.25rem',    // 4px
    sm: '0.5rem',     // 8px
    md: '1rem',       // 16px
    lg: '1.5rem',     // 24px
    xl: '2rem',       // 32px
    '2xl': '3rem',    // 48px
    '3xl': '4rem',    // 64px
    '4xl': '6rem',    // 96px
    '5xl': '8rem'     // 128px
  },
  borderRadius: {
    sm: '0.25rem',    // 4px
    md: '0.5rem',     // 8px
    lg: '0.75rem',    // 12px
    xl: '1rem',       // 16px
    '2xl': '1.5rem',  // 24px
    full: '9999px'
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)'
  },
  transitions: {
    fast: '0.15s ease-in-out',
    normal: '0.3s ease-in-out',
    slow: '0.5s ease-in-out'
  },
  zIndex: {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modal: 1040,
    popover: 1050,
    tooltip: 1060
  }
};

// Media queries helpers
export const mediaQueries = {
  mobile: `@media (max-width: ${theme.breakpoints.mobile})`,
  tablet: `@media (min-width: ${theme.breakpoints.mobile}) and (max-width: ${theme.breakpoints.tablet})`,
  desktop: `@media (min-width: ${theme.breakpoints.tablet})`,
  wide: `@media (min-width: ${theme.breakpoints.wide})`
};

// Gradients
export const gradients = {
  primary: `linear-gradient(135deg, ${theme.colors.primary.green} 0%, ${theme.colors.primary.darkGreen} 100%)`,
  secondary: `linear-gradient(135deg, ${theme.colors.secondary.red} 0%, ${theme.colors.secondary.darkRed} 100%)`,
  hero: `linear-gradient(135deg, ${theme.colors.primary.green} 0%, ${theme.colors.accent.yellow} 100%)`,
  cameroon: `linear-gradient(90deg, ${theme.colors.primary.green} 0%, ${theme.colors.accent.yellow} 50%, ${theme.colors.secondary.red} 100%)`,
  card: `linear-gradient(145deg, ${theme.colors.neutral.white} 0%, ${theme.colors.neutral.gray50} 100%)`
};

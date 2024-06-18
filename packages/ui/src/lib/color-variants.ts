const solid = {
  primary: 'bg-primary text-primary-foreground',
  secondary: 'bg-secondary text-secondary-foreground',
  neutral: 'bg-neutral text-neutral-foreground',
  info: 'bg-info text-info-foreground',
  success: 'bg-success text-success-foreground',
  warning: 'bg-warning text-warning-foreground',
  danger: 'bg-danger text-danger-foreground',
};

const solidHover = {
  primary: 'hover:bg-primary-800',
  secondary: 'hover:bg-secondary-700',
  neutral: 'hover:bg-neutral-300',
  info: 'hover:bg-info-800',
  success: 'hover:bg-success-800',
  warning: 'hover:bg-warning-500',
  danger: 'hover:bg-danger-800',
};

const bordered = {
  primary: 'bg-transparent border-primary border text-primary',
  secondary: 'bg-transparent border-secondary border text-secondary',
  neutral: 'bg-transparent border-neutral border text-neutral-950',
  info: 'bg-transparent border-info border text-info',
  success: 'bg-transparent border-success border text-success-800',
  warning: 'bg-transparent border-warning border text-warning-700',
  danger: 'bg-transparent border-danger border text-danger',
};

const borderedHover = {
  primary: 'hover:border-primary-800 hover:text-primary-800',
  secondary: 'hover:border-secondary-700 hover:text-secondary-700',
  neutral: 'hover:border-neutral-300 hover:text-neutral-950',
  info: 'hover:border-info-800 hover:text-info-800',
  success: 'hover:border-success-700 hover:text-success-800',
  warning: 'hover:border-warning-500 hover:text-warning-800',
  danger: 'hover:border-danger-800 hover:text-danger-800',
};

const light = {
  primary: 'bg-transparent text-primary',
  secondary: 'bg-transparent text-secondary',
  neutral: 'bg-transparent text-neutral-foreground',
  info: 'bg-transparent text-info',
  success: 'bg-transparent text-success-700',
  warning: 'bg-transparent text-warning-700',
  danger: 'bg-transparent text-danger',
};

const lightHover = {
  primary: 'hover:bg-primary-50',
  secondary: 'hover:bg-secondary-50',
  neutral: 'hover:bg-neutral-50',
  info: 'hover:bg-info-50',
  success: 'hover:bg-success-50',
  warning: 'hover:bg-warning-50',
  danger: 'hover:bg-danger-50',
};

const ghost = {
  primary: 'bg-transparent border-primary border text-primary',
  secondary: 'bg-transparent border-secondary border text-secondary',
  neutral: 'bg-transparent border-neutral border text-neutral-950',
  info: 'bg-transparent border-info border text-info',
  success: 'bg-transparent border-success border text-success-800',
  warning: 'bg-transparent border-warning border text-warning-700',
  danger: 'bg-transparent border-danger border text-danger',
};

const ghostHover = {
  primary: 'hover:bg-primary hover:text-primary-foreground',
  secondary: 'hover:bg-secondary hover:border-secondary hover:text-secondary-foreground',
  neutral: 'hover:bg-neutral hover:border-neutral hover:text-neutral-foreground',
  info: 'hover:bg-info hover:border-info hover:text-info-foreground',
  success: 'hover:bg-success hover:border-success hover:text-success-foreground',
  warning: 'hover:bg-warning hover:border-warning hover:text-warning-foreground',
  danger: 'hover:bg-danger hover:border-danger hover:text-danger-foreground',
};

const link = {
  primary: 'bg-transparent text-primary',
  secondary: 'bg-transparent text-secondary',
  neutral: 'bg-transparent text-neutral-foreground',
  info: 'bg-transparent text-info',
  success: 'bg-transparent text-success-700',
  warning: 'bg-transparent text-warning-700',
  danger: 'bg-transparent text-danger',
};

const linkHover = {
  primary: 'hover:underline',
  secondary: 'hover:underline',
  neutral: 'hover:underline',
  info: 'hover:underline',
  success: 'hover:underline',
  warning: 'hover:underline',
  danger: 'hover:underline',
};

export const colorVariants = {
  solid,
  solidHover,
  bordered,
  borderedHover,
  light,
  lightHover,
  ghost,
  ghostHover,
  link,
  linkHover,
};

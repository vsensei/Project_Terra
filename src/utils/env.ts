import { technologiesFallback } from 'data/portfolioFallback';

export const parseTechnologies = () => {
  try {
    return JSON.parse(import.meta.env.VITE_PORTFOLIO_TECHNOLOGIES);
  } catch (err) {
    console.error(
      'Error while parsing technologies, falling back to default',
      err
    );
  }

  return technologiesFallback;
};

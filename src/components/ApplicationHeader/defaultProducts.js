import CardLogo from './IncreaseCard.svg';
import ConciliacionLogo from './IncreaseConciliacion.svg';
export const defaultProducts = {
  card: {
    logo: CardLogo,
    name: 'Card',
    codeName: 'card',
    uri: 'https://card.increase.app',
    acquire_uri: 'https://increase.app',
    countries: ['argentina', 'ecuador', 'dominicana']
  },
  conciliation: {
    logo: ConciliacionLogo,
    name: 'Conciliación',
    codeName: 'conciliation',
    uri: 'https://v2.conciliation.increase.app',
    acquire_uri: 'https://increase.app/conciliacion',
    countries: [
      'argentina',
      'ecuador',
      'dominicana',
      'chile',
      'uruguay',
      'paraguay',
      'colombia',
      'panama',
      'peru',
      'costa_rica',
      'mexico',
      'usa'
    ]
  }
};

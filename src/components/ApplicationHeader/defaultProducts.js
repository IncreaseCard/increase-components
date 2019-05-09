import CardLogo from './IncreaseCard.svg';
import ConciliacionLogo from './IncreaseConciliacion.svg';
export const defaultProducts = {
  card: {
    logo: CardLogo,
    name: 'Card',
    codeName: 'card',
    uri: {
      argentina: 'https://card.increase.app',
      ecuador: 'https://card.increase.app',
      dominicana: 'https://card.increase.app'
    },
    acquire_uri: {
      argentina: 'https://increase.app',
      ecuador: 'https://increase.app',
      dominicana: 'https://increase.app'
    },
    countries: ['argentina', 'ecuador', 'dominicana']
  },
  conciliation: {
    logo: ConciliacionLogo,
    name: 'Conciliación',
    codeName: 'conciliation',
    uri: {
      argentina: 'https://conciliation.increase.app',
      ecuador: 'https://conciliation.increase.app',
      dominicana: 'https://conciliation.increase.app'
    },
    acquire_uri: {
      argentina: 'https://increase.app/conciliacion',
      ecuador: 'https://increase.app/conciliacion',
      dominicana: 'https://increase.app/conciliacion'
    },
    countries: ['argentina']
  }
};

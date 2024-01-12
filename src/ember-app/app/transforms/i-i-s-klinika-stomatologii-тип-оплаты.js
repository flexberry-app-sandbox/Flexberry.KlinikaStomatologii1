import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ТипОплатыEnum from '../enums/i-i-s-klinika-stomatologii-тип-оплаты';

export default FlexberryEnum.extend({
  enum: ТипОплатыEnum,
  sourceType: 'IIS.KlinikaStomatologii.ТипОплаты'
});

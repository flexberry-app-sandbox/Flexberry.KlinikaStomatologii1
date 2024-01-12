import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  кодМатериала: DS.attr('number'),
  наименование: DS.attr('string'),
  производитель: DS.belongsTo('i-i-s-klinika-stomatologii-производитель', { inverse: null, async: false })
});

export let ValidationRules = {
  кодМатериала: {
    descriptionKey: 'models.i-i-s-klinika-stomatologii-материал.validations.кодМатериала.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-klinika-stomatologii-материал.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  производитель: {
    descriptionKey: 'models.i-i-s-klinika-stomatologii-материал.validations.производитель.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('МатериалE', 'i-i-s-klinika-stomatologii-материал', {
    кодМатериала: attr('Код материала', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    производитель: belongsTo('i-i-s-klinika-stomatologii-производитель', 'Производитель', {
      наименование: attr('Наименование', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'наименование' })
  });

  modelClass.defineProjection('МатериалL', 'i-i-s-klinika-stomatologii-материал', {
    кодМатериала: attr('Код материала', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    производитель: belongsTo('i-i-s-klinika-stomatologii-производитель', 'Наименование', {
      наименование: attr('Наименование', { index: 2 })
    }, { index: -1, hidden: true })
  });
};

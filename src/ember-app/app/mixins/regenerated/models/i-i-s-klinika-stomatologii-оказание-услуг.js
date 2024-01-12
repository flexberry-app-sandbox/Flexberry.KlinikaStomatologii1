import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  сотрудник: DS.belongsTo('i-i-s-klinika-stomatologii-сотрудник', { inverse: null, async: false }),
  услуга: DS.belongsTo('i-i-s-klinika-stomatologii-услуга', { inverse: null, async: false }),
  запись: DS.belongsTo('i-i-s-klinika-stomatologii-запись', { inverse: 'оказаниеУслуг', async: false })
});

export let ValidationRules = {
  сотрудник: {
    descriptionKey: 'models.i-i-s-klinika-stomatologii-оказание-услуг.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  услуга: {
    descriptionKey: 'models.i-i-s-klinika-stomatologii-оказание-услуг.validations.услуга.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  запись: {
    descriptionKey: 'models.i-i-s-klinika-stomatologii-оказание-услуг.validations.запись.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОказаниеУслугE', 'i-i-s-klinika-stomatologii-оказание-услуг', {
    услуга: belongsTo('i-i-s-klinika-stomatologii-услуга', 'Услуга', {
      наименование: attr('Наименование', { index: 1, hidden: true })
    }, { index: 0, displayMemberPath: 'наименование' }),
    сотрудник: belongsTo('i-i-s-klinika-stomatologii-сотрудник', 'Сотрудник', {
      фамилия: attr('Фамилия', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'фамилия' })
  });
};

import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  время: DS.attr('string'),
  дата: DS.attr('date'),
  кодЗаписи: DS.attr('number'),
  комментарий: DS.attr('string'),
  сумма: DS.attr('decimal'),
  кабинет: DS.belongsTo('i-i-s-klinika-stomatologii-кабинет', { inverse: null, async: false }),
  клиент: DS.belongsTo('i-i-s-klinika-stomatologii-клиент', { inverse: null, async: false }),
  оказаниеУслуг: DS.hasMany('i-i-s-klinika-stomatologii-оказание-услуг', { inverse: 'запись', async: false })
});

export let ValidationRules = {
  время: {
    descriptionKey: 'models.i-i-s-klinika-stomatologii-запись.validations.время.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-klinika-stomatologii-запись.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  кодЗаписи: {
    descriptionKey: 'models.i-i-s-klinika-stomatologii-запись.validations.кодЗаписи.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  комментарий: {
    descriptionKey: 'models.i-i-s-klinika-stomatologii-запись.validations.комментарий.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сумма: {
    descriptionKey: 'models.i-i-s-klinika-stomatologii-запись.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  кабинет: {
    descriptionKey: 'models.i-i-s-klinika-stomatologii-запись.validations.кабинет.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  клиент: {
    descriptionKey: 'models.i-i-s-klinika-stomatologii-запись.validations.клиент.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  оказаниеУслуг: {
    descriptionKey: 'models.i-i-s-klinika-stomatologii-запись.validations.оказаниеУслуг.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаписьE', 'i-i-s-klinika-stomatologii-запись', {
    кодЗаписи: attr('Код записи', { index: 0 }),
    время: attr('Время', { index: 1 }),
    дата: attr('Дата', { index: 2 }),
    сумма: attr('Сумма', { index: 3 }),
    комментарий: attr('Комментарий', { index: 4 }),
    кабинет: belongsTo('i-i-s-klinika-stomatologii-кабинет', 'Кабинет', {
      номерКабинета: attr('Номер кабинета', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'номерКабинета' }),
    клиент: belongsTo('i-i-s-klinika-stomatologii-клиент', 'Клиент', {
      фамилия: attr('Фамилия', { index: 8, hidden: true })
    }, { index: 7, displayMemberPath: 'фамилия' }),
    оказаниеУслуг: hasMany('i-i-s-klinika-stomatologii-оказание-услуг', 'Оказание услуг', {
      услуга: belongsTo('i-i-s-klinika-stomatologii-услуга', 'Услуга', {
        наименование: attr('Наименование', { index: 1, hidden: true })
      }, { index: 0, displayMemberPath: 'наименование' }),
      сотрудник: belongsTo('i-i-s-klinika-stomatologii-сотрудник', 'Сотрудник', {
        фамилия: attr('Фамилия', { index: 3, hidden: true })
      }, { index: 2, displayMemberPath: 'фамилия' })
    })
  });

  modelClass.defineProjection('ЗаписьL', 'i-i-s-klinika-stomatologii-запись', {
    кодЗаписи: attr('Код записи', { index: 0 }),
    время: attr('Время', { index: 1 }),
    дата: attr('Дата', { index: 2 }),
    сумма: attr('Сумма', { index: 3 }),
    комментарий: attr('Комментарий', { index: 4 }),
    кабинет: belongsTo('i-i-s-klinika-stomatologii-кабинет', 'Номер кабинета', {
      номерКабинета: attr('Номер кабинета', { index: 5 })
    }, { index: -1, hidden: true }),
    клиент: belongsTo('i-i-s-klinika-stomatologii-клиент', 'Фамилия', {
      фамилия: attr('Фамилия', { index: 6 })
    }, { index: -1, hidden: true })
  });
};

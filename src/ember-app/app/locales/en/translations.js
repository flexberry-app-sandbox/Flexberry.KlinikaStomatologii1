import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISKlinikaStomatologiiДолжностьLForm from './forms/i-i-s-klinika-stomatologii-должность-l';
import IISKlinikaStomatologiiЗаписьLForm from './forms/i-i-s-klinika-stomatologii-запись-l';
import IISKlinikaStomatologiiКабинетLForm from './forms/i-i-s-klinika-stomatologii-кабинет-l';
import IISKlinikaStomatologiiКлиентLForm from './forms/i-i-s-klinika-stomatologii-клиент-l';
import IISKlinikaStomatologiiМатериалLForm from './forms/i-i-s-klinika-stomatologii-материал-l';
import IISKlinikaStomatologiiОплатаLForm from './forms/i-i-s-klinika-stomatologii-оплата-l';
import IISKlinikaStomatologiiПроизводительLForm from './forms/i-i-s-klinika-stomatologii-производитель-l';
import IISKlinikaStomatologiiРегистрЗаписиLForm from './forms/i-i-s-klinika-stomatologii-регистр-записи-l';
import IISKlinikaStomatologiiСотрудникLForm from './forms/i-i-s-klinika-stomatologii-сотрудник-l';
import IISKlinikaStomatologiiУслугаLForm from './forms/i-i-s-klinika-stomatologii-услуга-l';
import IISKlinikaStomatologiiДолжностьEForm from './forms/i-i-s-klinika-stomatologii-должность-e';
import IISKlinikaStomatologiiЗаписьEForm from './forms/i-i-s-klinika-stomatologii-запись-e';
import IISKlinikaStomatologiiКабинетEForm from './forms/i-i-s-klinika-stomatologii-кабинет-e';
import IISKlinikaStomatologiiКлиентEForm from './forms/i-i-s-klinika-stomatologii-клиент-e';
import IISKlinikaStomatologiiМатериалEForm from './forms/i-i-s-klinika-stomatologii-материал-e';
import IISKlinikaStomatologiiОплатаEForm from './forms/i-i-s-klinika-stomatologii-оплата-e';
import IISKlinikaStomatologiiПроизводительEForm from './forms/i-i-s-klinika-stomatologii-производитель-e';
import IISKlinikaStomatologiiРегистрЗаписиEForm from './forms/i-i-s-klinika-stomatologii-регистр-записи-e';
import IISKlinikaStomatologiiСотрудникEForm from './forms/i-i-s-klinika-stomatologii-сотрудник-e';
import IISKlinikaStomatologiiУслугаEForm from './forms/i-i-s-klinika-stomatologii-услуга-e';
import IISKlinikaStomatologiiДокументыModel from './models/i-i-s-klinika-stomatologii-документы';
import IISKlinikaStomatologiiДолжностьModel from './models/i-i-s-klinika-stomatologii-должность';
import IISKlinikaStomatologiiЗаписьModel from './models/i-i-s-klinika-stomatologii-запись';
import IISKlinikaStomatologiiКабинетModel from './models/i-i-s-klinika-stomatologii-кабинет';
import IISKlinikaStomatologiiКлиентModel from './models/i-i-s-klinika-stomatologii-клиент';
import IISKlinikaStomatologiiМатериалModel from './models/i-i-s-klinika-stomatologii-материал';
import IISKlinikaStomatologiiОказаниеУслугModel from './models/i-i-s-klinika-stomatologii-оказание-услуг';
import IISKlinikaStomatologiiОплатаModel from './models/i-i-s-klinika-stomatologii-оплата';
import IISKlinikaStomatologiiПроизводительModel from './models/i-i-s-klinika-stomatologii-производитель';
import IISKlinikaStomatologiiРегистрЗаписиModel from './models/i-i-s-klinika-stomatologii-регистр-записи';
import IISKlinikaStomatologiiСоставУслугиModel from './models/i-i-s-klinika-stomatologii-состав-услуги';
import IISKlinikaStomatologiiСотрудникModel from './models/i-i-s-klinika-stomatologii-сотрудник';
import IISKlinikaStomatologiiУслугаModel from './models/i-i-s-klinika-stomatologii-услуга';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-klinika-stomatologii-документы': IISKlinikaStomatologiiДокументыModel,
    'i-i-s-klinika-stomatologii-должность': IISKlinikaStomatologiiДолжностьModel,
    'i-i-s-klinika-stomatologii-запись': IISKlinikaStomatologiiЗаписьModel,
    'i-i-s-klinika-stomatologii-кабинет': IISKlinikaStomatologiiКабинетModel,
    'i-i-s-klinika-stomatologii-клиент': IISKlinikaStomatologiiКлиентModel,
    'i-i-s-klinika-stomatologii-материал': IISKlinikaStomatologiiМатериалModel,
    'i-i-s-klinika-stomatologii-оказание-услуг': IISKlinikaStomatologiiОказаниеУслугModel,
    'i-i-s-klinika-stomatologii-оплата': IISKlinikaStomatologiiОплатаModel,
    'i-i-s-klinika-stomatologii-производитель': IISKlinikaStomatologiiПроизводительModel,
    'i-i-s-klinika-stomatologii-регистр-записи': IISKlinikaStomatologiiРегистрЗаписиModel,
    'i-i-s-klinika-stomatologii-состав-услуги': IISKlinikaStomatologiiСоставУслугиModel,
    'i-i-s-klinika-stomatologii-сотрудник': IISKlinikaStomatologiiСотрудникModel,
    'i-i-s-klinika-stomatologii-услуга': IISKlinikaStomatologiiУслугаModel
  },

  'application-name': 'Klinika stomatologii',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Klinika stomatologii',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Klinika stomatologii',
          title: 'Klinika stomatologii'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'klinika-stomatologii': {
          caption: 'KlinikaStomatologii',
          title: 'KlinikaStomatologii',
          'i-i-s-klinika-stomatologii-кабинет-l': {
            caption: 'Кабинет',
            title: ''
          },
          'i-i-s-klinika-stomatologii-сотрудник-l': {
            caption: 'Сотрудник',
            title: ''
          },
          'i-i-s-klinika-stomatologii-производитель-l': {
            caption: 'Производитель',
            title: ''
          },
          'i-i-s-klinika-stomatologii-материал-l': {
            caption: 'Материал',
            title: ''
          },
          'i-i-s-klinika-stomatologii-запись-l': {
            caption: 'Запись',
            title: ''
          },
          'i-i-s-klinika-stomatologii-клиент-l': {
            caption: 'Клиент',
            title: ''
          },
          'i-i-s-klinika-stomatologii-оплата-l': {
            caption: 'Оплата',
            title: ''
          },
          'i-i-s-klinika-stomatologii-должность-l': {
            caption: 'Должность',
            title: ''
          },
          'i-i-s-klinika-stomatologii-услуга-l': {
            caption: 'Услуга',
            title: ''
          },
          'i-i-s-klinika-stomatologii-регистр-записи-l': {
            caption: 'Регистр записи',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-klinika-stomatologii-должность-l': IISKlinikaStomatologiiДолжностьLForm,
    'i-i-s-klinika-stomatologii-запись-l': IISKlinikaStomatologiiЗаписьLForm,
    'i-i-s-klinika-stomatologii-кабинет-l': IISKlinikaStomatologiiКабинетLForm,
    'i-i-s-klinika-stomatologii-клиент-l': IISKlinikaStomatologiiКлиентLForm,
    'i-i-s-klinika-stomatologii-материал-l': IISKlinikaStomatologiiМатериалLForm,
    'i-i-s-klinika-stomatologii-оплата-l': IISKlinikaStomatologiiОплатаLForm,
    'i-i-s-klinika-stomatologii-производитель-l': IISKlinikaStomatologiiПроизводительLForm,
    'i-i-s-klinika-stomatologii-регистр-записи-l': IISKlinikaStomatologiiРегистрЗаписиLForm,
    'i-i-s-klinika-stomatologii-сотрудник-l': IISKlinikaStomatologiiСотрудникLForm,
    'i-i-s-klinika-stomatologii-услуга-l': IISKlinikaStomatologiiУслугаLForm,
    'i-i-s-klinika-stomatologii-должность-e': IISKlinikaStomatologiiДолжностьEForm,
    'i-i-s-klinika-stomatologii-запись-e': IISKlinikaStomatologiiЗаписьEForm,
    'i-i-s-klinika-stomatologii-кабинет-e': IISKlinikaStomatologiiКабинетEForm,
    'i-i-s-klinika-stomatologii-клиент-e': IISKlinikaStomatologiiКлиентEForm,
    'i-i-s-klinika-stomatologii-материал-e': IISKlinikaStomatologiiМатериалEForm,
    'i-i-s-klinika-stomatologii-оплата-e': IISKlinikaStomatologiiОплатаEForm,
    'i-i-s-klinika-stomatologii-производитель-e': IISKlinikaStomatologiiПроизводительEForm,
    'i-i-s-klinika-stomatologii-регистр-записи-e': IISKlinikaStomatologiiРегистрЗаписиEForm,
    'i-i-s-klinika-stomatologii-сотрудник-e': IISKlinikaStomatologiiСотрудникEForm,
    'i-i-s-klinika-stomatologii-услуга-e': IISKlinikaStomatologiiУслугаEForm
  },

});

export default translations;
